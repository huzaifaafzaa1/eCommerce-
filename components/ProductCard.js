"use client";
import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { product, bagProducts, dispatch, addToBag } = props;
  
  const handleAddToBag = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Check if the product is already in the bag
    const existingProduct = bagProducts.find((item) => item.id === product.id);
    if (existingProduct) {
      toast.error("This product is already in your bag!");
    } else {
      toast.success("Product added to your bag!");
      dispatch(addToBag(product));
    }
  };

  return (
    <div className="bg-red-700">
      <div className="h-[150px] bg-white flex justify-center items-center rounded-xl">
        <img
          className="max-h-[150px] py-6"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="productDetails w-[100%]">
        <h2 className="mx-2 font-normal text-lg truncate">{product.title}</h2>
        <p className="mx-2 text-darkgrey">{product.category}</p>
      </div>
      <div className="flex mt-3 justify-between">
        <p className="px-4 font-normal text-lg">$ {product.price}</p>
        <div className="px-4">
          <button
            className="flex justify-center items-center h-7 w-7 bg-black text-white px-1 py-1 rounded-lg hover:bg-slate-800"
            onClick={handleAddToBag}         //this button will add product to bag
          >
            <BsFillBagPlusFill className="max-h-6 max-w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
