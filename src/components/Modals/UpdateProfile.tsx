import React from "react";
import { useState, useEffect } from "react";
import { categories } from "../../utils/day";
import { getCsrfToken, ApiImageService } from "../../utils/ApiServices";
import {
	Modal,
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
import axios from "axios";

interface UpdateProfileModalProps {
	isOpen: boolean;
	onClose: any;
}

function UpdateProfile({ isOpen, onClose }: UpdateProfileModalProps) {
	const [file, setFile]: any = useState(null);
	const [color, setColor] = useState("");
	const [csrfTokenState, setCsrfTokenState] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		// console.log(file);
		formData.append("profile", file);
		// console.log("formData", formData);
		axios
			.post("http://localhost:8080/profile", formData)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		onClose();
	};

	// useEffect(() => {
	// 	getCsrfToken("/getCsrf", "GET").then((response) =>
	// 		setCsrfTokenState(response?.csrfToken)
	// 	);
	// }, []);

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Profile</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Profile Picture</FormLabel>
							<Input
								name="profile"
								type="file"
								onChange={(e: any) => setFile(e.target.files[0])}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleSubmit}>
							Update
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default UpdateProfile;
