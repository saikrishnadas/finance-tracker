import { useEffect, useState } from "react";
import { ApiService, getCsrfToken } from "../utils/ApiServices";
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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate();
	const [csrfTokenState, setCsrfTokenState] = useState("");

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const isEmailError = email === "ss";
	const isPasswordError = password === "ss";
	const isConfirmPasswordError = confirmPassword === "ss";

	const onFinish = () => {
		ApiService("/register", "POST", {
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		})
			.then((data) => {
				return navigate("/login");
			})
			.catch((err) => {
				setError(true);
				setErrorMessage(err);
			});
	};

	// useEffect(() => {
	// 	getCsrfToken("/getCsrf", "GET").then((response) =>
	// 		setCsrfTokenState(response?.csrfToken)
	// 	);
	// }, []);

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
				<div className="w-[23em] h-[29em] lg:w-[41em] lg:h-[30em] bg-white rounded-lg">
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
						<FormControl isInvalid={isConfirmPasswordError} className="mt-5">
							<div className="flex justify-center">
								<div className="flex flex-col items-start">
									<FormLabel>Confirm Password</FormLabel>
									<div className="lg:w-[30vw]">
										<Input
											type="password"
											value={confirmPassword}
											onChange={(e: any) => setConfirmPassword(e.target.value)}
										/>
									</div>
									{isConfirmPasswordError && (
										<FormErrorMessage>Password is required.</FormErrorMessage>
									)}
								</div>
							</div>
						</FormControl>
						<Button colorScheme="brand" className="mt-5" onClick={onFinish}>
							Register
						</Button>
					</div>
				</div>
				<div className="text-white mt-5 flex">
					Do you have an account?
					<Link to="/login">
						<p className="ml-2 text-blue-600 underline cursor-pointer">Login</p>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Register;
