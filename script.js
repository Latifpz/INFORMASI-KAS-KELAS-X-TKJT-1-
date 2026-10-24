/* ============================================================
   KAS TKJT 1
   MOBILE MENU HAMBURGER
   KURBAN Rp1.000 PER HARI
============================================================ */

const SISWA_MASTER = [
  "ABDURRAHMAN AL HAFIZI",
  "AISYAH ZABBRINA AL-GIVFARRI",
  "AKMA ALAMGIR SANI SIHITE",
  "BASTIAN NATHANIEL INHADI",
  "CHARISSA PUTRI NUR HANAFI",
  "CITRA EVELYNA",
  "DAFFIN RIZKY PRADIPTA",
  "FAHIMA NURHANIFAH",
  "FAREL AHMAD RAMADHAN",
  "FATHAN HARIRI PRATAMA",
  "FAUZAN KAMIL MUCHAROMIN",
  "HAIDAR ASKARIZ",
  "HAIKAL ANNABHAN PUTRA WIBOWO",
  "KAKA N.W NOORYANTO",
  "KANIGARA RAHAGI",
  "LUTHFI BAYU RAMDHANI",
  "MAZAYA LUQYANA INAYAH KHALILAH",
  "MOSES ALEXANDER ABRAHAM",
  "MUHAMAD RIZKI FAHRI",
  "MUHAMAD TUBAGUS FIKRI",
  "MUHAMMAD AKMAL KHOIRUL KHAFID",
  "MUHAMMAD CAHYA LUTHFI",
  "MUHAMMAD NOVA NURHADI",
  "MUTIARA FATHMA ALFARANI",
  "NABILA ALMIRA HUWAIDA",
  "NABILA FARA AMALIA",
  "NATAKA HAYASHI",
  "NAVITA DARA EL SIANA WIJAYA",
  "NAZILLA KAYLIN AZZAHRA",
  "NICOLAS ARDYANSYAH",
  "RADINKA CHAKRA AUGUSTA",
  "RAFAEL ERI ALVINO",
  "RAHMA PUSPITA SARI",
  "SUFI MUHAMMAD IMAM HANAFI",
  "SYAHRIL LATIEF AL GAFARI",
  "VAZZA AULIA RAMADHANI",
  "WISNU AJI PRATAMA ISKANDAR",
  "ZAHRA AULIA PUTRI SABRINA",
];

const BENDAHARA_MASTER = [
  {
    nama: "Mutia Fathma Alfarani",
    jabatan: "Bendahara Utama",
  },
  {
    nama: "Nazilla Kaylin Azzahra",
    jabatan: "Bendahara Acara",
  },
  {
    nama: "Rahma Puspita Sari",
    jabatan: "Bendahara Kurban",
  },
];

const KATEGORI_PENGELUARAN = [
  "Konsumsi",
  "ATK DAN PERLENGKAPAN",
  "Kebersihan",
  "Lainnya",
];

/* ============================================================
   IKON
   Ikon garis (SVG) yang digambar sendiri, tanpa pustaka luar.
   Warnanya mengikuti warna teks (currentColor), jadi ikut
   berubah di tema gelap/terang dan tampil sama di semua HP
   (emoji tampil berbeda di tiap perangkat).
   Pakai: icon("lonceng")  atau  icon("centang", "ico-sm")
============================================================ */

const ICONS = {
  dashboard:
    '<rect x="3.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.8"/>',
  masuk:
    '<path d="M12 4v10m0 0 4-4m-4 4-4-4"/><path d="M4.5 15v2.5A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5V15"/>',
  keluar:
    '<path d="M12 14V4m0 0 4 4m-4-4-4 4"/><path d="M4.5 15v2.5A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5V15"/>',
  target:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  kalender:
    '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  qris: '<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.3"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.3"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.3"/><path d="M14 14h2.5v2.5H14zM20.5 14v3M17.5 20.5h3M14 20.5v.01"/>',
  pengaturan:
    '<path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2.3"/><circle cx="8" cy="17" r="2.3"/>',
  akun: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.2" cy="9.5" r="2.4"/><path d="M17.5 14.6c2.4.2 4 1.9 4 4.4"/>',
  lonceng:
    '<path d="M6 9.5a6 6 0 0 1 12 0c0 6.5 2.5 8 2.5 8h-17s2.5-1.5 2.5-8"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
  matahari:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2M12 19.2v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.8 12h2M19.2 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4"/>',
  bulan: '<path d="M20 14.6A8.4 8.4 0 0 1 9.4 4a8.4 8.4 0 1 0 10.6 10.6z"/>',
  "keluar-akun":
    '<path d="M10 4H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H10"/><path d="m15.5 8 4 4-4 4M19.5 12H9.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  tutup: '<path d="M6 6l12 12M18 6 6 18"/>',
  centang: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  jam: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  tambah: '<path d="M12 5v14M5 12h14"/>',
  pensil:
    '<path d="M4.5 19.5 5.3 16 16.2 5.1a2.1 2.1 0 0 1 3 3L8.3 19z"/><path d="m14.5 6.8 2.7 2.7"/>',
  sampah:
    '<path d="M4.5 7h15M9.5 7V4.5h5V7"/><path d="m6.5 7 .9 12.5h9.2L17.5 7M10 11v5M14 11v5"/>',
  unggah:
    '<path d="M12 15.5V4m0 0 4 4m-4-4-4 4"/><path d="M4.5 15v2.5A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5V15"/>',
  gambar:
    '<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.7"/><path d="m4 17 5-4.5 3.5 3L15 13.5 20 18"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.01"/>',
  dompet:
    '<path d="M16.5 8V6.5A2 2 0 0 0 14.5 4.5H6A2.5 2.5 0 0 0 3.5 7v10A2.5 2.5 0 0 0 6 19.5h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6.5"/><circle cx="16" cy="13.5" r="1.1" fill="currentColor"/>',
  bendera: '<path d="M5 21V4"/><path d="M5 5h12.5l-2.8 3.8 2.8 3.7H5"/>',
  "bulan-bintang":
    '<path d="M16.5 14.3A7 7 0 0 1 9.7 5.5a7 7 0 1 0 6.8 8.8z"/><path d="m17.5 3.5.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  kirim: '<path d="M20 4 10.5 13.5M20 4l-6 16-3.5-6.5L4 10z"/>',
  tanda: '<path d="M12 4.5 21 19.5H3z"/><path d="M12 10v4.5M12 17v.01"/>',
  siswa:
    '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c0-3.9 3.4-6.2 7.5-6.2s7.5 2.3 7.5 6.2"/>',
  kunci:
    '<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  pesan:
    '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3.5V17A2.5 2.5 0 0 1 4 14.5z"/>',
};

function icon(name, kelas) {
  return (
    '<svg class="ico' +
    (kelas ? " " + kelas : "") +
    '" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    (ICONS[name] || "") +
    "</svg>"
  );
}

const POS = [
  {
    key: "Rutin",
    label: "Kas Rutin",
    icon: icon("dompet"),
    jabatan: "Bendahara Utama",
  },
  {
    key: "Acara",
    label: "Dana Acara",
    icon: icon("bendera"),
    jabatan: "Bendahara Acara",
  },
  {
    key: "Kurban",
    label: "Dana Kurban",
    icon: icon("bulan-bintang"),
    jabatan: "Bendahara Kurban",
  },
];

function posMeta(key) {
  return POS.find((p) => p.key === key) || POS[0];
}

function posOfJabatan(jabatan) {
  const p = POS.find((p) => p.jabatan === jabatan);

  return p ? p.key : null;
}

function myPos() {
  return session && session.role === "bendahara"
    ? posOfJabatan(session.jabatan)
    : null;
}

/* ============================================================
   STORAGE
============================================================ */

const DB_KEY = "kastkjt1_db_v3";

const SESSION_KEY = "kastkjt1_session_v3";

const THEME_KEY = "kastkjt1_theme_v1";

function defaultDB() {
  return {
    accounts: [],

    kasMasuk: [],

    pengeluaran: [],

    target: [],

    bukti: [],

    notifikasi: [],

    settings: {
      nominal: {
        Rutin: {
          jumlah: 15000,
          frekuensi: "Bulanan",
        },

        Acara: {
          jumlah: 0,
          frekuensi: "Sesuai kebutuhan",
        },

        Kurban: {
          jumlah: 1000,
          frekuensi: "Harian",
        },
      },

      qris: {
        Rutin: null,
        Acara: null,
        Kurban: null,
      },
    },
  };
}

function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);

    if (!raw) {
      return defaultDB();
    }

    const parsed = JSON.parse(raw);

    const def = defaultDB();

    const merged = Object.assign(def, parsed);

    if (!Array.isArray(merged.bukti)) {
      merged.bukti = [];
    }

    if (!Array.isArray(merged.notifikasi)) {
      merged.notifikasi = [];
    }

    merged.settings = Object.assign(def.settings, parsed.settings || {});

    merged.settings.nominal = Object.assign(
      def.settings.nominal,
      (parsed.settings || {}).nominal || {},
    );

    merged.settings.qris = Object.assign(
      def.settings.qris,
      (parsed.settings || {}).qris || {},
    );

    return merged;
  } catch {
    return defaultDB();
  }
}

let DB = loadDB();

/* ==========================================
    KURBAN Rp1.000 / HARI
========================================== */

DB.settings.nominal.Kurban = {
  jumlah: 1000,
  frekuensi: "Harian",
};

/* ==========================================
    KAS RUTIN SELALU PER BULAN
========================================== */

DB.settings.nominal.Rutin = Object.assign({}, DB.settings.nominal.Rutin, {
  frekuensi: "Bulanan",
});

/* ==========================================
    NOTIFIKASI LAMA (> 45 HARI) DIBUANG
========================================== */

DB.notifikasi = DB.notifikasi.filter(
  (n) => Date.now() - Number(n.createdAt || 0) < 45 * 24 * 60 * 60 * 1000,
);

function saveDB() {
  localStorage.setItem(DB_KEY, JSON.stringify(DB));
}

saveDB();

/* ============================================================
   SESSION
============================================================ */

let session = null;

try {
  session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
} catch {
  session = null;
}

function saveSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  session = null;

  localStorage.removeItem(SESSION_KEY);
}

/* ============================================================
   THEME
============================================================ */

let theme =
  localStorage.getItem(THEME_KEY) ||
  (window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem(THEME_KEY, theme);

  // warna bilah peramban di HP mengikuti tema
  const warna = document.querySelector('meta[name="theme-color"]');

  if (warna) {
    warna.setAttribute("content", theme === "dark" ? "#0d1716" : "#f2f5f1");
  }
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";

  applyTheme();

  render();
}

/* ============================================================
   UTIL
============================================================ */

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function hashPass(password) {
  let hash = 0;

  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);

    hash |= 0;
  }

  return "h" + Math.abs(hash).toString(36) + "." + password.length;
}

function rupiah(number) {
  number = Number(number) || 0;

  return "Rp " + number.toLocaleString("id-ID");
}

function todayStr() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseKasDate(value) {
  // Normalisasi tanggal transaksi tanpa mengubahnya melalui UTC.
  // Mendukung format utama YYYY-MM-DD, ISO datetime, serta format lama DD/MM/YYYY.
  const raw = String(value == null ? "" : value).trim();
  if (!raw) return null;

  let year, month, day, match;
  match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?=$|[T\s])/);
  if (match) {
    year = Number(match[1]);
    month = Number(match[2]);
    day = Number(match[3]);
  } else {
    match = raw.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/);
    if (!match) return null;
    day = Number(match[1]);
    month = Number(match[2]);
    year = Number(match[3]);
  }

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  )
    return null;
  if (year < 1900 || month < 1 || month > 12 || day < 1 || day > 31)
    return null;

  const check = new Date(year, month - 1, day);
  if (
    check.getFullYear() !== year ||
    check.getMonth() !== month - 1 ||
    check.getDate() !== day
  )
    return null;

  const yyyy = String(year).padStart(4, "0");
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return {
    year,
    month,
    day,
    iso: `${yyyy}-${mm}-${dd}`,
    monthKey: `${yyyy}-${mm}`,
  };
}

function dateOnlyKey(value) {
  return parseKasDate(value)?.iso || "";
}

// Kunci bulan "YYYY-MM" dari tanggal transaksi.
// Dipakai dashboard, status pembayaran, dan dashboard siswa.
function monthKey(value) {
  return parseKasDate(value)?.monthKey || "";
}

function normalizedText(value) {
  return String(value == null ? "" : value)
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleUpperCase("id-ID");
}

function paymentMatchesDay(
  payment,
  studentName,
  year,
  month,
  day,
  pos = ui.pos,
) {
  if (!payment) return false;
  if (normalizedText(payment.pos) !== normalizedText(pos)) return false;
  if (normalizedText(payment.siswa) !== normalizedText(studentName))
    return false;

  const date = parseKasDate(payment.tanggal);
  // Jangan memakai nomor hari saja: tahun, bulan, dan hari wajib cocok seluruhnya.
  return (
    !!date &&
    date.year === Number(year) &&
    date.month === Number(month) &&
    date.day === Number(day)
  );
}

function calendarMonthHasPayment(payment, studentName, year, month, weekly) {
  if (!payment) return false;
  if (normalizedText(payment.pos) !== normalizedText(ui.pos)) return false;
  if (normalizedText(payment.siswa) !== normalizedText(studentName))
    return false;

  const date = parseKasDate(payment.tanggal);
  const targetYear = Number(year);
  const targetMonth = Number(month);

  // Filter tahun lebih dahulu agar tahun berbeda tidak pernah saling mencentang.
  if (!date || date.year !== targetYear) return false;
  if (!weekly) return date.month === targetMonth;

  // Kalender mingguan memiliki satu penanda per bulan; penanda bulan hanya
  // aktif apabila transaksi ada pada minggu pertama bulan tersebut di tahun itu.
  const anchor = `${targetYear}-${String(targetMonth).padStart(2, "0")}-01`;
  return date.month === targetMonth && weekKey(date.iso) === weekKey(anchor);
}

function weekKey(date) {
  if (!date) return "";

  const d = new Date(date + "T00:00:00");

  if (isNaN(d)) {
    return "";
  }

  const dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  const day = (dt.getUTCDay() + 6) % 7;

  dt.setUTCDate(dt.getUTCDate() - day + 3);

  const firstThu = new Date(Date.UTC(dt.getUTCFullYear(), 0, 4));

  const week =
    1 +
    Math.round(
      ((dt - firstThu) / 86400000 - 3 + ((firstThu.getUTCDay() + 6) % 7)) / 7,
    );

  return dt.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
}

