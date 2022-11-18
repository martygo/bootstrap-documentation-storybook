import React from "react"

import Alert from "./components/Alert/Alert"

function App () {
  return (
		<>
			<Alert type="primary" message="alert with boostrap" />
			<Alert type="danger" message="alert with boostrap + icon" icon="check-circle"/>
		</>
	);
}

export default App
