import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import { StarIcon, MoonIcon, TriangleUpIcon } from "@chakra-ui/icons";

function TopTabbar() {
	const navigate = useNavigate();
	return (
		<>
			<Tabs
				// orientation="vertical"
				variant="soft-rounded"
				colorScheme="yellow"
				align="center"
				isLazy={true}
				className="w-[80%]"
			>
				<TabList>
					<div onClick={() => navigate("/")}>
						<Tab>
							<StarIcon color="black" />
						</Tab>
					</div>
					<div onClick={() => navigate("/dashboard")}>
						<Tab>
							<MoonIcon color="black" />
						</Tab>
					</div>
				</TabList>
			</Tabs>
		</>
	);
}

export default TopTabbar;
