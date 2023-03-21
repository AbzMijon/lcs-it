import { createSlice } from "@reduxjs/toolkit";
import ukFlag from '../../assets/svg/uk.svg';
import poland from '../../assets/svg/poland.svg';

const initialState = {
  locationButtons: [
    {
        id: 0,
        label: 'United Kingdom',
        src: ukFlag,
        active: true,
    },
    {
        id: 1,
        label: 'Poland',
        src: poland,
        active: false,
    },
  ]
}

const locationReducer = createSlice({
  name: "locationReducer",
  initialState: initialState,
  reducers: {
    setActiveCountry(state, action) {
      state.locationButtons.map((locationBtn) => {
        if(action.payload === locationBtn.id) {
          locationBtn.active = true;
        } else {
          locationBtn.active = false;
        }
      })
    }
  },
});

export default locationReducer.reducer;

export const { setActiveCountry } = locationReducer.actions;
