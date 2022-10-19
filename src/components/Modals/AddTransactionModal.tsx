import React from "react";
import { useState, useEffect } from "react";
import { categories } from "../../utils/day";
import { getCsrfToken, ApiServicePost } from "../../utils/ApiServices";
import {
	// Modal
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

//@ts-ignore
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//@ts-ignore
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";

import type { DatePickerProps } from "antd";
import { DatePicker, Space, Radio } from "antd";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { width } from "@mui/system";
import moment from "moment";

interface AddTransactionModalProps {
	isOpen: boolean;
	onClose: any;
}

function AddTransactionModal({ isOpen, onClose }: AddTransactionModalProps) {
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [type, setType] = useState("Expense");
	const [note, setNote] = useState("");
	const [date, setDate] = useState(dayjs().startOf("day").format("YYYY-MM-DD"));
	const [day, setDay] = useState<any>(null);
	const [month, setMonth] = useState<any>(null);
	const [year, setYear] = useState<any>(null);
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const token = useSelector((state: RootState) => state.auth.token);
	const categories = useSelector(
		(state: RootState) => state.category.categories
	);

	const handleDate = (date: any, dateString: any) => {
		console.log(date, dateString);
		let selectedDate = dayjs(date).format("YYYY-MM-DD");
		// let formattedDate = dayjs(selectedDate);
		let day = selectedDate.split("-")[2];
		let month = selectedDate.split("-")[1];
		let year = selectedDate.split("-")[0];
		setDate(selectedDate);
		setDay(day);
		setMonth(month);
		setYear(year);
	};

	const handleSubmit = () => {
		console.log(amount);
		console.log(category);
		console.log(note);
		console.log(date);
		ApiServicePost(
			"/transaction",
			"POST",
			{
				amount: amount,
				category: category,
				date: {
					day: day,
					month: month,
					year: year,
					date: date,
				},
				type: type,
				note: note,
			},
			token
		)
			.then((data: boolean) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
		onClose();
	};

	return (
		<>
			<Modal
				title="Add Transaction"
				open={isOpen}
				onCancel={onClose}
				footer={null}
			>
				<FormControl>
					<FormLabel>Amount</FormLabel>
					<Input
						type="number"
						ref={initialRef}
						placeholder="Enter Amount"
						onChange={(e: any) => setAmount(e.target.value)}
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Category</FormLabel>
					<Select
						placeholder="Select a Category"
						onChange={(e: any) => setCategory(e.target.value)}
					>
						{categories.length > 0 &&
							categories.map((category: any) => (
								<option key={category._id} value={category.categories.title}>
									{category.categories.title}
								</option>
							))}
					</Select>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Date</FormLabel>
					<DatePicker
						defaultValue={moment(moment().toDate(), "DD/MM/YYYY")}
						format="DD/MM/YYYY"
						onChange={handleDate}
						autoFocus={true}
						style={{ width: "100%", height: "40px", borderRadius: "5px" }}
						placement="bottomRight"
					/>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Type</FormLabel>
					<Radio.Group
						onChange={(e: any) => setType(e.target.value)}
						value={type}
					>
						<Radio value="Expense">Expense</Radio>
						<Radio value="Income">Income</Radio>
					</Radio.Group>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Note</FormLabel>
					<Input
						placeholder="Note (Optional)"
						onChange={(e: any) => setNote(e.target.value)}
					/>
				</FormControl>
				<div className="w-[100%] flex justify-end">
					<Button colorScheme="blue" mt={4} mr={3} onClick={handleSubmit}>
						Save
					</Button>
					<Button onClick={onClose} mt={4}>
						Cancel
					</Button>
				</div>
			</Modal>
		</>
	);
}

export default AddTransactionModal;
