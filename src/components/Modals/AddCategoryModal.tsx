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

interface AddCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const token = useSelector((state: RootState) => state.auth.token);

	const handleSubmit = () => {
		console.log(name);
		console.log(color);
		// categories.push({ title: name, color: color });
		ApiServicePost("/categories", "POST", { title: name, color: color }, token)
			.then((data: boolean) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
		// onClose();
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
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Category Name</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Enter Category Name"
								onChange={(e: any) => setName(e.target.value)}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Category Color</FormLabel>
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
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleSubmit}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default AddCategoryModal;
