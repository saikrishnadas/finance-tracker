import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";

function TransactionsContainer() {
	return (
		<>
			<DateTransaction />
			<Total />
			<div className="w-[100%] h-[0.5px] bg-gray-300 mt-5" />
			<div className="pr-5 scrollbar-thumb-blue-600 scrollbar-track-gray-100 scrollbar-thin overflow-auto h-[24em] max-h-[24em]">
				<Record color="red" />
				<Record color="green" />
				<Record color="yellow" />
				<Record color="pink" />
				<Record color="purple" />
				<Record color="blue" />
				<Record color="blue" />
				<Record color="red" />
				<Record color="green" />
				<Record color="pink" />
			</div>
		</>
	);
}

export default TransactionsContainer;
