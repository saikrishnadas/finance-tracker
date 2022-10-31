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
import { Form } from "antd";
import Cookies from "js-cookie";
import { useLogin } from "../hooks/useLogin";

export interface InputLoginProps {
	email: string;
	password: string;
	confirmPassword?: string;
}

function Login() {
	const navigate = useNavigate();
	const [csrfTokenState, setCsrfTokenState] = useState("");
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth.user);
	const { login, loading, error, errorMessage } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isEmailError = email === "ss";
	const isPasswordError = password === "ss";

	const handleAutoFillUser = () => {
		setEmail("test10@test.com");
		setPassword("qwertyuiop");
	};

	const onFinish = async () => {
		await login(email, password);
	};

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
				<div className="w-[23em] h-[23em] lg:w-[41em] lg:h-[25.5em] border-2 rounded-lg">
					<div className="flex flex-col items-center">
						<div className="flex justify-center">
							<div className="flex flex-col">
								<p className="text-2xl lg:text-4xl font-bold text-center mt-2 lg:mt-5">
									Welcome Back
								</p>
							</div>
						</div>
						<Form
							name="login"
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
											<FormHelperText>
												We'll never share your email.
											</FormHelperText>
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
							<Form.Item className="w-[100%] flex justify-center">
								<Button
									colorScheme="brandButton"
									className="mt-5"
									// onClick={onFinish}
									type="submit"
									disabled={loading}
								>
									Login
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
				<div className="text-black mt-5 flex">
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