function fmtDate(date) {
  if (!date) {
    return "-";
  }

  const d = new Date(date + "T00:00:00");

  if (isNaN(d)) {
    return date;
  }

  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function initials(name) {
  return String(name)
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function esc(text) {
  return String(text == null ? "" : text).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

// Nama siswa disimpan KAPITAL (sesuai data kelas). Tampilannya dibuat
// huruf besar-kecil supaya mudah dibaca; nilai/data aslinya tidak berubah.
function titleCase(text) {
  return String(text == null ? "" : text)
    .toLowerCase()
    .replace(
      /(^|[\s\-.'])([a-z\u00e0-\u024f])/g,
      (m, sep, ch) => sep + ch.toUpperCase(),
    );
}

function tampilNama(nama) {
  return esc(titleCase(nama));
}

// Angka besar: "Rp" kecil, angkanya dominan.
function rupiahFig(number) {
  number = Number(number) || 0;

  return `<span class="cur">Rp</span> ${esc(number.toLocaleString("id-ID"))}`;
}

// Status selalu ikon + kata, tidak hanya warna.
function badgeStatus(sudah) {
  return sudah
    ? `<span class="badge badge-ok">${icon("centang")}Lunas</span>`
    : `<span class="badge badge-warn">${icon("jam")}Belum bayar</span>`;
}

function nominalPos(pos) {
  return (
    (DB.settings.nominal && DB.settings.nominal[pos]) || {
      jumlah: 0,
      frekuensi: "Sesuai kebutuhan",
    }
  );
}

/* ============================================================
   FINANCE
============================================================ */

function totalMasukPos(pos) {
  return DB.kasMasuk
    .filter((x) => x.pos === pos)
    .reduce((sum, x) => sum + Number(x.jumlah || 0), 0);
}

function totalKeluarPos(pos) {
  return DB.pengeluaran
    .filter((x) => x.pos === pos)
    .reduce((sum, x) => sum + Number(x.jumlah || 0), 0);
}

function saldoPos(pos) {
  return totalMasukPos(pos) - totalKeluarPos(pos);
}

/* ============================================================
   PERIODE PEMBAYARAN
   Kas Rutin   -> status berganti setiap BULAN
   Dana Kurban -> status berganti setiap HARI
   Status dihitung dari tanggal setoran, jadi begitu bulan/hari
   berganti semua siswa otomatis kembali "Belum bayar".
============================================================ */

const FREKUENSI_TETAP = {
  Rutin: "Bulanan",

  Kurban: "Harian",
};

const NAMA_BULAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const NAMA_HARI = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

function frekuensiPos(pos) {
  return FREKUENSI_TETAP[pos] || nominalPos(pos).frekuensi;
}

// Periode yang sedang berjalan untuk sebuah pos.
//   frek : "Harian" | "Mingguan" | "Bulanan"
//   key  : penanda periode (YYYY-MM-DD / YYYY-Www / YYYY-MM)
//   label: kata untuk judul ("hari ini", "bulan ini")
//   nama : nama periode yang mudah dibaca ("Oktober 2026")
//   frasa: dipakai di kalimat notifikasi ("bulan Oktober 2026")
function periodeAktif(pos) {
  const frek = frekuensiPos(pos);

  const hari = todayStr();

  const [tahun, bulan, tgl] = hari.split("-").map(Number);

  if (frek === "Harian") {
    const namaHari = NAMA_HARI[new Date(tahun, bulan - 1, tgl).getDay()];

    const nama = `${namaHari}, ${tgl} ${NAMA_BULAN[bulan - 1]} ${tahun}`;

    return {
      frek,
      key: hari,
      label: "hari ini",
      nama,
      frasa: `hari ${nama}`,
      info: "berganti otomatis setiap hari",
    };
  }

  if (frek === "Mingguan") {
    const key = weekKey(hari);

    const [thn, minggu] = key.split("-W");

    const nama = `Minggu ke-${Number(minggu)}, ${thn}`;

    return {
      frek,
      key,
      label: "minggu ini",
      nama,
      frasa: nama.toLowerCase(),
      info: "berganti otomatis setiap minggu",
    };
  }

  const nama = `${NAMA_BULAN[bulan - 1]} ${tahun}`;

  return {
    frek: "Bulanan",
    key: hari.slice(0, 7),
    label: "bulan ini",
    nama,
    frasa: `bulan ${nama}`,
    info: "berganti otomatis setiap bulan",
  };
}

// Sudahkah siswa membayar pada periode tertentu ({ frek, key })?
function sudahBayarPeriode(pos, siswa, periode) {
  return DB.kasMasuk.some((x) => {
    if (normalizedText(x.pos) !== normalizedText(pos)) return false;

    if (normalizedText(x.siswa) !== normalizedText(siswa)) return false;

    const tgl = dateOnlyKey(x.tanggal);

    if (!tgl) return false;

    if (periode.frek === "Harian") return tgl === periode.key;

    if (periode.frek === "Mingguan") return weekKey(tgl) === periode.key;

    return monthKey(tgl) === periode.key;
  });
}

/* ============================================================
   PENGINGAT & NOTIFIKASI
   Bendahara Utama (Kas Rutin) dan Bendahara Kurban (Dana Kurban)
   menekan tombol "Ingatkan" -> notifikasi "belum bayar" masuk ke
   akun siswa yang dituju. Notifikasi disimpan berdasarkan NAMA
   siswa, jadi tetap sampai walau siswa baru membuat akun atau
   mengganti username.
============================================================ */

const POS_PENGINGAT = ["Rutin", "Kurban"];

function bolehMengingatkan(pos) {
  return (
    !!session &&
    session.role === "bendahara" &&
    POS_PENGINGAT.includes(pos) &&
    myPos() === pos
  );
}

function fmtWaktu(ts, pendek) {
  const d = new Date(Number(ts));

  if (isNaN(d)) return "-";

  const jam = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const tgl = [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");

  if (tgl === todayStr()) return pendek ? jam : `Hari ini, ${jam}`;

  return `${fmtDate(tgl)}, ${jam}`;
}

function notifUntukSaya() {
  if (!session) return [];

  const saya = normalizedText(session.nama);

  return DB.notifikasi
    .filter((n) => normalizedText(n.untuk) === saya)
    .sort((a, b) => b.createdAt - a.createdAt);
}

// Pengingat otomatis dianggap selesai begitu siswa sudah membayar periodenya.
function notifSudahLunas(n) {
  return sudahBayarPeriode(n.pos, n.untuk, { frek: n.frek, key: n.periode });
}

function jumlahNotifBaru() {
  return notifUntukSaya().filter((n) => !n.dibaca && !notifSudahLunas(n))
    .length;
}

// Pengingat yang masih berlaku: periodenya sedang berjalan dan belum dibayar.
function pengingatAktifSaya() {
  return notifUntukSaya().filter(
    (n) =>
      POS_PENGINGAT.includes(n.pos) &&
      n.periode === periodeAktif(n.pos).key &&
      !notifSudahLunas(n),
  );
}

// Pengingat periode berjalan yang sudah pernah dikirim ke siswa ini.
function pengingatTerkirim(pos, nama) {
  const key = periodeAktif(pos).key;

  const target = normalizedText(nama);

  return DB.notifikasi.find(
    (n) =>
      n.pos === pos && n.periode === key && normalizedText(n.untuk) === target,
  );
}

function simpanPengingat(pos, nama) {
  const per = periodeAktif(pos);

  // siswa yang sudah membayar periode ini tidak perlu diingatkan
  if (sudahBayarPeriode(pos, nama, per)) {
    return null;
  }

  const meta = posMeta(pos);

  const jumlah = Number(nominalPos(pos).jumlah) || 0;

  const pesan =
    `Kamu belum membayar ${meta.label} ${per.frasa}` +
    (jumlah ? ` sebesar ${rupiah(jumlah)}` : "") +
    `. Yuk segera bayar ke ${session.jabatan}.`;

  const sekarang = Date.now();

  const ada = pengingatTerkirim(pos, nama);

  if (ada) {
    // Sudah pernah dikirim di periode ini: perbarui saja (tidak menumpuk)
    // dan tandai belum dibaca lagi supaya siswa melihatnya kembali.
    Object.assign(ada, {
      jumlah,
      pesan,
      dari: session.nama,
      jabatan: session.jabatan,
      createdAt: sekarang,
      dibaca: false,
      jumlahKirim: (ada.jumlahKirim || 1) + 1,
    });

    return ada;
  }

  const baru = {
    id: uid(),
    tipe: "pengingat",
    untuk: nama,
    pos,
    frek: per.frek,
    periode: per.key,
    periodeNama: per.nama,
    jumlah,
    judul: `Pengingat ${meta.label}`,
    pesan,
    dari: session.nama,
    jabatan: session.jabatan,
    createdAt: sekarang,
    dibaca: false,
    jumlahKirim: 1,
  };

  DB.notifikasi.push(baru);

  return baru;
}

function kirimPengingat(nama) {
  const pos = myPos();

  if (!bolehMengingatkan(pos) || !SISWA_MASTER.includes(nama)) {
    return;
  }

  if (!simpanPengingat(pos, nama)) {
    showToast(`${titleCase(nama)} sudah membayar, pengingat tidak dikirim.`);

    render();

    return;
  }

  saveDB();

  render();

  showToast(`Pengingat terkirim ke ${titleCase(nama)}`);
}

function kirimPengingatSemua() {
  const pos = myPos();

  if (!bolehMengingatkan(pos)) {
    return;
  }

  const per = periodeAktif(pos);

  const meta = posMeta(pos);

  const belum = SISWA_MASTER.filter((n) => !sudahBayarPeriode(pos, n, per));

  if (!belum.length) {
    showToast("Semua siswa sudah lunas, tidak ada yang perlu diingatkan.");

    return;
  }

  confirmAction(
    "Kirim pengingat ke semua?",
    `${belum.length} siswa yang belum membayar ${meta.label} ${per.frasa} akan menerima notifikasi.`,
    () => {
      const sasaran = SISWA_MASTER.filter(
        (n) => !sudahBayarPeriode(pos, n, periodeAktif(pos)),
      );

      let terkirim = 0;

      sasaran.forEach((n) => {
        if (simpanPengingat(pos, n)) terkirim++;
      });

      saveDB();

      render();

      showToast(`Pengingat terkirim ke ${terkirim} siswa`);
    },
    { yesLabel: "Ya, kirim", yesClass: "btn-teal" },
  );
}

// Membuka panel = semua notifikasi dianggap sudah dibaca (badge hilang),
// tetapi yang baru tetap ditandai selama panel terbuka.
function bukaNotif() {
  const milikku = notifUntukSaya();

  ui.notifBaruIds = milikku.filter((n) => !n.dibaca).map((n) => n.id);

  if (ui.notifBaruIds.length) {
    milikku.forEach((n) => {
      n.dibaca = true;
    });

    saveDB();
  }

  ui.notifOpen = true;

  ui.mobileMenuOpen = false;

  render();
}

function tutupNotif() {
  ui.notifOpen = false;

  ui.notifBaruIds = [];

  render();
}

function renderNotifPanel() {
  const daftar = notifUntukSaya();

  const baru = new Set(ui.notifBaruIds || []);

  return `
    <div
      class="notif-overlay no-print"
      data-act="closeNotif"
    ></div>

    <section
      class="notif-panel no-print"
      role="dialog"
      aria-label="Notifikasi"
    >

      <div class="notif-head">

        <strong>
          Notifikasi
        </strong>

        <button
          class="mobile-menu-close"
          data-act="closeNotif"
          title="Tutup"
          aria-label="Tutup notifikasi"
        >
          ${icon("tutup")}
        </button>

      </div>

      <div class="notif-list">

        ${
          daftar.length
            ? daftar
                .map((n) => {
                  const lunas = notifSudahLunas(n);

                  const isBaru = baru.has(n.id) && !lunas;

                  return `
                    <div class="notif-item ${isBaru ? "baru" : ""} ${lunas ? "selesai" : ""}">

                      <div class="notif-ic">
                        ${posMeta(n.pos).icon}
                      </div>

                      <div class="notif-body">

                        <div class="notif-title">
                          ${esc(n.judul || "Pengingat")}
                          ${
                            lunas
                              ? `<span class="badge badge-ok">${icon("centang")}Sudah lunas</span>`
                              : isBaru
                                ? `<span class="badge badge-warn">Baru</span>`
                                : ""
                          }
                        </div>

                        <div class="notif-msg">
                          ${esc(n.pesan)}
                        </div>

                        <div class="notif-meta">
                          ${esc(n.jabatan || "Bendahara")}, ${esc(fmtWaktu(n.createdAt))}
                        </div>

                      </div>

                    </div>
                  `;
                })
                .join("")
            : `
              <div class="empty">

                <div class="big">
                  ${icon("lonceng")}
                </div>

                Belum ada notifikasi.

              </div>
            `
        }

      </div>

    </section>
  `;
}

// Spanduk di dashboard siswa selama pengingat masih berlaku.
function bannerPengingat() {
  return pengingatAktifSaya()
    .map(
      (n) => `
        <div class="reminder-banner">

          <div class="reminder-ic">
            ${icon("lonceng")}
          </div>

          <div class="reminder-text">

            <strong>
              Pengingat dari ${esc(n.jabatan || "Bendahara")}
            </strong>

            <div>
              ${esc(n.pesan)}
            </div>

          </div>

        </div>
      `,
    )
    .join("");
}

function showToast(text) {
  let root = document.getElementById("toastRoot");

  if (!root) {
    root = document.createElement("div");

    root.id = "toastRoot";

    root.className = "no-print";

    root.setAttribute("role", "status");

    root.setAttribute("aria-live", "polite");

    document.body.appendChild(root);
  }

  const el = document.createElement("div");

  el.className = "toast";

  el.textContent = text;

  root.appendChild(el);

  setTimeout(() => {
    el.classList.add("out");

    setTimeout(() => el.remove(), 320);
  }, 2800);
}

/* ============================================================
   UI STATE
============================================================ */

let ui = {
  authView: "login",

  loginTab: "siswa",

  forgotStep: 1,

  regRole: "siswa",

  view: "dashboard",

  pos: "Rutin",

  editKasId: null,

  editPengeluaranId: null,

  editTargetId: null,

  kalenderTahun: 2026,

  kalenderBulan: new Date().getMonth() + 1,

  mobileMenuOpen: false,

  notifOpen: false,

  notifBaruIds: [],

  // papan absen: petak yang dipilih (nama), filter daftar, dan animasi masuk
  siswaPilih: null,

  filterStatus: "semua",

  papanAnim: true,

  fokusSebelumDialog: null,

  // isian masuk/daftar yang dipertahankan saat gagal (password tidak pernah
  // disimpan) dan kolom yang difokuskan agar tidak perlu mengetik ulang
  authDraft: null,

  fokusAuth: null,

  msg: null,

  confirmDialog: null,
};

/* ============================================================
   RENDER
============================================================ */

// Seluruh tampilan digambar ulang setiap kali ada perubahan, jadi fokus papan
// ketik harus dikembalikan ke tombol yang sama supaya tidak "hilang".
function kunciFokus(el) {
  if (!el || !el.dataset || !el.dataset.act || !el.closest("#app")) {
    return null;
  }

  const zona = el.closest(
    ".mobile-menu, .sidebar, .topbar, .notif-panel, .main, .auth-card",
  );

  return {
    zona: zona ? zona.classList[0] : "",
    act: el.dataset.act,
    id: el.dataset.id || "",
    val: el.dataset.val || "",
    nama: el.dataset.nama || "",
    view: el.dataset.view || "",
  };
}

function pulihkanFokus(kunci) {
  if (!kunci) {
    return;
  }

  const zona = kunci.zona
    ? document.querySelector("#app ." + kunci.zona)
    : document.getElementById("app");

  if (!zona) {
    return;
  }

  const cocok = Array.from(
    zona.querySelectorAll('[data-act="' + kunci.act + '"]'),
  ).find(
    (el) =>
      (el.dataset.id || "") === kunci.id &&
      (el.dataset.val || "") === kunci.val &&
      (el.dataset.nama || "") === kunci.nama &&
      (el.dataset.view || "") === kunci.view,
  );

  if (cocok) {
    try {
      cocok.focus({ preventScroll: true });
    } catch (err) {
      cocok.focus();
    }
  }
}

function render() {
  const fokus = kunciFokus(document.activeElement);

  document.getElementById("app").innerHTML = session
    ? renderShell()
    : renderAuth();

  afterRender();

  if (ui.confirmDialog) {
    renderConfirmDialog();
  } else {
    pulihkanFokus(fokus);
  }
}

/* ============================================================
   AUTH
============================================================ */

// Sisi kiri halaman masuk (layar lebar saja): papan nomor absen sebagai hiasan.
function authAside() {
  const petak = SISWA_MASTER.map((_, i) => `<li>${i + 1}</li>`).join("");

  return `
    <aside class="auth-aside" aria-hidden="true">

      <p class="auth-claim">
        ${SISWA_MASTER.length} siswa, ${BENDAHARA_MASTER.length} bendahara, satu buku kas.
      </p>

      <ol class="auth-board">${petak}</ol>

      <p class="auth-caption">
        Kas rutin, dana acara, dan dana kurban kelas X TKJT 1.
      </p>

    </aside>
  `;
}

function pesanAuth() {
  if (!ui.msg) {
    return "";
  }

  const galat = ui.msg.type === "error";

  return `
    <div
      id="auth-pesan"
      class="alert ${galat ? "alert-error" : "alert-ok"}"
      role="${galat ? "alert" : "status"}"
    >
      ${icon(galat ? "tanda" : "centang")}
      <span>${esc(ui.msg.text)}</span>
    </div>
  `;
}

function renderAuth() {
  const fab = `
    <button
      class="theme-fab"
      data-act="toggleTheme"
      title="Ganti tema"
      aria-label="${theme === "dark" ? "Ganti ke tema terang" : "Ganti ke tema gelap"}"
    >
      ${icon(theme === "dark" ? "matahari" : "bulan")}
    </button>
  `;

  if (ui.authView === "forgot") return fab + renderForgotPassword();

  return fab + (ui.authView === "register" ? renderRegister() : renderLogin());
}

function renderLogin() {
  const t = ui.loginTab;

  const draf = ui.authDraft || {};

  return `
    <div class="center-screen">

      <div class="auth-wrap">

        ${authAside()}

        <div class="auth-card">

          <div class="brand">

            <div class="brand-mark">
              TKJ
            </div>

            <div class="brand-text">

              <div class="t1">
                Informasi Kas Kelas X TKJT 1
              </div>

              <div class="t2">
                Kelas Teknik Jaringan
              </div>

            </div>

          </div>

          <h1 class="auth-title">
            Masuk ke akun
          </h1>

          <p class="auth-sub">
            Pilih peranmu lalu masuk
            dengan username dan password
            yang sudah kamu buat.
          </p>

          <div
            class="tabs"
            data-active="${t}"
            role="group"
            aria-label="Peran"
          >

            <button
              type="button"
              data-act="loginTab"
              data-val="siswa"
              class="${t === "siswa" ? "active" : ""}"
              aria-pressed="${t === "siswa" ? "true" : "false"}"
            >
              ${icon("siswa")}
              Siswa
            </button>

            <button
              type="button"
              data-act="loginTab"
              data-val="bendahara"
              class="${t === "bendahara" ? "active" : ""}"
              aria-pressed="${t === "bendahara" ? "true" : "false"}"
            >
              ${icon("kunci")}
              Bendahara
            </button>

          </div>

          ${pesanAuth()}

          <form
            data-form="login"
          >

            <input
              type="hidden"
              name="role"
              value="${t}"
            >

            <div class="field">

              <label for="login-username">
                Username
              </label>

              <input
                id="login-username"
                name="username"
                value="${esc(draf.username || "")}"
                autocomplete="username"
                autocapitalize="none"
                spellcheck="false"
                placeholder="misal. abdurrahman"
                required
              >

            </div>

            <div class="field">

              <label for="login-password">
                Password
              </label>

              <input
                id="login-password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Password kamu"
                required
              >

            </div>

            <button
              class="
                btn
                btn-primary
              "
              type="submit"
            >
              Masuk sebagai
              ${t === "siswa" ? "Siswa" : "Bendahara"}
            </button>

          </form>

          <div class="switch-link">
            <button type="button" data-act="goForgot">Lupa password?</button>
          </div>

          <div class="switch-link">

            Belum punya akun?

            <button
              type="button"
              data-act="goRegister"
            >
              Buat akun sendiri
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}

function availableNames(role) {
  const master =
    role === "bendahara" ? BENDAHARA_MASTER.map((b) => b.nama) : SISWA_MASTER;

  const taken = DB.accounts.filter((a) => a.role === role).map((a) => a.nama);

  return master.filter((name) => !taken.includes(name));
}

function renderForgotPassword() {
  const draf = ui.authDraft || {};

  return `
    <div class="center-screen">

      <div class="auth-wrap">

        ${authAside()}

        <div class="auth-card">

          <div class="brand">
            <div class="brand-mark">TKJ</div>
            <div class="brand-text">
              <div class="t1">Informasi Kas Kelas X TKJT 1</div>
              <div class="t2">Pemulihan akun</div>
            </div>
          </div>

          <h1 class="auth-title">Lupa password?</h1>

          <p class="auth-sub">
            Masukkan data akun untuk memverifikasi kepemilikan akun,
            lalu buat password baru.
          </p>

          ${pesanAuth()}

          <form data-form="forgotPassword">

            <div class="field">
              <label for="forgot-role">Peran</label>
              <select id="forgot-role" name="role" required>
                <option value="siswa" ${draf.role === "siswa" ? "selected" : ""}>Siswa</option>
                <option value="bendahara" ${draf.role === "bendahara" ? "selected" : ""}>Bendahara</option>
              </select>
            </div>

            <div class="field">
              <label for="forgot-username">Username</label>
              <input
                id="forgot-username"
                name="username"
                value="${esc(draf.username || "")}"
                autocomplete="username"
                autocapitalize="none"
                spellcheck="false"
                placeholder="Username akun"
                required
              >
            </div>

            <div class="field">
              <label for="forgot-nama">Nama sesuai akun</label>
              <input
                id="forgot-nama"
                name="nama"
                value="${esc(draf.nama || "")}"
                autocomplete="name"
                placeholder="Nama yang dipilih saat membuat akun"
                required
              >
            </div>

            <div class="form-row cols-2">
              <div class="field">
                <label for="forgot-password">Password baru</label>
                <input
                  id="forgot-password"
                  name="password"
                  type="password"
                  autocomplete="new-password"
                  minlength="4"
                  placeholder="Minimal 4 karakter"
                  required
                >
              </div>

              <div class="field">
                <label for="forgot-password2">Ulangi password</label>
                <input
                  id="forgot-password2"
                  name="password2"
                  type="password"
                  autocomplete="new-password"
                  minlength="4"
                  placeholder="Ulangi password"
                  required
                >
              </div>
            </div>

            <div class="locked-note">
              ${icon("kunci")}
              <span>
                Pemulihan ini bekerja pada data akun yang tersimpan di perangkat
                ini. Jika aplikasi dipindahkan ke perangkat lain, data akun juga
                harus tersedia di perangkat tersebut.
              </span>
            </div>

            <button class="btn btn-primary" type="submit">
              ${icon("kunci")}
              Simpan password baru
            </button>

          </form>

          <div class="switch-link">
            Ingat password?
            <button type="button" data-act="goLogin">Kembali ke masuk</button>
          </div>

        </div>
      </div>
    </div>
  `;
}

function renderRegister() {
  const role = ui.regRole;

 const names = availableNames(role);

  const draf = ui.authDraft || {};

  return `
    <div class="center-screen">

      <div class="auth-wrap">

        ${authAside()}

        <div class="auth-card">

          <div class="brand">

            <div class="brand-mark">
              TKJ
            </div>

            <div class="brand-text">

              <div class="t1">
                Informasi Kas Kelas
              </div>

              <div class="t2">
                Kelas X TKJT 1
              </div>

            </div>

          </div>

          <h1 class="auth-title">
            Buat akun sendiri
          </h1>

          <p class="auth-sub">
            Pilih nama sesuai data kelas
            kemudian buat username
            dan password.
          </p>

          <div
            class="tabs"
            data-active="${role}"
            role="group"
            aria-label="Peran"
          >

            <button
              type="button"
              data-act="regRole"
              data-val="siswa"
              class="${role === "siswa" ? "active" : ""}"
              aria-pressed="${role === "siswa" ? "true" : "false"}"
            >
              ${icon("siswa")}
              Siswa
            </button>

            <button
              type="button"
              data-act="regRole"
              data-val="bendahara"
              class="${role === "bendahara" ? "active" : ""}"
              aria-pressed="${role === "bendahara" ? "true" : "false"}"
            >
              ${icon("kunci")}
              Bendahara
            </button>

          </div>

          ${pesanAuth()}

          <form
            data-form="register"
          >

            <input
              type="hidden"
              name="role"
              value="${role}"
            >

            <div class="field">

              <label for="reg-nama">
                Nama sesuai data kelas
              </label>

              <select
                id="reg-nama"
                name="nama"
                required
              >

                <option value="">
                  ${
                    names.length
                      ? "Pilih nama..."
                      : "Semua nama sudah terdaftar"
                  }
                </option>

                ${names
                  .map(
                    (name) => `
                      <option
                        value="${esc(name)}"
                        ${draf.nama === name ? "selected" : ""}
                      >
                        ${tampilNama(name)}
                      </option>
                    `,
                  )
                  .join("")}

              </select>

            </div>

            <div class="field">

              <label for="reg-username">
                Buat username
              </label>

              <input
                id="reg-username"
                name="username"
                value="${esc(draf.username || "")}"
                autocomplete="username"
                autocapitalize="none"
                spellcheck="false"
                placeholder="Bebas, tanpa spasi"
                required
              >

            </div>

            <div class="field">

              <label for="reg-password">
                Buat password
              </label>

              <input
                id="reg-password"
                name="password"
                type="password"
                autocomplete="new-password"
                minlength="4"
                required
              >

            </div>

            <div class="field">

              <label for="reg-password2">
                Ulangi password
              </label>

              <input
                id="reg-password2"
                name="password2"
                type="password"
                autocomplete="new-password"
                minlength="4"
                required
              >

            </div>

            <button
              class="
                btn
                btn-primary
              "
              type="submit"
              ${names.length === 0 ? "disabled" : ""}
            >
              Buat akun
            </button>

          </form>

          <div class="switch-link">

            Sudah punya akun?

            <button
              type="button"
              data-act="goLogin"
            >
              Masuk
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}

/* ============================================================
   NAV
============================================================ */

const NAV = [
  {
    id: "dashboard",
    ic: "dashboard",
    label: "Dashboard",
  },

  {
    id: "kasmasuk",
    ic: "masuk",
    label: "Kas Masuk",
  },

  {
    id: "pengeluaran",
    ic: "keluar",
    label: "Pengeluaran",
  },

  {
    id: "target",
    ic: "target",
    label: "Target",
  },

  {
    id: "kalender",
    ic: "kalender",
    label: "Kalender",
    bendaharaOnly: true,
  },

  {
    id: "qris",
    ic: "qris",
    label: "QRIS",
  },

  {
    id: "pengaturan",
    ic: "pengaturan",
    label: "Pengaturan",
  },
  {
    id: "kelolaakun",
    ic: "akun",
    label: "Kelola Akun",
    bendaharaOnly: true,
  },
];

/* ============================================================
   SHELL + MOBILE MENU
============================================================ */

function navButtons() {
  return NAV.filter((nav) => !nav.bendaharaOnly || session.role === "bendahara")
    .map(
      (nav) => `
        <button
          class="navitem ${ui.view === nav.id ? "active" : ""}"
          data-act="nav"
          data-view="${nav.id}"
          ${ui.view === nav.id ? 'aria-current="page"' : ""}
        >
          <span class="ic">${icon(nav.ic)}</span>
          ${nav.label}
        </button>
      `,
    )
    .join("");
}

function renderShell() {
  const roleLabel =
    session.role === "bendahara" ? session.jabatan : "Siswa TKJT 1";

  const notifBaru = jumlahNotifBaru();

  const nama = tampilNama(session.nama);

  return `
    <div
      class="mobile-menu-overlay ${ui.mobileMenuOpen ? "open" : ""}"
      data-act="closeMobileMenu"
    ></div>

    <aside
      class="mobile-menu ${ui.mobileMenuOpen ? "open" : ""}"
      aria-label="Menu navigasi"
    >

      <div class="mobile-menu-head">

        <div class="avatar">${initials(session.nama)}</div>

        <div class="mm-who">
          <span class="name">${nama}</span>
          <span class="role-badge">${esc(roleLabel)}</span>
        </div>

        <button
          class="mobile-menu-close"
          data-act="closeMobileMenu"
          title="Tutup menu"
          aria-label="Tutup menu"
        >
          ${icon("tutup")}
        </button>

      </div>

      ${navButtons()}

    </aside>

    <header class="topbar no-print">

      <button
        class="mobile-menu-btn"
        data-act="toggleMobileMenu"
        title="Buka menu"
        aria-label="Buka menu"
      >
        ${icon("menu")}
      </button>

      <div class="brand">

        <div class="brand-mark">TKJ</div>

        <div class="brand-text">

          <div class="t1">Kas TKJT 1</div>

          <div class="t2">
            ${session.role === "bendahara" ? "Panel Bendahara" : "Panel Siswa"}
          </div>

        </div>

      </div>

      <div class="who">

        <div class="who-text">

          <div class="name">${nama}</div>

          <span class="role-badge">${esc(roleLabel)}</span>

        </div>

        <div class="avatar">${initials(session.nama)}</div>

        <button
          class="icon-btn notif-btn"
          data-act="toggleNotif"
          title="Notifikasi"
          aria-label="Notifikasi${notifBaru ? `, ${notifBaru} baru` : ""}"
        >
          ${icon("lonceng")}
          ${
            notifBaru
              ? `<span class="notif-badge">${notifBaru > 9 ? "9+" : notifBaru}</span>`
              : ""
          }
        </button>

        <button
          class="icon-btn"
          data-act="toggleTheme"
          title="Ganti tema"
          aria-label="${theme === "dark" ? "Ganti ke tema terang" : "Ganti ke tema gelap"}"
        >
          ${icon(theme === "dark" ? "matahari" : "bulan")}
        </button>

        <button
          class="icon-btn"
          data-act="logout"
          title="Keluar"
          aria-label="Keluar"
        >
          ${icon("keluar-akun")}
        </button>

      </div>

    </header>

    ${ui.notifOpen ? renderNotifPanel() : ""}

    <div class="layout">

      <aside class="sidebar no-print" aria-label="Navigasi">
        ${navButtons()}
      </aside>

      <main class="main">

        ${renderPage()}

        <div class="footer-note no-print">
          Kas TKJT 1. Data tersimpan di perangkat ini.
        </div>

      </main>

    </div>
  `;
}

function renderPage() {
  switch (ui.view) {
    case "kasmasuk":
      return pageKasMasuk();

    case "pengeluaran":
      return pagePengeluaran();

    case "target":
      return pageTarget();

    case "kalender":
      return session.role === "bendahara" ? pageKalender() : pageDashboard();

    case "qris":
      return pageQris();

    case "pengaturan":
      return pagePengaturan();

    case "kelolaakun":
      return session.role === "bendahara" ? pageKelolaAkun() : pageDashboard();

    default:
      return pageDashboard();
  }
}

/* ============================================================
   DASHBOARD
============================================================ */

function posTabs() {
  return `
    <div class="tabs tabs-pos" role="group" aria-label="Pilih pos dana">

      ${POS.map(
        (p) => `
          <button
            data-act="setPos"
            data-val="${p.key}"
            class="${ui.pos === p.key ? "active" : ""}"
            aria-pressed="${ui.pos === p.key ? "true" : "false"}"
          >
            ${p.icon}
            ${p.label}
          </button>
        `,
      ).join("")}

    </div>
  `;
}

function pageDashboard() {
  if (session.role === "siswa") {
    return dashboardSiswa();
  }

  const pos = myPos();

  if (pos === "Rutin") {
    return dashboardUtama();
  }

  return dashboardPos(pos);
}

// Panel saldo: satu angka utama + rincian bertitik-titik seperti buku kas.
//   baris: [{ ikon, k, v, teks }]  (teks=true -> v ditampilkan apa adanya)
function panelSaldo({ ikon, judul, nilai, sub, baris, compact }) {
  const minus = Number(nilai) < 0;

  return `
    <section class="card saldo ${compact ? "compact" : ""}">

      <div>

        <div class="lbl">
          ${ikon}
          ${esc(judul)}
        </div>

        <div class="fig ${minus ? "neg" : ""}">
          ${rupiahFig(nilai)}
        </div>

        ${sub ? `<div class="sub">${esc(sub)}</div>` : ""}

        ${
          minus
            ? `<div class="sub neg">${icon("tanda", "ico-sm")} Pengeluaran lebih besar dari pemasukan.</div>`
            : ""
        }

      </div>

      <dl class="leaders">

        ${baris
          .map(
            (b) => `
              <div class="leader">

                <dt class="k">${b.ikon || ""}${esc(b.k)}</dt>

                <i class="dots" aria-hidden="true"></i>

                <dd class="v ${b.teks ? "teks" : "rp"}">
                  ${b.teks ? esc(b.v) : rupiah(b.v)}
                </dd>

              </div>
            `,
          )
          .join("")}

      </dl>

    </section>
  `;
}

function dashboardUtama() {
  return `
    <div class="page-head">

      <h1>
        Dashboard Bendahara Utama
      </h1>

      <p>
        Ringkasan kas kelas TKJT 1
      </p>

    </div>

    ${panelSaldo({
      ikon: icon("dompet"),
      judul: "Saldo kas rutin",
      nilai: saldoPos("Rutin"),
      sub: "Pos kamu",
      baris: [
        {
          ikon: icon("bendera"),
          k: "Saldo dana acara",
          v: saldoPos("Acara"),
        },
        {
          ikon: icon("bulan-bintang"),
          k: "Saldo dana kurban",
          v: saldoPos("Kurban"),
        },
      ],
    })}

    ${statusPembayaranBlock("Rutin")}
  `;
}

function dashboardPos(pos) {
  const meta = posMeta(pos);

  const curMonth = todayStr().slice(0, 7);

  const masuk = DB.kasMasuk
    .filter((x) => x.pos === pos && monthKey(x.tanggal) === curMonth)
    .reduce((s, x) => s + Number(x.jumlah), 0);

  const keluar = DB.pengeluaran
    .filter((x) => x.pos === pos && monthKey(x.tanggal) === curMonth)
    .reduce((s, x) => s + Number(x.jumlah), 0);

  const targets = DB.target
    .filter((t) => t.pos === pos)
    .sort((a, b) => b.createdAt - a.createdAt);

  const target = targets[0];

  return `
    <div class="page-head">

      <h1>
        Dashboard
        ${esc(session.jabatan)}
      </h1>

      <p>
        Pengelolaan

        <span class="pos-chip">
          ${meta.icon}
          ${meta.label}
        </span>

      </p>

    </div>

    ${panelSaldo({
      ikon: meta.icon,
      judul: `Saldo ${meta.label}`,
      nilai: saldoPos(pos),
      sub: "Masuk dikurangi keluar",
      baris: [
        { ikon: icon("masuk"), k: "Masuk bulan ini", v: masuk },
        { ikon: icon("keluar"), k: "Keluar bulan ini", v: keluar },
        {
          ikon: icon("target"),
          k: "Target utama",
          v: target ? target.nama : "Belum ada",
          teks: true,
        },
      ],
    })}

    ${statusPembayaranBlock(pos)}
  `;
}

function dashboardSiswa() {
  const per = periodeAktif("Rutin");

  const myPay = DB.kasMasuk.filter(
    (x) => x.pos === "Rutin" && x.siswa === session.nama,
  );

  const myTotal = myPay.reduce((s, x) => s + Number(x.jumlah), 0);

  const sudah = sudahBayarPeriode("Rutin", session.nama, per);

  const nominal = Number(nominalPos("Rutin").jumlah) || 0;

  return `
    <div class="page-head">

      <h1>
        Halo,
        ${tampilNama(session.nama.split(" ")[0])}
      </h1>

      <p>
        Ringkasan kas kelas
        TKJT 1
      </p>

    </div>

    ${bannerPengingat()}

    <section class="card status-saya ${sudah ? "lunas" : "belum"}">

      <div class="lbl">
        Status saya
      </div>

      <div class="ss-state">
        ${icon(sudah ? "centang" : "jam")}
        ${sudah ? "Sudah bayar" : "Belum bayar"}
      </div>

      <div class="sub">
        Kas rutin ${esc(per.nama)}${nominal ? `, ${rupiah(nominal)} per bulan` : ""}
      </div>

      ${
        sudah
          ? ""
          : `
            <div class="form-actions">

              <button
                class="btn btn-primary"
                data-act="goPos"
                data-view="qris"
                data-val="Rutin"
              >
                ${icon("qris")}
                Bayar lewat QRIS
              </button>

              <button
                class="btn btn-outline"
                data-act="goPos"
                data-view="kasmasuk"
                data-val="Rutin"
              >
                ${icon("unggah")}
                Kirim bukti bayar
              </button>

            </div>
          `
      }

    </section>

    ${panelSaldo({
      ikon: icon("dompet"),
      judul: "Saldo kas rutin",
      nilai: saldoPos("Rutin"),
      compact: true,
      baris: [
        {
          ikon: icon("bendera"),
          k: "Saldo dana acara",
          v: saldoPos("Acara"),
        },
        {
          ikon: icon("bulan-bintang"),
          k: "Saldo dana kurban",
          v: saldoPos("Kurban"),
        },
      ],
    })}

    <div class="section-title">

      <h2>
        Riwayat setoran saya
      </h2>

      <span class="muted">
        Total kontribusi ${rupiah(myTotal)}, ${myPay.length} kali setoran
      </span>

    </div>

    ${renderKasTable(
      myPay.slice().sort((a, b) => b.tanggal.localeCompare(a.tanggal)),
      false,
      true,
    )}
  `;
}

/* ============================================================
   STATUS PEMBAYARAN
   Papan absen (38 petak bernomor) + daftar. Lunas = petak terisi
   dengan centang; belum bayar = petak berbingkai kuning dengan
   jam. Petak dipilih untuk melihat nama (layar sentuh).
============================================================ */

function statusPembayaranBlock(pos) {
  const meta = posMeta(pos);

  if (frekuensiPos(pos) === "Sesuai kebutuhan") {
    return `
      <div class="section-title">

        <h2>
          Kontribusi
          ${meta.label}
        </h2>

      </div>

      <div class="table-wrap">

        <div class="empty">

          <div class="big">
            ${meta.icon}
          </div>

          Dana acara dikumpulkan
          sesuai kebutuhan.

        </div>

      </div>
    `;
  }

  // Periode berjalan: Kas Rutin = bulan ini, Dana Kurban = hari ini.
  // Begitu bulan/hari berganti, semua siswa otomatis kembali "Belum bayar".
  const per = periodeAktif(pos);

  const lunas = new Set(
    SISWA_MASTER.filter((name) => sudahBayarPeriode(pos, name, per)),
  );

  const total = SISWA_MASTER.length;

  const belumBayar = total - lunas.size;

  const bisaIngatkan = bolehMengingatkan(pos);

  const filter = ["semua", "belum", "lunas"].includes(ui.filterStatus)
    ? ui.filterStatus
    : "semua";

  const pilih = SISWA_MASTER.includes(ui.siswaPilih) ? ui.siswaPilih : null;

  const petak = SISWA_MASTER.map((name, i) => {
    const sudah = lunas.has(name);

    return `
      <li>
        <button
          type="button"
          class="tile ${sudah ? "lunas" : "belum"}"
          data-act="pilihSiswa"
          data-nama="${esc(name)}"
          data-no="${i + 1}"
          data-status="${sudah ? "Lunas" : "Belum bayar"}"
          aria-pressed="${pilih === name ? "true" : "false"}"
          aria-label="Nomor ${i + 1}, ${tampilNama(name)}, ${sudah ? "lunas" : "belum bayar"}"
          style="--i:${i}"
        >
          <span class="n">${i + 1}</span>
          ${icon(sudah ? "centang" : "jam")}
        </button>
      </li>
    `;
  }).join("");

  const keterangan = pilih
    ? (() => {
        const sudah = lunas.has(pilih);

        const terkirim =
          bisaIngatkan && !sudah ? pengingatTerkirim(pos, pilih) : null;

        return `
          <div class="papan-cap">

            <div class="cap-name">
              <span>No. ${SISWA_MASTER.indexOf(pilih) + 1}</span>
              ${tampilNama(pilih)}
            </div>

            <div class="cap-aksi">

              ${badgeStatus(sudah)}

              ${
                bisaIngatkan && !sudah
                  ? `
                    <button
                      class="btn btn-soft btn-sm no-print"
                      data-act="kirimPengingat"
                      data-nama="${esc(pilih)}"
                    >
                      ${icon("kirim")}
                      ${terkirim ? "Ingatkan lagi" : "Ingatkan"}
                    </button>
                  `
                  : ""
              }

            </div>

            <button
              type="button"
              class="icon-btn no-print"
              data-act="pilihSiswa"
              data-nama="${esc(pilih)}"
              title="Tutup keterangan"
              aria-label="Tutup keterangan"
            >
              ${icon("tutup")}
            </button>

          </div>
        `;
      })()
    : "";

  const chips = [
    ["semua", "Semua", total],
    ["belum", "Belum bayar", belumBayar],
    ["lunas", "Lunas", lunas.size],
  ]
    .map(
      ([kunci, label, jumlah]) => `
        <button
          type="button"
          class="chip"
          data-act="filterStatus"
          data-val="${kunci}"
          aria-pressed="${filter === kunci ? "true" : "false"}"
        >
          ${label}
          <b>${jumlah}</b>
        </button>
      `,
    )
    .join("");

  const daftar = SISWA_MASTER.map((name, i) => ({
    name,
    no: i + 1,
    sudah: lunas.has(name),
  })).filter(
    (r) => filter === "semua" || (filter === "belum" ? !r.sudah : r.sudah),
  );

  const barisSiswa = daftar
    .map(({ name, no, sudah }) => {
      const terkirim =
        bisaIngatkan && !sudah ? pengingatTerkirim(pos, name) : null;

      return `
        <tr class="${pilih === name ? "sorot" : ""}">

          <td data-label="No">
            ${no}
          </td>

          <td data-label="Nama">
            ${tampilNama(name)}
          </td>

          <td data-label="Status">
            ${badgeStatus(sudah)}
          </td>

          ${
            bisaIngatkan
              ? `
                <td data-label="Pengingat" class="no-print ${sudah ? "kosong" : ""}">
                  ${
                    sudah
                      ? `<span class="muted">-</span>`
                      : `
                        <div class="remind-cell">

                          <button
                            class="btn btn-soft btn-sm"
                            data-act="kirimPengingat"
                            data-nama="${esc(name)}"
                          >
                            ${icon("kirim")}
                            ${terkirim ? "Ingatkan lagi" : "Ingatkan"}
                          </button>

                          ${
                            terkirim
                              ? `<span class="remind-sent">${icon("centang")}Terkirim ${esc(fmtWaktu(terkirim.createdAt, true))}</span>`
                              : ""
                          }

                        </div>
                      `
                  }
                </td>
              `
              : ""
          }

        </tr>
      `;
    })
    .join("");

  return `
    <div class="section-title status-head">

      <div>

        <h2>
          Status pembayaran
          ${meta.label},
          ${per.label}
        </h2>

        <div class="period-note">
          ${icon("kalender", "ico-sm")}
          ${esc(per.nama)}, ${per.info}
        </div>

      </div>

      <div class="status-actions">

        <span class="muted">
          ${lunas.size}/${total} lunas
        </span>

        ${
          bisaIngatkan
            ? `
              <button
                class="btn btn-soft btn-sm no-print"
                data-act="kirimPengingatSemua"
                ${belumBayar ? "" : "disabled"}
              >
                ${icon("kirim")}
                Ingatkan semua (${belumBayar})
              </button>
            `
            : ""
        }

      </div>

    </div>

    <section
      class="card papan"
      aria-label="Papan absen, ${lunas.size} dari ${total} siswa lunas"
    >

      <ol class="papan-grid ${ui.papanAnim ? "anim" : ""}">
        ${petak}
      </ol>

      ${keterangan}

      <div class="papan-legend">

        <span><i class="k-lunas"></i>Lunas</span>

        <span><i class="k-belum"></i>Belum bayar</span>

        <span class="no-print">Pilih nomor untuk melihat namanya.</span>

      </div>

      <div class="tip" role="tooltip" hidden></div>

    </section>

    <div class="chips no-print" role="group" aria-label="Tampilkan siswa">
      ${chips}
    </div>

    ${
      daftar.length
        ? `
          <div class="table-wrap status-wrap">

            <table class="status-table ${bisaIngatkan ? "has-aksi" : ""}">

              <thead>

                <tr>
                  <th class="c-no">No</th>
                  <th>Nama</th>
                  <th>Status</th>
                  ${bisaIngatkan ? `<th class="no-print">Pengingat</th>` : ""}
                </tr>

              </thead>

              <tbody>

                ${barisSiswa}

              </tbody>

            </table>

          </div>
        `
        : `
          <div class="table-wrap">

            <div class="empty">

              <div class="big">
                ${icon(filter === "lunas" ? "jam" : "centang")}
              </div>

              ${
                filter === "lunas"
                  ? "Belum ada yang lunas pada periode ini."
                  : "Semua siswa sudah lunas."
              }

            </div>

          </div>
        `
    }
  `;
}

/* ============================================================
   KAS MASUK
============================================================ */

function pageKasMasuk() {
  const canManage = session.role === "bendahara" && myPos() === ui.pos;

  const editing = DB.kasMasuk.find((x) => x.id === ui.editKasId);

  const meta = posMeta(ui.pos);

  const nom = nominalPos(ui.pos);

  const rows = DB.kasMasuk
    .filter((x) => x.pos === ui.pos)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));

  const pending = DB.bukti.filter(
    (b) => b.pos === ui.pos && b.status === "pending",
  );

  return `
    <div class="page-head">

      <h1>
        Kas Masuk
      </h1>

      <p>
        Total
        ${meta.label}:
        <strong class="rp">
          ${rupiah(totalMasukPos(ui.pos))}
        </strong>
      </p>

    </div>

    ${posTabs()}

    ${
      canManage && pending.length
        ? `
          <div class="form-card">

            <h2 class="card-title">
              ${icon("jam")}
              Menunggu verifikasi
              (${pending.length})
            </h2>

            <ul class="verif">

              ${pending
                .map(
                  (b) => `
                    <li class="verif-item">

                      <button
                        type="button"
                        class="verif-thumb"
                        data-act="lihatBukti"
                        data-id="${b.id}"
                        title="Lihat foto bukti"
                      >
                        <img
                          src="${esc(b.gambar)}"
                          alt="Foto bukti QRIS"
                        >
                      </button>

                      <div class="verif-info">

                        <strong>
                          ${tampilNama(b.siswa)}
                        </strong>

                        <div class="muted">
                          ${fmtDate(b.tanggal)},
                          ${rupiah(b.jumlah)}
                        </div>

                      </div>

                      <div class="verif-aksi">

                        <button
                          class="btn btn-sm btn-primary"
                          data-act="approveBukti"
                          data-id="${b.id}"
                        >
                          Terima
                        </button>

                        <button
                          class="btn btn-sm btn-danger"
                          data-act="rejectBukti"
                          data-id="${b.id}"
                        >
                          Tolak
                        </button>

                      </div>

                    </li>
                  `,
                )
                .join("")}

            </ul>

          </div>
        `
        : ""
    }

    ${
      canManage
        ? `
          <div class="form-card">

            <h2 class="card-title">
              ${editing ? icon("pensil") : icon("tambah")}
              ${editing ? "Edit setoran" : "Catat kas masuk"}
            </h2>

            <form
              data-form="kasMasuk"
            >

              <input
                type="hidden"
                name="id"
                value="${editing ? editing.id : ""}"
              >

              <div
                class="
                  form-row
                  cols-3
                "
              >

                <div class="field">

                  <label>
                    Siswa
                  </label>

                  <select
                    name="siswa"
                    required
                  >

                    <option value="">
                      Pilih siswa...
                    </option>

                    ${SISWA_MASTER.map(
                      (name) => `
                        <option
                          value="${esc(name)}"
                          ${editing && editing.siswa === name ? "selected" : ""}
                        >
                          ${tampilNama(name)}
                        </option>
                      `,
                    ).join("")}

                  </select>

                </div>

                <div class="field">

                  <label>
                    Tanggal
                  </label>

                  <input
                    type="date"
                    name="tanggal"
                    value="${editing ? editing.tanggal : todayStr()}"
                    required
                  >

                </div>

                <div class="field">

                  <label>
                    Jumlah
                  </label>

                  <input
                    type="number"
                    min="0"
                    name="jumlah"
                    value="${editing ? editing.jumlah : nom.jumlah || ""}"
                    required
                  >

                </div>

              </div>

              <div
                class="
                  form-row
                  cols-2
                "
              >

                <div class="field">

                  <label>
                    Metode
                  </label>

                  <select
                    name="metode"
                  >

                    <option value="Tunai">
                      Tunai
                    </option>

                    <option value="QRIS">
                      QRIS
                    </option>

                  </select>

                </div>

                <div class="field">

                  <label>
                    Keterangan
                  </label>

                  <input
                    name="keterangan"
                    placeholder="Keterangan"
                    value="${editing ? esc(editing.keterangan || "") : ""}"
                  >

                </div>

              </div>

              <div class="form-actions">

                <button
                  class="
                    btn
                    btn-primary
                  "
                  type="submit"
                >
                  ${editing ? "Simpan perubahan" : "Simpan"}
                </button>

                ${
                  editing
                    ? `
                      <button
                        type="button"
                        class="
                          btn
                          btn-outline
                        "
                        data-act="cancelEditKas"
                      >
                        Batal
                      </button>
                    `
                    : ""
                }

              </div>

            </form>

          </div>
        `
        : ""
    }

    ${
      session.role === "siswa"
        ? `
          <div class="form-card">

            <h2 class="card-title">
              ${icon("unggah")}
              Upload bukti transfer
            </h2>

            <form
              data-form="bukti"
            >

              <div
                class="
                  form-row
                  cols-3
                "
              >

                <div class="field">

                  <label>
                    Tanggal
                  </label>

                  <input
                    type="date"
                    name="tanggal"
                    value="${todayStr()}"
                    required
                  >

                </div>

                <div class="field">

                  <label>
                    Jumlah
                  </label>

                  <input
                    type="number"
                    name="jumlah"
                    min="0"
                    value="${nom.jumlah || ""}"
                    required
                  >

                </div>

                <div class="field">

                  <label>
                    Catatan
                  </label>

                  <input
                    name="catatan"
                    placeholder="Catatan"
                  >

                </div>

              </div>

              <div class="field">

                <label>
                  Gambar bukti transfer
                </label>

                <input
                  type="file"
                  name="gambarFile"
                  accept="image/*"
                  required
                >

              </div>

              <button
                class="
                  btn
                  btn-primary
                "
                type="submit"
              >
                Kirim untuk diverifikasi
              </button>

            </form>

          </div>
        `
        : ""
    }

    <div class="section-title">

      <h2>
        Riwayat ${meta.label}
      </h2>

      <span class="muted">
        ${rows.length}
        catatan
      </span>

    </div>

    ${renderKasTable(rows, canManage)}
  `;
}

function renderKasTable(rows, editable, tanpaSiswa = false) {
  if (!rows.length) {
    return `
      <div class="table-wrap">

        <div class="empty">

          <div class="big">
            ${icon("dompet")}
          </div>

          Belum ada catatan
          kas masuk.

        </div>

      </div>
    `;
  }

  return `
    <div class="table-wrap">

      <table class="t-kas${tanpaSiswa ? " saya" : ""}">

        <thead>

          <tr>

            <th>
              Tanggal
            </th>

            ${tanpaSiswa ? "" : "<th>Siswa</th>"}

            <th class="num">
              Jumlah
            </th>

            <th>
              Metode
            </th>

            <th>
              Keterangan
            </th>

            ${editable ? "<th>Aksi</th>" : ""}

          </tr>

        </thead>

        <tbody>

          ${rows
            .map(
              (row) => `
                <tr>

                  <td
                    data-label="Tanggal"
                    class="mono"
                  >
                    ${fmtDate(row.tanggal)}
                  </td>

                  ${
                    tanpaSiswa
                      ? ""
                      : `<td data-label="Siswa">${tampilNama(row.siswa)}</td>`
                  }

                  <td
                    data-label="Jumlah"
                    class="rp"
                  >
                    ${rupiah(row.jumlah)}
                  </td>

                  <td
                    data-label="Metode"
                  >

                    <span class="badge badge-info">
                      ${esc(row.metode || "Tunai")}
                    </span>

                  </td>

                  <td
                    data-label="Keterangan"
                    class="${row.keterangan ? "" : "kosong"}"
                  >
                    ${esc(row.keterangan || "-")}
                  </td>

                  ${
                    editable
                      ? `
                        <td
                          data-label="Aksi"
                        >

                          <button
                            class="
                              btn
                              btn-sm
                              btn-outline
                            "
                            data-act="editKas"
                            data-id="${row.id}"
                            aria-label="Edit setoran ${tampilNama(row.siswa)}"
                          >
                            Edit
                          </button>

                          <button
                            class="
                              btn
                              btn-sm
                              btn-danger
                            "
                            data-act="delKas"
                            data-id="${row.id}"
                            aria-label="Hapus setoran ${tampilNama(row.siswa)}"
                          >
                            Hapus
                          </button>

                        </td>
                      `
                      : ""
                  }

                </tr>
              `,
            )
            .join("")}

        </tbody>

      </table>

    </div>
  `;
}

/* ============================================================
   PENGELUARAN
============================================================ */

function pagePengeluaran() {
  const canManage = session.role === "bendahara" && myPos() === ui.pos;

  const editing = DB.pengeluaran.find((x) => x.id === ui.editPengeluaranId);

  const meta = posMeta(ui.pos);

  const rows = DB.pengeluaran
    .filter((x) => x.pos === ui.pos)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));

  return `
    <div class="page-head">

      <h1>
        Pengeluaran
      </h1>

      <p>
        Total:
        <strong class="rp">
          ${rupiah(totalKeluarPos(ui.pos))}
        </strong>
      </p>

    </div>

    ${posTabs()}

    ${
      canManage
        ? `
          <div class="form-card">

            <h2 class="card-title">
              ${editing ? icon("pensil") : icon("tambah")}
              ${editing ? "Edit pengeluaran" : "Catat pengeluaran"}
            </h2>

            <form
              data-form="pengeluaran"
            >

              <input
                type="hidden"
                name="id"
                value="${editing ? editing.id : ""}"
              >

              <div
                class="
                  form-row
                  cols-3
                "
              >

                <div class="field">

                  <label>
                    Tanggal
                  </label>

                  <input
                    type="date"
                    name="tanggal"
                    value="${editing ? editing.tanggal : todayStr()}"
                    required
                  >

                </div>

                <div class="field">

                  <label>
                    Kategori
                  </label>

                  <select
                    name="kategori"
                  >

                    ${KATEGORI_PENGELUARAN.map(
                      (k) => `
                        <option
                          ${editing && editing.kategori === k ? "selected" : ""}
                        >
                          ${k}
                        </option>
                      `,
                    ).join("")}

                  </select>

                </div>

                <div class="field">

                  <label>
                    Jumlah
                  </label>

                  <input
                    type="number"
                    name="jumlah"
                    min="0"
                    value="${editing ? editing.jumlah : ""}"
                    required
                  >

                </div>

              </div>

              <div class="field">

                <label>
                  Keterangan
                </label>

                <input
                  name="keterangan"
                  required
                  placeholder="mis. beli spidol"
                  value="${editing ? esc(editing.keterangan || "") : ""}"
                >

              </div>

              <div
                class="form-actions"
              >

                <button
                  class="
                    btn
                    btn-primary
                  "
                  type="submit"
                >
                  ${editing ? "Simpan perubahan" : "Simpan"}
                </button>

                ${
                  editing
                    ? `
                      <button
                        type="button"
                        class="
                          btn
                          btn-outline
                        "
                        data-act="cancelEditPengeluaran"
                      >
                        Batal
                      </button>
                    `
                    : ""
                }

              </div>

            </form>

          </div>
        `
        : ""
    }

    <div class="section-title">

      <h2>
        Riwayat pengeluaran
      </h2>

    </div>

    ${
      !rows.length
        ? `
          <div class="table-wrap">

            <div class="empty">

              <div class="big">
                ${icon("keluar")}
              </div>

              Belum ada data
              pengeluaran.

            </div>

          </div>
        `
        : `
          <div class="table-wrap">

            <table class="t-keluar">

              <thead>

                <tr>

                  <th>Tanggal</th>
                  <th>Kategori</th>
                  <th>Keterangan</th>
                  <th class="num">Jumlah</th>

                  ${canManage ? "<th>Aksi</th>" : ""}

                </tr>

              </thead>

              <tbody>

                ${rows
                  .map(
                    (row) => `
                      <tr>

                        <td
                          data-label="Tanggal"
                          class="mono"
                        >
                          ${fmtDate(row.tanggal)}
                        </td>

                        <td
                          data-label="Kategori"
                        >

                          <span
                            class="
                              badge
                              badge-info
                            "
                          >
                            ${esc(row.kategori)}
                          </span>

                        </td>

                        <td
                          data-label="Keterangan"
                        >
                          ${esc(row.keterangan)}
                        </td>

                        <td
                          data-label="Jumlah"
                          class="rp"
                        >
                          ${rupiah(row.jumlah)}
                        </td>

                        ${
                          canManage
                            ? `
                              <td
                                data-label="Aksi"
                              >

                                <button
                                  class="
                                    btn
                                    btn-sm
                                    btn-outline
                                  "
                                  data-act="editPengeluaran"
                                  data-id="${row.id}"
                                >
                                  Edit
                                </button>

                                <button
                                  class="
                                    btn
                                    btn-sm
                                    btn-danger
                                  "
                                  data-act="delPengeluaran"
                                  data-id="${row.id}"
                                >
                                  Hapus
                                </button>

                              </td>
                            `
                            : ""
                        }

                      </tr>
                    `,
                  )
                  .join("")}

              </tbody>

            </table>

          </div>
        `
    }
  `;
}

/* ============================================================
   TARGET
============================================================ */

function pageTarget() {
  const canManage = session.role === "bendahara" && myPos() === ui.pos;

  const editing = DB.target.find((x) => x.id === ui.editTargetId);

  const meta = posMeta(ui.pos);

  const rows = DB.target
    .filter((x) => x.pos === ui.pos)
    .sort((a, b) => b.createdAt - a.createdAt);

  return `
    <div class="page-head">

      <h1>
        Target Pembelian
      </h1>

      <p>
        Rencana penggunaan dana
      </p>

    </div>

    ${posTabs()}

    ${
      canManage
        ? `
          <div class="form-card">

            <h2 class="card-title">
              ${editing ? icon("pensil") : icon("tambah")}
              ${editing ? "Edit target" : "Tambah target"}
            </h2>

            <form
              data-form="target"
            >

              <input
                type="hidden"
                name="id"
                value="${editing ? editing.id : ""}"
              >

              <div
                class="
                  form-row
                  cols-2
                "
              >

                <div class="field">

                  <label>
                    Nama target
                  </label>

                  <input
                    name="nama"
                    required
                    placeholder="Misal. Baju kelas"
                    value="${editing ? esc(editing.nama) : ""}"
                  >

                </div>

                <div class="field">

                  <label>
                    Target dana
                  </label>

                  <input
                    type="number"
                    name="jumlahTarget"
                    min="0"
                    required
                    value="${editing ? editing.jumlahTarget : ""}"
                  >

                </div>

              </div>

              <div
                class="
                  form-row
                  cols-2
                "
              >

                <div class="field">

                  <label>
                    Terkumpul
                  </label>

                  <input
                    type="number"
                    name="terkumpul"
                    min="0"
                    value="${editing ? editing.terkumpul : 0}"
                  >

                </div>

                <div class="field">

                  <label>
                    Keterangan
                  </label>

                  <input
                    name="keterangan"
                    value="${editing ? esc(editing.keterangan || "") : ""}"
                  >

                </div>

              </div>

              <div
                class="form-actions"
              >

                <button
                  class="
                    btn
                    btn-primary
                  "
                  type="submit"
                >
                  ${editing ? "Simpan perubahan" : "Simpan target"}
                </button>

                ${
                  editing
                    ? `
                      <button
                        type="button"
                        class="
                          btn
                          btn-outline
                        "
                        data-act="cancelEditTarget"
                      >
                        Batal
                      </button>
                    `
                    : ""
                }

              </div>

            </form>

          </div>
        `
        : ""
    }

    <div
      class="section-title"
    >

      <h2>
        Daftar target
        ${meta.label}
      </h2>

    </div>

    ${
      !rows.length
        ? `
          <div class="table-wrap">

            <div class="empty">

              <div class="big">
                ${icon("target")}
              </div>

              Belum ada target.

            </div>

          </div>
        `
        : rows
            .map((target) => {
              const percent = Math.max(
                0,
                Math.min(
                  100,
                  Math.round(
                    (target.terkumpul / (target.jumlahTarget || 1)) * 100,
                  ),
                ),
              );

              return `
                <div class="card target-card">

                  <div class="top">

                    <div>

                      <div class="nm">
                        ${esc(target.nama)}
                        ${
                          percent >= 100
                            ? `<span class="badge badge-ok">${icon("centang")}Tercapai</span>`
                            : ""
                        }
                      </div>

                      ${
                        target.keterangan
                          ? `<div class="ket">${esc(target.keterangan)}</div>`
                          : ""
                      }

                    </div>

                    ${
                      canManage
                        ? `
                          <div class="aksi">

                            <button
                              class="btn btn-sm btn-outline"
                              data-act="editTarget"
                              data-id="${target.id}"
                              aria-label="Edit target ${esc(target.nama)}"
                            >
                              Edit
                            </button>

                            <button
                              class="btn btn-sm btn-danger"
                              data-act="delTarget"
                              data-id="${target.id}"
                              aria-label="Hapus target ${esc(target.nama)}"
                            >
                              Hapus
                            </button>

                          </div>
                        `
                        : ""
                    }

                  </div>

                  <div class="meter-row">

                    <div
                      class="progress-outer"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="${percent}"
                      aria-label="Terkumpul ${percent} persen untuk ${esc(target.nama)}"
                    >

                      <div
                        class="progress-inner"
                        style="width:${percent}%"
                      ></div>

                    </div>

                    <span class="pct">${percent}%</span>

                  </div>

                  <div class="nums">

                    <span>
                      Terkumpul:
                      <b class="rp">
                        ${rupiah(target.terkumpul)}
                      </b>
                    </span>

                    <span>
                      Target:
                      <b class="rp">
                        ${rupiah(target.jumlahTarget)}
                      </b>
                    </span>

                  </div>

                </div>
              `;
            })
            .join("")
    }
  `;
}

/* ============================================================
   KALENDER
============================================================ */

function calendarYears() {
  return [2026, 2027, 2028];
}

const BULAN_SINGKAT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

// Satu sel matriks kalender. Status dibaca lewat bentuk (terisi + centang),
// kata tersembunyi untuk pembaca layar, dan title untuk kursor.
function selKalender(kelas, bayar, mendatang, sekarang, judul) {
  const kata = bayar
    ? "Sudah bayar"
    : mendatang
      ? "Belum waktunya"
      : "Belum bayar";

  return `<td class="mx-cell ${kelas} ${bayar ? "paid" : ""} ${mendatang ? "future" : ""} ${sekarang ? "hari-ini" : ""}" title="${esc(judul)}"><i></i><span class="sr-only">${kata}</span></td>`;
}

function legendaKalender() {
  return `
    <div class="calendar-legend">

      <span><i class="k-lunas"></i>Sudah bayar</span>

      <span><i></i>Belum bayar</span>

      <span><i class="k-future"></i>Belum waktunya</span>

    </div>
  `;
}

function pageKalender() {
  const meta = posMeta(ui.pos);

  const nom = nominalPos(ui.pos);

  const years = calendarYears();

  const year = years.includes(Number(ui.kalenderTahun))
    ? Number(ui.kalenderTahun)
    : 2026;

  const month = Math.min(12, Math.max(1, Number(ui.kalenderBulan) || 1));

  const monthName = new Date(year, month - 1, 1).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  const hariIni = todayStr();

  const pilihTahun = (label) => `
    <div class="field">

      <label>
        ${label}
      </label>

      <select data-act-change="setKalenderTahun">

        ${years
          .map(
            (y) => `
              <option
                value="${y}"
                ${y === year ? "selected" : ""}
              >
                Tahun ${y}
              </option>
            `,
          )
          .join("")}

      </select>

    </div>
  `;

  /* =======================================
     ACARA
  ======================================= */

  if (nom.frekuensi === "Sesuai kebutuhan") {
    return `
      <div class="page-head">

        <h1>
          Kalender Pembayaran
        </h1>

        <p>
          ${meta.label}
          dikumpulkan
          sesuai kebutuhan.
        </p>

      </div>

      ${posTabs()}

      <div class="table-wrap">

        <div class="empty">

          <div class="big">
            ${icon("kalender")}
          </div>

          Pos ini tidak memiliki
          jadwal pembayaran tetap.

        </div>

      </div>
    `;
  }

  /* =======================================
     KURBAN HARIAN
  ======================================= */

  if (nom.frekuensi === "Harian") {
    const jumlahHari = new Date(year, month, 0).getDate();

    const hariList = Array.from(
      {
        length: jumlahHari,
      },
      (_, index) => ({
        nomor: index + 1,

        tanggal: `${year}-${String(month).padStart(2, "0")}-${String(
          index + 1,
        ).padStart(2, "0")}`,
      }),
    );

    const kepala = hariList
      .map(
        (h) =>
          `<th scope="col" class="${h.tanggal === hariIni ? "hari-ini" : ""}">${h.nomor}</th>`,
      )
      .join("");

    const baris = SISWA_MASTER.map((name, idx) => {
      const bayar = hariList.map((h) =>
        DB.kasMasuk.some((x) =>
          paymentMatchesDay(x, name, year, month, h.nomor, ui.pos),
        ),
      );

      return `
        <tr class="calendar-person">

          <th scope="row" class="mx-no">${idx + 1}</th>

          <th scope="row" class="mx-nama" title="${tampilNama(name)}">${tampilNama(name)}</th>

          <td class="mx-total">${bayar.filter(Boolean).length}/${jumlahHari}</td>

          ${hariList
            .map((h, k) =>
              selKalender(
                "calendar-day",
                bayar[k],
                h.tanggal > hariIni,
                h.tanggal === hariIni,
                `${fmtDate(h.tanggal)}: ${bayar[k] ? "sudah bayar" : "belum bayar"}`,
              ),
            )
            .join("")}

        </tr>
      `;
    }).join("");

    return `
      <div class="page-head">

        <h1>
          Kalender Pembayaran
        </h1>

        <p>
          ${meta.label},
          <strong>
            ${rupiah(nom.jumlah)}
          </strong>
          per hari
        </p>

      </div>

      ${posTabs()}

      <div class="cal-bar">

        ${pilihTahun("Tahun")}

        <div class="field">

          <label>
            Bulan
          </label>

          <select data-act-change="setKalenderBulan">

            ${Array.from(
              {
                length: 12,
              },
              (_, index) => {
                const nama = new Date(2026, index, 1).toLocaleDateString(
                  "id-ID",
                  {
                    month: "long",
                  },
                );

                return `
                  <option
                    value="${index + 1}"
                    ${index + 1 === month ? "selected" : ""}
                  >
                    ${nama}
                  </option>
                `;
              },
            ).join("")}

          </select>

        </div>

        ${legendaKalender()}

      </div>

      <div
        class="section-title"
      >

        <h2>
          ${monthName}
        </h2>

      </div>

      <div
        class="matrix-wrap calendar-list"
        role="region"
        aria-label="Kalender pembayaran ${meta.label} ${monthName}"
        tabindex="0"
      >

        <table class="matrix hari">

          <thead>

            <tr>
              <th scope="col" class="mx-no">No</th>
              <th scope="col" class="mx-nama">Nama</th>
              <th scope="col" class="mx-total">Total</th>
              ${kepala}
            </tr>

          </thead>

          <tbody>
            ${baris}
          </tbody>

        </table>

      </div>
    `;
  }

  /* =======================================
     BULANAN / MINGGUAN
  ======================================= */

  const weekly = nom.frekuensi === "Mingguan";

  const [tahunIni, bulanIni] = hariIni.split("-").map(Number);

  const kepalaBulan = BULAN_SINGKAT.map(
    (nama, i) =>
      `<th scope="col" class="${year === tahunIni && i + 1 === bulanIni ? "hari-ini" : ""}">${nama}</th>`,
  ).join("");

  const baris = SISWA_MASTER.map((name, idx) => {
    const bayar = BULAN_SINGKAT.map((_, index) =>
      DB.kasMasuk.some((x) =>
        calendarMonthHasPayment(x, name, year, index + 1, weekly),
      ),
    );

    return `
      <tr class="calendar-person">

        <th scope="row" class="mx-no">${idx + 1}</th>

        <th scope="row" class="mx-nama" title="${tampilNama(name)}">${tampilNama(name)}</th>

        <td class="mx-total">${bayar.filter(Boolean).length}/12</td>

        ${BULAN_SINGKAT.map((nama, index) =>
          selKalender(
            "calendar-period",
            bayar[index],
            year > tahunIni || (year === tahunIni && index + 1 > bulanIni),
            year === tahunIni && index + 1 === bulanIni,
            `${new Date(year, index, 1).toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })}: ${bayar[index] ? "sudah bayar" : "belum bayar"}`,
          ),
        ).join("")}

      </tr>
    `;
  }).join("");

  return `
    <div class="page-head">

      <h1>
        Kalender Pembayaran
      </h1>

      <p>
        Riwayat pembayaran
        ${meta.label}
      </p>

    </div>

    ${posTabs()}

    <div class="cal-bar">

      ${pilihTahun("Pilih tahun")}

      ${legendaKalender()}

    </div>

    <div
      class="matrix-wrap calendar-list"
      role="region"
      aria-label="Kalender pembayaran ${meta.label} tahun ${year}"
      tabindex="0"
    >

      <table class="matrix bulan">

        <thead>

          <tr>
            <th scope="col" class="mx-no">No</th>
            <th scope="col" class="mx-nama">Nama</th>
            <th scope="col" class="mx-total">Total</th>
            ${kepalaBulan}
          </tr>

        </thead>

        <tbody>
          ${baris}
        </tbody>

      </table>

    </div>
  `;
}

