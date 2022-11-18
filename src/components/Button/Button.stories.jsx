import React from "react";

import { Button } from "./ Button";

export default {
	title: "Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: "primary",
	content: "alert with boostrap",
};

export const Success = Template.bind({});
Success.args = {
    ...Primary.args,
	type: "success",
};

export const Link = Template.bind({});
Link.args = {
	...Primary.args,
	type: "link",
};
