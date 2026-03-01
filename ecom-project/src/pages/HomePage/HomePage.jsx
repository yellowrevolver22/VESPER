import { Navbar } from "../../components/Navbar"
import { ProductGrid } from "./ProductGrid"

export function HomePage({products}){
  return (
    <main>
      <ProductGrid products={products} />
    </main>
  )
}