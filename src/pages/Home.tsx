import { Routes, Route, Link } from "react-router-dom";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Topbar from "../components/Topbar";

function Home() {
	return (
		<div className="h-[100vh] w-[100vw] flex lg:flex-col pt-2 pr-2 lg:pr-0 lg:pt-5 pb-5">
			<div className="pl-2">
				<Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
			</div>
			<div className="lg:h-[100vh] lg:flex lg:flex-col lg:justify-center hidden">
				<Sidebar />
			</div>
			<div className="lg:hidden w-[100vw] flex justify-center">
				<Topbar />
			</div>
			<div className="pl-2">
				<Profile />
			</div>
		</div>
	);
}

export default Home;
