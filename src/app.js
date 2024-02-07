import React, { Suspense, Context, useState, useContext, useEffect }  from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider  } from 'react-redux';

//
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName, setUserName] = useState();   

    useEffect(() => {
        const name = "Padmakar Gore";
        setUserName(name);
    }, []);
    return (
        <Provider store={appStore}>
            <div className="app">
                <UserContext.Provider value={{loggedInUser: userName}}>
                    <Header />
                    <Outlet />
                </UserContext.Provider> 
            </div>
        </Provider>
    )
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resID",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
