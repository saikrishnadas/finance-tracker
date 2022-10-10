import React from "react";
import { useState } from "react";
import ExpenseOverview from "../ExpenseOverview";
import Expenses from "../Expenses";
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

interface ExpenseCategoryModalProps {
	isOpen: boolean;
	onClose: any;
}

function ExpenseCategoryModal({ isOpen, onClose }: ExpenseCategoryModalProps) {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Categories</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<div className="grid gap-5 grid-cols-2">
							<Expenses
								title="Rent"
								count={120.42}
								percentage={42}
								color="red"
							/>
							<Expenses
								title="Food"
								count={20.2}
								percentage={12}
								color="blue"
							/>
							<Expenses
								title="Groceries"
								count={40.42}
								percentage={32}
								color="green"
							/>
							<Expenses
								title="Entertainment"
								count={10.12}
								percentage={2}
								color="purple"
							/>
						</div>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ExpenseCategoryModal;
