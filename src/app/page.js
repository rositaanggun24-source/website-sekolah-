
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-4">
          {/* LOGO MADRASAH */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Images/logo%20MAN%201%20TEGAL.jpg"
              alt="Logo MAN 1 Tegal"
              className="h-14 w-14 shrink-0 object-contain"
            />

            <div>
              <p className="text-lg font-extrabold text-emerald-950">
                MAN 1 Tegal
              </p>
              <p className="text-xs text-gray-500">
                Madrasah Aliyah Negeri
              </p>
            </div>
          </Link>

          {/* MENU NAVIGASI */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <Link href="/" className="text-emerald-800">
              Beranda
            </Link>
            <Link href="/profil" className="text-gray-600 hover:text-emerald-800">
              Profil
            </Link>
            <a href="#visi" className="text-gray-600 hover:text-emerald-800">
              Visi &amp; Misi
            </a>
            <a href="#informasi" className="text-gray-600 hover:text-emerald-800">
              Informasi
            </a>
            <a href="#kontak" className="text-gray-600 hover:text-emerald-800">
              Kontak
            </a>
          </div>

          <a
            href="https://www.man1tegal.sch.id/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
          >
            Situs Resmi ↗
          </a>
        </div>
      </nav>

      {/* HERO / FOTO UTAMA */}
      <section
        className="relative flex min-h-[580px] items-center bg-cover bg-center md:min-h-[650px]"
        style={{
          backgroundImage: "url('/Images/MAN%201%20TEGAL.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-emerald-950/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Selamat Datang
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              MAN 1 <span className="text-emerald-300">Tegal</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/90 md:text-lg">
              Selamat datang di website MAN 1 Tegal.
              Temukan informasi mengenai profil madrasah,
              kegiatan, fasilitas, dan berbagai informasi pendidikan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/profil"
                className="rounded-full bg-emerald-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-400"
              >
                Kenali Madrasah →
              </Link>

              <a
                href="https://www.man1tegal.sch.id/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/70 px-7 py-3.5 font-bold text-white transition hover:bg-white/15"
              >
                Situs Resmi ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI MADRASAH */}
      <section id="informasi" className="bg-[#f5faf7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
            Informasi Madrasah
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 md:text-4xl">
            Mengenal MAN 1 Tegal
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Jelajahi informasi madrasah melalui halaman profil,
            kegiatan, dan informasi lainnya yang tersedia di website.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <Link
              href="/profil"
              className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                🏫
              </div>
              <div>
                <h3 className="font-extrabold text-emerald-950">
                  Profil Madrasah
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Kenali informasi dan gambaran umum madrasah.
                </p>
              </div>
            </Link>

            <a
              href="#visi"
              className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                📚
              </div>
              <div>
                <h3 className="font-extrabold text-emerald-950">
                  Visi &amp; Misi
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Lihat bagian pengenalan visi dan misi madrasah.
                </p>
              </div>
            </a>

            <a
              href="https://www.man1tegal.sch.id/"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                📢
              </div>
              <div>
                <h3 className="font-extrabold text-emerald-950">
                  Informasi Resmi
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Kunjungi situs resmi MAN 1 Tegal untuk informasi lainnya.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PENGENALAN VISI DAN MISI */}
      <section id="visi" className="bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-2xl bg-emerald-50 p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-emerald-950">
            Mengenal Madrasah Lebih Dekat
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            Website ini menjadi sarana untuk mengenal profil,
            kegiatan, fasilitas, prestasi, dan berbagai informasi
            MAN 1 Tegal. Informasi lebih lengkap dapat dilengkapi
            berdasarkan data resmi madrasah.
          </p>

          <Link
            href="/profil"
            className="mt-5 inline-block font-bold text-emerald-800 hover:text-emerald-600"
          >
            Lihat Profil Madrasah →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="kontak"
        className="bg-emerald-950 px-6 py-7 text-center text-sm text-white"
      >
        <p className="font-semibold">MAN 1 Tegal</p>
        <p className="mt-2 text-emerald-100/80">
          Website Informasi Madrasah
        </p>
        <p className="mt-4 text-emerald-100/70">
          © {new Date().getFullYear()} MAN 1 Tegal
        </p>
      </footer>
    </main>
  );
}
