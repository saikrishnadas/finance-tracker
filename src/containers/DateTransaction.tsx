import { useState, useEffect } from "react";
import Calender from "../components/Calender";
import { CalendarIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import AddTransactionModal from "../components/Modals/AddTransactionModal";
import { Dropdown, Menu, Space, DatePicker } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { Icon } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

function DateTransaction({ filterTransaction }: any) {
	const [isOpen, setIsOpen] = useState(false);
	const [show, setShow] = useState(false);
	const [visible, setVisible] = useState(false);

	const handleDate = (date: any, dateString: any) => {
		console.log(date, dateString);
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

	const openAddTransactionModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex justify-between items-center">
				<p className="font-bold text-2xl">Daily Transactions</p>
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
			<div>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Search2Icon color="gray.300" />}
					/>
					<Input type="text" placeholder="Search" />
				</InputGroup>
			</div>
			{/* <Calender /> */}
			<AddTransactionModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default DateTransaction;
