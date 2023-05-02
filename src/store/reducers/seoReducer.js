import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seoButtons: [
    {
      id: 0,
      label: 'Keyword Research',
      active: false,
    },
    {
      id: 1,
      label: 'SEO Promotion',
      active: false,
    },
    {
      id: 2,
      label: 'Optimization',
      active: false,
    },
    {
      id: 3,
      label: 'Competitor analysis',
      active: true,
    },
  ]
}

const seoReducer = createSlice({
  name: "seoReducer",
  initialState: initialState,
  reducers: {
    setActiveButton(state, action) {
      state.seoButtons.forEach((seoBtn) => {
        if(action.payload === seoBtn.id) {
          seoBtn.active = true;
        } else {
          seoBtn.active = false;
        }
      })
    },
    setPrevNavigation(state, action) {
      state.seoButtons.forEach((btn) => {
        if(action.payload - 1 === btn.id) {
          btn.active = true;
        } else {
            btn.active = false;
        }
      })
    },
    setNextNavigation(state, action) {
      state.seoButtons.forEach((btn) => {
        if(action.payload + 1 === btn.id) {
          btn.active = true;
        } else {
            btn.active = false;
        }
      })
    },
  },
});

export default seoReducer.reducer;

export const { setActiveButton, setPrevNavigation, setNextNavigation } = seoReducer.actions;
