import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import React from "react";

const LoginView = React.lazy(() => import('../views/Login/view'))

// HOCs

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "app",
                element: <div>Hello world!</div>,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginView />,
    },
]);


export function AppRouterProvider() {
    return <RouterProvider router={router} />
}