document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    const button = form.querySelector("button[type='submit']");
    status.textContent = "Memproses...";
    button.disabled = true;

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      status.textContent = result.message || "Permintaan selesai.";
      status.className = "form-status " + (response.ok ? "success-text" : "error-text");
      if (response.ok) form.reset();
    } catch (_error) {
      status.textContent = "Tidak dapat menghubungi server. Coba lagi nanti.";
      status.className = "form-status error-text";
    } finally {
      button.disabled = false;
    }
  });
}
