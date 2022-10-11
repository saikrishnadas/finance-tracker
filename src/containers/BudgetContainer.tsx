import { useState, useEffect } from "react";
import ExpenseOverview from "../components/ExpenseOverview";
import MonthlyOverview from "../components/MonthlyOverview";
import BudgetSetupModal from "../components/Modals/BudgetSetupModal";

function BudgetContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const [budget, setBudget] = useState(null);
	const openBudgetModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const getBudget = () => {
		fetch(`${process.env.REACT_APP_LOCAL_URL}/budget`, {
			method: "GET",
			// mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBudget(data?.budget);
			});
	};

	useEffect(() => {
		getBudget();
	}, []);
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
					Current Monthly Budget: <p className="font-bold">${budget}</p>
				</p>
			</div>
			<MonthlyOverview />
			<ExpenseOverview />
			<BudgetSetupModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default BudgetContainer;
