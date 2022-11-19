import React from "react";

import { Alert } from "./components/Alert/Alert";
import { Button } from "./components/Button/ Button";
import { Modal } from "./components/Modal/Modal";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
	return (
		<>
			<Alert type="primary" message="alert" />
			<Button type="danger" content="button" />
			<Modal>
				<Alert type="primary" message="alert" />
			</Modal>
			<Pagination/>
		</>
	);
}

export default App;
