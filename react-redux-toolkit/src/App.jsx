import Header from "./Components/Header";
import ApiProducts from "./Components/ApiProducts";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <>
      <Header />
      <h2>React with Redux Toolkit</h2>
      <Pagination />
      <ApiProducts />
      <Pagination />
    </>
  )
}

export default App;
