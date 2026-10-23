const SUPABASE_URL = "ISI_PROJECT_URL_KAMU";
const SUPABASE_ANON_KEY = "sb_publishable_-KR9D_QAELFGAlCgbxXe0w_PnKIfvqf";

const { createClient } = supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const form = document.getElementById("resetForm");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;

  if (password !== confirmPassword) {
    message.textContent = "Password tidak sama.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent =
      "Password minimal 6 karakter.";
    message.style.color = "red";
    return;
  }

  resetBtn.disabled = true;
  resetBtn.textContent = "Menyimpan...";

  const { error } = await supabaseClient.auth.updateUser({
    password: password
  });

  if (error) {
    message.textContent =
      "Gagal mengubah password: " + error.message;
    message.style.color = "red";

    resetBtn.disabled = false;
    resetBtn.textContent = "Ubah Password";
    return;
  }

  message.textContent =
    "Password berhasil diubah. Silakan login kembali.";
  message.style.color = "green";

  form.reset();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
