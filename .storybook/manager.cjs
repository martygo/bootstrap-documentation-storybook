import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

export const customTheme = create({
	base: "dark",
	brandTitle: "Stories of Bootstrap",
	brandUrl: "https://example.com",
	brandImage:
		"https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
	brandTarget: "_self",
});

addons.setConfig({
	theme: customTheme,
});
