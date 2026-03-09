const propertyCategories = [
  { title: 'Apartments', description: 'Modern city apartments with lifestyle amenities.', icon: '🏢' },
  { title: 'Villas', description: 'Luxury villas crafted for privacy and comfort.', icon: '🏡' },
  { title: 'Commercial', description: 'Retail and office spaces in high-growth locations.', icon: '🏬' },
  { title: 'Plots', description: 'Investment-ready land parcels in prime corridors.', icon: '🌳' },
];

const featuredCities = ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Pune', 'Ahmedabad'];

const whyChooseUs = [
  'Verified listings with legal due diligence',
  'Dedicated relationship manager for each buyer',
  'Data-backed investment insights and pricing trends',
  'End-to-end support from site visit to registration',
];

const testimonials = [
  {
    name: 'Ritika Sharma',
    city: 'Gurugram',
    message: 'Dekho Property India helped us shortlist our dream home in just two weekends. Super smooth process!',
  },
  {
    name: 'Aman Verma',
    city: 'Pune',
    message: 'Their market insights were spot on. We got an excellent pre-launch deal with strong appreciation potential.',
  },
  {
    name: 'Sana Khan',
    city: 'Mumbai',
    message: 'Very professional team and transparent communication. I highly recommend them to first-time buyers.',
  },
];

function App() {
  return (
    <div className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white md:px-8">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Dekho <span className="text-brand-100">Property India</span>
          </a>
          <div className="hidden gap-7 text-sm md:flex">
            <a href="#categories" className="hover:text-brand-100">Categories</a>
            <a href="#cities" className="hover:text-brand-100">Cities</a>
            <a href="#about" className="hover:text-brand-100">Why Us</a>
            <a href="#testimonials" className="hover:text-brand-100">Testimonials</a>
            <a href="#contact" className="hover:text-brand-100">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="bg-hero bg-cover bg-center pt-32 text-white">
        <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-5 pb-20 md:px-8">
          <p className="mb-4 inline-block rounded-full border border-white/40 px-4 py-1 text-xs uppercase tracking-[0.2em]">
            Trusted Real Estate Partner
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Find Your Perfect Property in India with Confidence
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-100 md:text-lg">
            Discover curated homes, premium projects, and investment opportunities across India&apos;s fastest-growing markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold hover:bg-brand-700">
              Schedule a Consultation
            </a>
            <a href="#categories" className="rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white/10">
              Explore Properties
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Property Categories</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Browse a diverse portfolio built for every lifestyle and investment objective.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propertyCategories.map((category) => (
            <article key={category.title} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-3xl">{category.icon}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cities" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Featured Cities</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((city) => (
              <div key={city} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-lg font-medium text-slate-800">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-3xl bg-brand-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((point) => (
              <li key={point} className="rounded-lg border border-white/20 bg-white/10 p-4 text-sm md:text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Testimonials</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700">“{item.message}”</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">{item.name} · {item.city}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 rounded-3xl bg-slate-900 p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Find Your Next Property</h2>
            <p className="mt-4 text-slate-200">Share your requirements and our experts will reach out with handpicked options.</p>
          </div>
          <form className="grid gap-4">
            <input type="text" placeholder="Full Name" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <input type="email" placeholder="Email Address" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <input type="tel" placeholder="Phone Number" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <textarea rows="4" placeholder="Tell us what you're looking for" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <button type="button" className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-700">Submit Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Dekho Property India. All rights reserved.</p>
          <p>Built for modern real estate seekers across India.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
