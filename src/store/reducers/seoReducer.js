import { createSlice } from "@reduxjs/toolkit";
import seoIcon1 from '../../assets/svg/seoIcon1.svg';
import seoIcon2 from '../../assets/svg/seoIcon2.svg';
import seoIcon3 from '../../assets/svg/seoIcon3.svg';

const initialState = {
  seoButtons: [
    {
      id: 0,
      label: 'keyword',
      active: false,
    },
    {
      id: 1,
      label: 'promotion',
      active: false,
    },
    {
      id: 2,
      label: 'optimization',
      active: false,
    },
    {
      id: 3,
      label: 'analysis',
      active: true,
    },
  ],
  seoIconButtons: [
    {
      id: 0,
      img: seoIcon1,
    },
    {
      id: 1,
      img: seoIcon2,
    },
    {
      id: 2,
      img: seoIcon3,
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
