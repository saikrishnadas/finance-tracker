import { Tabs } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function Tabbar({ handlePage }: any) {
	const selected = useSelector((state: RootState) => state.tab.selected);

	return (
		<>
			<Tabs
				orientation="vertical"
				align="start"
				colorScheme="black"
				isLazy={true}
				className="h-[80%]"
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
