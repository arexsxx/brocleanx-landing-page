import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Cara Membersihkan Sneakers Putih Tanpa Merusak Material",
    excerpt:
      "Panduan simpel untuk menghilangkan noda kuning, menjaga warna tetap cerah, dan memperpanjang umur sneakers putih harian.",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    source: "Hypebeast",
    externalUrl: "https://hypebeast.com/tags/sneakers",
  },
  {
    id: 2,
    title: "Tips Menyimpan Sepatu Agar Tidak Jamuran Saat Musim Hujan",
    excerpt:
      "Kebiasaan kecil yang sering terlewat ternyata berpengaruh besar untuk mencegah bau, jamur, dan kerusakan bentuk sepatu.",
    imageUrl:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop",
    source: "Kompas",
    externalUrl: "https://www.kompas.com/tag/sepatu",
  },
  {
    id: 3,
    title: "Perbedaan Perawatan Sepatu Kulit, Suede, dan Mesh",
    excerpt:
      "Setiap material punya karakter unik. Artikel ini membahas produk dan teknik yang tepat agar hasil cleaning tetap aman.",
    imageUrl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200&auto=format&fit=crop",
    source: "GQ",
    externalUrl: "https://www.gq.com/style",
  },
  {
    id: 4,
    title: "Menghilangkan Bau Sepatu Dengan Metode Rumahan",
    excerpt:
      "Mulai dari baking soda sampai rotasi pemakaian, ini langkah praktis yang bisa langsung dicoba di rumah.",
    imageUrl:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop",
    source: "Detik",
    externalUrl: "https://www.detik.com/tag/tips",
  },
  {
    id: 5,
    title: "Kapan Waktu yang Tepat untuk Cuci Sepatu ke Profesional",
    excerpt:
      "Tidak semua noda bisa ditangani sendiri. Pelajari tanda-tanda kapan sepatu sebaiknya masuk treatment profesional.",
    imageUrl:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
    source: "Esquire",
    externalUrl: "https://www.esquire.com/style/mens-fashion/",
  },
  {
    id: 6,
    title: "Kesalahan Umum Saat Menjemur Sepatu Setelah Dicuci",
    excerpt:
      "Menjemur di tempat yang salah dapat merusak lem dan membuat warna cepat pudar. Ini cara aman menjemur sepatu.",
    imageUrl:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200&auto=format&fit=crop",
    source: "Tempo",
    externalUrl: "https://www.tempo.co/tag/gaya-hidup",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030F0F] px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            SHOE CARE TIPS & NEWS
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
            Referensi artikel dan insight perawatan sepatu dari berbagai media.
            Klik card untuk membaca artikel lengkap di website sumber.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#001F16] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c6ff00]/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <span className="inline-flex rounded-full border border-[#c6ff00]/40 bg-[#c6ff00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#c6ff00]">
                  {post.source}
                </span>

                <h2 className="line-clamp-2 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#ddff72]">
                  {post.title}
                </h2>

                <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
                  {post.excerpt}
                </p>

                <p className="pt-1 text-sm font-semibold text-[#c6ff00]">
                  Read full article ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
