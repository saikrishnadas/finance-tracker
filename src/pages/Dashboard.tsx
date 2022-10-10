import Profile from "../components/Profile";
import Tabbar from "../components/Tabbar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import TopTabbar from "../components/TopTabbar";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";
import InfoContainer from "../containers/InfoContainer";
import Count from "../components/Count";
import ExpenseGraph from "../containers/ExpenseGraph";

function Dashboard() {
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
				<div className="mt-10 ml-10">
					<InfoContainer />
				</div>
				<div className="flex">
					<div className="flex flex-col gap-y-5 ml-10 mt-10">
						<Count title="New Debits" count={54} percentage={18.7} />
						<Count title="New Credits" count={21} percentage={8.7} />
					</div>
					<div className="flex items-end ml-10">
						<ExpenseGraph />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
