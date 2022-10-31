import { useState } from "react";
import { User } from "../types/User";

export default function UserSearch() {
	const users = [
		{ name: "John", age: 16 },
		{ name: "David", age: 20 },
		{ name: "Sarah", age: 22 },
	];

	const [name, setName] = useState("");
	const [user, setUser] = useState<User | undefined>();

	const handleSearch = () => {
		const result = users.find((user) => user.name === name);
		setUser(result);
	};

	return (
		<div>
			<h2>UserSearch</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
			{user ? (
				<div>
					<h4>User found!</h4>
					<div>Name : {user.name}</div>
					<div>Age : {user.age}</div>
				</div>
			) : (
				<h4>No user found!</h4>
			)}
		</div>
	);
}
