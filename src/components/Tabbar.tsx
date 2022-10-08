import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import { StarIcon, MoonIcon } from "@chakra-ui/icons";
// @ts-ignore
import { Link } from "@chakra-ui/core";

function Tabbar() {
	const navigate = useNavigate();

	return (
		<>
			<Tabs
				orientation="vertical"
				align="start"
				colorScheme="black"
				isLazy={true}
				className="h-[80%]"
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

export default Tabbar;
