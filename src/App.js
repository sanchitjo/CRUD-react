import './App.css';
import Product from './components/product';
import Dashboard from './components/dashboard';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import Users from './components/users';
import CreateUser from './components/createUser';
import EditUser from './components/editUser';
import EditProduct from './components/editProduct';
import CreateProduct from './components/createProduct';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { UserProvider } from './components/userContext';
import { ProductProvider } from './components/productContext';




const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">


                <Routes>

                  <Route path="/" element={<Dashboard />} />

                  <Route path="/users" element={<Users />} />
                  <Route path="/users/edit/:id" element={<EditUser />} />
                  <Route path="/users/createUser" element={<CreateUser />} />

                  <Route path="/product" element={<Product />} />
                  <Route path="/product/edit/:id" element={<EditProduct />} />
                  <Route path="/product/createProduct" element={<CreateProduct />} />

                </Routes>



              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
      </ProductProvider>
    </UserProvider>



  );
}

export default App;