/* ============================================================
   QRIS
============================================================ */

function pageQris() {
  const canManage = session.role === "bendahara" && myPos() === ui.pos;

  const meta = posMeta(ui.pos);

  const q = DB.settings.qris[ui.pos];

  return `
    <div class="page-head">

      <h1>
        QRIS
      </h1>

      <p>
        QRIS pembayaran
        ${meta.label}
      </p>

    </div>

    ${posTabs()}

    <div class="card qris-box">

      <div class="pos-chip">
        ${meta.icon}
        ${meta.label}
      </div>

      ${
        q
          ? `
            <img
              src="${esc(q)}"
              alt="QRIS ${meta.label}"
            >
          `
          : `
            <div class="qris-placeholder">

              ${icon("gambar")}

              Belum ada QRIS

            </div>
          `
      }

    </div>

    ${
      canManage
        ? `
          <div class="form-card">

            <h2 class="card-title">
              Kelola QRIS
            </h2>

            <form
              data-form="qris"
            >

              <div
                class="field"
              >

                <label>
                  Upload gambar QRIS
                </label>

                <input
                  type="file"
                  name="qrisFile"
                  accept="image/*"
                >

              </div>

              <div
                class="
                  form-actions
                "
              >

                <button
                  class="
                    btn
                    btn-primary
                  "
                  type="submit"
                >
                  Simpan QRIS
                </button>

                ${
                  q
                    ? `
                      <button
                        type="button"
                        class="
                          btn
                          btn-outline
                        "
                        data-act="removeQris"
                      >
                        Hapus QRIS
                      </button>
                    `
                    : ""
                }

              </div>

            </form>

          </div>
        `
        : ""
    }
  `;
}

