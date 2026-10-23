const SUPABASE_URL = "https://nfcavjnxixlhzdvnstl.supabase.co";
const SUPABASE_ANON_KEY = "ISI_ANON_KEY_KAMU_DI_SINI";

const { createClient } = supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const form = document.getElementById("forgotForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  message.textContent = "Mengirim email reset password...";

  const { error } = await supabaseClient.auth.resetPasswordForEmail(
    email,
    {
      redirectTo:
        "https://informasi-kas-kelas-x-tkjt-1.vercel.app/reset-password.html"
    }
  );

  if (error) {
    console.error(error);
    message.textContent = "Gagal: " + error.message;
    return;
  }

  message.textContent =
    "Link reset password sudah dikirim. Cek email kamu.";
});
