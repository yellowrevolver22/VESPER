import { Navbar } from "../../components/Navbar"
import { ProductGrid } from "./ProductGrid"

export function HomePage({products,setCart}){
  return (
    <main>
      <ProductGrid setCart={setCart} products={products} />
    </main>
  )
}