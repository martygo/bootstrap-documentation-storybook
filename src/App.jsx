import React from "react";

import { Alert } from "./components/Alert/Alert";
import { Button } from "./components/Button/ Button";

function App() {
	return (
		<>
			<Alert type="primary" message="alert" />
			<Button type="danger" content="button" />
		</>
	);
}

export default App;
