import { createSlice } from "@reduxjs/toolkit";
import linkedIn from '../../assets/svg/linkedIn.svg';

const initialState = {
    menuList: [
        {
            id: 0,
            title: 'company',
            scrollToSection: '#company',
        },
        {
            id: 1,
            title: 'services',
            scrollToSection: '#services',
        },
        {
            id: 2,
            title: 'outsourcing',
            scrollToSection: '#outsourcing',
        },
        {
            id: 3,
            title: 'contacts',
            scrollToSection: '#contacts',
        },
    ],
    mobileMenuList: [
        {
            id: 0,
            title: 'development',
            scrollToSection: '#software',
        },
        {
            id: 1,
            title: 'outsourcing',
            scrollToSection: '#outsourcing',
        },
        {
            id: 2,
            title: 'seo',
            scrollToSection: '#seo',
        },
        {
            id: 3,
            title: 'design',
            scrollToSection: '#design',
        },
        {
            id: 4,
            title: 'scheme',
            scrollToSection: '#scheme',
        },
        {
            id: 5,
            title: 'business',
            scrollToSection: '#business',
        },
        {
            id: 6,
            title: 'contacts',
            scrollToSection: '#contacts',
        },
    ],
    mobileMenuIcons: [
        {
            id: 1,
            img: linkedIn,
            link: 'https://www.linkedin.com/company/lcs-it-ltd/?originalSubdomain=uk'
        },
    ],
}

const headerReducer = createSlice({
    name: "headerReducer",
    initialState: initialState,
    reducers: {},
});

export default headerReducer.reducer;

export const {  } = headerReducer.actions;