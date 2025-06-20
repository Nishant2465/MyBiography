
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-foreground mb-8">About</h1>
        <div>
          <div className="space-y-6">
            <article id="about" className="bg-card border rounded-lg p-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                 <p className="text-card-foreground leading-relaxed mb-4">
                    Hi, I’m Nishant — a curious explorer, creative thinker, and lifelong learner.
                    My journey bridges the world of technology. With a background in
                    <strong>Computer Science (B.Tech from HPTU)</strong> and training in
                    <strong>Web Development at RCS EMS Pvt. Ltd</strong>, I blend
                    structure with imagination.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Traveling is at the heart of who I am. Every new city, culture, and conversation
                     adds color to my thinking and creativity. I find inspiration in faces, textures,
                    brush strokes, and even unexpected things like flora, stockings, and cookies!
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    When I'm not writing code, you'll find me outdoors — hiking, playing
                    team sports, or simply exploring nature. These moments keep me balanced, energized,
                    and deeply connected to the world around me.
                  </p>
                  <p className="text-lg leading-relaxed">
                     My work reflects both logic and emotion — from functional web apps to expressive
                     illustrations. I believe great work is not just built; it’s felt. Let’s connect and
                      create something inspiring together!
                  </p>
              </div>
            </article>
            <h2><a href="https://nishantinfo.netlify.app/" className="text-primary hover:underline">My Portfolio →</a></h2>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;