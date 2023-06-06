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
        tel: '+44 2070 528 406',
        email: 'sales@lcs-it.com',
        adress: '1 Knightsbridge Green London SW1X 7NE United Kingdom',
    },
    {
        id: 1,
        label: 'Poland',
        src: poland,
        active: false,
        email: 'sales@lcs-it.com',
        adress: 'ul.Lipowa 3D, 30-702 Cracow',
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
