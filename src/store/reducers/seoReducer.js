import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seoButtons: [
    {
      id: 0,
      label: 'Keyword Research',
      active: true,
    },
    {
        id: 1,
        label: 'Proactive Strategy',
        active: false,
    },
    {
        id: 2,
        label: 'Content Optimization',
        active: false,
    },
    {
        id: 3,
        label: 'Site Performance',
        active: false,
    },
    {
        id: 4,
        label: 'Monitoring And Reporting',
        active: false,
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
    }
  },
});

export default seoReducer.reducer;

export const { setActiveButton } = seoReducer.actions;
