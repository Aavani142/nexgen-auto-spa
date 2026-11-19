export const BUSINESS = {
  name: "NEXGEN AUTO SPA",
  short: "NEXGEN",
  tagline: "Your Drive. Our Obsession.",
  location: "Varkala, Kerala",
  address: "Punnamoodu-Kurakkani Rd, Varkala, Trivandrum",
  phoneDisplay: "+91 81295 85164",
  phoneHref: "tel:+918129585164",
  whatsapp: "https://wa.me/918129585164",
  instagram: "https://www.instagram.com/nexgen_autospa_varkala/",
  facebook: "https://www.facebook.com/autospavarkalas/",
  hours: "Monday – Saturday · 8:30 AM – 6:00 PM",
  hoursShort: "Mon – Sat · 8:30 AM – 6:00 PM",
  // Both point at the same Google Maps listing: https://maps.app.goo.gl/SLbm1sov7V12bghv7
  mapsQuery: "https://maps.app.goo.gl/SLbm1sov7V12bghv7",
  mapsEmbed:
    "https://www.google.com/maps?q=Nexgen+AutoSpa+Varkala,+Punnamoodu+Kurakkanni+Rd,+Varkala,+Kerala+695141&output=embed",
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
  { name: "CARPRO", country: "International", note: "Coatings & detailing care products" },
  { name: "Kovalent Coatings", country: "Australia", note: "Professional coating systems" },
];

export const PAINT_PACKAGES = [
  {
    id: "wax",
    group: "Wax Protection",
    blurb: "Entry protection with instant gloss, ideal for regularly maintained vehicles.",
    items: [
      { name: "Standard Wax", durability: "3 Months", price: 4999, note: "Gloss refresh, easy maintenance washes" },
      { name: "Ceramic Wax", durability: "1 Year", price: 7999, note: "Deeper gloss, stronger water beading" },
    ],
  },
  {
    id: "ceramic",
    group: "Ceramic Coating",
    blurb: "Hard, durable protection against sun, dust and everyday contaminants.",
    items: [
      { name: "Ceramic Shield", durability: "2 Years", price: 17999, note: "Entry Ceramic protection" },
      { name: "Ceramic Armor", durability: "3 Years", price: 23999, note: "Thicker build, gloss + slickness" },
      { name: "Ceramic Titan", durability: "5 Years", price: 29999, note: "Longest-term Ceramic defence", popular: true },
    ],
  },
  {
    id: "advanced",
    group: "Advanced Coatings",
    blurb: "Next-generation protection for owners who want the very best finish.",
    items: [
      { name: "Graphene Elite", durability: "7 Years", price: 35999, note: "Heat dissipation, extreme slickness" },
      { name: "Borophene Ultimate", durability: "9 Years", price: 41999, note: "Flagship protection & depth of gloss" },
    ],
  },
];

export const inr = (n: number) => new Intl.NumberFormat("en-IN").format(n);

