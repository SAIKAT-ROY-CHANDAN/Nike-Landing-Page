import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SpecialServices from "./components/SpecialServices";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialServices />
      </section>
      <section className="bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x pad">
        <Footer />
      </section>
    </main>
  );
}

export default App;
