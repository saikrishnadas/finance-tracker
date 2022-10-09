import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";

function TransactionsContainer() {
	return (
		<>
			<DateTransaction />
			<Total />
			<div className="w-[100%] h-[0.5px] bg-gray-300 mt-5" />
			<Record />
			<Record />
			<Record />
			<Record />
			<Record />
		</>
	);
}

export default TransactionsContainer;
