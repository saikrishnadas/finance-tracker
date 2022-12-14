import InfoCard from "../components/InfoCard";
import walletIcon from "../images/wallet.svg";
import incomeIcon from "../images/income.svg";
import expenseIcon from "../images/expenses.svg";
import moneySpentIcon from "../images/money.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function InfoContainer() {
	const fullIncome = useSelector(
		(state: RootState) => state.transaction.fullIncome
	);
	const fullExpense = useSelector(
		(state: RootState) => state.transaction.fullExpense
	);
	const net = fullIncome - fullExpense;
	return (
		<div className="grid grid-cols-2 ml-5 gap-y-2 lg:ml-0 lg:gap-y-0 lg:flex lg:justify-around lg:w-[70vw]">
			<InfoCard title="Your bank balance" count={net} icon={walletIcon} />
			<InfoCard title="Total Expense" count={fullExpense} icon={incomeIcon} />
			<InfoCard title="Total Income" count={fullIncome} icon={expenseIcon} />
			<InfoCard
				title="This month's spending"
				count={fullExpense}
				icon={moneySpentIcon}
			/>
		</div>
	);
}

export default InfoContainer;
