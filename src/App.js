import { useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ModeContext } from "./context/context-mode";
import { CountriesContext } from "./context/context-countries";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainView from "./components/MainView";
import CountryPage from "./components/CountryPage";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    transition: 0.2s;
    line-height: 1.8;
    margin: 0;
    padding: 0;
    background-color: ${(props) =>
      props.theme.color === "dark" ? "#202D36" : "#FAFAFA"};
    color: ${(props) => (props.theme.color === "dark" ? "#E7EDF0" : "#1C1D1F")};
    font-family: 'Nunito Sans', sans-serif;
  }

  header {
    background-color: ${(props) =>
      props.theme.color === "dark" ? "#2B3743" : "#FFFFFF"};
    -webkit-box-shadow: 1px 6px 14px -1px rgba(0,0,0,0.43); 
    box-shadow: 1px 6px 14px -1px rgba(0,0,0,0.43);
  }

  h1 {
    font-size: 18px;
  }

  input {
    background-color: ${(props) =>
      props.theme.color === "dark" ? "#2B3743" : "#FFFFFF"};
    color: ${(props) => (props.theme.color === "dark" ? "#E7EDF0" : "#1C1D1F")};
    border: none;
    outline: none;
    border-radius: 10px;
    
  }

  select {
    background-color: ${(props) =>
      props.theme.color === "dark" ? "#2B3743" : "#FFFFFF"};
    color: ${(props) => (props.theme.color === "dark" ? "#E7EDF0" : "#1C1D1F")};
    border: none;
    outline: none;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
  }

  ion-icon {
    color: ${(props) => (props.theme.color === "dark" ? "#E7EDF0" : "#1C1D1F")};
  }

  .search {
    position: absolute;
    text-align: left;
    top: 40%;
    left: 75px;
    @media screen and (max-width: 750px) {
      top: 19%;
      left: 20px;
    }
  }

  .shadow {
    -webkit-box-shadow: 1px -1px 12px -1px rgba(0, 0, 0, 0.7);
    box-shadow: 1px -1px 12px -1px rgba(0, 0, 0, 0.7);
  }
`;

function App() {
  const [mode] = useContext(ModeContext);
  const {setCountries} = useContext(CountriesContext);
  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setCountries(json);
    };
    fetchData();
  }, [setCountries]);

  return (
    <>
      <Router>
        <ThemeProvider theme={mode}>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route path="/country/:name" component={CountryPage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
