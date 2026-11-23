import {dashboard, expenses, trend} from './Icons'

export const menuItems = [
    {
        id: 1,                           // Unique ID
        title: 'Dashboard',              //Text you want to show
        icon: dashboard,                 //icon
        link: '/dashboard'               //Link to open (not used yet)
    },
    {
        id: 2,
        title: "Incomes",
        icon: trend,
        link: "/income",
    },
    {
        id: 3,
        title: "Expenses",
        icon: expenses,
        link: "/expense",
    },
]