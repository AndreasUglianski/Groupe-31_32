import { getProducts } from "./request/products";
import { useState, useEffect } from "react";
import ProductsContainer from "./components/ProductsContainer";
import { Context } from "./context";
import AddProductForm from "./components/AddProductForm";


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
		getProducts(setProducts);
	}, []);



  return (
		<div>
      <Context.Provider value={{ products }}>
        <AddProductForm/>
				<ProductsContainer />
			</Context.Provider>
		</div>
	);
}

export default App;
