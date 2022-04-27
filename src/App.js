import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/users">
          <UserList/>
        </Route>
        <Route path="/user/:userId">
          <User/>
        </Route>
        <Route path="/newUser">
          <NewUser/>
        </Route>
        <Route path="/products">
          <ProductList/>
        </Route>
        <Route path="/product/:productsId">
          <Product/>
        </Route>
        <Route path="/newproduct">
          <NewUser />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
