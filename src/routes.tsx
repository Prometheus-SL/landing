
import Policy from "./components/ui/componentes_main/policy/policy";
import HomePage from "./pages/home_page";


export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/policy',
        element: <Policy />
    }
]
