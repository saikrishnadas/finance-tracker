import Tabbar from "../components/Tabbar";
import TopTabbar from "../components/TopTabbar";
import Profile from "../components/Profile";
import CompanyLogo from "../images/logo-black.png";
import MobileMenu from "./MobileMenu";
import { useDispatch } from "react-redux";
import { authenticate } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Sidebar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function delete_cookie(name: string) {
		document.cookie =
			name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	}
	const handleLogout = () => {
		dispatch(authenticate(null));
		delete_cookie("token");
		navigate("/");
	};

	const handlePage = (index: any) => {
		if (index === 0) {
			navigate("/");
		} else {
			navigate("/dashboard");
		}
	};

	return (
		<div className="h-[10vh] w-[100wv] lg:h-[100vh] flex items-center lg:flex-col pt-4 pr-2 lg:pr-0 lg:pt-5 pb-5">
			<div className="flex pl-2 lg:hidden">
				<MobileMenu />
			</div>
			<div className="pl-2 w-14">
				<img src={CompanyLogo} alt="logo" />
			</div>
			<div className="lg:h-[100vh] lg:flex lg:flex-col lg:justify-center hidden">
				<Tabbar handlePage={handlePage} />
			</div>
			<div className="lg:hidden w-[100vw] flex justify-center">
				<TopTabbar handlePage={handlePage} />
			</div>
			<div className="pl-2">
				<Profile />
			</div>
			<div className="hidden lg:block lg:pl-2">
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
}

export default Sidebar;
