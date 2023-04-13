import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seoButtons: [
    {
      id: 1,
      label: 'Keyword Research',
      active: false,
    },
    {
      id: 2,
      label: 'SEO Promotion',
      active: false,
    },
    {
      id: 3,
      label: 'Competitive Audit',
      active: true,
    },
  ]
}

const seoReducer = createSlice({
  name: "seoReducer",
  initialState: initialState,
  reducers: {
    setActiveButton(state, action) {
      state.seoButtons.map((seoBtn) => {
        if(action.payload === seoBtn.id) {
          seoBtn.active = true;
        } else {
          seoBtn.active = false;
        }
      })
    },
    setNavigation(state, action) {
      state.seoButtons.forEach((btn) => {
        if(action.payload === btn.id) {
          btn.active = true;
        } else {
            btn.active = false;
        }
      })
    }
  },
});

export default seoReducer.reducer;

export const { setActiveButton, setNavigation } = seoReducer.actions;