function pageKelolaAkun() {
  if (!session || session.role !== "bendahara") return pageDashboard();

  const accounts = DB.accounts
    .slice()
    .sort(
      (a, b) =>
        String(a.role).localeCompare(String(b.role)) ||
        String(a.nama).localeCompare(String(b.nama)),
    );

  return `
    <div class="page-head">

      <h1>Kelola Akun</h1>

      <p>
        Lihat akun yang sudah terdaftar dan reset password bila ada yang lupa.
        Halaman ini hanya untuk bendahara.
      </p>

    </div>

    <div class="form-card">

      <h2 class="card-title">
        ${icon("akun")}
        Daftar akun (${accounts.length})
      </h2>

      ${
        accounts.length
          ? `
            <div class="table-wrap">

              <table class="t-akun">

                <thead>

                  <tr>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Peran</th>
                    <th>Aksi</th>
                  </tr>

                </thead>

                <tbody>

                  ${accounts
                    .map(
                      (a) => `
                        <tr>

                          <td data-label="Nama">${tampilNama(a.nama)}</td>

                          <td data-label="Username">${esc(a.username)}</td>

                          <td data-label="Peran">${a.role === "bendahara" ? esc(a.jabatan || "Bendahara") : "Siswa"}</td>

                          <td data-label="Aksi">

                            <div class="form-actions">

                              <button
                                class="btn btn-outline btn-sm"
                                data-act="resetAkun"
                                data-id="${a.id}"
                                aria-label="Reset password ${tampilNama(a.nama)}"
                              >
                                Reset password
                              </button>

                              ${
                                a.id !== session.id
                                  ? `
                                    <button
                                      class="btn btn-danger btn-sm"
                                      data-act="hapusAkun"
                                      data-id="${a.id}"
                                      aria-label="Hapus akun ${tampilNama(a.nama)}"
                                    >
                                      Hapus
                                    </button>
                                  `
                                  : `<span class="muted">Akun Anda</span>`
                              }

                            </div>

                          </td>

                        </tr>
                      `,
                    )
                    .join("")}

                </tbody>

              </table>

            </div>
          `
          : `<div class="empty">Belum ada akun terdaftar.</div>`
      }

    </div>

    <div class="form-card">

      <h2 class="card-title">
        ${icon("info")}
        Informasi
      </h2>

      <p class="muted">
        Reset password akan mengatur password akun menjadi
        <strong>reset</strong>. Minta pemilik akun segera menggantinya di
        Pengaturan.
      </p>

    </div>
  `;
}

