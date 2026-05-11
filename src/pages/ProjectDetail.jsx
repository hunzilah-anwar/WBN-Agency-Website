import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProductDetail = () => {
  const { slug } = useParams();

  const product = projects.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  // Related (exclude current)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <section className="bg-[#050505] text-white min-h-screen">

      {/* ================= HERO ================= */}
      <div className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              {product.category}
            </p>

            <h1 className="text-5xl font-black mb-6 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {product.desc}
            </p>

            <a
              href={product.link}
              target="_blank"
              className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition"
            >
              Visit Website
            </a>
          </div>

          <div className="relative">
            <img
              src={product.desktopImg}
              className="rounded-3xl shadow-2xl border border-white/10"
              alt=""
            />
          </div>

        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          {product.overview}
        </p>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {product.features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 transition"
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Process</h2>

        <div className="space-y-5">
          {product.process.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center bg-cyan-400 text-black font-bold rounded-full">
                {i + 1}
              </span>
              <p className="text-gray-300">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Results</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {product.results.map((r, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* ================= RELATED PROJECTS ================= */}
      <div className="px-6 py-20 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black mb-12 text-center">
            Related Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, i) => (
              <Link
                key={i}
                to={`/project/${item.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
              >
                <img
                  src={item.desktopImg}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.desc.slice(0, 80)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProductDetail;