import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function Profile() {
	const [isOpen, setIsOpen] = useState(false);
	const openUpdateProfileModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<>
			<span>
				<Avatar name="saikrishnadas666@gmail.com" />
			</span>
		</>
	);
}

export default Profile;
