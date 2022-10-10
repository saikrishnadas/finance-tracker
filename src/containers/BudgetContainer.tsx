import { useState } from "react";
import ExpenseOverview from "../components/ExpenseOverview";
import MonthlyOverview from "../components/MonthlyOverview";
import BudgetSetupModal from "../components/Modals/BudgetSetupModal";

function BudgetContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const openBudgetModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<div
				className="bg-blue-700 text-white font-bold text-2xl h-20 flex items-center justify-center rounded-lg cursor-pointer"
				onClick={openBudgetModal}
			>
				<p>Set up Monthly Budget</p>
			</div>
			<div className="text-sm flex justify-center">
				<p className="flex gap-x-2">
					Current Monthly Budget: <p className="font-bold">$6000</p>
				</p>
			</div>
			<MonthlyOverview />
			<ExpenseOverview />
			<BudgetSetupModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default BudgetContainer;
