import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPdfFilesByStatus = createAsyncThunk(
  "pdf/fetchPdfFilesByStatus",
  async (status = null, { getState, rejectWithValue }) => {
    const { session } = getState().authentication;
    const token = session.accessToken.jwtToken;
    try {
      const response = await fetch(
        "https://1pnemqagth.execute-api.us-west-1.amazonaws.com/dev/docs",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (!data || data.Count === 0) {
        console.log("No files available");
        return [];
      }
      const transformedData = data.Items.map((item) => ({
        file_id: item.file_id,
        status: item.file_status,
        url: item.file_url,
      }));
      const filteredItems = status
        ? transformedData.filter((item) => item.status === status)
        : transformedData;
      return filteredItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const pdfReducer = createSlice({
  name: "pdf",
  initialState: {
    pdfList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPdfFilesByStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPdfFilesByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pdfList = action.payload || [];
        state.error = null;
      })
      .addCase(fetchPdfFilesByStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default pdfReducer.reducer;
