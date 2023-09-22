import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Redux Thunk action to fetch PDF files
export const fetchPdfFiles = createAsyncThunk(
  "pdf/fetchPdfFiles",
  async (_, { getState, rejectWithValue }) => {
  
    const { session } = getState().authentication;
    const token = session.accessToken.jwtToken;

    try {
      const response = await fetch(
        "https://1pnemqagth.execute-api.us-west-1.amazonaws.com/dev/docs",
        {
          method: "GET", // Explicitly specify the method
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      

      if (!data || data.Count === 0) {
        console.log("No files available");
        return  [];
      }
      const transformedData = data.Items.map((item) => ({
        file_id: item.file_id,
        status: item.file_status,
        url: item.file_url,
      }));
      
      const todoItems = transformedData.filter(item => item.status === 'todo');
      
      return todoItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Redux Slice for PDFs
export const pdfReducer = createSlice({
  name: "pdf",
  initialState: {
    pdfList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPdfFiles.pending, (state) => {
        
        state.isLoading = true;
      })
      .addCase(fetchPdfFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pdfList = action.payload || [];
        state.error = null; 
      })
      .addCase(fetchPdfFiles.rejected, (state, action) => {
        
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default pdfReducer.reducer;
