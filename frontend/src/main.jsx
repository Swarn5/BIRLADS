import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react"; // Make sure this import is correct
import { ColorModeScript } from "@chakra-ui/react"; // Ensure correct import
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SocketContextProvider } from "./context/SocketContext.jsx";

const styles = {
	global: (props) => ({
		body: {
			color: mode("#973131", "#F5E7B2")(props),  // Light mode text color: #973131, Dark mode text color: #F5E7B2
            bg: mode("#F5E7B2", "#973131")(props),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const colors = {
	gray: {
		light: "#616161",
		dark: "#1e1e1e",
	},
};

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <SocketContextProvider>
                        <App />
                    </SocketContextProvider>
                </ChakraProvider>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
);
