export const BUSINESS = {
  name: "NEXGEN AUTO SPA",
  short: "NEXGEN",
  tagline: "Your Drive. Our Obsession.",
  location: "Varkala, Kerala",
  address: "Punnamoodu Kurakkanni Road, Kurakkanni, Varkala, Kerala 695141",
  phoneDisplay: "+91 77365 85164",
  phoneHref: "tel:+917736585164",
  whatsapp: "https://wa.me/917736585164",
  instagram: "https://www.instagram.com/nexgen_autospa_varkala/",
  facebook: "https://www.facebook.com/autospavarkalas/",
  hours: "Mon – Sat · 9:00 AM – 8:00 PM",
  hoursShort: "Mon – Sat · 9 AM – 8 PM",
  mapsQuery: "https://www.google.com/maps/search/?api=1&query=Nexgen+AutoSpa+Varkala+Kurakkanni+Road+Varkala+Kerala+695141",
  mapsEmbed:
    "https://www.google.com/maps?q=Punnamoodu+Kurakkanni+Road,+Varkala,+Kerala+695141&output=embed",
  googleReviewsUrl: "https://share.google/fO64lqrqMJtfFO6Zq",
};

export const COATING_MAINTENANCE = {
  title: "Important: Long-Term Maintenance & Care",
  lead: "To maintain the performance and durability of your coating, periodic maintenance is essential.",
  points: [
    "Coating maintenance services are recommended every 6 months.",
    "Following the recommended maintenance schedule helps achieve the stated durability.",
    "Proper aftercare and regular servicing are important for long-term coating performance.",
  ],
  motto: "Protect your paint. Preserve the shine. Keep your car looking its best.",
};

export const PRODUCTS = [
  { name: "Koch-Chemie", country: "Germany", note: "Compounds, polishes & care chemistry" },
  { name: "RUPES", country: "Italy", note: "Polishing systems & machine technology" },
  { name: "GYEON", country: "South Korea", note: "Coating systems & surface protection" },
];

export const PAINT_PACKAGES = [
  {
    id: "wax",
    group: "Wax Protection",
    blurb: "Entry protection with instant gloss — ideal for regularly maintained vehicles.",
    items: [
      { name: "Normal Wax", durability: "3 Months", price: 4999, note: "Gloss refresh, easy maintenance washes" },
      { name: "Ceramic Wax", durability: "1 Year", price: 7999, note: "Deeper gloss, stronger water beading" },
    ],
  },
  {
    id: "ceramic",
    group: "Ceramic Coating",
    blurb: "Hard, durable protection against sun, dust and everyday contaminants.",
    items: [
      { name: "Ceramic Coating", durability: "2 Years", price: 17999, note: "Entry ceramic protection" },
      { name: "Ceramic Coating", durability: "3 Years", price: 23999, note: "Thicker build, gloss + slickness", popular: true },
      { name: "Ceramic Coating", durability: "5 Years", price: 29999, note: "Longest-term ceramic defence" },
    ],
  },
  {
    id: "advanced",
    group: "Advanced Coatings",
    blurb: "Next-generation protection for owners who want the very best finish.",
    items: [
      { name: "Graphene Coating", durability: "4 Years", price: 26999, note: "Heat dissipation, extreme slickness" },
      { name: "Borophene Coating", durability: "5 Years", price: 32999, note: "Flagship protection & depth of gloss" },
    ],
  },
];

export const inr = (n: number) => new Intl.NumberFormat("en-IN").format(n);

