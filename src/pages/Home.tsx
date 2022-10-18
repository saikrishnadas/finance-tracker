import { Routes, Route, Link } from "react-router-dom";
import Profile from "../components/Profile";
import Tabbar from "../components/Tabbar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Topbar from "../components/TopTabbar";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";
import TransactionsContainer from "../containers/TransactionsContainer";
import BudgetContainer from "../containers/BudgetContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";

function Home() {
	const [isAuth, setIsAuth] = useState(false);
	const token = useSelector((state: RootState) => state.auth.token);

	return (
		<div>
			<div className="lg:flex">
				<Sidebar />
				<Detailsbar token={token} />
				<div className="w-[22em] lg:w-[40em] pl-10 pt-10">
					<TransactionsContainer />
				</div>
				<div className="hidden lg:block lg:w-[28em] lg:max-w-[28em] lg:pl-10 lg:pt-10">
					<BudgetContainer />
				</div>
			</div>
		</div>
	);
}

export default Home;
