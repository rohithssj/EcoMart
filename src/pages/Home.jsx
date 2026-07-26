import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import axios from 'axios'
import { addToCart, deleteCart } from '../redux/cartSlice'


const Home = ({ products, setProducts, setCartItems }) => {

  let cart = useSelector((store) => store.cartStore.cart)

  const productsData = async () => {
    let data = await axios.get("https://dummyjson.com/products")
    setProducts(data.data.products)
  }
  // console.log(products)

  useEffect(() => {
    productsData()
  }, [])

  let dispatch = useDispatch()


  const addItem = (item) => {
    let cartItems = {
      title: item.title,
      id: item.id,
      images: item.images,
      price: item.price,
      qty:1

    }
    dispatch(addToCart(cartItems))

  }

  const removeItem = (item)=>{
    dispatch(deleteCart(item.id))
  }





  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((elem) => {

          let inCart = cart.find((val)=>val.id==elem.id)
          
          return (
            <div
              key={elem.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              {/* Image */}
              <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
                <img
                  src={elem.thumbnail}
                  alt={elem.title}
                  className="h-full object-contain hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs capitalize">
                  {elem.category}
                </span>

                <h2 className="text-xl font-semibold mt-3 line-clamp-2">
                  {elem.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {elem.description}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500">⭐</span>
                  <span>{elem.rating}</span>
                </div>

                <div className="flex justify-between items-center mt-5">

                  <div>
                    <h2 className="text-2xl font-bold text-green-600">
                      ${elem.price}
                    </h2>

                    <p className="text-sm text-red-500">
                      {elem.discountPercentage}% OFF
                    </p>
                  </div>

                  {
                    inCart?
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                    onClick={() => removeItem(elem)}>
                    Remove
                  </button>:
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                    onClick={() => addItem(elem)}>
                    Add
                  </button>
                  }

                </div>

              </div>


            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Home