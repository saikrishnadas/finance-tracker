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

function BudgetSetupModal({ isOpen, onClose }: EditCategoryModalProps) {
	const [count, setCount] = useState(null);
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const handleSubmit = () => {
		console.log(count);
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
					<ModalHeader>Monthly Budget</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Enter Monthly Budget</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Monthly Budget"
								onChange={(e: any) => setCount(e.target.value)}
							/>
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

export default BudgetSetupModal;
