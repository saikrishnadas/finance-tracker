import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import AddTransactionModal from "../components/Modals/AddTransactionModal";
import { Dropdown, Menu, DatePicker } from "antd";
import dayjs from "dayjs";
import { Icon } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { ApiServicePost } from "../utils/ApiServices";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

function DateTransaction({ filterTransaction, openAddTransactionModal }: any) {
	const [show, setShow] = useState(false);
	const [visible, setVisible] = useState(false);
	const user = useSelector((state: RootState) => state.auth.user);

	const handleDate = (date: any, dateString: any) => {
		let selectedDate = dayjs(date).format("YYYY-MM-DD");
		let month = selectedDate.split("-")[1];
		filterTransaction("month", +month);
		setVisible(false);
	};

	const useFilter = ({ key }: any) => {
		if (key === "0") {
			let todayDay = dayjs().date();
			filterTransaction("day", todayDay);
			setVisible(false);
		}
		if (key === "1") {
			let currentMonth = dayjs().month() + 1;
			filterTransaction("month", currentMonth);
			setVisible(false);
		}
		if (key === "2") {
			setShow(true);
		}
	};

	const menu = (
		<Menu
			selectable
			defaultSelectedKeys={["1"]}
			onClick={useFilter}
			items={[
				{
					label: <p>Today</p>,
					key: "0",
				},
				{
					label: <p>This Month</p>,
					key: "1",
				},
				{
					type: "divider",
				},
				{
					label: (
						<div>
							<p>Custom</p>
							{show && (
								<DatePicker
									picker="month"
									onChange={handleDate}
									autoFocus={true}
									style={{ width: "100%", height: "40px", borderRadius: "5px" }}
									placement="bottomRight"
								/>
							)}
						</div>
					),
					key: "2",
				},
			]}
		/>
	);

	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex justify-between items-center">
				<p className="font-bold text-xl lg:text-2xl">Daily Transactions</p>
				<div className="flex gap-x-4">
					<Dropdown
						overlay={menu}
						trigger={["click"]}
						placement="bottom"
						open={visible}
					>
						<Icon
							as={SlCalender}
							w={5}
							h={5}
							color="blue.600"
							className="cursor-pointer"
							onClick={() => {
								visible ? setVisible(false) : setVisible(true);
							}}
						/>
					</Dropdown>
					<Icon
						as={MdAddCircle}
						w={6}
						h={6}
						color="blue.600"
						onClick={openAddTransactionModal}
						className="cursor-pointer"
					/>
				</div>
			</div>
			<div className="hidden lg:block">
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Search2Icon color="gray.300" />}
					/>
					<Input type="text" placeholder="Search" />
				</InputGroup>
			</div>
		</div>
	);
}

export default DateTransaction;
