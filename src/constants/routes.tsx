import Admin from "../pages/Admin";
import Driver from "../pages/Driver";

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