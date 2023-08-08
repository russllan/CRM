import { SignIn } from "../components/signIn/SignIn";
import Admin from "../pages/admin/Admin";
import Driver from "../pages/driver/Driver";

export interface RouteType {
    title: string,
    path: string,
    Page: React.FC
}

export const AdminRoutes: RouteType[] = [
    {
        title: 'AdminPage',
        path: '/admin',
        Page: Admin,
    },
];

export const DriverRoutes: RouteType[] = [
    {
        title: 'DriverPage',
        path: '/driver',
        Page: Driver
    }
];

export const UserRoutes: RouteType[] = [
    {
        title: 'auth',
        path: '/signIn',
        Page: SignIn
    }
];