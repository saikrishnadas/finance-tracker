import Profile from "../components/Profile";
import Tabbar from "../components/Tabbar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import TopTabbar from "../components/TopTabbar";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";

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
			<div className="mt-10">
				<form action="POST">
					<input type="file" />
				</form>
			</div>
		</div>
	);
}

export default Dashboard;
