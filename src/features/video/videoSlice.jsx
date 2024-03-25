import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5174/video";
export const getVideos = createAsyncThunk(
  "video/getVideos",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
const initialState = {
  videos: [],
  isLoading: true,
  error: "",
  isOpen: false,
  darkMode: false,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setIsOpen: (state, { payload }) => {
      state.isOpen = payload;
    },
    setDarkMode: (state) => {
      if (state.darkMode === false) {
        state.darkMode = true;
        document.body.classList.add("dark");
      } else {
        state.darkMode = false;
        if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(getVideos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { setIsOpen, setDarkMode } = videoSlice.actions;
export default videoSlice.reducer;
