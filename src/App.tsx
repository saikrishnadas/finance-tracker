import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
	const theme = extendTheme({
		colors: {
			brand: {
				50: "#29315A",
				100: "#29315A",
				500: "#29315A",
			},
		},
	});

	return (
		<div className="bg-[#29315A] min-h-[100vh]">
			<ChakraProvider theme={theme}>
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</ChakraProvider>
		</div>
	);
}

export default App;
