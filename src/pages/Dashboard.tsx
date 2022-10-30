import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";
import InfoContainer from "../containers/InfoContainer";
import Count from "../components/Count";
import ExpenseGraph from "../containers/ExpenseGraph";
import ExpenseGraphMobile from "../containers/ExpenseGraphMobile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { changeSelected } from "../features/tabsSlice";
import {
	addTransaction,
	getCreditCount,
	getDebitsCount,
	getPreviousTotalExpense,
	getPreviousTotalIncome,
	getTotalExpense,
	getTotalIncome,
} from "../features/transactionSlice";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.token);
	const debitsCount = useSelector(
		(state: RootState) => state.transaction.debitsCount
	);
	const creditsCount = useSelector(
		(state: RootState) => state.transaction.creditsCount
	);
	const dispatch = useDispatch();

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
				if (data.message === "jwt expired") {
					return navigate("/login");
				}
				if (data.transactions) {
					dispatch(addTransaction(data.transactions));
					dispatch(getTotalExpense());
					dispatch(getTotalIncome());
					let month = dayjs().month();
					dispatch(getPreviousTotalExpense(month));
					dispatch(getPreviousTotalIncome(month));
					dispatch(getDebitsCount());
					dispatch(getCreditCount());
				}
			});
	};

	useEffect(() => {
		dispatch(changeSelected(1));
		getTransactions();
	}, []);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, []);

	return (
		<div className="block lg:flex">
			<Sidebar />
			<Detailsbar />
			<div>
				<div className="lg:mt-10 lg:ml-10">
					<InfoContainer />
				</div>
				<div className="block lg:flex">
					<div className="flex lg:flex-col gap-x-8 ml-5 lg:gap-y-5 lg:ml-10 mt-10">
						<Count title="Debits" count={debitsCount} />
						<Count title="Credits" count={creditsCount} />
					</div>
					<div className="hidden lg:flex lg:items-end lg:ml-10">
						<ExpenseGraph />
					</div>
					<div className="flex items-end justify-center mt-5 mb-10 lg:hidden ">
						<ExpenseGraphMobile />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
