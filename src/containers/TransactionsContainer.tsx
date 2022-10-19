import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../features/transactionSlice";
import { getTotal, getPreviousTotal } from "../features/transactionSlice";
import { CalendarIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";
import dayjs from "dayjs";

function TransactionsContainer() {
	const [transaction, setTransaction] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.auth.token);
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);
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
					setTransaction(data.transactions);
					dispatch(addTransaction(data.transactions));
					dispatch(getTotal());
					let month = dayjs().month();
					dispatch(getPreviousTotal(month));
				}
			});
	};

	const filterTransaction = (type: any, value: any) => {
		console.log(type, value);
		if (type === "day") {
			let filteredTransaction = transactions.filter(
				(transaction: any) => transaction.transactions.date.day === value
			);
			console.log(filteredTransaction);
			setTransaction(filteredTransaction);
		} else if (type === "month") {
			let filteredTransaction = transactions.filter(
				(transaction: any) => transaction.transactions.date.month === value + 1
			);
			console.log(filteredTransaction);
			setTransaction(filteredTransaction);
		}
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
				{transaction.map((transaction: any) => (
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
