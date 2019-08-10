import { ComponentType } from "react";

import { Home } from "./pages/home";
import { Info } from "./pages/info";
import { Program } from "./pages/program";
import { ForCompanies } from "./pages/for-companies";
import { ContactUs } from "./pages/contact-us";

export interface NavigationRoute {
    text: string
    exact?: boolean
    path: string
    component: ComponentType
}

export const routes: NavigationRoute[] = [
    {
        text: 'Hjem',
        path: '/',
        component: Home,
        exact: true,
    },
    {
        text: 'Info',
        path: '/info',
        component: Info,
    },
    {
        text: 'Program',
        path: '/program',
        component: Program,
    },
    {
        text: 'For bedrifter',
        path: '/for-companies',
        component: ForCompanies,
    },
    {
        text: 'Kontakt oss',
        path: '/contact-us',
        component: ContactUs,
    },
]