/* ============================================================
   PENGATURAN
============================================================ */

function pagePengaturan() {
  const isB = session.role === "bendahara";

  const me = DB.accounts.find((a) => a.id === session.id);

  const currentUsername = (me && me.username) || session.username || "";

  const myNom = isB ? nominalPos(myPos()) : null;

  return `
    <div
      class="
        page-head
      "
    >

      <h1>
        Pengaturan
      </h1>

      <p>
        Ubah username, password,
        dan pengaturan aplikasi.
      </p>

    </div>

    <div
      class="
        settings-block
      "
    >

      <h2 class="card-title">
        Ganti username
      </h2>

      <div class="form-card">

        <form
          data-form="gantiUsername"
        >

          <div
            class="
              form-row
              cols-3
            "
          >

            <div class="field">

              <label>
                Username saat ini
              </label>

              <input
                value="${esc(currentUsername)}"
                disabled
              >

            </div>

            <div class="field">

              <label>
                Username baru
              </label>

              <input
                type="text"
                name="username"
                autocomplete="off"
                autocapitalize="none"
                spellcheck="false"
                required
              >

            </div>

            <div class="field">

              <label>
                Password (untuk konfirmasi)
              </label>

              <input
                type="password"
                name="password"
                autocomplete="current-password"
                required
              >

            </div>

          </div>

          <button
            class="
              btn
              btn-primary
            "
            type="submit"
          >
            Simpan username
          </button>

        </form>

      </div>

    </div>

    <div
      class="
        settings-block
      "
    >

      <h2 class="card-title">
        Ganti password
      </h2>

      <div class="form-card">

        <form
          data-form="gantiPassword"
        >

          <div
            class="
              form-row
              cols-3
            "
          >

            <div class="field">

              <label>
                Password lama
              </label>

              <input
                type="password"
                name="lama"
                required
              >

            </div>

            <div class="field">

              <label>
                Password baru
              </label>

              <input
                type="password"
                name="baru"
                minlength="4"
                required
              >

            </div>

            <div class="field">

              <label>
                Ulangi password baru
              </label>

              <input
                type="password"
                name="baru2"
                minlength="4"
                required
              >

            </div>

          </div>

          <button
            class="
              btn
              btn-primary
            "
            type="submit"
          >
            Simpan password
          </button>

        </form>

      </div>

    </div>

    ${
      isB && myPos()
        ? `
          <div
            class="
              settings-block
            "
          >

            <h2 class="card-title">
              Nominal
              ${posMeta(myPos()).label}
            </h2>

            ${
              myPos() === "Acara"
                ? `
                  <div class="locked-note">
                    ${icon("info")}
                    <span>Nominal dana acara diisi manual setiap transaksi.</span>
                  </div>
                `
                : myPos() === "Kurban"
                  ? `
                    <div class="locked-note">
                      ${icon("info")}
                      <span>Nominal Kurban: <strong>Rp 1.000 per hari</strong></span>
                    </div>
                  `
                  : `
                    <div
                      class="
                        form-card
                      "
                    >

                      <form
                        data-form="nominal"
                      >

                        <div
                          class="
                            form-row
                            cols-2
                          "
                        >

                          <div
                            class="field"
                          >

                            <label>
                              Nominal
                            </label>

                            <input
                              type="number"
                              name="nominal"
                              min="0"
                              value="${myNom.jumlah}"
                              required
                            >

                          </div>

                          <div
                            class="field"
                          >

                            <label>
                              Frekuensi
                            </label>

                            <input
                              value="${esc(myNom.frekuensi)}"
                              disabled
                            >

                          </div>

                        </div>

                        <button
                          class="
                            btn
                            btn-primary
                          "
                          type="submit"
                        >
                          Simpan
                        </button>

                      </form>

                    </div>
                  `
            }

          </div>
        `
        : ""
    }
  `;
}

