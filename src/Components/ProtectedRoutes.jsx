import { Navigate, Outlet } from "react-router-dom";
import Home from "./Home";
import useAuth from "./useAuth";

const ProtectedRoutes=()=>{
    const isAuth=useAuth();
    return isAuth?<Outlet/>:<Navigate to='/'/>
}
export default ProtectedRoutes;