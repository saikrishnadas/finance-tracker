import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
	return (
		<div className="bg-[#29315A] min-h-[100vh]">
			<Routes>
				<Route element={<ProtectedRoutes />}>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
