import { useState } from "react";
import Expenses from "./Expenses";
import ExpenseCategoryModal from "./Modals/ExpenseCategoryModal";

function ExpenseOverview() {
	const [isOpen, setIsOpen] = useState(false);

	const openCategoryModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<div className="flex flex-col mt-10">
			<span className="flex gap-x-2 justify-between">
				<p className="font-semibold mb-5 text-lg">Expenses by category</p>
				<p
					className="text-sm cursor-pointer text-blue-700"
					onClick={openCategoryModal}
				>
					See more
				</p>
			</span>
			<div className="grid gap-5 grid-cols-2">
				<Expenses title="Rent" count={120.42} percentage={42} color="red" />
				<Expenses title="Food" count={20.2} percentage={12} color="blue" />
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
				<ExpenseCategoryModal isOpen={isOpen} onClose={onClose} />
			</div>
		</div>
	);
}

export default ExpenseOverview;
