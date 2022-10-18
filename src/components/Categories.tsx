import { useState, useEffect } from "react";
// @ts-ignore
import { TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import AddCategoryModal from "./Modals/AddCategoryModal";
import EditCategoryModal from "./Modals/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";

function Categories() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [categories, setCategories] = useState([]);
	const token = useSelector((state: RootState) => state.auth.token);

	const openAddCategoryModal = () => {
		setIsOpen(true);
	};

	const openEditCategoryModal = () => {
		setIsOpenEdit(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const onCloseEdit = () => {
		setIsOpenEdit(false);
	};

	const getCategories = () => {
		fetch(`${process.env.REACT_APP_LOCAL_URL}/categories`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCategories(data);
			});
	};

	useEffect(() => {
		console.log("Token ==>", token);
		getCategories();
	}, []);

	return (
		<div className="pl-5">
			<div className="pb-5 font-bold">
				<p>CATEGORIES</p>
			</div>
			<div className="flex flex-col gap-y-5 ml-5">
				{categories.map((cat: any) => (
					<span className="flex gap-x-3 items-center" key={cat._id}>
						<div
							className={`w-5 h-5 ${
								cat.categories.color === "red" && "bg-red-500"
							} ${cat.categories.color === "blue" && "bg-blue-500"} ${
								cat.categories.color === "green" && "bg-green-500"
							} ${cat.categories.color === "purple" && "bg-purple-500"} ${
								cat.categories.color === "yellow" && "bg-yellow-500"
							} ${cat.categories.color === "pink" && "bg-pink-500"}`}
						/>
						<p>{cat.categories.title}</p>
						<span className="cursor-pointer" onClick={openEditCategoryModal}>
							<EditIcon color="blue.700" />
						</span>
					</span>
				))}
				<div
					className="flex gap-x-3 items-center cursor-pointer text-blue-800 font-semibold hover:text-blue-400"
					onClick={openAddCategoryModal}
				>
					<SmallAddIcon color="blue" />
					<p>Add Another</p>
				</div>
				<AddCategoryModal isOpen={isOpen} onClose={onClose} />
				<EditCategoryModal isOpen={isOpenEdit} onClose={onCloseEdit} />
			</div>
		</div>
	);
}

export default Categories;