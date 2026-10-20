// Opsional untuk menjalankan preview lokal dengan Express.
// Deployment Vercel menggunakan file di folder /api sebagai Serverless Functions.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.get("/api/health", (_req, res) => res.json({ ok: true, message: "Website pribadi aktif." }));

app.listen(PORT, () => {
  console.log(`Preview lokal: http://localhost:${PORT}`);
});
