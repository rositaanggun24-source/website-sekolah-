
import Link from "next/link";

const misi = [
  "Menyelenggarakan pendidikan yang unggul dan berkualitas dalam pencapaian prestasi akademik dan nonakademik.",
  "Menyelenggarakan pendidikan yang berkualitas sesuai delapan standar pendidikan.",
  "Mewujudkan pembentukan karakter Islami yang mampu mengaktualisasikan diri dalam masyarakat.",
  "Meningkatkan pengetahuan dan profesionalisme tenaga pendidik dan kependidikan sesuai perkembangan dunia pendidikan.",
  "Mewujudkan generasi Islam yang dapat mengaplikasikan ilmu ilmiah dan amal Islamiah.",
  "Mewujudkan pembelajaran dan pembiasaan akhlak mulia serta menjalankan ajaran agama Islam.",
  "Mewujudkan peserta didik yang memiliki jati diri terhormat, karakter kebangsaan, dan religius.",
  "Menyelenggarakan tata kelola madrasah yang efektif, efisien, transparan, dan akuntabel.",
];

export default function Profil() {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Images/logo%20MAN%201%20TEGAL.jpg"
              alt="Logo MAN 1 Tegal"
              className="h-14 w-14 object-contain"
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

          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
            <Link href="/" className="hover:text-emerald-800">
              Beranda
            </Link>
            <Link href="/profil" className="border-b-2 border-emerald-700 pb-1 text-emerald-800">
              Profil
            </Link>
            <a href="#sejarah" className="hover:text-emerald-800">
              Sejarah
            </a>
            <a href="#visi-misi" className="hover:text-emerald-800">
              Visi &amp; Misi
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="relative overflow-hidden bg-emerald-950 px-6 py-20 md:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-800/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-emerald-300">
            Profil Madrasah
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Mengenal Lebih Dekat
            <span className="block text-emerald-300">MAN 1 Tegal</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 md:text-lg">
            Madrasah Aliyah Negeri 1 Tegal mengusung semboyan
            Tri in One, yang memadukan ilmu pengetahuan umum,
            pengetahuan agama, dan keterampilan.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-bold text-emerald-950 transition hover:bg-emerald-100"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </section>

      {/* TENTANG MADRASAH */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
              Tentang Kami
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950">
              MAN 1 Tegal
            </h2>
            <p className="mt-5 leading-8">
              MAN 1 Tegal merupakan madrasah aliyah negeri yang
              berlokasi di wilayah Babakan, Kecamatan Lebaksiu,
              Kabupaten Tegal, Jawa Tengah. Madrasah ini memiliki
              latar belakang sejarah yang berkaitan dengan
              perkembangan pendidikan di lingkungan Pondok
              Pesantren Ma’hadut Tholabah Babakan Lebaksiu.
            </p>
            <p className="mt-4 leading-8">
              Dengan semboyan “Tri in One”, MAN 1 Tegal menekankan
              perpaduan pengetahuan umum, pengetahuan agama, dan
              pengetahuan keterampilan dalam pendidikan peserta didik.
            </p>
            <a
              href="https://www.man1tegal.sch.id/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-bold text-emerald-800 hover:text-emerald-600"
            >
              Kunjungi Situs Resmi →
            </a>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-8 md:p-12">
            <img
              src="/images/logo%20MAN%201%20TEGAL.jpg"
              alt="Lambang MAN 1 Tegal"
              className="mx-auto h-40 w-40 object-contain"
            />
            <h3 className="mt-6 text-center text-2xl font-extrabold text-emerald-950">
              Tri in One
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-4 text-center">
                <span className="text-2xl">📚</span>
                <p className="mt-2 text-sm font-bold text-emerald-950">
                  Ilmu Umum
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center">
                <span className="text-2xl">🌙</span>
                <p className="mt-2 text-sm font-bold text-emerald-950">
                  Ilmu Agama
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center">
                <span className="text-2xl">💡</span>
                <p className="mt-2 text-sm font-bold text-emerald-950">
                  Keterampilan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section id="sejarah" className="bg-[#f5faf7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
            Perjalanan Madrasah
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 md:text-4xl">
            Sejarah MAN 1 Tegal
          </h2>
          <p className="mt-5 leading-8">
            Berdasarkan sejarah yang dipublikasikan di situs resmi,
            perkembangan madrasah berkaitan dengan Pondok Pesantren
            Ma’hadut Tholabah Babakan Lebaksiu. Lingkungan pesantren
            tersebut menjadi bagian penting dari perjalanan
            pendidikan agama dan pendidikan umum di wilayah Tegal.
          </p>

          <div className="mt-8 space-y-5 border-l-2 border-emerald-200 pl-6">
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-emerald-600 bg-white" />
              <p className="font-extrabold text-emerald-800">1968</p>
              <p className="mt-1 leading-7">
                Berdasarkan SK Menteri Agama Nomor 81 Tahun 1968,
                Madrasah Menengah Atas berubah menjadi Madrasah
                Aliyah Agama Islam Negeri (MAAIN).
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-emerald-600 bg-white" />
              <p className="font-extrabold text-emerald-800">1975</p>
              <p className="mt-1 leading-7">
                Berdasarkan SK Menteri Agama Nomor 18 Tahun 1975,
                MAAIN berubah menjadi Madrasah Aliyah Negeri (MAN),
                terhitung mulai 1 Januari 1975.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-emerald-600 bg-white" />
              <p className="font-extrabold text-emerald-800">3 Oktober 2017</p>
              <p className="mt-1 leading-7">
                Berdasarkan Keputusan Menteri Agama RI Nomor 810
                Tahun 2017, nama MAN Babakan Lebaksiu Tegal berubah
                menjadi MAN 1 Tegal.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-500">
            Sumber: halaman Sejarah Madrasah pada situs resmi MAN 1 Tegal.
          </p>
          <a
            href="https://www.man1tegal.sch.id/sejarah-sekolah/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-bold text-emerald-800 hover:text-emerald-600"
          >
            Baca Sejarah Lengkap →
          </a>
        </div>
      </section>

      {/* VISI DAN MISI */}
      <section id="visi-misi" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
              Arah Pendidikan
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 md:text-4xl">
              Visi dan Misi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7">
              Landasan MAN 1 Tegal dalam mengembangkan pendidikan,
              prestasi, ilmu pengetahuan, dan karakter peserta didik.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-emerald-950 p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Visi Madrasah
            </p>
            <h3 className="mt-4 text-2xl font-extrabold leading-relaxed md:text-3xl">
              Terwujudnya madrasah unggul, berilmu ilmiah,
              beramal Islamiah, bermartabat dan berakhlakul karimah.
            </h3>
            <p className="mt-4 text-sm leading-7 text-emerald-100/80">
              Semboyan: ULIL ALBAB — Unggul, Ilmu Ilmiah,
              Amal Islamiah, Bermartabat, Berakhlakul Karimah.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-100 p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-emerald-950">
              Misi Madrasah
            </h3>
            <ol className="mt-6 space-y-4">
              {misi.map((item, index) => (
                <li key={item} className="flex gap-4 leading-7">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-800">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 text-sm leading-7 text-gray-500">
            Sumber visi dan misi: situs resmi MAN 1 Tegal.
            <br />
            <a
              href="https://www.man1tegal.sch.id/visi-misi/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-800 hover:text-emerald-600"
            >
              Lihat sumber visi dan misi →
            </a>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section className="bg-emerald-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Hubungi Kami
          </h2>
          <p className="mt-3 leading-7">
            Untuk informasi lebih lanjut mengenai madrasah, silakan
            menghubungi kontak yang tercantum pada situs resmi.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm text-gray-500">Alamat</p>
              <p className="mt-2 font-semibold leading-7 text-emerald-950">
                Jl. Pondok Pesantren Babakan, Jatimulya,
                Kec. Lebaksiu, Kabupaten Tegal, Jawa Tengah 52461
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm text-gray-500">Telepon</p>
              <p className="mt-2 font-semibold text-emerald-950">
                (0283) 6196761
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-2 break-words font-semibold text-emerald-950">
                info@man1tegal.sch.id
              </p>
            </div>
          </div>

          <a
            href="https://www.man1tegal.sch.id/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-emerald-800 px-6 py-3 font-bold text-white hover:bg-emerald-700"
          >
            Kunjungi Website Resmi ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 px-6 py-8 text-center text-white">
        <p className="font-bold">MAN 1 Tegal</p>
        <p className="mt-2 text-sm text-emerald-100/80">
          Website Informasi Madrasah
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm font-semibold text-emerald-300 hover:text-white"
        >
          ← Kembali ke Beranda
        </Link>
        <p className="mt-5 text-xs text-emerald-100/70">
          © {new Date().getFullYear()} MAN 1 Tegal
        </p>
      </footer>
    </main>
  );
}