export const waLink = (message: string) =>
  `https://wa.me/917736585164?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hi NEXGEN AUTO SPA! I'd like to book a detailing service for my vehicle. Please share available slots."
);

export const SERVICES = [
  {
    id: "ceramic-graphene",
    index: "01",
    title: "Ceramic & Graphene Coating",
    desc: "1 to 5-year paint protection with deep gloss, hydrophobics and UV defence — from ₹7,999 ceramic wax to flagship borophene.",
    img: "https://images.pexels.com/photos/6873177/pexels-photo-6873177.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Water beading on coated car paint showing hydrophobic protection",
    tag: "From ₹7,999",
    span: "lg:col-span-7",
  },
  {
    id: "interior",
    index: "02",
    title: "Interior Deep Cleaning",
    desc: "Seats, carpets, roof liner, dashboard and every seam — extracted, shampooed and finished to a fresh, like-new cabin.",
    img: "https://images.pexels.com/photos/6873185/pexels-photo-6873185.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Detailer deep cleaning car interior seats",
    tag: "Most Booked",
    span: "lg:col-span-5",
  },
  {
    id: "exterior",
    index: "03",
    title: "Exterior Detailing",
    desc: "Multi-stage exterior revival — foam bath, decontamination, machine polish and seal for a mirror-grade finish.",
    img: "https://images.pexels.com/photos/14615269/pexels-photo-14615269.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Professional machine polishing a car exterior",
    tag: "Showroom Shine",
    span: "lg:col-span-5",
  },
  {
    id: "foam-wash",
    index: "04",
    title: "Premium Foam Wash",
    desc: "Semi-automatic foam wash for cars & bikes. Thick foam, gentle hand finish, wheels, arches and glass detailed.",
    img: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Luxury car wheel covered in foam during premium wash",
    tag: "Cars & Bikes",
    span: "lg:col-span-7",
  },
  {
    id: "bike",
    index: "05",
    title: "Bike Detailing & Care",
    desc: "Dedicated two-wheeler wash, detailing, mechanical & electrical works, spares and customisation.",
    img: "https://images.pexels.com/photos/36709685/pexels-photo-36709685.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Motorcycle covered in foam during detailing wash",
    tag: "Two-Wheelers",
    span: "md:col-span-2 lg:col-span-12",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "One of the best and affordable car and bike wash in Varkala. Friendly staff and has customer lounge for waiting.",
    name: "Verified Google Review",
    meta: "Car & Bike Wash · Varkala",
    rating: 5,
  },
  {
    quote: "Good service. They also do pick up and drop.",
    name: "Verified Google Review",
    meta: "Detailing Service · Varkala",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How can I book a detailing service?",
    a: "The fastest way is WhatsApp — tap any “Book on WhatsApp” button and send us your vehicle model and the service you need. You can also call us on +91 77365 85164 (9 AM – 8 PM, Monday to Saturday; closed Sunday) or fill the enquiry form below and we’ll call you back.",
  },
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for foam washes, but we strongly recommend booking ahead for interior detailing, polishing and coatings so we can reserve a dedicated bay and give your vehicle unhurried attention.",
  },
  {
    q: "Which detailing service is right for my vehicle?",
    a: "For regular upkeep, a premium foam wash is ideal. For dull paint, swirls or fading, ask about exterior detailing and polishing. For long-term protection, consider ceramic or graphene coating. For stained or dull cabins, interior deep cleaning is the answer. Message us photos of your vehicle and we’ll guide you honestly.",
  },
  {
    q: "How long does a detailing appointment take?",
    a: "It depends on the vehicle’s size and condition. A foam wash is quick, while deep interior work, paint correction or coatings take several hours and may need the vehicle for a full day. We’ll share a clear time estimate when you enquire — and pickup & drop is available.",
  },
  {
    q: "How can I get a quote?",
    a: "Paint correction & protection pricing is published on this page — Normal Wax from ₹4,999, Ceramic Wax ₹7,999, Ceramic Coating from ₹17,999 and Graphene/Borophene from ₹26,999, all using Koch-Chemie (Germany), RUPES (Italy) and GYEON (South Korea) products. For wash, interior and bike jobs, send your vehicle make, model and a few photos on WhatsApp — we’ll respond with the right care plan and a clear quote. No hidden charges, no pressure.",
  },
  {
    q: "Where is Nexgen Auto Spa located?",
    a: "You’ll find us at Punnamoodu Kurakkanni Road, Kurakkanni, Varkala, Kerala 695141 — easy to reach from across Varkala and nearby Trivandrum. Tap “Get Directions” for one-tap navigation, or call us and we’ll guide you in.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Nexgen", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
