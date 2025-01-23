"use client"
import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { addToBag } from '@/app/redux/bagSlice';
import { useSelector,useDispatch } from 'react-redux';
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the toast

const productDescription = () => {
  const dispatch = useDispatch(); 
  const product = useSelector((state)=>state.productsStore.selectedProduct);
  const bagProducts = useSelector((state) => state.bag.bagProducts); // Access bagProducts from Redux
  // console.log(product)
  // if (!product) {
  //   return <p>No product selected. Please go back and select a product.</p>;
  // }
   
  return ( 
    <div className='w-[70%]  font-cabin '>
       <ToastContainer 
        position="bottom-right" // Set position to bottom-left
        autoClose={3000} // Optional: Adjust auto-close timing
        hideProgressBar={false} // Optional: Show or hide the progress bar
        newestOnTop={false} // Optional: Show newest toasts on top
        closeOnClick // Optional: Close toast on click
        rtl={false} // Optional: Right-to-left text layout
        pauseOnFocusLoss // Optional: Pause toast on focus loss
        draggable // Optional: Allow dragging of the toast
        pauseOnHover // Optional: Pause on hover
       /> {/* Add ToastContainer to render toasts */}
       
     <div><Link href="/" className='flex gap-2 items-center  my-5 py-2 px-3'>
     <IoIosArrowBack />Back</Link>
     </div>

     <div className=''>

     <div className='flex gap-3  '>
        <div className='flex gap-4 justify-center ml-3'>

           <div className=' flex flex-col items-center gap-2'>
            <div className='h-14 w-14 bg-white flex justify-center items-center rounded-xl py-2 px-2'>
              <img src={product.image} alt="" className='max-h-14 max-w-14 py-2 px-2 '/>
            </div>
            <div className='h-14 w-14 bg-white flex justify-center items-center rounded-xl'>
              <img src={product.image} alt="" className='max-h-14 max-w-14 py-2 px-2'/>
            </div>
            <div className='h-14 w-14 bg-white  flex justify-center items-center rounded-xl'>
              <img src={product.image} alt="" className='max-h-14 max-w-14 py-2 px-2'/>
            </div>
           </div>
       
            <div className='h-60 w-56 bg-white flex justify-center items-center rounded-xl'>
              <img src={product.image} alt="" className='max-h-56 max-w-52 py-4 px-2 '/>
            </div>
        </div>

        <div className=''>
         <h1 className='font-bold text-4xl px-4'>{product.title}</h1>
         <h2 className=' text-2xl px-4 py-1 text-darkgrey'>{product.category}</h2>
         <div className='px-4 py-2 flex gap-3'>
          <ul className='flex items-center gap-1 text-darkgreen text-lg'>
            <li><MdStar /></li>
            <li><MdStar /></li>
            <li><MdStar /></li>
            <li><MdStar /></li>
            <li><MdStarHalf /></li>
          </ul>
          <p className='text-green text-lg'>{product.rating.rate}</p>
         </div>
         <h2 className=' text-2xl px-4 py-2 font-semibold font-cabin'>$ {product.price}</h2>
         <p  className='px-4 font-cabin text-lg' >{product.description}</p>
        </div>

     </div>

     <div className='flex px-8 my-2 justify-end'>
      <button className='bg-gray-900 text-white px-4 py-1 rounded-2xl flex justify-center items-center gap-3'
       onClick={()=>{                     
         // Check if the product is already in the bag
          const existingProduct = bagProducts.find((item) => item.id === product.id);
          if (existingProduct) {
          // Show toast if product is already in the bag
          toast.error("This product is already in your bag!");
          } 
          else {
          // Dispatch action to add the product to the bag
          dispatch(addToBag(product));
          toast.success("Product added to your bag!");
          }}}>
      <IoBagAddOutline />Add to bag
      </button>
     </div>
     </div>

     <div className='border mt-2  border-lightgrey rounded-md '>
        {/* for horizontal line */}
     </div>

    <div className=' mb-4'>
    <h2 className='text-2xl font-semibold px-4 py-2 font-cabin'>Description</h2>
    <p className='px-4'>{product.description}</p>
    </div>
     

    </div>
  )
}

export default productDescription
