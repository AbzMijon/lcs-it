import { createSlice } from "@reduxjs/toolkit";
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/inst.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import telegram from '../../assets/svg/telegram.svg';
import gitHub from '../../assets/svg/github.svg';

const initialState = {
    menuList: [
        {
            id: 0,
            title: 'Company',
            scrollToSection: '#company',
        },
        {
            id: 1,
            title: 'Services',
            scrollToSection: '#services',
        },
        {
            id: 2,
            title: 'Outsourcing',
            scrollToSection: '#outsourcing',
        },
        {
            id: 3,
            title: 'Contacts',
            scrollToSection: '#contacts',
        },
    ],
    mobileMenuList: [
        {
            id: 0,
            title: 'Software development',
            scrollToSection: '#software',
        },
        {
            id: 1,
            title: 'Outsourcing',
            scrollToSection: '#outsourcing',
        },
        {
            id: 2,
            title: 'SEO',
            scrollToSection: '#seo',
        },
        {
            id: 3,
            title: 'Design',
            scrollToSection: '#design',
        },
        {
            id: 4,
            title: 'Scheme of Work',
            scrollToSection: '#scheme',
        },
        {
            id: 5,
            title: 'Business model',
            scrollToSection: '#business',
        },
        {
            id: 6,
            title: 'CONTACT US',
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