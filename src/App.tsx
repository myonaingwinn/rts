// import { Parent } from "./props/Parent";
// import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
	return (
		<div style={{ margin: "10px" }}>
			<div
				style={{
					background: "lightgrey",
					padding: "10px",
					marginBottom: "5px",
				}}
			>
				When oceans bleed into the sky...
			</div>
			{/* <Parent /> */}
			{/* <GuestList /> */}
			<UserSearch />
		</div>
	);
}

export default App;
