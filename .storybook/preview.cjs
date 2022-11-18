import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	html: {
		prettier: {
			tabWidth: 2,
			useTabs: false,
			htmlWhitespaceSensitivity: "strict",
		},
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
