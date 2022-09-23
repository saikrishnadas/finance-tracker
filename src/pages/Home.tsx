import { Routes, Route, Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<Link to="/login">
				<h1 className="text-3xl font-bold text-red-600 underline">Homepage</h1>
			</Link>
		</div>
	);
}

export default Home;
