import Profile from "../components/Profile";
import Tabbar from "../components/Tabbar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import TopTabbar from "../components/TopTabbar";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";
import InfoContainer from "../containers/InfoContainer";
import Count from "../components/Count";
import ExpenseGraph from "../containers/ExpenseGraph";
import ExpenseGraphMobile from "../containers/ExpenseGraphMobile";
import { useState } from "react";

function Dashboard() {
	const [isAuth, setIsAuth] = useState(false);
	const handleLogout = () => {
		fetch(`{process.env.REACT_APP_LOCAL_URL}/logout`, {
			method: "POST",
			// mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

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
						<Count title="New Debits" count={54} percentage={18.7} />
						<Count title="New Credits" count={21} percentage={8.7} />
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
