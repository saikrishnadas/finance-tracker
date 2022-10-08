import { Routes, Route, Link } from "react-router-dom";
import Profile from "../components/Profile";
import Tabbar from "../components/Tabbar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Topbar from "../components/TopTabbar";
import Sidebar from "../containers/Sidebar";
import Detailsbar from "../containers/Detailsbar";

function Home() {
	return (
		<div>
			<div className="lg:flex">
				<Sidebar />
				<Detailsbar />
			</div>
		</div>
	);
}

export default Home;
