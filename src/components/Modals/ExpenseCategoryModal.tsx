import React from "react";
import { useState } from "react";
import ExpenseOverview from "../ExpenseOverview";
import Expenses from "../Expenses";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
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
	const categories = useSelector(
		(state: RootState) => state.category.categories
	);
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Categories</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<div className="grid gap-5 grid-cols-2">
							{categories &&
								categories.map((category: any) => (
									<span key={category._id}>
										<Expenses
											title={category.categories.title}
											color={category.categories.color}
										/>
									</span>
								))}
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
