import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuCollection from "@/components/menu/MenuCollection";

export default function BrowseMenuPage() {
  return (
    <main>
      <Navbar />
      <MenuHero />
      <MenuCollection />
      <Footer />
    </main>
  );
}