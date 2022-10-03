import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { ApiService, getCsrfToken } from "../utils/ApiServices";

function Register() {
	const [csrfTokenState, setCsrfTokenState] = useState("");

	const onFinish = (values: any) => {
		ApiService("/login", "POST", values, csrfTokenState).then((data) =>
			console.log(data)
		);
	};

	useEffect(() => {
		getCsrfToken("/getCsrf", "GET").then((response) =>
			setCsrfTokenState(response?.csrfToken)
		);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center min-h-[100vh]">
			<p>Click here to get sample test user</p>
			<div className="w-[23em] h-[23em] lg:w-[41em] lg:h-[23.875em] bg-white rounded-lg">
				<div className="flex flex-col items-center">
					<div className="flex justify-center">
						<div className="flex flex-col">
							<p className="text-2xl lg:text-4xl font-bold text-center">
								Register Here
							</p>
							<p className="text-xs lg:text-sm font-bold text-gray-400">
								Enter your crendentials to register a book
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
									message: "Please input your email!",
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
							label="Confirm Password"
							name="confirmPassword"
							rules={[
								{
									required: false,
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
								Register
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			<p>Have an account? Login</p>
		</div>
	);
}

export default Register;
