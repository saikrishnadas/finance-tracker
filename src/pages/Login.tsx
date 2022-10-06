import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCsrfToken, ApiService } from "../utils/ApiServices";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { authenticate } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store";

export interface InputLoginProps {
	email: string;
	password: string;
	confirmPassword?: string;
}

function Login() {
	const navigate = useNavigate();
	const [csrfTokenState, setCsrfTokenState] = useState("");
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state: RootState) => state.isLogged.isLogged);

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isEmailError = email === "ss";
	const isPasswordError = password === "ss";

	const handleAutoFillUser = () => {
		setEmail("test@test.com");
		setPassword("Qwerty");
	};

	const onFinish = () => {
		ApiService(
			"/login",
			"POST",
			{ email: email, password: password },
			csrfTokenState
		)
			.then((data: boolean) => {
				dispatch(authenticate(data));
				return navigate("/dashboard");
			})
			.catch((err) => {
				setError(true);
				setErrorMessage(err);
			});
	};

	useEffect(() => {
		getCsrfToken("/getCsrf", "GET").then((response) =>
			setCsrfTokenState(response?.csrfToken)
		);
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			return navigate("/dashboard");
		}
	}, [isLoggedIn]);

	return (
		<>
			{error && (
				<div className="flex justify-center">
					<div className="w-[50%]">
						<Alert status="error">
							<AlertIcon />
							{errorMessage}
						</Alert>
					</div>
				</div>
			)}
			<div className="flex flex-col justify-center items-center min-h-[100vh]">
				<p
					className="text-gray-400 cursor-pointer mb-5"
					onClick={handleAutoFillUser}
				>
					Click here to get sample test user
				</p>
				<div className="w-[23em] h-[23em] lg:w-[41em] lg:h-[23.875em] bg-white rounded-lg">
					<div className="flex flex-col items-center">
						<div className="flex justify-center">
							<div className="flex flex-col">
								<p className="text-2xl lg:text-4xl font-bold text-center mt-2 lg:mt-5">
									Welcome Back
								</p>
								<p className="text-xs lg:text-sm font-bold text-gray-400 mt-2">
									Enter your crendentials to access a book
								</p>
							</div>
						</div>
						<FormControl isInvalid={isEmailError} className="mt-5">
							<div className="flex justify-center">
								<div className="flex flex-col items-start">
									<FormLabel>Email</FormLabel>
									<div className="lg:w-[30vw]">
										<Input
											type="email"
											value={email}
											onChange={(e: any) => setEmail(e.target.value)}
										/>
									</div>
									{!isEmailError ? (
										<FormHelperText>
											We'll never share your email.
										</FormHelperText>
									) : (
										<FormErrorMessage>Email is required.</FormErrorMessage>
									)}
								</div>
							</div>
						</FormControl>
						<FormControl isInvalid={isPasswordError} className="mt-5">
							<div className="flex justify-center">
								<div className="flex flex-col items-start">
									<FormLabel>Password</FormLabel>
									<div className="lg:w-[30vw]">
										<Input
											type="password"
											value={password}
											onChange={(e: any) => setPassword(e.target.value)}
										/>
									</div>
									{isPasswordError && (
										<FormErrorMessage>Password is required.</FormErrorMessage>
									)}
								</div>
							</div>
						</FormControl>
						<Button colorScheme="brand" className="mt-5" onClick={onFinish}>
							Login
						</Button>
					</div>
				</div>
				<div className="text-white mt-5 flex">
					Don't have an account?
					<Link to="/register">
						<p className="ml-2 text-blue-600 underline cursor-pointer">
							Register
						</p>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Login;
