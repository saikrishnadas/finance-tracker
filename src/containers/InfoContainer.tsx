import React from "react";
import InfoCard from "../components/InfoCard";
import walletIcon from "../images/wallet.svg";
import incomeIcon from "../images/income.svg";
import expenseIcon from "../images/expenses.svg";
import moneySpentIcon from "../images/money.svg";

function InfoContainer() {
	return (
		<div className="flex justify-around w-[70vw]">
			<InfoCard title="Your bank balance" count="143,6244" icon={walletIcon} />
			<InfoCard title="Total Expense" count="43,6244" icon={incomeIcon} />
			<InfoCard title="Total Income" count="113,6244" icon={expenseIcon} />
			<InfoCard
				title="This week's spending"
				count="3,6244"
				icon={moneySpentIcon}
			/>
		</div>
	);
}

export default InfoContainer;
