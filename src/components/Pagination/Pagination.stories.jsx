import React from "react";

import { Pagination } from "./Pagination";

export default {
	title: "Components/Pagination",
	component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: "sm",
};

export const Large = Template.bind({});
Large.args = {
	size: "lg",
};

export const Active = Template.bind({});
Active.args = {
    ...Small.args,
	active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Active.args,
	disabled: true,
};