/* ============================================================
   EVENTS
============================================================ */

function afterRender() {
  const app = document.getElementById("app");

  app
    .querySelectorAll("[data-act]")
    .forEach((element) => element.addEventListener("click", onAction));

  app
    .querySelectorAll("[data-act-change]")
    .forEach((element) => element.addEventListener("change", onActionChange));

  app
    .querySelectorAll("form[data-form]")
    .forEach((form) => form.addEventListener("submit", onSubmit));

  hubungkanLabel();

  pasangTooltipPapan();

  gulirKeKolomIni();

  fokusKolomAuth();

  // animasi petak hanya dimainkan sekali, saat dashboard dibuka
  ui.papanAnim = false;
}

// Setelah masuk/daftar gagal, arahkan fokus ke kolom yang perlu dibetulkan
// (pesan galatnya sudah dibacakan lewat role="alert").
function fokusKolomAuth() {
  if (!ui.fokusAuth) {
    return;
  }

  const kolom = document.querySelector(
    '#app .auth-card form [name="' + ui.fokusAuth + '"]',
  );

  ui.fokusAuth = null;

  if (kolom) {
    // hubungkan kolom dengan pesan galat agar pembaca layar ikut membacakannya
    kolom.setAttribute("aria-invalid", "true");

    kolom.setAttribute("aria-describedby", "auth-pesan");

    kolom.focus();
  }
}

