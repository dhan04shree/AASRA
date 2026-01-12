import { ArrowRight, CheckCircle2, MapPin, FileText, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const quickNavCards = [
    {
      title: "Check Eligibility",
      description: "Verify if you qualify for affordable housing programs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiOdemKjRiDUi4sfQZQaq3SthgDeSIzw8VOHOoWOA7ZvBcrnJAevq52WjgVbJF-CWTNNSOAWv0ptqgRrij454miOWev8OMz84NjCb7VcvHdksWxQDnO6ZlW_0MpL5K-8vnbGURo9fp4VAICiJE6nDOIOykTAidPQ1TGFj9m5JMRG82zLrYX5KcWzDxJMet3aKr7_FsIKj0V8RzmyTWQ1SUCpDuCwqy-y-K71NbqOnN2ctXkIXMqVRaXs-CkzUjGGIsKaHqQutTD5Q",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "Eligibility",
      link: "/eligibility"
    },
    {
      title: "View Schemes",
      description: "Explore housing schemes, benefits, and required documents.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq0kualq1Nlvf8fSG-F4oZpZDqLGuvvTtHZwyzlXN8DeJx5hmq9wRIaNotHLrqYlrvFV3umSlinfSEPHvDQZ4EewhirG8J9AMM1MfKxqT0HUNu7kiDm6tYmlzB5cPN8VbLqj68qFmXy5LWCb0g9Y-uJ6T2-TR6K7AaXk-E1_NwzYl0Ahj5U3XnQmEdoliB5odRsRgX7C8LhOAQ60-bd4AuFoPf_6MhbpWHkOEPOmbvqDrTF4AfGkCFl1kvg4zsS-605390QU1d7E0",
      icon: <FileText className="w-5 h-5" />,
      tag: "Schemes",
      link: "/schemes"
    },
    {
      title: "Track Application",
      description: "Track progress, approvals, and next steps in your application.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHsrSorOWUbMoEZxDifs5RVCkffzUt5ge55y1q_Bz1G_wNkpM_RdQA-ce6WK28Ge-EGGLU9M5XeW7ZFuQAoaxGvcntu1A1NupOs--XFmuWf3o7avDfXBK8MaY9RoNKXegGb_E0TbJ5Hj6M5Ljp2mf4pUeSy-YIbQIEi9pUBS_skZTOVND0U6i8poVXekY7SBK-8alDxbyo0DIeguoapLZ8zvMAAirU9JyfmyhMZyeepLQwFDvXGY7ymDsQKj9GyUwLQSKRVf9gu8I",
      icon: <ClipboardList className="w-5 h-5" />,
      tag: "Status",
      link: "/track"
    },
    {
      title: "Explore Housing Maps",
      description: "See slum clusters, projects, and rehabilitation insights on map.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgoIoxZky-bGbrcO5NABhjb6k3LrOaJsXdgGREV8ulRqu0vk5rPni-oKtV_YDOnSADwvvUSB1j4YJtAu4q7IB26N3cVjSNvOy92hKjJnCmcI8rdG58yy1JUwQ8KiM7VEmZXmxEpGzhCfl8yopUybScZpIjLQwvhR92ZQtsimPv4oQuV-RIowDb_Xo2s6U30_1g2DKBCwTYWJJ0cnagFrUIEsN4-KhCMQu96osijJlwa32Nzr0Tg0eBPl4Nx9GMw3a0J24OIHML_qw",
      icon: <MapPin className="w-5 h-5" />,
      tag: "Maps",
      link: "/maps"
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ================= HERO ================= */}
    <section className="w-full flex justify-center mt-6 px-4">
  <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl">

    <img
      src="/slums.webp"
      alt="AASRA Slum"
      className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow">
        AASRA
      </h1>

      <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 max-w-2xl leading-relaxed drop-shadow">
        AI Powered Housing and Rehabilitation for Maharashtra
      </p>

      <div className="flex gap-3 mt-7 flex-wrap justify-center">
        <button  onClick={() => navigate("/maps")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
          Explore Maps
        </button>

        <button  onClick={() => navigate("/track")} className="bg-white/95 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md transition">
          Track Application
        </button>
      </div>
    </div>
  </div>
</section>


      {/* ================= QUICK NAVIGATION ================= */}
      <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-7">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
             Quick Actions 
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Everything you need — eligibility, schemes, tracking & maps.
            </p>
          </div>

          {/* <button className="text-blue-600 font-semibold text-sm hover:underline">
            View All
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickNavCards.map((card, index) => (
            <button
             onClick={() => navigate(card.link)}
              key={index}
              className="group text-left bg-white rounded-2xl border border-gray-200 shadow-sm
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" /> */}

                {/* Tag */}
                {/* <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">
                  {card.tag}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <span className="p-2 rounded-lg bg-blue-50">{card.icon}</span>
                  <span className="text-gray-900 text-base font-bold">
                    {card.title}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Open <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {/* .............Pune Map UI............ */}
        {/* <section className="max-w-6xl mx-auto px-4 py-10">
    
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
        Pune Housing Overview
      </h2>

      <div className="rounded-2xl overflow-hidden shadow-md border bg-white">
        <img
          src="/pune.png" // put your map image in public folder
          alt="Pune Housing Overview Map"
          className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover"
        />
      </div>
    </section> */}

{/* ================= HOW AASRA WORKS ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
  <div className="flex items-end justify-between flex-wrap gap-4">
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        How AASRA Works
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl">
        AASRA combines AI + maps + schemes to make rehabilitation transparent and faster.
      </p>
    </div>

    
  </div>

  {/* Steps */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
        {
        step: "01",
        title: "Find Schemes",
        desc: "Citizens discover best-fit housing schemes based on profile & eligibility.",
        tag: "Schemes",
      },
      {
        step: "02",
        title: "Track Application",
        desc: "Submit and track housing applications with updates, status and documents.",
        tag: "Tracking",
      },
      {
        step: "03",
        title: "Explore Heatmaps",
        desc: "View Maharashtra city maps with color-coded cluster overlays and hotspots.",
        tag: "Maps",
      },
        {
        step: "04",
        title: "Detect Slum Zones",
        desc: "CNN analyzes satellite images and assigns percentile-based slum risk scores.",
        tag: "AI Model",
      },

    ].map((item, idx) => (
      <div
        key={idx}
        className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="text-blue-700 font-black text-xl">{item.step}</div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition">
            {item.tag}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>

        {/* progress bar */}
        <div className="mt-5 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-blue-600 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    ))}
  </div>
</section>
    
{/* ================= FEATURED SCHEMES ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
  <div className="flex items-end justify-between flex-wrap gap-4">
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Featured Housing Schemes
      </h2>
      <p className="text-gray-600 mt-2">
        Quickly explore schemes most relevant for rehabilitation.
      </p>
    </div>

    <button className="text-blue-700 font-semibold hover:underline">
      View All Schemes →
    </button>
  </div>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        name: "PMAY - Urban",
        type: "Central Scheme",
        deadline: "Open",
        highlight: "Subsidy Support",
      },
      {
        name: "MHADA Housing",
        type: "State Scheme",
        deadline: "Limited Slots",
        highlight: "Affordable Flats",
      },
      {
        name: "Slum Rehabilitation",
        type: "Urban Development",
        deadline: "Active",
        highlight: "Rehabilitation Projects",
      },
    ].map((scheme, idx) => (
      <div
        key={idx}
        className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
            {scheme.type}
          </div>
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
            {scheme.deadline}
          </div>
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900">{scheme.name}</h3>
        <p className="text-sm text-gray-600 mt-2">
          Benefit: <span className="font-semibold">{scheme.highlight}</span>
        </p>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
            Apply
          </button>
          <button className="flex-1 border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg font-semibold transition">
            Details
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
{/* ================= IMPACT STATS ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
  <div className="rounded-2xl border bg-gradient-to-r from-blue-50 to-white p-6 sm:p-10 shadow-sm">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Making Rehabilitation Faster, Transparent & Trackable
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          AASRA helps citizens and authorities plan housing rehabilitation using
          AI-assisted eligibility, scheme discovery and application tracking.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:max-w-xl">
        {[
          { label: "Applications Tracked", value: "12K+" },
          { label: "Schemes Covered", value: "35+" },
          { label: "Areas Mapped", value: "200+" },
          { label: "Support Centers", value: "50+" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border p-4 text-center hover:shadow-md transition"
          >
            <p className="text-2xl font-black text-blue-700">{item.value}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
    FAQs
  </h2>
  <p className="text-gray-600 mt-2">
    Common questions about eligibility, schemes and tracking.
  </p>

  <div className="mt-8 space-y-4">
    {[
      {
        q: "Is AASRA an official government portal?",
        a: "AASRA is an AI-assisted platform built to support rehabilitation workflows and awareness. It can be integrated with official schemes and data sources.",
      },
      {
        q: "How do I track my housing application?",
        a: "Use the Track Application feature and enter your application ID to see real-time updates.",
      },
      {
        q: "What documents are required for schemes?",
        a: "Each scheme has its own document requirements like Aadhaar, income certificate, residence proof, etc.",
      },
    ].map((faq, idx) => (
      <details
        key={idx}
        className="group rounded-xl border bg-white p-5 shadow-sm"
      >
        <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
          {faq.q}
          <span className="text-blue-700 group-open:rotate-180 transition">
            ▼
          </span>
        </summary>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.a}</p>
      </details>
    ))}
  </div>
</section>
<footer className="border-t">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
      <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
      <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
      <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
    </div>

    <p className="text-center text-xs text-gray-400 mt-6">
      ©2026 AASRA. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}
