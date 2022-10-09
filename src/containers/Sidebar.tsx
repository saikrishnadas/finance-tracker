import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Tabbar from "../components/Tabbar";
import TopTabbar from "../components/TopTabbar";
import Profile from "../components/Profile";
import CompanyLogo from "../images/logo-black.png";
import MobileMenu from "./MobileMenu";

function Sidebar() {
	return (
		<div className="bg-red-500 h-[10vh] w-[100wv] lg:h-[100vh] lg:w-[5em] flex items-center lg:items-start lg:flex-col pt-4 pr-2 lg:pr-0 lg:pt-5 pb-5">
			<div className="flex pl-2 lg:hidden">
				<MobileMenu />
			</div>
			<div className="pl-2 w-14">
				<img src={CompanyLogo} alt="logo" />
			</div>
			<div className="lg:h-[100vh] lg:flex lg:flex-col lg:justify-center hidden">
				<Tabbar />
			</div>
			<div className="lg:hidden w-[100vw] flex justify-center">
				<TopTabbar />
			</div>
			<div className="pl-2">
				<Profile />
			</div>
		</div>
	);
}

export default Sidebar;
