import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { useNavigate } from "react-router-dom";

function TransactionsContainer() {
	const [transactions, setTransactions] = useState([]);
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.token);
	const getTransactions = () => {
		fetch(`${process.env.REACT_APP_LOCAL_URL}/transaction`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.message === "jwt expired") {
					return navigate("/login");
				}
				if (data.transactions) {
					setTransactions(data.transactions);
				}
			});
	};

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<>
			<DateTransaction />
			<Total />
			<div className="w-[100%] h-[0.5px] bg-gray-300 mt-5" />
			<div className="pr-5 scrollbar-thumb-blue-600 scrollbar-track-gray-100 scrollbar-thin overflow-auto h-[24em] max-h-[24em]">
				{transactions.map((transaction: any) => (
					<span key={transaction._id}>
						<Record
							color="red"
							amount={transaction.transactions.amount}
							category={transaction.transactions.category}
							date={transaction.transactions.date}
							note={transaction.transactions.note}
						/>
					</span>
				))}
			</div>
		</>
	);
}

export default TransactionsContainer;
