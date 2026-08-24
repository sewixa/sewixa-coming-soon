const form = document.getElementById("waitlistForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) return;

  // Demo-only behavior. Replace this with your waitlist API later.
  toast.textContent = `Thanks! We'll notify ${email} when Sewixa launches.`;
  toast.classList.add("show");
  form.reset();

  setTimeout(() => toast.classList.remove("show"), 4500);
});
