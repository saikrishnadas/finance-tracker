import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";
// @ts-ignore
import { Link } from "@chakra-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function Tabbar() {
	const navigate = useNavigate();
	const selected = useSelector((state: RootState) => state.tab.selected);

	const handlePage = (index: any) => {
		if (index === 0) {
			navigate("/");
		} else {
			navigate("/dashboard");
		}
	};

	return (
		<>
			<Tabs
				orientation="vertical"
				align="start"
				colorScheme="black"
				isLazy={true}
				className="h-[80%]"
				// onChange={(index) => handlePage(index)}
			>
				<div className="flex flex-col items-center space-y-4 font-bold">
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
			</Tabs>
		</>
	);
}

export default Tabbar;
