
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-foreground mb-8">Resume</h1>
        <div className="space-y-8">
          <article className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-3">My Portfolio</h2>
            <p className="text-muted-foreground text-sm mb-4">Published on December 15, 2024</p>
            <p className="text-card-foreground leading-relaxed mb-4">
              Here is my poftifolio you want to Check. click on My portfolio.
            </p>
            <a href="https://nishantinfo.netlify.app/" className="text-primary hover:underline">My Portfolio →</a>
          </article>
          
          {/*<article className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-3">Working with Watercolors</h2>
            <p className="text-muted-foreground text-sm mb-4">Published on March 8, 2024</p>
            <p className="text-card-foreground leading-relaxed mb-4">
              Watercolors bring a unique fluidity and spontaneity to fashion illustration. 
              Here are some tips and techniques I've developed over the years.
            </p>
            <a href="#" className="text-primary hover:underline">Read more →</a>
          </article>

          <article className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-3">Inspiration from Stockholm</h2>
            <p className="text-muted-foreground text-sm mb-4">Published on February 28, 2024</p>
            <p className="text-card-foreground leading-relaxed mb-4">
              My city continues to inspire my work in unexpected ways. From the changing light 
              to the fashion on the streets, Stockholm is a constant source of creativity.
            </p>
            <a href="#" className="text-primary hover:underline">Read more →</a>
          </article>*/}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;