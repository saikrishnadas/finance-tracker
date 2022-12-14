import { useState, useEffect } from "react";
import ExpenseOverview from "../components/ExpenseOverview";
import MonthlyOverview from "../components/MonthlyOverview";
import BudgetSetupModal from "../components/Modals/BudgetSetupModal";
import { RootState } from "../store/index";
import { useSelector } from "react-redux";
import { ApiServicePost } from "../utils/ApiServices";

function BudgetContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const [budget, setBudget] = useState<any>(null);
	const user = useSelector((state: RootState) => state.auth.user);
	const totalExpense = useSelector(
		(state: RootState) => state.transaction.totalExpense
	);

	const openBudgetModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const getBudget = () => {
		fetch(`${process.env.REACT_APP_LOCAL_URL}/budget`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setBudget(data?.budget);
			});
	};

	const addBudget = (count: any) => {
		ApiServicePost(
			"/budget",
			"POST",
			{ budget: count && parseInt(count) },
			user.token
		)
			.then((data: boolean) => {
				getBudget();
			})
			.catch((err) => {});
		onClose();
	};

	useEffect(() => {
		getBudget();
	}, []);
	return (
		<div>
			<div
				className="bg-blue-700 text-white font-bold text-xl ml-5 mr-5 lg:ml-0 lg:mr-0 lg:text-2xl h-10 lg:h-20 flex items-center justify-center rounded-lg cursor-pointer"
				onClick={openBudgetModal}
			>
				<p>Set up Monthly Budget</p>
			</div>
			<div className="text-sm flex justify-center">
				{budget === 0 ? (
					<p className="flex gap-x-2">Monthly Budget not set</p>
				) : (
					<span>
						{totalExpense > budget ? (
							<p className="flex gap-x-2 text-red-600">
								Net Spent exceeded monthly Budget
								<p className="font-bold">
									{"\u20B9"}
									{budget}
								</p>
							</p>
						) : (
							<p className="flex gap-x-2">
								Current Monthly Budget:
								<p className="font-bold">
									{"\u20B9"}
									{budget}
								</p>
							</p>
						)}
					</span>
				)}
			</div>
			<MonthlyOverview />
			<ExpenseOverview />
			<BudgetSetupModal
				isOpen={isOpen}
				onClose={onClose}
				addBudget={addBudget}
			/>
		</div>
	);
}

export default BudgetContainer;
