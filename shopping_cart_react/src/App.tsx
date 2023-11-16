
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Main from './pages/main/Main';
import Product from './pages/product/Product';
import Checkout from './pages/checkout/Checkout';
import ErrorPage from './pages/error/ErrorPage';
import Navbar from './components/navbar/Navbar';
import "./style/global.scss"
import Footer from './components/footer/Footer';

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>

    )
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )


}

export default App
