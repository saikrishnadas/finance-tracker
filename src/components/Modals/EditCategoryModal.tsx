import React from "react";
import { useState } from "react";
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

interface EditCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function EditCategoryModal({ isOpen, onClose }: EditCategoryModalProps) {
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const handleSubmit = () => {
		console.log(name);
		console.log(color);
		onClose();
	};

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
					<ModalHeader>Edit Category</ModalHeader>
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

export default EditCategoryModal;