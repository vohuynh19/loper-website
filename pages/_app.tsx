import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "../components";
import { ThemeProvider } from "styled-components";
import { themes } from "~/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
