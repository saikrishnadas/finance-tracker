import { useState, useEffect, useRef } from "react";
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
import { getCsrfToken, ApiServicePost } from "../../utils/ApiServices";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

interface EditCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function BudgetSetupModal({ isOpen, onClose }: EditCategoryModalProps) {
	const [count, setCount] = useState(null);
	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const [csrfTokenState, setCsrfTokenState] = useState("");
	const token = useSelector((state: RootState) => state.auth.token);

	const handleSubmit = () => {
		ApiServicePost(
			"/budget",
			"POST",
			{ budget: count && parseInt(count) },
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