// Kalender: geser matriks supaya hari/bulan ini langsung terlihat di HP
// (dua kolom pertama menempel, sisanya bisa digeser).
function gulirKeKolomIni() {
  document.querySelectorAll("#app .matrix-wrap").forEach((wrap) => {
    const kolom = wrap.querySelector("thead th.hari-ini");

    if (!kolom || wrap.scrollWidth <= wrap.clientWidth) {
      return;
    }

    const tetap = [".mx-no", ".mx-nama"].reduce((jumlah, selektor) => {
      const sel = wrap.querySelector(`thead ${selektor}`);

      return jumlah + (sel ? sel.offsetWidth : 0);
    }, 0);

    const ruang = wrap.clientWidth - tetap;

    wrap.scrollLeft = Math.max(
      0,
      kolom.offsetLeft - tetap - (ruang - kolom.offsetWidth) / 2,
    );
  });
}

// Hubungkan setiap <label> dengan isiannya (for/id) supaya mengetuk label
// memfokuskan isian dan pembaca layar membacakan namanya.
let hitungIsian = 0;

function hubungkanLabel() {
  document.querySelectorAll("#app .field").forEach((kotak) => {
    const label = kotak.querySelector("label");

    const isian = kotak.querySelector(
      "input:not([type=hidden]), select, textarea",
    );

    if (!label || !isian || label.htmlFor) {
      return;
    }

    if (!isian.id) {
      hitungIsian += 1;

      isian.id = "fld-" + hitungIsian;
    }

    label.htmlFor = isian.id;
  });
}

// Satu tooltip untuk seluruh papan absen: muncul saat kursor mouse berada di
// atas petak atau saat petak difokus lewat papan ketik. Isinya dipasang dengan
// textContent (nama berasal dari data, bukan HTML).
function pasangTooltipPapan() {
  const papan = document.querySelector("#app .papan");

  const tip = papan && papan.querySelector(".tip");

  if (!papan || !tip) {
    return;
  }

  const tampil = (tile) => {
    const nama = document.createElement("b");

    nama.textContent = `No. ${tile.dataset.no}, ${titleCase(tile.dataset.nama)}`;

    const status = document.createElement("span");

    status.textContent = tile.dataset.status;

    tip.textContent = "";

    tip.append(nama, status);

    tip.hidden = false;

    const kotak = papan.getBoundingClientRect();

    const petak = tile.getBoundingClientRect();

    let kiri = petak.left - kotak.left + petak.width / 2 - tip.offsetWidth / 2;

    kiri = Math.max(8, Math.min(kiri, kotak.width - tip.offsetWidth - 8));

    let atas = petak.top - kotak.top - tip.offsetHeight - 8;

    if (atas < 4) {
      atas = petak.bottom - kotak.top + 8;
    }

    tip.style.left = kiri + "px";

    tip.style.top = atas + "px";
  };

  const sembunyi = () => {
    tip.hidden = true;
  };

  papan.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") {
        tampil(tile);
      }
    });

    tile.addEventListener("pointerleave", sembunyi);

    tile.addEventListener("focus", () => {
      let keyboard = true;

      try {
        keyboard = tile.matches(":focus-visible");
      } catch (err) {
        keyboard = true;
      }

      if (keyboard) {
        tampil(tile);
      }
    });

    tile.addEventListener("blur", sembunyi);
  });
}

function onActionChange(e) {
  const el = e.currentTarget;

  // trim(): jaga-jaga bila nilai atribut berisi spasi/baris baru
  // (kalau tidak, pilihan Tahun/Bulan di Kalender tidak akan pernah cocok).
  const act = String(el.dataset.actChange || "").trim();

  if (act === "setKalenderTahun") {
    ui.kalenderTahun = Number(e.target.value) || 2026;

    render();

    return;
  }

  if (act === "setKalenderBulan") {
    ui.kalenderBulan = Number(e.target.value) || 1;

    render();

    return;
  }
}

/* ============================================================
   ACTION
============================================================ */

function onAction(e) {
  const el = e.currentTarget;

  const act = el.dataset.act;

  const id = el.dataset.id;

  /* MOBILE MENU */

  if (act === "toggleMobileMenu") {
    ui.mobileMenuOpen = !ui.mobileMenuOpen;

    ui.notifOpen = false;

    ui.notifBaruIds = [];

    render();

    // menu terbuka: fokus masuk ke menu; tertutup: kembali ke tombol menu
    const tujuan = ui.mobileMenuOpen
      ? document.querySelector(".mobile-menu .mobile-menu-close")
      : document.querySelector(".mobile-menu-btn");

    if (tujuan) {
      tujuan.focus();
    }

    return;
  }

  if (act === "closeMobileMenu") {
    ui.mobileMenuOpen = false;

    render();

    const tombolMenu = document.querySelector(".mobile-menu-btn");

    if (tombolMenu && tombolMenu.offsetParent !== null) {
      tombolMenu.focus();
    }

    return;
  }

  /* AUTH */

  if (act === "loginTab") {
    ui.loginTab = el.dataset.val;

    ui.authDraft = null;

    ui.msg = null;

    render();

    return;
  }

  if (act === "regRole") {
    ui.regRole = el.dataset.val;

    ui.authDraft = null;

    ui.msg = null;

    render();

    return;
  }

  if (act === "goForgot") {
    ui.authView = "forgot";
    ui.authDraft = { role: ui.loginTab || "siswa" };
    ui.msg = null;
    ui.fokusAuth = null;
    render();
    return;
  }

  if (act === "goRegister") {
    ui.authView = "register";

    ui.authDraft = null;

    ui.msg = null;

    render();

    return;
  }

  if (act === "goLogin") {
    ui.authView = "login";
    ui.authDraft = null;
    ui.forgotStep = 1;

    ui.msg = null;

    render();

    return;
  }

  /* NAV */

  if (act === "nav") {
    if (
      ["kelolaakun", "kalender"].includes(el.dataset.view) &&
      session.role !== "bendahara"
    )
      return;
    ui.view = el.dataset.view;

    ui.papanAnim = ui.view === "dashboard";

    ui.mobileMenuOpen = false;

    ui.notifOpen = false;

    ui.notifBaruIds = [];

    render();

    window.scrollTo(0, 0);

    return;
  }

  // Pintasan dari dashboard siswa: buka halaman lain pada pos tertentu.
  if (act === "goPos") {
    ui.pos = el.dataset.val || "Rutin";

    ui.view = el.dataset.view || "dashboard";

    ui.editKasId = null;

    ui.mobileMenuOpen = false;

    ui.notifOpen = false;

    ui.notifBaruIds = [];

    render();

    window.scrollTo(0, 0);

    return;
  }

  // Papan absen: pilih / lepas petak siswa.
  if (act === "pilihSiswa") {
    const nama = el.dataset.nama;

    ui.siswaPilih = ui.siswaPilih === nama ? null : nama;

    render();

    return;
  }

  // Filter daftar status: semua / belum bayar / lunas.
  if (act === "filterStatus") {
    ui.filterStatus = el.dataset.val || "semua";

    render();

    return;
  }

  if (act === "setPos") {
    ui.pos = el.dataset.val;

    ui.editKasId = null;

    ui.editPengeluaranId = null;

    ui.editTargetId = null;

    render();

    return;
  }

  if (act === "toggleTheme") {
    toggleTheme();

    return;
  }

  if (act === "logout") {
    doLogout();

    return;
  }

  /* NOTIFIKASI & PENGINGAT */

  if (act === "toggleNotif") {
    if (ui.notifOpen) {
      tutupNotif();
    } else {
      bukaNotif();
    }

    return;
  }

  if (act === "closeNotif") {
    tutupNotif();

    return;
  }

  if (act === "kirimPengingat") {
    kirimPengingat(el.dataset.nama);

    return;
  }

  if (act === "kirimPengingatSemua") {
    kirimPengingatSemua();

    return;
  }

  /* KAS */

  if (act === "editKas") {
    ui.editKasId = id;

    render();

    return;
  }

  if (act === "cancelEditKas") {
    ui.editKasId = null;

    render();

    return;
  }

  if (act === "delKas") {
    confirmAction("Hapus catatan kas?", "Data ini akan dihapus.", () => {
      DB.kasMasuk = DB.kasMasuk.filter((x) => x.id !== id);

      saveDB();

      render();
    });

    return;
  }

  /* PENGELUARAN */

  if (act === "editPengeluaran") {
    ui.editPengeluaranId = id;

    render();

    return;
  }

  if (act === "cancelEditPengeluaran") {
    ui.editPengeluaranId = null;

    render();

    return;
  }

  if (act === "delPengeluaran") {
    confirmAction("Hapus pengeluaran?", "Data ini akan dihapus.", () => {
      DB.pengeluaran = DB.pengeluaran.filter((x) => x.id !== id);

      saveDB();

      render();
    });

    return;
  }

  /* TARGET */

  if (act === "editTarget") {
    ui.editTargetId = id;

    render();

    return;
  }

  if (act === "cancelEditTarget") {
    ui.editTargetId = null;

    render();

    return;
  }

  if (act === "delTarget") {
    confirmAction("Hapus target?", "Target ini akan dihapus.", () => {
      DB.target = DB.target.filter((x) => x.id !== id);

      saveDB();

      render();
    });

    return;
  }

  /* KELOLA AKUN - khusus bendahara */
  if (act === "resetAkun") {
    if (session.role !== "bendahara") return;
    confirmAction(
      "Reset password akun?",
      "Password akun akan diatur menjadi reset.",
      () => {
        const account = DB.accounts.find((a) => a.id === id);
        if (account) {
          account.passHash = hashPass("reset");
          saveDB();
          alert("Password akun berhasil direset menjadi reset.");
        }
        render();
      },
    );
    return;
  }
  if (act === "hapusAkun") {
    if (session.role !== "bendahara" || id === session.id) return;
    confirmAction(
      "Hapus akun?",
      "Akun ini tidak dapat digunakan lagi untuk login.",
      () => {
        DB.accounts = DB.accounts.filter((a) => a.id !== id);
        saveDB();
        render();
      },
    );
    return;
  }

  /* BUKTI */

  if (act === "lihatBukti") {
    if (session.role !== "bendahara") return;
    const bukti = DB.bukti.find((x) => x.id === id);
    if (bukti && bukti.gambar) {
      const win = window.open();
      if (win) {
        win.document.write(
          `<title>Bukti QRIS</title><img src="${bukti.gambar}" style="max-width:100%;height:auto;display:block;margin:auto">`,
        );
        win.document.close();
      } else alert("Izinkan pop-up browser untuk melihat foto bukti.");
    }
    return;
  }

  if (act === "approveBukti") {
    confirmAction("Terima bukti?", "Kas masuk akan dicatat otomatis.", () => {
      const bukti = DB.bukti.find((x) => x.id === id);

      if (bukti) {
        DB.kasMasuk.push({
          id: uid(),

          pos: bukti.pos,

          siswa: bukti.siswa,

          tanggal: bukti.tanggal,

          jumlah: bukti.jumlah,

          metode: "QRIS",

          keterangan: bukti.catatan || "Verifikasi transfer",

          oleh: session.username,

          createdAt: Date.now(),
        });

        bukti.status = "diterima";

        saveDB();
      }

      render();
    });

    return;
  }

  if (act === "rejectBukti") {
    confirmAction("Tolak bukti?", "Bukti akan ditandai ditolak.", () => {
      const bukti = DB.bukti.find((x) => x.id === id);

      if (bukti) {
        bukti.status = "ditolak";

        saveDB();
      }

      render();
    });

    return;
  }

  /* QRIS */

  if (act === "removeQris") {
    DB.settings.qris[ui.pos] = null;

    saveDB();

    render();

    return;
  }

  /* DIALOG */

  if (act === "confirmYes") {
    const callback = ui.confirmDialog && ui.confirmDialog.onYes;

    const balik = ui.fokusSebelumDialog;

    ui.confirmDialog = null;

    ui.fokusSebelumDialog = null;

    closeDialog();

    if (callback) {
      callback();
    }

    pulihkanFokus(balik);

    return;
  }

  if (act === "confirmNo") {
    batalDialog();

    return;
  }
}

/* ============================================================
   SUBMIT
============================================================ */

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const type = form.dataset.form;

  const fd = new FormData(form);

  const val = (key) => (fd.get(key) || "").toString().trim();

  if (type === "login") {
    doLogin(val("role"), val("username"), val("password"));

    return;
  }

  if (type === "forgotPassword") {
    doResetPassword(
      val("role"),
      val("username"),
      val("nama"),
      val("password"),
      val("password2"),
    );
    return;
  }

  if (type === "register") {
    doRegister(
      val("role"),
      val("nama"),
      val("username"),
      val("password"),
      val("password2"),
    );

    return;
  }

  if (type === "kasMasuk") {
    doSaveKas(val);

    return;
  }

  if (type === "pengeluaran") {
    doSavePengeluaran(val);

    return;
  }

  if (type === "target") {
    doSaveTarget(val);

    return;
  }

  if (type === "gantiUsername") {
    doGantiUsername(val("username"), val("password"));

    return;
  }

  if (type === "gantiPassword") {
    doGantiPassword(val("lama"), val("baru"), val("baru2"));

    return;
  }

  if (type === "nominal") {
    doSaveNominal(Number(val("nominal")));

    return;
  }

  if (type === "qris") {
    doSaveQris(form.querySelector('[name="qrisFile"]').files[0]);

    return;
  }

  if (type === "bukti") {
    doSaveBukti(val, form.querySelector('[name="gambarFile"]').files[0]);
  }
}

/* ============================================================
   LOGIN / REGISTER
============================================================ */

function findAccount(username) {
  return DB.accounts.find(
    (account) =>
      account.username.toLowerCase() === String(username || "").toLowerCase(),
  );
}

// Tampilkan galat masuk/daftar tanpa menghapus apa yang sudah diketik
// (kecuali password) dan arahkan fokus ke kolom yang perlu dibetulkan.
function galatAuth(teks, draft, fokus) {
  ui.msg = {
    type: "error",

    text: teks,
  };

  ui.authDraft = draft;

  ui.fokusAuth = fokus;

  render();
}

