module.exports = function handler(_req, res) {
  res.status(200).json({
    ok: true,
    name: "website-pribadi-vercel",
    message: "API website pribadi berjalan."
  });
};
