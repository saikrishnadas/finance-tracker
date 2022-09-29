function Dashboard() {
	const handleLogout = () => {
		fetch(`{process.env.REACT_APP_LOCAL_URL}/logout`, {
			method: "POST",
			// mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<h1>Welcome to Dashbaord</h1>
			<button onClick={handleLogout}>Logout</button>
		</>
	);
}

export default Dashboard;