function doLogin(role, username, password) {
  if (!username || !password) {
    galatAuth("Lengkapi username dan password.", { username }, "username");

    return;
  }

  const account = findAccount(username);

  if (!account || account.role !== role) {
    galatAuth("Akun tidak ditemukan.", { username }, "username");

    return;
  }

  if (account.passHash !== hashPass(password)) {
    galatAuth("Password salah.", { username }, "password");

    return;
  }

  session = {
    id: account.id,

    nama: account.nama,

    role: account.role,

    jabatan: account.jabatan || null,

    username: account.username,
  };

  saveSession();

  ui.view = "dashboard";

  ui.pos = myPos() || "Rutin";

  ui.mobileMenuOpen = false;

  ui.notifOpen = false;

  ui.notifBaruIds = [];

  ui.siswaPilih = null;

  ui.filterStatus = "semua";

  ui.papanAnim = true;

  ui.authDraft = null;

  ui.fokusAuth = null;

  ui.msg = null;

  render();
}

function doLogout() {
  clearSession();

  ui.authDraft = null;

  ui.authView = "login";

  ui.view = "dashboard";

  ui.pos = "Rutin";

  ui.mobileMenuOpen = false;

  ui.notifOpen = false;

  ui.notifBaruIds = [];

  render();
}

function doResetPassword(role, username, nama, password, password2) {
  if (!username || !nama) {
    galatAuth(
      "Username dan nama wajib diisi.",
      { role, username, nama },
      !username ? "username" : "nama",
    );
    return;
  }

  if (password.length < 4) {
    galatAuth(
      "Password baru minimal 4 karakter.",
      { role, username, nama },
      "password",
    );
    return;
  }

  if (password !== password2) {
    galatAuth(
      "Konfirmasi password baru tidak sama.",
      { role, username, nama },
      "password2",
    );
    return;
  }

  const account = findAccount(username);

  if (
    !account ||
    account.role !== role ||
    String(account.nama || "")
      .trim()
      .toLowerCase() !==
      String(nama || "")
        .trim()
        .toLowerCase()
  ) {
    galatAuth(
      "Data akun tidak cocok. Periksa peran, username, dan nama.",
      { role, username, nama },
      "username",
    );
    return;
  }

  account.passHash = hashPass(password);
  saveDB();

  ui.authView = "login";
  ui.loginTab = role;
  ui.authDraft = { username };
  ui.fokusAuth = "username";
  ui.msg = {
    type: "ok",
    text: "Password berhasil diubah. Silakan masuk dengan password baru.",
  };
  render();
}

function doRegister(role, nama, username, password, password2) {
  if (!nama) {
    galatAuth("Pilih nama.", { nama, username }, "nama");

    return;
  }

  if (!username || /\s/.test(username)) {
    galatAuth(
      "Username tidak boleh mengandung spasi.",
      { nama, username },
      "username",
    );

    return;
  }

  if (findAccount(username)) {
    galatAuth("Username sudah dipakai.", { nama, username }, "username");

    return;
  }

  if (password.length < 4) {
    galatAuth("Password minimal 4 karakter.", { nama, username }, "password");

    return;
  }

  if (password !== password2) {
    galatAuth(
      "Konfirmasi password tidak sama.",
      { nama, username },
      "password2",
    );

    return;
  }

  if (!availableNames(role).includes(nama)) {
    galatAuth("Nama sudah terdaftar.", { nama, username }, "nama");

    return;
  }

  const jabatan =
    role === "bendahara"
      ? (BENDAHARA_MASTER.find((b) => b.nama === nama) || {}).jabatan
      : null;

  DB.accounts.push({
    id: uid(),

    nama,

    role,

    jabatan,

    username,

    passHash: hashPass(password),

    createdAt: Date.now(),
  });

  saveDB();

  ui.authView = "login";

  ui.loginTab = role;

  ui.authDraft = null;

  ui.fokusAuth = null;

  ui.msg = {
    type: "ok",

    text: "Akun berhasil dibuat. Silakan masuk.",
  };

  render();
}

/* ============================================================
   SAVE KAS
============================================================ */

function doSaveKas(val) {
  if (!(session.role === "bendahara" && myPos() === ui.pos)) {
    return;
  }

  const id = val("id");

  const siswa = val("siswa");

  const tanggal = val("tanggal");

  const jumlah = Number(val("jumlah"));

  if (!siswa || !tanggal || !jumlah) {
    alert("Lengkapi semua data.");

    return;
  }

  if (id) {
    const row = DB.kasMasuk.find((x) => x.id === id);

    if (!row) {
      return;
    }

    Object.assign(row, {
      siswa,

      tanggal,

      jumlah,

      metode: val("metode"),

      keterangan: val("keterangan"),
    });

    ui.editKasId = null;
  } else {
    DB.kasMasuk.push({
      id: uid(),

      pos: ui.pos,

      siswa,

      tanggal,

      jumlah,

      metode: val("metode") || "Tunai",

      keterangan: val("keterangan"),

      oleh: session.username,

      createdAt: Date.now(),
    });
  }

  saveDB();

  render();
}

/* ============================================================
   PENGELUARAN SAVE
============================================================ */

function doSavePengeluaran(val) {
  if (!(session.role === "bendahara" && myPos() === ui.pos)) {
    return;
  }

  const id = val("id");

  const tanggal = val("tanggal");

  const kategori = val("kategori");

  const keterangan = val("keterangan");

  const jumlah = Number(val("jumlah"));

  if (!tanggal || !keterangan || !jumlah) {
    alert("Lengkapi data.");

    return;
  }

  if (id) {
    const row = DB.pengeluaran.find((x) => x.id === id);

    if (!row) {
      return;
    }

    Object.assign(row, {
      tanggal,

      kategori,

      keterangan,

      jumlah,
    });

    ui.editPengeluaranId = null;
  } else {
    DB.pengeluaran.push({
      id: uid(),

      pos: ui.pos,

      tanggal,

      kategori,

      keterangan,

      jumlah,

      oleh: session.username,

      createdAt: Date.now(),
    });
  }

  saveDB();

  render();
}

/* ============================================================
   TARGET SAVE
============================================================ */

function doSaveTarget(val) {
  if (!(session.role === "bendahara" && myPos() === ui.pos)) {
    return;
  }

  const id = val("id");

  const nama = val("nama");

  const jumlahTarget = Number(val("jumlahTarget"));

  const terkumpul = Number(val("terkumpul") || 0);

  const keterangan = val("keterangan");

  if (!nama || !jumlahTarget) {
    alert("Lengkapi target.");

    return;
  }

  if (id) {
    const row = DB.target.find((x) => x.id === id);

    if (!row) {
      return;
    }

    Object.assign(row, {
      nama,

      jumlahTarget,

      terkumpul,

      keterangan,
    });

    ui.editTargetId = null;
  } else {
    DB.target.push({
      id: uid(),

      pos: ui.pos,

      nama,

      jumlahTarget,

      terkumpul,

      keterangan,

      createdAt: Date.now(),
    });
  }

  saveDB();

  render();
}

/* ============================================================
   USERNAME
============================================================ */

function doGantiUsername(baru, password) {
  const account = DB.accounts.find((a) => a.id === session.id);

  if (!account) {
    alert("Akun tidak ditemukan.");

    return;
  }

  if (account.passHash !== hashPass(password)) {
    alert("Password salah.");

    return;
  }

  if (!baru || /\s/.test(baru)) {
    alert("Username tidak boleh kosong atau mengandung spasi.");

    return;
  }

  if (baru === account.username) {
    alert("Username baru sama dengan username saat ini.");

    return;
  }

  const dipakai = DB.accounts.some(
    (a) =>
      a.id !== account.id && a.username.toLowerCase() === baru.toLowerCase(),
  );

  if (dipakai) {
    alert("Username sudah dipakai.");

    return;
  }

  const lama = account.username;

  account.username = baru;

  /* samakan kolom "oleh" di data lama agar riwayat tetap konsisten */

  [DB.kasMasuk, DB.pengeluaran, DB.target, DB.bukti].forEach((list) => {
    (list || []).forEach((item) => {
      if (item && item.oleh === lama) {
        item.oleh = baru;
      }
    });
  });

  session.username = baru;

  saveDB();

  saveSession();

  alert("Username berhasil diganti.");

  render();
}

/* ============================================================
   PASSWORD
============================================================ */

function doGantiPassword(lama, baru, baru2) {
  const account = DB.accounts.find((a) => a.id === session.id);

  if (!account || account.passHash !== hashPass(lama)) {
    alert("Password lama salah.");

    return;
  }

  if (baru.length < 4) {
    alert("Password minimal 4 karakter.");

    return;
  }

  if (baru !== baru2) {
    alert("Password baru tidak sama.");

    return;
  }

  account.passHash = hashPass(baru);

  saveDB();

  alert("Password berhasil diganti.");

  render();
}

/* ============================================================
   NOMINAL
============================================================ */

function doSaveNominal(nominal) {
  if (!(session.role === "bendahara" && myPos())) {
    return;
  }

  if (myPos() === "Kurban") {
    DB.settings.nominal.Kurban = {
      jumlah: 1000,

      frekuensi: "Harian",
    };

    saveDB();

    render();

    return;
  }

  if (Number.isNaN(nominal) || nominal < 0) {
    alert("Nominal tidak valid.");

    return;
  }

  DB.settings.nominal[myPos()].jumlah = nominal;

  saveDB();

  render();
}

/* ============================================================
   QRIS
============================================================ */

function doSaveQris(file) {
  if (!(session.role === "bendahara" && myPos() === ui.pos)) {
    return;
  }

  if (!file) {
    alert("Pilih gambar QRIS.");

    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const sebelumnya = DB.settings.qris[ui.pos];

    DB.settings.qris[ui.pos] = reader.result;

    try {
      saveDB();
    } catch (err) {
      // penyimpanan peramban penuh: kembalikan QRIS lama dan beri tahu
      DB.settings.qris[ui.pos] = sebelumnya;

      alert(PESAN_GAMBAR_BESAR);

      return;
    }

    render();
  };

  reader.readAsDataURL(file);
}

const PESAN_GAMBAR_BESAR =
  "Gambar terlalu besar untuk disimpan di perangkat ini. Pilih gambar yang lebih kecil.";

/* ============================================================
   BUKTI TRANSFER
============================================================ */

function doSaveBukti(val, file) {
  if (session.role !== "siswa") {
    return;
  }

  const tanggal = val("tanggal");

  const jumlah = Number(val("jumlah"));

  const catatan = val("catatan");

  if (!tanggal || !jumlah) {
    alert("Lengkapi tanggal dan jumlah.");

    return;
  }

  if (!file) {
    alert("Pilih bukti transfer.");

    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const item = {
      id: uid(),

      pos: ui.pos,

      siswa: session.nama,

      tanggal,

      jumlah,

      catatan,

      gambar: reader.result,

      status: "pending",

      createdAt: Date.now(),
    };

    DB.bukti.push(item);

    try {
      saveDB();
    } catch (err) {
      // penyimpanan peramban penuh: batalkan, jangan pura-pura terkirim
      DB.bukti = DB.bukti.filter((x) => x !== item);

      alert(PESAN_GAMBAR_BESAR);

      return;
    }

    render();

    showToast("Bukti terkirim. Bendahara akan memeriksanya.");
  };

  reader.readAsDataURL(file);
}

/* ============================================================
   DIALOG
============================================================ */

function batalDialog() {
  const balik = ui.fokusSebelumDialog;

  ui.confirmDialog = null;

  ui.fokusSebelumDialog = null;

  closeDialog();

  pulihkanFokus(balik);
}

function confirmAction(title, text, callback, opts) {
  ui.fokusSebelumDialog = kunciFokus(document.activeElement);

  ui.confirmDialog = {
    title,

    text,

    onYes: callback,

    yesLabel: (opts && opts.yesLabel) || "Ya, lanjutkan",

    yesClass: (opts && opts.yesClass) || "btn-danger",
  };

  renderConfirmDialog();
}

function renderConfirmDialog() {
  closeDialog();

  const wrap = document.createElement("div");

  wrap.id = "confirmDialogRoot";

  wrap.innerHTML = `
    <div
      class="
        dialog-backdrop
      "
    >

      <div
        class="
          dialog
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="dlgJudul"
        aria-describedby="dlgIsi"
      >

        <h3 id="dlgJudul">
          ${esc(ui.confirmDialog.title)}
        </h3>

        <p id="dlgIsi">
          ${esc(ui.confirmDialog.text)}
        </p>

        <div
          class="
            form-actions
          "
        >

          <button
            class="btn ${esc(ui.confirmDialog.yesClass || "btn-danger")}"
            data-act="confirmYes"
          >
            ${esc(ui.confirmDialog.yesLabel || "Ya, lanjutkan")}
          </button>

          <button
            class="
              btn
              btn-outline
            "
            data-act="confirmNo"
          >
            Batal
          </button>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(wrap);

  wrap
    .querySelectorAll("[data-act]")
    .forEach((el) => el.addEventListener("click", onAction));

  // fokus mulai di pilihan paling aman (Batal) dan tidak keluar dari dialog
  const batal = wrap.querySelector('[data-act="confirmNo"]');

  if (batal) {
    batal.focus();
  }

  wrap.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") {
      return;
    }

    const tombol = wrap.querySelectorAll("button");

    const pertama = tombol[0];

    const terakhir = tombol[tombol.length - 1];

    if (e.shiftKey && document.activeElement === pertama) {
      e.preventDefault();

      terakhir.focus();
    } else if (!e.shiftKey && document.activeElement === terakhir) {
      e.preventDefault();

      pertama.focus();
    }
  });
}

function closeDialog() {
  const old = document.getElementById("confirmDialogRoot");

  if (old) {
    old.remove();
  }
}

/* ============================================================
   INIT
============================================================ */

applyTheme();

if (session) {
  const account = DB.accounts.find((a) => a.id === session.id);

  if (!account) {
    session = null;
  } else {
    ui.pos = myPos() || "Rutin";
  }
}

render();

/* ============================================================
   PERGANTIAN PERIODE OTOMATIS
   Dashboard digambar ulang begitu tanggal berganti (tengah malam /
   awal bulan) supaya status Kas Rutin (bulanan) dan Dana Kurban
   (harian) langsung kembali ke "Belum bayar" tanpa refresh manual.
============================================================ */

let stempelTanggal = todayStr();

function cekPergantianPeriode() {
  const sekarang = todayStr();

  if (sekarang === stempelTanggal) {
    return;
  }

  const kemarin = stempelTanggal;

  stempelTanggal = sekarang;

  if (!session) {
    return;
  }

  // Hanya dashboard yang digambar ulang: halaman itu tidak punya isian form.
  // Halaman lain dibiarkan agar ketikan yang belum disimpan tidak hilang;
  // periode barunya otomatis terpakai begitu pindah halaman.
  if (ui.view === "dashboard" && !ui.confirmDialog) {
    render();
  }

  const pos = myPos();

  if (pos && POS_PENGINGAT.includes(pos)) {
    const berganti =
      frekuensiPos(pos) === "Harian" ||
      kemarin.slice(0, 7) !== sekarang.slice(0, 7);

    if (berganti) {
      showToast(
        `Periode baru: ${periodeAktif(pos).nama}. Status pembayaran direset.`,
      );
    }
  }
}

setInterval(cekPergantianPeriode, 30 * 1000);

// Tombol Esc menutup lapisan paling atas: dialog, panel notifikasi, lalu menu HP.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") {
    return;
  }

  if (ui.confirmDialog) {
    batalDialog();
  } else if (ui.notifOpen) {
    tutupNotif();
  } else if (ui.mobileMenuOpen) {
    ui.mobileMenuOpen = false;

    render();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    cekPergantianPeriode();
  }
});

window.addEventListener("focus", cekPergantianPeriode);
