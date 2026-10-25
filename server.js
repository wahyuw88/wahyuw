const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sajikan file CSS dan JavaScript dari folder assets
app.use(
  "/assets",
  express.static(path.join(__dirname, "assets"))
);

// Halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Halaman tentang
app.get("/tentang.html", (req, res) => {
  res.sendFile(path.join(__dirname, "tentang.html"));
});

// Halaman artikel
app.get("/artikel.html", (req, res) => {
  res.sendFile(path.join(__dirname, "artikel.html"));
});

// Halaman kontak
app.get("/kontak.html", (req, res) => {
  res.sendFile(path.join(__dirname, "kontak.html"));
});

// Pemeriksaan server
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "Website pribadi aktif."
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});

module.exports = app;
