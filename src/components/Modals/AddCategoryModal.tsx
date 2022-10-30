import React from "react";
import { useState } from "react";
import { ApiServicePost } from "../../utils/ApiServices";
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
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { Radio, Form } from "antd";

interface AddCategoryModalProps {
	isOpen: boolean;
	onClose: any;
	addCategories: any;
}

function AddCategoryModal({ isOpen, onClose, addCategories }: any) {
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const [type, setType] = useState("Expense");

	const handleSubmit = () => {
		addCategories(name, color, type);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Category</ModalHeader>
					<ModalCloseButton />
					<Form name="addCategory" onFinish={handleSubmit}>
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Category Name</FormLabel>
								<Form.Item
									name="name"
									rules={[
										{
											required: true,
											message: "Please enter category name!",
										},
									]}
								>
									<Input
										placeholder="Enter Category Name"
										onChange={(e: any) => setName(e.target.value)}
									/>
								</Form.Item>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Category Color</FormLabel>
								<Form.Item
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
