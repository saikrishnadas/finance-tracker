import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";
import { authenticate } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

export interface InputLoginProps {
	email: string;
	password: string;
}

function Login() {
	const [csrfTokenState, setCsrfTokenState] = useState("");
	const dispatch = useDispatch();

	const [error, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isEmailError = email === "ss";
	const isPasswordError = password === "ss";

	const onFinish = () => {
		ApiService(
			"/login",
			"POST",
			{ email: email, password: password },
			csrfTokenState
		)
			.then((data: boolean) => {
				dispatch(authenticate(data));
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getCsrfToken("/getCsrf", "GET").then((response) =>
			setCsrfTokenState(response?.csrfToken)
		);
	}, []);

	return (
		<>
			{error && (
				<div className="flex justify-center">
					<div className="w-[50%]">
						<Alert status="error">
							<AlertIcon />
							There was an error processing your request
						</Alert>
					</div>
				</div>
			)}
			<div className="flex flex-col justify-center items-center min-h-[100vh]">
				<p className="text-gray-400 cursor-pointer mb-5">
					Click here to get sample test user
				</p>
				<div className="w-[23em] h-[23em] lg:w-[41em] lg:h-[23.875em] bg-white rounded-lg">
					<div className="flex flex-col items-center">
						<div className="flex justify-center">
							<div className="flex flex-col">
								<p className="text-2xl lg:text-4xl font-bold text-center lg:mt-5">
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
							Button
						</Button>
					</div>
				</div>
				<div className="text-gray-400 mt-5 flex">
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
