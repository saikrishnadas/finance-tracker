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
} from "@chakra-ui/react";
import { ApiServicePost } from "../../utils/ApiServices";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { Form } from "antd";

interface EditCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function BudgetSetupModal({ isOpen, onClose, addBudget }: any) {
	const [count, setCount] = useState(null);

	const handleSubmit = () => {
		addBudget(count);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Monthly Budget</ModalHeader>
					<ModalCloseButton />
					<Form name="budget" onFinish={handleSubmit}>
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Enter Monthly Budget</FormLabel>
								<Form.Item
									name="count"
									rules={[
										{
											required: true,
											message: "Please enter a amount!",
										},
									]}
								>
									<Input
										placeholder="Monthly Budget"
										onChange={(e: any) => setCount(e.target.value)}
									/>
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

export default BudgetSetupModal;
