import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Products from "../components/Products/Products";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/home', element: <Home></Home> },
            {
                path: '/products',
                loader: async () => {
                    return fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
                },
                element: <Products></Products>
            },
            // {
            //     path: '/product/:productId',
            //     loader: async ({params}) => {
                    
            //     },
            //     element: <ProductDetails></ProductDetails>,
            // }
        ]
    },
    { path: '*', element: <NotFound></NotFound> }
])