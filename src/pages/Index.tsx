
import Header from "@/components/Header";
import Biography from "@/components/Biography";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Biography />
      </main>
      <Footer />
    </div>
  );
};

export default Index;