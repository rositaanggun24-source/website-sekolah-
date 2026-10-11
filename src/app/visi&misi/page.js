
const misi = [
  "Menyelenggarakan pendidikan yang unggul dan berkualitas dalam pencapaian prestasi akademik dan nonakademik.",
  "Menyelenggarakan pendidikan yang berkualitas berdasarkan delapan standar pendidikan.",
  "Mewujudkan pembentukan karakter Islami yang mampu mengaktualisasikan diri dalam masyarakat.",
  "Meningkatkan pengetahuan dan profesionalisme tenaga pendidik dan kependidikan sesuai dengan perkembangan dunia pendidikan.",
  "Mewujudkan generasi Islam yang dapat mengaplikasikan ilmu ilmiah dan amal Islamiah.",
  "Mewujudkan pembelajaran dan pembiasaan akhlak mulia serta menjalankan ajaran agama Islam.",
  "Mewujudkan peserta didik yang memiliki jati diri terhormat, karakter kebangsaan, dan religius.",
  "Menyelenggarakan tata kelola madrasah yang efektif, efisien, transparan, dan akuntabel.",
];

export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-amber-300">
          MAN 1 TEGAL
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          Visi & Misi
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
          Mengenal arah dan tujuan MAN 1 Tegal dalam mewujudkan
          madrasah yang unggul, berilmu, dan berakhlak mulia.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <div className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
            ✦ VISI MADRASAH
          </div>

          <h2 className="mb-5 text-3xl font-extrabold tracking-wide text-blue-950">
            ULIL ALBAB
          </h2>

          <p className="text-lg leading-8 text-slate-700 md:text-xl">
            Terwujudnya madrasah unggul, berilmu ilmiah,
            beramal islamiah, bermartabat dan berakhlakul karimah.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Unggul",
              "Ilmu Ilmiah",
              "Amal Islamiah",
              "Bermartabat",
              "Berakhlakul Karimah",
            ].map((nilai) => (
              <div
                key={nilai}
                className="rounded-xl bg-blue-50 px-4 py-4 text-center font-semibold text-blue-900"
              >
                {nilai}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Langkah dan komitmen
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-950">
            Misi Madrasah
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Delapan misi sebagai pedoman dalam meningkatkan kualitas
            pendidikan, membentuk karakter peserta didik, dan
            mengembangkan madrasah.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {misi.map((item, index) => (
            <article
              key={item}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-lg font-bold text-white transition group-hover:bg-amber-500 group-hover:text-blue-950">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="leading-7 text-slate-700">
                {item}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          <p className="font-semibold text-blue-950">
            ULIL ALBAB — MAN 1 Tegal
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Unggul dalam prestasi, berlandaskan nilai keislaman,
            serta membangun karakter yang bermartabat.
          </p>
          <a
            href="https://www.man1tegal.sch.id/visi-misi/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-semibold text-blue-800 underline underline-offset-4 hover:text-amber-700"
          >
            Lihat sumber resmi MAN 1 Tegal →
          </a>
        </div>
      </section>
    </main>
  );
}
