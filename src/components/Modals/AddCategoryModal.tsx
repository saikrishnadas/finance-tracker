import React from "react";
import { useState, useEffect } from "react";
import { categories } from "../../utils/day";
import { getCsrfToken, ApiServicePost } from "../../utils/ApiServices";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { Radio, Form } from "antd";
import { useNavigate } from "react-router-dom";

interface AddCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const [type, setType] = useState("Expense");
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const token = useSelector((state: RootState) => state.auth.token);

	const handleSubmit = () => {
		console.log(name);
		console.log(color);
		// categories.push({ title: name, color: color });
		ApiServicePost(
			"/categories",
			"POST",
			{ title: name, color: color, type: type },
			token
		)
			.then((data: boolean) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
		onClose();
	};

	// useEffect(() => {
	// 	getCsrfToken("/getCsrf", "GET").then((response) =>
	// 		setCsrfTokenState(response?.csrfToken)
	// 	);
	// }, []);

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Category</ModalHeader>
					<ModalCloseButton />
					<Form
						name="addCategory"
						// labelCol={{ span: 8 }}
						// wrapperCol={{ span: 16 }}
						// initialValues={{ remember: true }}
						onFinish={handleSubmit}
						//   onFinishFailed={onFinishFailed}
						// autoComplete="off"
					>
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Category Name</FormLabel>
								<Form.Item
									// label="Username"
									name="name"
									rules={[
										{
											required: true,
											message: "Please enter category name!",
										},
									]}
								>
									<Input
										ref={initialRef}
										placeholder="Enter Category Name"
										onChange={(e: any) => setName(e.target.value)}
									/>
								</Form.Item>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Category Color</FormLabel>
								<Form.Item
									// label="Username"
									name="color"
									rules={[
										{
											required: true,
											message: "Please select a color!",
										},
									]}
								>
									<Select
										placeholder="Select a Color"
										onChange={(e: any) => setColor(e.target.value)}
									>
										<option value="red">Red</option>
										<option value="blue">Blue</option>
										<option value="green">Green</option>
										<option value="purple">Purple</option>
										<option value="pink">Pink</option>
										<option value="yellow">Yellow</option>
									</Select>
								</Form.Item>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Type</FormLabel>
								<Form.Item
									// label="Username"
									name="type"
									rules={[
										{
											required: true,
											message: "Please select a type!",
										},
									]}
								>
									<Radio.Group
										onChange={(e: any) => setType(e.target.value)}
										value={type}
									>
										<Radio value="Expense">Expense</Radio>
										<Radio value="Income">Income</Radio>
									</Radio.Group>
								</Form.Item>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Form.Item>
								<Button colorScheme="blue" mr={3} type="submit">
									Save
								</Button>
								<Button onClick={onClose}>Cancel</Button>
							</Form.Item>
						</ModalFooter>
					</Form>
				</ModalContent>
			</Modal>
		</>
	);
}

export default AddCategoryModal;
