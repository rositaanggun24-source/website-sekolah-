
import Link from "next/link";

const menus = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Visi & Misi", href: "/visi-misi" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Berita", href: "/berita" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* Logo dan nama madrasah */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-lg font-extrabold text-white shadow-md">
            M1
          </div>

          <div>
            <p className="text-lg font-extrabold tracking-tight text-emerald-950">
              MAN 1 Tegal
            </p>
            <p className="text-xs text-gray-500">
              Madrasah Aliyah Negeri
            </p>
          </div>
        </Link>

        {/* Menu navigasi */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="relative py-1 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-emerald-700"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        {/* Tombol situs resmi */}
        <a
          href="https://www.man1tegal.sch.id/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
        >
          Situs Resmi ↗
        </a>
      </nav>
    </header>
  );
}
