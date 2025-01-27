"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setProducts } from "@/app/redux/productsSlice";
import { addToBag } from "@/app/redux/bagSlice";
import { selectBagProducts, selectProducts } from "@/app/redux/selector";
import ProductCard from "./ProductCard";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const bagProducts = useSelector(selectBagProducts);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    const updatedData = data.map((product) => ({
      ...product,
      count: 0,
    }));

    dispatch(setProducts(updatedData));
  }

  //initially the filteredProducts store the products[] array that contain data from fetch api
  const filteredProducts = products.filter(  
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  };

  useEffect(() => {
    // Load the search term from localStorage on page load
    const savedSearchTerm = localStorage.getItem("searchTerm");
    if (savedSearchTerm) {   //if searchterm is in the local storage then set that searchterm
      setSearchTerm(savedSearchTerm);
    }

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Save the search term to localStorage every time it changes
    if (searchTerm) {    //if anything is search in the search bar then its true if initial state is empty string it will be false
      localStorage.setItem("searchTerm", searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="productContainer flex flex-col items-center w-[65%]">
      {/* search container */}
      <div className="searchcontainer w-1/2 mx-auto my-5 p-2">
        <label className="text-darkgrey font-cabin">Search Item</label>
        <div className="relative">
          <input
            className="search w-full px-3 py-2 rounded-lg bg-white"
            type="text"
            placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <div
              className="absolute right-2 top-0 bottom-0 flex items-center justify-center "
              onClick={handleClearSearch}
            >
              <MdOutlineCancelPresentation className="text-gray-500 text-3xl cursor-pointer p-1 rounded-full hover:bg-gray-200" />
            </div>
          )}
        </div>
      </div>

      {/* products */}
      <div className="flex justify-center items-center w-[95%] my-4">
        <div className="products grid grid-cols-4 gap-4 justify-center items-center w-full">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/${product.id}`}>
              <ProductCard
                product={product}
                bagProducts={bagProducts}
                dispatch={dispatch}
                addToBag={addToBag}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
