// import { Parent } from "./props/Parent";
import GuestList from "./state/GuestList";

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
			<GuestList />
		</div>
	);
}

export default App;
