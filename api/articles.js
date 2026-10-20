const articles = [
  {
    id: 1,
    title: "Memulai Website Pribadi",
    slug: "memulai-website-pribadi",
    description: "Langkah awal membangun ruang digital milik sendiri.",
    category: "Panduan"
  },
  {
    id: 2,
    title: "Mendokumentasikan Proses Belajar",
    slug: "mendokumentasikan-proses-belajar",
    description: "Mengubah pengalaman dan catatan menjadi sesuatu yang bermanfaat.",
    category: "Pengembangan Diri"
  },
  {
    id: 3,
    title: "Mengenal Website dan Domain",
    slug: "mengenal-website-dan-domain",
    description: "Memahami komponen dasar sebuah website.",
    category: "Teknologi"
  }
];

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method tidak diizinkan." });
  }
  return res.status(200).json({ articles });
};
