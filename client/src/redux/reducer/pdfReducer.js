import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Redux Thunk action to fetch PDF files
export const fetchPdfFiles = createAsyncThunk(
  "pdf/fetchPdfFiles",
  async (_, { getState, rejectWithValue }) => {
    const { session } = getState().authentication;
    const token = session.accessToken.jwtToken;

    try {
      const response = await fetch(
        "https://1pnemqagth.execute-api.us-west-1.amazonaws.com/dev",
        {
          method: "GET", // Explicitly specify the method
          headers: {
            Authorization:"eyJraWQiOiJKQW9oblh6SVozWDYzSnJaSHFIcDU1ckZCWk5zcDlTZU1NWjVFYk9QZmtvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOTI5NTk3ZS03MGYxLTcwNDAtYWQzNC1iOWU5M2RhMjhhY2QiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9lTjY0Q3VjUUMiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1Zjd1azVvaGRudGNvczllN3B2YXFpdWo0MCIsIm9yaWdpbl9qdGkiOiI3YzZhMjFiZS1jYzc4LTRkNjgtYjA0OC05YWNkZjI3MWZkOTEiLCJldmVudF9pZCI6IjY4N2E5Mjg1LWM2NWMtNGI0MS04NWNiLTM2ODE4MmZmNDliZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoicGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjk1MzI1NTk3LCJleHAiOjE2OTUzMjkxOTcsImlhdCI6MTY5NTMyNTU5NywianRpIjoiNTQyNDdlNTgtMGJiYi00M2EzLTg1MTYtZmM4NzYzMThkNmVlIiwidXNlcm5hbWUiOiIwOTI5NTk3ZS03MGYxLTcwNDAtYWQzNC1iOWU5M2RhMjhhY2QifQ.FxIJCr4cXdGKk5WNH9Nw2DL40RjgWi98dRn9XPSnkFOblYUp7sEH6R9kRNyww6vfx7e-AW-JXjMQhh8mIKcgQLiszES8BzFnXTNfYHVmySG-YVBWssAHlVRJEGeQs6JRTFisVvZ1rMaTAHAUk-W1AdiCpgLOwUcx_1fxuaSUv5lMO8YXhmgkYzLgLnHYxrgpppw2axwaRt4eqalXdV3EE1hXujkKEpO1Tu6nMiu_eXqUSEZVcEMxhgV1ZlS3QLd7_yqsNe7w1_bXn_4S6ncOFXW9HLdorDqy5fPS_h6cVVAu5g0jqdaRA4-xV1c0_OHzY3I5BybpRySLV2oZLNeTaA",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!data || data.Count === 0) {
        return rejectWithValue("No files available");
      }

      return data.Items;
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
        state.pdfList = action.payload;
      })
      .addCase(fetchPdfFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default pdfReducer.reducer;
