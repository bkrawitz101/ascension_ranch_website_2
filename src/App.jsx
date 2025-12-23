import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Compass,
  Waves,
  Heart,
  Sun,
  ArrowUpRight,
  ExternalLink,
  Utensils,
  Camera,
  Coffee,
  Users,
  Sprout
} from 'lucide-react';

// ResponsiveImage removed; using static images for now

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Land', href: '#land' },
    { name: 'Stays', href: '#stays' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'The Animals', href: '#animals' },
    { name: 'Our Story', href: `${import.meta.env.BASE_URL}story` },
    { name: 'Contact', href: '#contact' },
  ];

  const experiences = [
    { 
      title: 'Farm-to-Table Workshops', 
      icon: <Utensils className="w-6 h-6" />, 
      desc: 'Learn the art of regenerative cooking using ingredients harvested right from our soil.' 
    },
    { 
      title: 'Animal Stewardship', 
      icon: <Heart className="w-6 h-6" />, 
      desc: 'Connect with our horses and sheep. Help with morning feedings and learn about herd dynamics.' 
    },
    { 
      title: 'Lake Adventuring', 
      icon: <Waves className="w-6 h-6" />, 
      desc: 'Take a short hike to Folsom Lake for kayaking, wild swimming, and sunset views.' 
    },
    { 
      title: 'Regen Labs', 
      icon: <Sprout className="w-6 h-6" />, 
      desc: 'Get your hands dirty in our living laboratory—from biochar demos to soil building.' 
    }
  ];

  const stays = [
    { 
      name: 'The Horse Pasture Retreat', 
      tag: 'Immersive',
      desc: 'A premium site located directly within the grazing lands. Wake up to the sound of horses nearby.',
      price: 'From $65/night',
      img: 'https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&q=80&w=800'
    },
    { 
      name: 'Oak Savannah Hideaway', 
      tag: 'Secluded',
      desc: 'Tucked away in a private grove of ancient oaks. Perfect for deep rest and sunset watching.',
      price: 'From $75/night',
      img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-serif text-[#2D2926] selection:bg-[#E2D1C3]">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className={`flex flex-col transition-colors ${scrolled ? 'text-[#2D2926]' : 'text-white'}`}>
            <span className="text-2xl font-bold tracking-tighter uppercase font-sans">Ascension Ranch</span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans opacity-60">Regenerative Agritourism · CA</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-semibold uppercase tracking-widest hover:text-[#A67C52] transition-colors ${scrolled ? 'text-[#2D2926]' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#A67C52] text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#8B6541] transition-all shadow-lg">
              Book Your Stay
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 ${scrolled ? 'text-[#2D2926]' : 'text-white'}`}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero: More Exciting & Atmospheric */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/home.jpg`} 
            className="w-full h-full object-cover brightness-[0.6] scale-105 animate-pulse-slow"
            alt="Ranch Sunset"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FDFCF8]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-white/80 text-xs font-bold uppercase tracking-[0.5em] mb-6 block animate-fade-in">Beyond a Stay. A Living Connection.</span>
          <h1 className="text-5xl md:text-8xl text-white font-bold mb-8 leading-tight tracking-tight">
            Live the Ranch Life.<br/>
            <span className="italic font-light">Taste the Change.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Escape to 100 acres of regenerative paradise. Immerse yourself in the working rhythm of a modern ranch, where every stay contributes to a healthier planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button className="bg-white text-[#2D2926] px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#E2D1C3] transition-all shadow-xl">
              Explore Stays
            </button>
            <a href={`${import.meta.env.BASE_URL}story`} className="border-2 border-white text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm inline-block">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section id="story-teaser" className="py-12 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">The Story of Ascension Ranch</h3>
          <p className="max-w-2xl mx-auto text-[#5C5752] mb-6">
            Ascension Ranch was born from a calling — a return to living in reciprocity with the land. Founder Fawad Atebar turned that calling into a working
            regenerative ranch where people and place heal together.
          </p>
          <a href={`${import.meta.env.BASE_URL}story`} className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#8B6541] transition-all">
            Read the full story
          </a>
        </div>
      </section>

      {/* The Land Section */}
      <section id="land" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-[#E2D1C3]/20 rounded-sm rotate-2 group-hover:rotate-0 transition-transform" />
            <img 
              src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1200" 
              className="relative rounded-sm shadow-2xl z-10"
              alt="Ranch Land"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#A67C52] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">100 Acres of Freedom</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Where the Oak Savannah meets the Water.
            </h2>
            <p className="text-lg text-[#5C5752] leading-relaxed mb-8">
              Nestled along the banks of Folsom Lake, Ascension Ranch is a tapestry of ancient oak trees, rolling pastures, and pristine shoreline. Here, we don't just "camp"—we integrate. 
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#A67C52]/10 rounded-full flex items-center justify-center text-[#A67C52]">
                  <Compass size={20} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest">Endless Hiking & Riding Trails</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#A67C52]/10 rounded-full flex items-center justify-center text-[#A67C52]">
                  <Waves size={20} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest">Direct Private Lake Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section - The "Excitement" factor */}
      <section id="experiences" className="py-32 bg-[#2D2926] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#A67C52] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Agritourism Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-light">Join the Rhythm of the Ranch</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose your own adventure. From quiet reflection by the lake to the high energy of a working farm workshop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 hover:border-[#A67C52] transition-all group">
                <div className="text-[#A67C52] mb-6 transform group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stays Section */}
      <section id="stays" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#A67C52] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Immersive Accommodations</span>
            <h2 className="text-4xl md:text-5xl font-bold">Your Home on the Land</h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#A67C52] pb-1">
            Browse All Stays <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stays.map((stay, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <img src={stay.img} alt={stay.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {stay.tag}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{stay.name}</h3>
                  <p className="text-[#5C5752] max-w-md mb-4">{stay.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#A67C52]">{stay.price}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Per Night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Herd */}
      <section id="animals" className="py-32 bg-[#F5F2ED] border-y border-[#E2D1C3]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#A67C52] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Co-Hosts</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Meet the Herd</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Laila', role: 'Guardian', img: `${import.meta.env.BASE_URL}images/laila.jpg` },
              { name: 'The Mustangs', role: 'Grazers', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=600' },
              { name: 'Cairo', role: 'Protector', img: `${import.meta.env.BASE_URL}images/cairo.jpg` }
            ].map((animal, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:border-[#A67C52] transition-all">
                  <img src={animal.img} alt={animal.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold">{animal.name}</h4>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A67C52]">{animal.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="bg-[#2D2926] rounded-sm p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="texture" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Ready for the Ranch?</h2>
            <p className="text-lg text-white/60 mb-10">
              Whether you're coming for a weekend of lake swimming or a week of regenerative learning, your spot is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#A67C52] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#8B6541] transition-all">
                Book on Hipcamp
              </button>
              <button className="bg-white text-[#2D2926] px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#E2D1C3] transition-all">
                Email Inquiry
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-[#A67C52] font-bold uppercase tracking-widest mb-4">Visit Us</h4>
                <p className="text-white/60">8401 Ascension Ln, Pilot Hill, CA 95664</p>
              </div>
              <div>
                <h4 className="text-[#A67C52] font-bold uppercase tracking-widest mb-4">Follow the Journey</h4>
                <div className="flex gap-4">
                  <Instagram size={20} className="hover:text-[#A67C52] cursor-pointer" />
                  <Facebook size={20} className="hover:text-[#A67C52] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-[#E2D1C3]">
        <span className="text-lg font-bold tracking-tighter uppercase font-sans block mb-4">Ascension Ranch</span>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5C5752] opacity-50">
          A Regenerative Node · Member of the Global Mycelium Network
        </p>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FDFCF8] flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 text-[#2D2926]">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-[#2D2926]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#A67C52] text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest mt-4">
            Book Now
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1.05); } 50% { transform: scale(1.08); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out 0.5s forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulse-slow 25s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default App;

