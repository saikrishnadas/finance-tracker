import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PageNotFound404 from "./pages/PageNotFound404";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";

function App() {
	const user = useSelector((state: RootState) => state.auth.user);
	const theme = extendTheme({
		colors: {
			// brand: {
			// 	50: "#29315A",
			// 	100: "#29315A",
			// 	500: "#29315A",
			// },
			brandButton: {
				50: "#0000FF",
				100: "#0000FF",
				500: "#0000FF",
			},
		},
	});

	return (
		<div className="min-h-[100vh]">
			<ChakraProvider theme={theme}>
				<Routes>
					{/* <Route element={<ProtectedRoutes />}> */}
					<Route
						path="/"
						element={user ? <Home /> : <Navigate to="/login" />}
					/>
					<Route
						path="/dashboard"
						element={user ? <Dashboard /> : <Navigate to="/login" />}
					/>
					{/* </Route> */}
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/register"
						element={!user ? <Register /> : <Navigate to="/" />}
					/>
					<Route path="*" element={<PageNotFound404 />} />
				</Routes>
			</ChakraProvider>
		</div>
	);
}

export default App;
