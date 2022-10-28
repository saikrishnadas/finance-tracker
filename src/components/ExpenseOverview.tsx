import { useState, useEffect } from "react";
import Expenses from "./Expenses";
import ExpenseCategoryModal from "./Modals/ExpenseCategoryModal";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function ExpenseOverview() {
	const [isOpen, setIsOpen] = useState(false);
	const categories = useSelector(
		(state: RootState) => state.category.categories
	);
	const token = useSelector((state: RootState) => state.auth.token);

	const openCategoryModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<div className="flex flex-col mt-10">
			<span className="ml-5 mr-5 lg:mr-0 lg:ml-0 flex gap-x-2 justify-between">
				<p className="font-semibold mb-5 text-lg">Expenses by category</p>
				<p
					className="text-sm cursor-pointer text-blue-700"
					onClick={openCategoryModal}
				>
					See more
				</p>
			</span>
			<div className="grid gap-5 grid-cols-1 ml-5 mr-5 mb-5 lg:mb-0 lg:ml-0 lg:mr-0 lg:grid-cols-2">
				{categories && categories.length > 0 && categories.length < 5 ? (
					<>
						{categories.map((category: any) => (
							<span key={category._id}>
								{category.categories.type !== "Income" && (
									<Expenses
										title={category.categories.title}
										color={category.categories.color}
									/>
								)}
							</span>
						))}
					</>
				) : (
					<>
						{categories.slice(0, 4).map((category: any) => (
							<span key={category._id}>
								{category.categories.type !== "Income" && (
									<Expenses
										title={category.categories.title}
										color={category.categories.color}
									/>
								)}
							</span>
						))}
					</>
				)}

				<ExpenseCategoryModal isOpen={isOpen} onClose={onClose} />
			</div>
		</div>
	);
}

export default ExpenseOverview;
