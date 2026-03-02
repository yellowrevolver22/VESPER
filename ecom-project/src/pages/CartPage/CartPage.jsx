import { Navbar } from "../../components/Navbar";

export function CartPage({ cart, setCart, totalQuantity }) {

  function checkCart(value) {
    if (cart.length == 0) {
      return 0;
    } else {
      return value;
    }
  }

  const calculatePrice = () => {
    let totalCartCost = 0;

    cart.forEach((cartItem) => {
      totalCartCost += cartItem.price * cartItem.quantity;
    })
    return totalCartCost;
  };

  const totalPrice = calculatePrice();
  const deliveryCharge = checkCart(40)
  const shippingCharge = checkCart(35)
  const tax = checkCart(Math.floor(totalPrice * 0.1));
  const finalTotal = totalPrice + deliveryCharge + shippingCharge + tax;

  const increaseItem = (cartItem) => {
    setCart(
      prev => prev.map(p =>
        (p.productId === cartItem.productId)
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    )
  }

  const decreaseItem = (cartItem) => {
    setCart(
      prev => prev.map(p =>
        (p.productId === cartItem.productId)
          ? { ...p, quantity: p.quantity - 1 }
          : p
      ).filter(cartItem=>cartItem.quantity>0)
    )
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-8 sm:flex-row">
        {/* LEFT - CART ITEMS */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">
            Checkout <span className="text-gray-500">({totalQuantity} items)</span>
          </h1>
          {/* CART ITEM */}
          {cart.map((cartItem) => {
            return (
              <div key={cartItem.productId} className="flex gap-6 bg-white p-4 rounded-xl shadow-sm border">
                <div className="w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={cartItem.image}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{cartItem.title}</span>
                    <span className="text-gray-500 font-bold font-mono">Rs.{cartItem.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="bg-black text-white rounded-lg font-bold
                 active:bg-gray-800 transition-all cursor-pointer px-3"
                      onClick={() => increaseItem(cartItem)}>+</button>
                    <span>{cartItem.quantity}</span>
                    <button className="bg-black text-white rounded-lg
                 active:bg-gray-800 transition-all cursor-pointer font-bold px-3"
                      onClick={() => decreaseItem(cartItem)}>-</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* RIGHT - PAYMENT SUMMARY */}
        <div className="mx-auto w-75 pt-10 sm:mx-0">
          <div className="bg-white rounded-xl shadow-md border p-5 sticky top-25">
            <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Products Cost</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryCharge}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shippingCharge}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>₹{tax}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-4"></div>

            {/* TOTAL */}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>

            {/* BUTTON */}
            <button onClick={() => { setCart([]) }} className="w-full mt-5 bg-black text-white py-2.5 rounded-lg font-medium active:bg-gray-800 transition-all cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}