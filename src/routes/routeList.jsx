import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleUser from "../pages/SingleUser";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <ListUser />
            </ProtectedRoute>
        ),
    },
    {
        path: '/user/:id',
        element: (
            <ProtectedRoute>
                <SingleUser />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]