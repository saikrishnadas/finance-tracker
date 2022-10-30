import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function TopTabbar({ handlePage }: any) {
	const navigate = useNavigate();
	const selected = useSelector((state: RootState) => state.tab.selected);
	return (
		<>
			<div className="w-[80%]">
				<div className="flex items-center space-x-2 font-bold">
					<div
						className={`cursor-pointer w-[100%] text-center ${
							selected === 0 && `bg-gray-200`
						}  pl-2 pr-2 ${selected !== 0 && `hover:bg-gray-100`}`}
						onClick={(index: any) => handlePage(0)}
					>
						<p>Home</p>
					</div>
					<div
						className={`cursor-pointer w-[100%] text-center ${
							selected === 1 && `bg-gray-200`
						}  pl-2 pr-2 ${selected !== 1 && `hover:bg-gray-100`}`}
						onClick={(index: any) => handlePage(1)}
					>
						<p>Dashboard</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default TopTabbar;
