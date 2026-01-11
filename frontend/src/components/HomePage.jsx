import { ArrowRight, CheckCircle2, MapPin, FileText, ClipboardList } from "lucide-react";

export default function HomePage() {
  const quickNavCards = [
    {
      title: "Check Eligibility",
      description: "Verify if you qualify for affordable housing programs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiOdemKjRiDUi4sfQZQaq3SthgDeSIzw8VOHOoWOA7ZvBcrnJAevq52WjgVbJF-CWTNNSOAWv0ptqgRrij454miOWev8OMz84NjCb7VcvHdksWxQDnO6ZlW_0MpL5K-8vnbGURo9fp4VAICiJE6nDOIOykTAidPQ1TGFj9m5JMRG82zLrYX5KcWzDxJMet3aKr7_FsIKj0V8RzmyTWQ1SUCpDuCwqy-y-K71NbqOnN2ctXkIXMqVRaXs-CkzUjGGIsKaHqQutTD5Q",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "Eligibility",
    },
    {
      title: "View Schemes",
      description: "Explore housing schemes, benefits, and required documents.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq0kualq1Nlvf8fSG-F4oZpZDqLGuvvTtHZwyzlXN8DeJx5hmq9wRIaNotHLrqYlrvFV3umSlinfSEPHvDQZ4EewhirG8J9AMM1MfKxqT0HUNu7kiDm6tYmlzB5cPN8VbLqj68qFmXy5LWCb0g9Y-uJ6T2-TR6K7AaXk-E1_NwzYl0Ahj5U3XnQmEdoliB5odRsRgX7C8LhOAQ60-bd4AuFoPf_6MhbpWHkOEPOmbvqDrTF4AfGkCFl1kvg4zsS-605390QU1d7E0",
      icon: <FileText className="w-5 h-5" />,
      tag: "Schemes",
    },
    {
      title: "Track Application",
      description: "Track progress, approvals, and next steps in your application.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHsrSorOWUbMoEZxDifs5RVCkffzUt5ge55y1q_Bz1G_wNkpM_RdQA-ce6WK28Ge-EGGLU9M5XeW7ZFuQAoaxGvcntu1A1NupOs--XFmuWf3o7avDfXBK8MaY9RoNKXegGb_E0TbJ5Hj6M5Ljp2mf4pUeSy-YIbQIEi9pUBS_skZTOVND0U6i8poVXekY7SBK-8alDxbyo0DIeguoapLZ8zvMAAirU9JyfmyhMZyeepLQwFDvXGY7ymDsQKj9GyUwLQSKRVf9gu8I",
      icon: <ClipboardList className="w-5 h-5" />,
      tag: "Status",
    },
    {
      title: "Explore Housing Maps",
      description: "See slum clusters, projects, and rehabilitation insights on map.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgoIoxZky-bGbrcO5NABhjb6k3LrOaJsXdgGREV8ulRqu0vk5rPni-oKtV_YDOnSADwvvUSB1j4YJtAu4q7IB26N3cVjSNvOy92hKjJnCmcI8rdG58yy1JUwQ8KiM7VEmZXmxEpGzhCfl8yopUybScZpIjLQwvhR92ZQtsimPv4oQuV-RIowDb_Xo2s6U30_1g2DKBCwTYWJJ0cnagFrUIEsN4-KhCMQu96osijJlwa32Nzr0Tg0eBPl4Nx9GMw3a0J24OIHML_qw",
      icon: <MapPin className="w-5 h-5" />,
      tag: "Maps",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ================= HERO ================= */}
    <section className="w-full flex justify-center mt-6 px-4">
  <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl">

    {/* ✅ Original Color Photo */}
    <img
      src="/slums.webp"
      alt="AASRA Slum"
      className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
    />

    {/* ✅ Transparent overlay (keeps original colors visible) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

    {/* ✅ Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow">
        AASRA
      </h1>

      <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 max-w-2xl leading-relaxed drop-shadow">
        AI Powered Housing and Rehabilitation for Maharashtra
      </p>

      <div className="flex gap-3 mt-7 flex-wrap justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
          Explore Maps
        </button>

        <button className="bg-white/95 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md transition">
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
              Quick Navigation
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
    </div>
  );
}
