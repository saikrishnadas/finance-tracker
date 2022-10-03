import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../features/auth/authSlice";
import ApiService from "../utils/ApiServices";

function Login() {
	const dispatch = useDispatch();
	const [csrfTokenState, setCsrfTokenState] = useState("");
	useEffect(() => {
		ApiService("/getCsrf", "GET").then((response) =>
			setCsrfTokenState(response?.csrfToken)
		);
	}, []);
	const onFinish = (values: any) => {
		console.log("Success:", values);
		fetch(`${process.env.REACT_APP_LOCAL_URL}/login`, {
			method: "POST",
			// mode: "no-cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"xsrf-token": csrfTokenState,
			},
			credentials: "include",
			mode: "cors",
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				dispatch(authenticate(data));
			});
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-[100vh]">
			<p>Click here to get sample test user</p>
			<div className="w-[23em] h-[23em] lg:w-[41em] lg:h-[23.875em] bg-white rounded-lg">
				<div className="flex flex-col items-center">
					<div className="flex justify-center">
						<div className="flex flex-col">
							<p className="text-2xl lg:text-4xl font-bold text-center">
								Welcome Back
							</p>
							<p className="text-xs lg:text-sm font-bold text-gray-400">
								Enter your crendentials to access a book
							</p>
						</div>
					</div>
					<Form
						name="basic"
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						// onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			<p>Don't have an account? Register</p>
		</div>
	);
}

export default Login;
