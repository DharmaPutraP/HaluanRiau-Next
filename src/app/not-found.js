"use client";
import { useRouter } from "next/navigation";

function NotFoundPage() {
  const navigate = useRouter();

  return (
    <div className="md:mx-24">
      <div className="bg-white px-5 md:px-10 py-16 mt-2 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#EE4339] mb-4">404</h1>
            <div className="w-32 h-1 bg-[#EE4339] mx-auto mb-6"></div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah
            dipindahkan. Silakan kembali ke beranda atau gunakan menu navigasi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate.push("/")}
              className="px-8 py-3 bg-[#EE4339] text-white rounded-lg hover:bg-[#d63330] transition font-semibold"
            >
              Kembali ke Beranda
            </button>
            <button
              onClick={() => navigate.back()}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Halaman Sebelumnya
            </button>
          </div>

          {/* Popular Links */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <h3 className="font-bold mb-4">Halaman Populer</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate.push("/category/riau")}
                className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
              >
                Berita Riau
              </button>
              <button
                onClick={() => navigate.push("/category/nasional")}
                className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
              >
                Berita Nasional
              </button>
              <button
                onClick={() => navigate.push("/videos")}
                className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
              >
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
