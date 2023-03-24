import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import { useEffect, useState } from 'react'
import Frontpage from './pages/Frontpage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesPages from './pages/CategoriesPage';

function App() {

 const [prods, setProds] = useState(null)

 const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
 }

 useEffect(() => {
  getProducts()
 }, [])

 console.log(prods)

return (
  <Routes>
    <Route index element={<Frontpage products={prods} />} />
    <Route path=":slug" element={<ProductPage />} />
    <Route path="kategori">
      <Route index element={<CategoriesPages />} />
      <Route path=":category" element={<CategoryPage />} />
    </Route>
  </Routes>
);

}

export default App;
