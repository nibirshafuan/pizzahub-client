import { Suspense } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import PizzaDetails from "@/components/menu/PizzaDetails";

type PizzaPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function PizzaDetailsContent({ params }: PizzaPageProps) {
  const { id } = await params;

  return <PizzaDetails pizzaId={id} />;
}

function PizzaDetailsFallback() {
  return (
    <div className="pizza-details-not-found">
      <div className="pizza-details-not-found-icon">
        <span>🍕</span>
      </div>
      <h1>Preparing Your Pizza Experience</h1>
      <p>Please wait while we load the pizza details.</p>
    </div>
  );
}

export default function PizzaDetailsPage({ params }: PizzaPageProps) {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<PizzaDetailsFallback />}>
        <PizzaDetailsContent params={params} />
      </Suspense>
      <Footer />
    </main>
  );
}
