import Header from "./Components/Header";
import ApiProducts from "./Components/ApiProducts";
import Pagination from "./Components/Pagination";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import CartList from "./Components/CartList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ConditionalPagination />

        <Routes>
          <Route path="/" element={<ApiProducts />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>

        <ConditionalPagination />
      </BrowserRouter>
    </>
  );
}

export default App;

// Component that hides pagination on /cart page
function ConditionalPagination() {
  const location = useLocation();

  // hide pagination on cart page
  if (location.pathname === "/cart") return null;

  return <Pagination />;
}