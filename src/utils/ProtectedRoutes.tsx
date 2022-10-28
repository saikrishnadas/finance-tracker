import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

function ProtectedRoutes() {
	const token = useSelector((state: RootState) => state.auth.token);
	return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
