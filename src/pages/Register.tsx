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
import { Form } from "antd";

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
				<div className="w-[23em] h-[29em] lg:w-[41em] lg:h-[33em] border-2 rounded-lg">
					<div className="flex flex-col items-center">
						<div className="flex justify-center">
							<div className="flex flex-col">
								<p className="text-2xl lg:text-4xl font-bold text-center mt-2 lg:mt-5">
									Register
								</p>
							</div>
						</div>
						<Form
							name="register"
							// labelCol={{ span: 8 }}
							// wrapperCol={{ span: 16 }}
							// initialValues={{ remember: true }}
							onFinish={onFinish}
							//   onFinishFailed={onFinishFailed}
							// autoComplete="off"
						>
							<FormControl className="mt-5">
								<div className="flex justify-center">
									<div className="flex flex-col items-start">
										<FormLabel>Email</FormLabel>
										<div className="lg:w-[30vw]">
											<Form.Item
												// label="Username"
												name="email"
												rules={[
													{
														required: true,
														message: "Please enter your email!",
													},
												]}
											>
												<Input
													type="email"
													value={email}
													onChange={(e: any) => setEmail(e.target.value)}
												/>
											</Form.Item>
										</div>
										{/* {!isEmailError ? (
											
										) : (
											<FormErrorMessage>Email is required.</FormErrorMessage>
										)} */}
									</div>
								</div>
							</FormControl>
							<FormControl>
								<div className="flex justify-center">
									<div className="flex flex-col items-start">
										<FormLabel>Password</FormLabel>
										<div className="lg:w-[30vw]">
											<Form.Item
												// label="Username"
												name="password"
												rules={[
													{
														required: true,
														message: "Please enter your password!",
													},
												]}
											>
												<Input
													type="password"
													value={password}
													onChange={(e: any) => setPassword(e.target.value)}
												/>
											</Form.Item>
										</div>
										{/* {isPasswordError && (
											<FormErrorMessage>Password is required.</FormErrorMessage>
										)} */}
									</div>
								</div>
							</FormControl>
							<FormControl>
								<div className="flex justify-center">
									<div className="flex flex-col items-start">
										<FormLabel>Confirm Password</FormLabel>
										<div className="lg:w-[30vw]">
											<Form.Item
												// label="Username"
												name="confirmPassword"
												rules={[
													{
														required: true,
														message: "Please enter password again!",
													},
												]}
											>
												<Input
													type="password"
													value={confirmPassword}
													onChange={(e: any) =>
														setConfirmPassword(e.target.value)
													}
												/>
											</Form.Item>
										</div>
									</div>
								</div>
							</FormControl>
							<Form.Item className="w-[100%] flex justify-center">
								<Button
									colorScheme="brandButton"
									className="mt-5"
									// onClick={onFinish}
									type="submit"
								>
									Register
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
				<div className="text-black mt-5 flex">
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
