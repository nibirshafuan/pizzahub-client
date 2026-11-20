import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CartPage from "@/components/cart/CartPage";

export default function CartRoute() {
  return (
    <main>
      <Navbar />
      <CartPage />
      <Footer />
    </main>
  );
}
