import { AppBar, Toolbar } from "@material-ui/core";
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import WorkExp from "./components/workExp/WorkExp";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

  return (
    <div style={{ backgroundColor: darkmode ? '#222' : 'white', color: darkmode && 'white'}}>
      <Toggle />
      <AppBar style={{ background: '#59b256' }}>
        <Toolbar><p style={{fontSize: '20px'}}>Portfolio</p></Toolbar>
      </AppBar>
      <Intro />
      <About />
      <hr />
      <WorkExp />
      <hr />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
