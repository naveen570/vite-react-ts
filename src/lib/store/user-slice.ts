import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Loadiing = "idle" | "pending" | "success" | "failed";
export type UserState = {
  loading: Loadiing;
};

const initialState: UserState = {
  loading: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Loadiing>) => {
      state.loading = action.payload;
    },
  },
});
export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
