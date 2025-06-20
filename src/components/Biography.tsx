const Biography = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Biography</h2>
          <h2><a href="https://nishantinfo.netlify.app/" className="text-primary hover:underline">My Portfolio</a></h2>
        
          <div className="space-y-4 text-card-foreground leading-relaxed">
            <p>
              I’m someone who thrives on exploration and continuous learning. 
              I have a deep passion for traveling, as it allows me to discover new cultures, meet diverse people.
            </p>
            
            <p>
              I’m also an avid enthusiast of outdoor sports and games, which keep me energized, 
              focused on teamwork, and well-balanced in my daily life.
            </p>
            
            <p> 
              Whether it's through navigating unfamiliar cities or learning from spontaneous conversations, 
              I believe every journey enriches both personal and professional growth.
              I'm also an avid enthusiast of outdoor sports and games, which keep me energized, team-focused, and balanced in my daily life. 
            </p>
            
            <p>
              For more information about my work and sources of inspiration – visit my
              Resume section.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-card-foreground mb-2">
              I was taught life drawing, Software Engineer and illustration at the{" "}
              <a href="https://www.linkedin.com/company/rcsems?originalSubdomain=in" className="text-primary hover:underline">RCS EMS PVT LTD</a>.
            </p>
            <p className="text-card-foreground">
              In Ahmdebaad. I also have a Bachlor of Technology in Computer Science from
              Himachal Pradesh Technical University.
            </p>
            <p className="text-card-foreground mb-2">
              <a href="https://www.himtu.ac.in/" className="text-primary hover:underline">B.TECH</a> Computer Science {" "}
              <a href="https://www.himtu.ac.in/" className="text-primary hover:underline">HPTU</a>
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Technologies</h3>
            <div className="space-y-2 text-card-foreground">
              <p>
                HTML, CSS, JavaScript, NODE, REACT, NEST.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <div className="bg-muted aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nishant Sharma Working on his System"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contact Info Overlay */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm mb-2">
              If you have questions or would like to Communicate, please send an email
            </p>
            <p className="text-muted-foreground text-sm mb-1">
              to nishant2465@gmail.com. You can also visit my{" "}
              <a href="https://nishantinfo.netlify.app/" className="text-primary hover:underline">Portfolio</a>.
            </p>
            
            <div className="mt-4 text-muted-foreground text-xs">
              <p>Email:  {" "}
                <a href="https://gmail.com" className="text-primary hover:underline">nishant2465@gmail.com</a>
              </p>

              <p>Instagram: {" "}
                <a href="https://www.instagram.com/nishants91/" className="text-primary hover:underline">My Instagram</a>
              </p>

              <p>Linkedin: {" "}
                <a href="https://www.linkedin.com/in/nishant-sharma-b845881a7/" className="text-primary hover:underline">My LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
