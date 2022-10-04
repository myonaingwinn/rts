import { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGuests] = useState<string[]>([]);

	const handleGuests = () => {
		setName(""); // send this under the guest list
		setGuests([...guests, name]);
	};

	return (
		<div>
			<h3>Guest List</h3>
			<ul>
				{guests.map((guest) => (
					<li>{guest}</li>
				))}
			</ul>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleGuests}>Add Guest</button>
		</div>
	);
};

export default GuestList;
