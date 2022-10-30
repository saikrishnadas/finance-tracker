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
	const [categories, setCategories] = useState([]);
	const [sample, setSample] = useState("");
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
				console.log("DATA", data);
				setCategories(data);
				// dispatch(addCategory(data.categories));
			});
	};

	const sampleFun = () => {
		setSample("Hello");
	};

	// useEffect(() => {
	// 	getCategories();
	// }, []);

	useEffect(() => {
		console.log("CATEGORIES -", categories);
	}, [categories]);

	return (
		<div className="bg-gray-200 w-[18vw] pt-10 lg:flex flex-col justify-between pb-5 gap-y-10 hidden">
			<Categories
				sample={sample}
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
				<button onClick={getCategories}>Click to get category</button>
				<button onClick={sampleFun}>Click to sample</button>
			</div>
			<AddCategoryModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default Detailsbar;
