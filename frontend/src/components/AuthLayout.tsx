import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthProps {
    authenticated: boolean
}

function AuthLayout(props: AuthProps) {
    const location = useLocation();
    return props.authenticated ? <Outlet /> : <Navigate to="/login" 
           replace state={{ from: location }} />;
}