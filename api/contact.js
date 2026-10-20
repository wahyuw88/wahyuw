module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Gunakan metode POST." });
  }

  const body = req.body || {};
  const nama = typeof body.nama === "string" ? body.nama.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const pesan = typeof body.pesan === "string" ? body.pesan.trim() : "";

  if (!nama || !email || !pesan) {
    return res.status(400).json({ message: "Nama, email, dan pesan wajib diisi." });
  }
  if (nama.length > 100 || email.length > 254 || pesan.length > 5000) {
    return res.status(400).json({ message: "Ada kolom yang melebihi batas panjang." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Format email tidak valid." });
  }

  // Starter ini sengaja tidak berpura-pura menyimpan pesan.
  // Tambahkan provider email atau database sebelum formulir dipakai publik.
  return res.status(501).json({
    message: "Formulir tervalidasi, tetapi belum dikirim atau disimpan. Hubungkan layanan email atau database sebelum digunakan secara publik."
  });
};
