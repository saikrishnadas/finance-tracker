import Total from "../components/Total";
import DateTransaction from "./DateTransaction";
import Record from "../components/Record";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../features/transactionSlice";
import {
	getTotalExpense,
	getPreviousTotalExpense,
	getTotalIncome,
	getPreviousTotalIncome,
	getDebitsCount,
	getCreditCount,
} from "../features/transactionSlice";
import dayjs from "dayjs";
import { ApiServicePost } from "../utils/ApiServices";
import AddTransactionModal from "../components/Modals/AddTransactionModal";
import { Skeleton } from "antd";

function TransactionsContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const [transaction, setTransaction] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth.user);
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);

	const openAddTransactionModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const getTransactions = () => {
		fetch(`${process.env.REACT_APP_LOCAL_URL}/transaction`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message === "jwt expired") {
					return navigate("/login");
				}
				if (data.transactions) {
					let month = dayjs().month();
					let filteredTransaction = data.transactions.filter(
						(transaction: any) =>
							transaction.transactions.date.month === month + 1
					);
					// console.log("filteredTransaction", filteredTransaction);
					setTransaction(filteredTransaction);
					// setTransaction(data.transactions);
					dispatch(addTransaction(data.transactions));
					// console.log("Current month", month);
					dispatch(getTotalExpense(month + 1));
					dispatch(getTotalIncome(month + 1));
					dispatch(getPreviousTotalExpense(month));
					dispatch(getPreviousTotalIncome(month));
					dispatch(getDebitsCount());
					dispatch(getCreditCount());
					setLoading(false);
				}
			});
	};

	const filterTransaction = (type: any, value: any) => {
		if (type === "day") {
			let filteredTransaction = transactions.filter(
				(transaction: any) => transaction.transactions.date.day === value
			);

			setTransaction(filteredTransaction);
		} else if (type === "month") {
			let filteredTransaction = transactions.filter(
				(transaction: any) => transaction.transactions.date.month === value
			);

			setTransaction(filteredTransaction);
		}
	};

	const deleteTransaction = (id: any) => {
		ApiServicePost("/transaction", "DELETE", { transactionId: id }, user.token)
			.then((data: boolean) => {
				getTransactions();
			})
			.catch((err) => {});
	};

	const addTransactions = (
		amount: any,
		category: any,
		day: any,
		month: any,
		year: any,
		date: any,
		type: any,
		note: any
	) => {
		ApiServicePost(
			"/transaction",
			"POST",
			{
				amount: amount,
				category: category,
				date: {
					day: day,
					month: month,
					year: year,
					date: date,
				},
				type: type,
				note: note,
			},
			user.token
		)
			.then((data: boolean) => {
				getTransactions();
			})
			.catch((err) => {});
		onClose();
	};

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<>
			{loading ? (
				<Skeleton active />
			) : (
				<>
					<DateTransaction
						filterTransaction={filterTransaction}
						openAddTransactionModal={openAddTransactionModal}
					/>
					<Total />
					<div className="w-[100%] h-[0.5px] bg-gray-300 mt-5" />
					<div className="pr-5 scrollbar-thumb-blue-600 scrollbar-track-gray-100 scrollbar-thin overflow-auto mb-8 lg:mb-0 lg:h-[32em] max-h-[32em]">
						{transaction?.map((transaction: any) => (
							<span key={transaction._id}>
								<Record
									type={transaction.transactions.type}
									amount={transaction.transactions.amount}
									category={transaction.transactions.category}
									date={transaction.transactions.date}
									note={transaction.transactions.note}
									id={transaction._id}
									deleteTransaction={deleteTransaction}
								/>
							</span>
						))}
					</div>
				</>
			)}
			<AddTransactionModal
				isOpen={isOpen}
				onClose={onClose}
				addTransaction={addTransactions}
			/>
		</>
	);
}

export default TransactionsContainer;
