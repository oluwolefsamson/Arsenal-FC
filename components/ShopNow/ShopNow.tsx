import React from "react"
import './ShopNow.css'

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'shop1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },

    {
        id: 1,
        name: 'Sweat Shirt',
        href: '#',
        imageSrc: 'shop2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'White',
      },

      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'shop3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$55',
        color: 'Pink',
      },

      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'shop5.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$40',
        color: 'Red',
      },

    // More products...
  ]
  
  export default function ShopNow() {
    return (
      <div className="shopnow-con bg-white">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">SHOP NOW</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  