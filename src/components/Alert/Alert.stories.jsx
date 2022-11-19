import React from "react";

import { Alert } from "./Alert";

export default {
	title: "Components/Alert",
	component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: "primary",
	message: "alert with boostrap",
};

export const Success = Template.bind({});
Success.args = {
	...Primary.args,
	type: "success",
};

export const Danger = Template.bind({});
Danger.args = {
	...Primary.args,
	type: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
	...Primary.args,
	type: "warning",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	...Primary.args,
	icon: "check-circle-fill",
};
