import { useNavigate } from "react-router-dom";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";
import TransactionsContainer from "../containers/TransactionsContainer";
import BudgetContainer from "../containers/BudgetContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { changeSelected } from "../features/tabsSlice";

function Home() {
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(changeSelected(0));
	}, []);

	// useEffect(() => {
	// 	if (!token) {
	// 		navigate("/login");
	// 	}
	// }, []);

	return (
		<div>
			<div className="lg:flex">
				<Sidebar />
				<Detailsbar />
				<div className="w-[22em] lg:w-[40em] pl-10 pt-10">
					<TransactionsContainer />
				</div>
				<div className="lg:block lg:w-[28em] lg:max-w-[28em] lg:pl-10 lg:pt-10">
					<BudgetContainer />
				</div>
			</div>
		</div>
	);
}

export default Home;
