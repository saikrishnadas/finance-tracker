import Categories from "../components/Categories";
import { Select } from "@chakra-ui/react";
import flag from "../images/indian-flag.png";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiServicePost } from "../utils/ApiServices";
import { addCategory } from "../features/categorySlice";
import { RootState } from "../store/index";
import AddCategoryModal from "../components/Modals/AddCategoryModal";

function Detailsbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [categories, setCategories] = useState([
		{
			categories: {
				title: "Test",
				color: "green",
				type: "Expense",
			},
			_id: "635e36687a02cb07494b564c",
			userId: "635e364b7a02cb07494b5646",
			createdAt: "2022-10-30T08:31:36.914Z",
			updatedAt: "2022-10-30T08:31:36.914Z",
			__v: 0,
		},
	]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.token);

	const openAddCategoryModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const deleteCategory = (id: any) => {
		ApiServicePost("/categories", "DELETE", { categoryId: id }, token)
			.then((data: boolean) => {})
			.catch((err) => {});
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
				if (data.message === "jwt expired") {
					return navigate("/login");
				}

				setCategories(data.categories);
				dispatch(addCategory(data.categories));
			});
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="bg-gray-200 w-[18vw] pt-10 lg:flex flex-col justify-between pb-5 gap-y-10 hidden">
			<Categories
				categories={categories}
				deleteCategory={deleteCategory}
				openAddCategoryModal={openAddCategoryModal}
			/>
			<div className="flex gap-x-2 items-center ml-2 w-[15em]">
				<div className="w-10">
					<img src={flag} alt="rupee" />
				</div>
				<Select
					isDisabled
					placeholder="INR"
					bg="tomato"
					borderColor="tomato"
					color="white"
				>
					<option value="india">India</option>
				</Select>
			</div>
			<AddCategoryModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default Detailsbar;
