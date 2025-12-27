import { fetchArticleById } from "@/services/api";

export async function generateMetadata({ params }) {
  const article = await fetchArticleById(params.id);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const image = article.gambar?.startsWith("http")
    ? article.gambar
    : `https://assets.riaumandiri.co/${article.gambar}`;

  return {
    title: `${article.judul_berita} - Riau Mandiri`,
    description: article.description || article.judul_berita,
    openGraph: {
      title: article.judul_berita,
      description: article.description,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      images: [image],
    },
  };
}
