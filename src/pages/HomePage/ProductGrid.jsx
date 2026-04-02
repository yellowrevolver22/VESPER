export function ProductGrid({ products, setCart }) {
  const addToCart = (product) => {
    setCart(
      prev => {
        const exist = prev.find(p => 
          (p.productId === product.id))

        if (exist) {
          return prev.map(p => 
            (p.productId === product.id)
              ? { ...p, quantity: p.quantity + 1 }
              : p
          )
        }
        return [...prev, {
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.images[0],
          quantity: 1
        }]
      }
    )
  }

  return (
    <div className="w-full h-full bg-gray-300 grid p-2 gap-5
    grid-cols-[repeat(auto-fill,minmax(220px,260px))] justify-center"> {/*auto fill keeps empty columns*/}
      {products.map((product) => {
        return (
          <div key={product.id} className="bg-white p-3 flex flex-col shadow
          rounded-2xl justify-between">
            <div className="py-2 flex flex-col gap-2">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={product.images[0]}></img>
              </div>
              <span>{product.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold font-mono">Rs.{product.price}</span>
              <button onClick={()=>addToCart(product)}
                className="bg-yellow-400 font-bold rounded-4xl p-2 active:bg-yellow-700
              transition-all cursor-pointer mt-auto">Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}