import { Link } from "react-router-dom";
import cartIcon from "/cartIcon.svg"

export function Navbar({ totalQuantity, setProducts,allproducts }) {

  function SearchProducts(event) {
    setProducts(prev => {
      let value = event.target.value
      
      if(value){
       return prev.filter(p =>
        p.title.toLowerCase().includes(value.toLowerCase()))
      }
      else{
        return allproducts
      }
    }
    )
  }

  return (
    <nav className="w-full bg-red-600 flex gap-3 justify-between items-center py-2 px-4 border-b-2 border-white
    top-0 fixed">
      <Link to="/">
        <div>
          <p className="text-3xl text-white font-bold hover:underline cursor-pointer">VESPER</p>
        </div>
      </Link>
      <div className="hidden justify-between w-sm sm:flex">
        <input id="input1" type="text" placeholder="Search"
          className="text-white rounded-3xl flex-1 py-2 px-5 border-white border-2 placeholder:text-white"
          onChange={(event) => SearchProducts(event)}>
        </input>
      </div>
      <div className="flex text-white items-center gap-2 px-2">
        <span className="text-gray-200 hover:underline text-md cursor-pointer
        lg:block hidden">Already have an account?</span>
        <button className="py-3 px-4 active:bg-red-900 bg-red-700 transition-all text-xl cursor-pointer
        rounded-xl">Login</button>
        <Link to="/cart">
          <div className="p-3 rounded-md hover:bg-red-700 transition-all cursor-pointer relative">
            <img className="invert min-w-12" src={cartIcon}></img>
            <span className="absolute top-6.5 left-8 text-xs flex justify-center
            items-center font-bold">{totalQuantity}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}