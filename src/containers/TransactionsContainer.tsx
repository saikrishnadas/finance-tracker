import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../features/transactionSlice";
import { getTotal } from "../features/transactionSlice";
import { CalendarIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";

function TransactionsContainer() {
	const [transactions, setTransactions] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
					dispatch(addTransaction(data.transactions));
					dispatch(getTotal());
				}
			});
	};

	const filterTransaction = () => {
		let filteredTransaction = transactions.filter(
			(transaction: any) => transaction.transactions.date.day === 13
		);
		setTransactions(filteredTransaction);
		dispatch(addTransaction(filteredTransaction));
		dispatch(getTotal());
	};

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<>
			<DateTransaction filterTransaction={filterTransaction} />
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
							id={transaction._id}
						/>
					</span>
				))}
			</div>
		</>
	);
}

export default TransactionsContainer;
