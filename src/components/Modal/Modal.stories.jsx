import React from "react";
import { action } from "@storybook/addon-actions";

import { Modal } from "./Modal";

export default {
	title: "Actions/Modal",
	component: Modal,
};

const Template = (args) => (
	<Modal onClick={action("my component clicked")} {...args}>
		<p>hello modal</p>,
	</Modal>
);

export const _Modal = Template.bind({});

_Modal.args = Modal.defaultProps;
