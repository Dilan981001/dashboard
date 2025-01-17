import Home from "./pages/home/home";
import Login from "./pages/login/login.jsx";
import List from "./pages/list/list.jsx";
import Single from "./pages/single/single.jsx";
import New from './pages/new/New.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource.js";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkmodeContext.js";
import {useContext} from "react"


function App() {

  const {darkMode} = useContext(DarkModeContext)


  return (
    <div className={darkMode? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="/products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
