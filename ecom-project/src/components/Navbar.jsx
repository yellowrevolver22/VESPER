import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full bg-red-600 flex justify-between items-center py-3 px-4 border-b-2 border-white
    top-0 fixed">
      <Link to="/">
        <div>
          <p className="text-3xl text-white font-bold hover:underline cursor-pointer">VESPER</p>
        </div>
      </Link>
      <div className="flex justify-between w-sm">
        <input id="input1" type="text" placeholder="Search" 
        className="text-white rounded-3xl flex-1 py-2 px-5 border-white border-2 placeholder:text-white">
        </input>
      </div>
      <div className="flex text-white">
        <button className="p-3 rounded-md hover:bg-red-700 transition-all text-xl cursor-pointer">Login</button>
        <Link to="/cart">
          <div className="p-3 text-xl rounded-md hover:bg-red-700 transition-all cursor-pointer">
            Cart
          </div>
        </Link>
      </div>
    </nav>
  )
}