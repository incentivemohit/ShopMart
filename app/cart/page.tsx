import CartProducts from "@/components/Cart/CartProducts";
import Checkout from "@/components/Cart/Checkout";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex justify-evenly">
        <CartProducts />
        <Checkout />
      </div>
      <Footer />
    </>
  );
}
