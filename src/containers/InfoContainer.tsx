import React from "react";
import InfoCard from "../components/InfoCard";
import walletIcon from "../images/wallet.svg";
import incomeIcon from "../images/income.svg";
import expenseIcon from "../images/expenses.svg";
import moneySpentIcon from "../images/money.svg";

function InfoContainer() {
	return (
		<div className="grid grid-cols-2 ml-5 gap-y-2 lg:ml-0 lg:gap-y-0 lg:flex lg:justify-around lg:w-[70vw]">
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
