import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

function ProtectedRoutes() {
	// const isLoggedIn = useSelector((state: RootState) => state.isLogged.isLogged);
	const isLoggedIn = true;
	console.log("isLoggedIn", isLoggedIn);
	return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
