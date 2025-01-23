"use client";
import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect } from "react";
import { setProducts, setSelectedProduct } from "@/app/redux/productsSlice";
import { addToBag } from "@/app/redux/bagSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the toast

const Products = () => {
  const bagProducts = useSelector((state) => state.bag.bagProducts); // Access bagProducts from Redux
  const products = useSelector((state) => state.productsStore.products);
  const dispatch = useDispatch();

  async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    //  console.log(data)

    // Add a `count` property to each product
    const updatedData = data.map((product) => ({
      ...product,
      count: 0, // Initialize count to 0
    }));

    //console.log(updatedData)
    dispatch(setProducts(updatedData));
  }

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div className="productContainer flex flex-col justify items-center  w-[68%]  ">
      {/* Add ToastContainer to render toasts */}
      {/* this component is for search */}
      <div className=" w-1/2 mx-auto my-5">
        <label className="text-darkgrey font-cabin">Search Item</label>
        <div>
          <input
            className="search w-full px-3 py-2 rounded-lg bg-white"
            type="text"
            placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-[95%] my-4">
        {/* This is for setting grid to center because grid is his child component */}

        <div className="products grid grid-cols-4 gap-4  justify-center items-center  w-full">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/${product.id}`}
                onClick={() => dispatch(setSelectedProduct(product))}
              >
                <div className=" bg-red-700 ">
                  <div className="h-[150px]  bg-white flex justify-center items-center rounded-xl">
                    <img
                      className="max-h-[150px] py-6"
                      src={product.image}
                      alt="Watch"
                    />
                  </div>
                  <div className="productDetails  w-[100%] ">
                    <h2 className="mx-2 font-normal text-lg truncate">
                      {product.title}
                    </h2>
                    <p className="mx-2 text-darkgrey">{product.category}</p>
                  </div>
                  <div className="flex  mt-3  justify-between">
                    <p className="px-4 font-normal text-lg ">
                      $ {product.price}
                    </p>
                    <div className="px-4">
                      <button
                        className="flex justify-center items-center h-7 w-7 bg-black text-white px-1 py-1 rounded-lg hover:bg-slate-800"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();

                          // Check if the product is already in the bag
                          const existingProduct = bagProducts.find(
                            (item) => item.id === product.id
                          );
                          if (existingProduct) {
                            // Show toast if product is already in the bag
                            toast.error("This product is already in your bag!");
                          } else {
                            toast.success("Product added to your bag!");
                            // Dispatch action to add the product to the bag
                            dispatch(addToBag(product))
                          }
                        }}
                      >
                        <BsFillBagPlusFill className="max-h-6 max-w-6 " />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
