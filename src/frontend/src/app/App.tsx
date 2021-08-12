import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/layout";
import RouterNavigation from "./router/router";
import { theme } from "./shared/environiments";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <RouterNavigation />
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export default App;