export const waLink = (message: string) =>
  `https://wa.me/918129585164?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hi NEXGEN AUTO SPA! I'd like to book a detailing service for my vehicle. Please share available slots."
);

export const SERVICES = [
  {
    id: "ceramic-graphene",
    index: "01",
    title: "Ceramic, Graphene & Borophene Coating",
    desc: "2 to 9-year paint protection with deep gloss, hydrophobics, chemical resistance and UV defence, from ₹17,999 Ceramic Coating to flagship Borophene.",
    img: "https://images.pexels.com/photos/6873177/pexels-photo-6873177.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Water beading on coated car paint showing hydrophobic protection",
    tag: "Starting from ₹17,999",
    span: "lg:col-span-7",
  },
  {
    id: "interior",
    index: "02",
    title: "Interior Deep Cleaning",
    desc: "Seats, carpets, roof liner, dashboard and every seam are extracted, shampooed and finished to a fresh, like-new cabin.",
    img: "https://images.pexels.com/photos/6873185/pexels-photo-6873185.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Detailer deep cleaning car interior seats",
    span: "lg:col-span-5",
  },
  {
    id: "exterior",
    index: "03",
    title: "Exterior Detailing",
    desc: "Multi-stage exterior revival with Foam Bath, Decontamination, Machine Polish and Seal for a mirror-grade finish.",
    img: "https://images.pexels.com/photos/14615269/pexels-photo-14615269.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Professional machine polishing a car exterior",
    tag: "Showroom Shine",
    span: "lg:col-span-5",
  },
  {
    id: "foam-wash",
    index: "04",
    title: "Premium Foam Wash",
    desc: "Semi-automatic Foam Wash for cars & bikes. Thick foam, gentle hand finish, wheels, arches and glass detailed.",
    img: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Luxury car wheel covered in foam during premium wash",
    tag: "Cars & Bikes",
    span: "lg:col-span-7",
  },
  {
    id: "bike",
    index: "05",
    title: "Bike Detailing & Care",
    desc: "Dedicated two-wheeler wash and detailing.",
    img: "https://images.pexels.com/photos/36709685/pexels-photo-36709685.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Motorcycle covered in foam during detailing wash",
    tag: "Two-Wheelers",
    span: "md:col-span-2 lg:col-span-12",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Hand on heart ❤️ my Mercedes-Benz is shining like diamond in and out. All clean and hygienic. All thanks to Nexgen AustoSpa team for the hardwork. I really appreciate your dedication towards your work. God bless you and always be diligent towards your work. Money will flow like water to you.",
    name: "Jennet Fernandes",
    meta: "Local Guide · Google Review",
    rating: 5,
  },
  {
    quote:
      "Ceramic coating: Nexgen AutoSpa : I have no words for the service which they have offered. Exceptionally talented people who know how to treat customers vechile with care and turn it to beauty once again. Their package is really comprehensive and they called me up regularly when my service eas due. I would always recommend Nexgen to anyone to avail thier service. I had opted for the IGL 10H ceramic coating and it is doing wonders to my Harrier.\nAll the best Nexgen\nRegards,\nSunil",
    name: "Sunil Jayanandan",
    meta: "Local Guide · Google Review",
    rating: 5,
  },
  {
    quote:
      "I am a regular customer at Next Gen Auto Spa, Varkala , and I must say their services are truly exceptional. I have done ceramic and graphene coating for all my vehicles here, and every time the results have been outstanding.\n\nThe quality of work, attention to detail, and professionalism of the team are simply impressive. The staff members are very friendly, knowledgeable, and always ensure complete customer satisfaction.\n\nI am extremely happy with all the services they have provided, and I highly recommend Next Gen Auto Spa to anyone looking for premium car care and coating services.",
    name: "Vrinda School of Yoga",
    meta: "Varkala · Google Review",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How can I book a detailing service?",
    a: "The fastest way is WhatsApp. Tap any “Book on WhatsApp” button and send us your vehicle model and the service you need. You can also call us on +91 81295 85164 (8:30 AM – 6:00 PM, Monday to Saturday; closed Sunday) or fill the enquiry form below and we’ll call you back.",
  },
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for Premium Foam Washes, but we strongly recommend booking ahead for Interior Deep Cleaning, Paint Correction and Coatings so we can reserve a dedicated bay and give your vehicle unhurried attention.",
  },
  {
    q: "Which detailing service is right for my vehicle?",
    a: "For regular upkeep, a Premium Foam Wash is ideal. For dull paint, swirls or fading, ask about Exterior Detailing and Paint Correction or Borophene Coating. For long-term protection, consider Ceramic, Graphene or Borophene Coating. For stained or dull cabins, Interior Deep Cleaning is the answer. Message us photos of your vehicle and we’ll guide you honestly.",
  },
  {
    q: "How long does a detailing appointment take?",
    a: "It depends on the vehicle’s size and condition. A Foam Wash is quick, while deep interior work, Paint Correction or Coatings take several hours and may need the vehicle for a full day or a couple of days. We’ll share a clear time estimate when you enquire.",
  },
  {
    q: "How can I get a quote?",
    a: "Paint Correction & Protection pricing is published on this page: Standard Wax from ₹4,999, Ceramic Wax ₹7,999, Ceramic Coating from ₹17,999, Graphene Elite from ₹35,999 and Borophene Ultimate from ₹41,999, all using Koch-Chemie (Germany), RUPES (Italy), GYEON (South Korea), CARPRO and Kovalent Coatings (Australia) products. For Wash, Interior and Bike jobs, send your vehicle brand and model and a few photos on WhatsApp and we’ll respond with the right care plan and a clear quote. No hidden charges, no pressure.",
  },
  {
    q: "Where is NEXGEN AUTOSPA located?",
    a: "You’ll find us at Punnamoodu-Kurakkani Rd, Varkala, Trivandrum. We’re just 1.3 km from Varkala Cliff and easy to reach from across Varkala. Tap “Get Directions” for one-tap navigation, or call us and we’ll guide you in.",
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
