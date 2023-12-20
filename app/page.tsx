import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section>
          <Banner />
        </section>
        <section>
          <p className="text-center bg-black py-2 mb-2 text-white text-2xl">Our Products</p>
          <div className="flex justify-center gap-5">
            <Sidebar /> <Products />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
