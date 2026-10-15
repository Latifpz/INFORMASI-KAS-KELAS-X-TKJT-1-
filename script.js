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

const POS = [
  {
    key: "Rutin",
    label: "Kas Rutin",
    icon: "💰",
    jabatan: "Bendahara Utama",
  },
  {
    key: "Acara",
    label: "Dana Acara",
    icon: "🎉",
    jabatan: "Bendahara Acara",
  },
  {
    key: "Kurban",
    label: "Dana Kurban",
    icon: "🐐",
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
      n.pos === pos &&
      n.periode === key &&
      normalizedText(n.untuk) === target,
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
    showToast(`${nama} sudah membayar, pengingat tidak dikirim.`);

    render();

    return;
  }

  saveDB();

  render();

  showToast(`🔔 Pengingat terkirim ke ${nama}`);
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
    showToast("Semua siswa sudah lunas, tidak ada yang perlu diingatkan 🎉");

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

      showToast(`🔔 Pengingat terkirim ke ${terkirim} siswa`);
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
          ✕
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
                              ? `<span class="badge badge-ok">Sudah lunas ✓</span>`
                              : isBaru
                                ? `<span class="badge badge-warn">Baru</span>`
                                : ""
                          }
                        </div>

                        <div class="notif-msg">
                          ${esc(n.pesan)}
                        </div>

                        <div class="notif-meta">
                          ${esc(n.jabatan || "Bendahara")} · ${esc(fmtWaktu(n.createdAt))}
                        </div>

                      </div>

                    </div>
                  `;
                })
                .join("")
            : `
              <div class="empty">

                <div class="big">
                  🔔
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
            🔔
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

  msg: null,

  confirmDialog: null,
};

/* ============================================================
   RENDER
============================================================ */

function render() {
  document.getElementById("app").innerHTML = session
    ? renderShell()
    : renderAuth();

  afterRender();

  if (ui.confirmDialog) {
    renderConfirmDialog();
  }
}

/* ============================================================
   AUTH
============================================================ */

function renderAuth() {
  const net = `
    <div class="net-bg">

      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>

      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >

        <g
          stroke="#215A4B"
          stroke-width="1"
        >

          <line
            x1="40"
            y1="80"
            x2="180"
            y2="160"
          />

          <line
            x1="180"
            y1="160"
            x2="120"
            y2="300"
          />

          <line
            x1="180"
            y1="160"
            x2="340"
            y2="120"
          />

          <line
            x1="340"
            y1="120"
            x2="480"
            y2="60"
          />

          <line
            x1="120"
            y1="300"
            x2="260"
            y2="380"
          />

          <line
            x1="260"
            y1="380"
            x2="420"
            y2="340"
          />

        </g>

      </svg>

    </div>
  `;

  const fab = `
    <button
      class="theme-fab"
      data-act="toggleTheme"
      title="Ganti tema"
    >
      ${theme === "dark" ? "☀️" : "🌙"}
    </button>
  `;

  return (
    net + fab + (ui.authView === "register" ? renderRegister() : renderLogin())
  );
}

function renderLogin() {
  const t = ui.loginTab;

  return `
    <div class="center-screen">

      <div class="auth-wrap">

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
          >

            <div
              class="tab-indicator"
            ></div>

            <button
              data-act="loginTab"
              data-val="siswa"
              class="${t === "siswa" ? "active" : ""}"
            >
              👨‍🎓 Siswa
            </button>

            <button
              data-act="loginTab"
              data-val="bendahara"
              class="${t === "bendahara" ? "active" : ""}"
            >
              🔐 Bendahara
            </button>

          </div>

          ${
            ui.msg
              ? `
                <div
                  class="
                    alert
                    ${ui.msg.type === "error" ? "alert-error" : "alert-ok"}
                  "
                >
                  ${esc(ui.msg.text)}
                </div>
              `
              : ""
          }

          <form
            data-form="login"
          >

            <input
              type="hidden"
              name="role"
              value="${t}"
            >

            <div class="field">

              <label>
                👤 Username
              </label>

              <input
                name="username"
                autocomplete="username"
                placeholder="misal. abdurrahman"
                required
              >

            </div>

            <div class="field">

              <label>
                🔒 Password
              </label>

              <input
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

            Belum punya akun?

            <button
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

function renderRegister() {
  const role = ui.regRole;

  const names = availableNames(role);

  return `
    <div class="center-screen">

      <div class="auth-wrap">

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
          >

            <div
              class="tab-indicator"
            ></div>

            <button
              data-act="regRole"
              data-val="siswa"
              class="${role === "siswa" ? "active" : ""}"
            >
              👨‍🎓 Siswa
            </button>

            <button
              data-act="regRole"
              data-val="bendahara"
              class="${role === "bendahara" ? "active" : ""}"
            >
              🔐 Bendahara
            </button>

          </div>

          ${
            ui.msg
              ? `
                <div
                  class="
                    alert
                    ${ui.msg.type === "error" ? "alert-error" : "alert-ok"}
                  "
                >
                  ${esc(ui.msg.text)}
                </div>
              `
              : ""
          }

          <form
            data-form="register"
          >

            <input
              type="hidden"
              name="role"
              value="${role}"
            >

            <div class="field">

              <label>
                🎓 Nama sesuai data kelas
              </label>

              <select
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
                      >
                        ${esc(name)}
                      </option>
                    `,
                  )
                  .join("")}

              </select>

            </div>

            <div class="field">

              <label>
                👤 Buat username
              </label>

              <input
                name="username"
                placeholder="Bebas, tanpa spasi"
                required
              >

            </div>

            <div class="field">

              <label>
                🔒 Buat password
              </label>

              <input
                name="password"
                type="password"
                minlength="4"
                required
              >

            </div>

            <div class="field">

              <label>
                🔒 Ulangi password
              </label>

              <input
                name="password2"
                type="password"
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
    ic: "📊",
    label: "Dashboard",
  },

  {
    id: "kasmasuk",
    ic: "💰",
    label: "Kas Masuk",
  },

  {
    id: "pengeluaran",
    ic: "💸",
    label: "Pengeluaran",
  },

  {
    id: "target",
    ic: "🎯",
    label: "Target",
  },

  {
    id: "kalender",
    ic: "🗓️",
    label: "Kalender",
    bendaharaOnly: true,
  },

  {
    id: "qris",
    ic: "🧾",
    label: "QRIS",
  },

  {
    id: "pengaturan",
    ic: "⚙️",
    label: "Pengaturan",
  },
  {
    id: "kelolaakun",
    ic: "👥",
    label: "Kelola Akun",
    bendaharaOnly: true,
  },
];

/* ============================================================
   SHELL + MOBILE MENU
============================================================ */

function renderShell() {
  const roleLabel =
    session.role === "bendahara" ? session.jabatan : "Siswa TKJT 1";

  const notifBaru = jumlahNotifBaru();

  return `

    <!-- ==================================
         MOBILE SIDE MENU
    =================================== -->

    <div
      class="
        mobile-menu-overlay
        ${ui.mobileMenuOpen ? "open" : ""}
      "
      data-act="closeMobileMenu"
    ></div>

    <aside
      class="
        mobile-menu
        ${ui.mobileMenuOpen ? "open" : ""}
      "
    >

      <div
        class="
          mobile-menu-head
        "
      >

        <div>

          <div
            class="
              mobile-menu-title
            "
          >
            Kas TKJT 1
          </div>

          <div
            class="muted"
            style="
              font-size:11px;
              margin-top:3px;
            "
          >
            Menu navigasi
          </div>

        </div>

        <button
          class="
            mobile-menu-close
          "
          data-act="closeMobileMenu"
          title="Tutup menu"
        >
          ✕
        </button>

      </div>

      ${NAV.filter((nav) => !nav.bendaharaOnly || session.role === "bendahara")
        .map(
          (nav) => `
          <button
            class="
              navitem
              ${ui.view === nav.id ? "active" : ""}
            "
            data-act="nav"
            data-view="${nav.id}"
          >

            <span class="ic">
              ${nav.ic}
            </span>

            ${nav.label}

          </button>
        `,
        )
        .join("")}

    </aside>

    <!-- ==================================
         TOPBAR
    =================================== -->

    <div class="topbar no-print">

      <button
        class="
          mobile-menu-btn
        "
        data-act="toggleMobileMenu"
        title="Buka menu"
        aria-label="Buka menu"
      >
        ☰
      </button>

      <div class="brand">

        <div class="brand-mark">
          TKJ
        </div>

        <div class="brand-text">

          <div class="t1">
            Kas TKJT 1
          </div>

          <div class="t2">
            ${session.role === "bendahara" ? "Panel Bendahara" : "Panel Siswa"}
          </div>

        </div>

      </div>

      <div class="who">

        <div>

          <div class="name">
            ${esc(session.nama)}
          </div>

          <span
            class="role-badge"
          >
            ${esc(roleLabel)}
          </span>

        </div>

        <div class="avatar">
          ${initials(session.nama)}
        </div>

        <button
          class="icon-btn notif-btn"
          data-act="toggleNotif"
          title="Notifikasi"
          aria-label="Notifikasi"
        >
          🔔
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
        >
          ${theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          class="icon-btn"
          data-act="logout"
          title="Keluar"
        >
          🚪
        </button>

      </div>

    </div>

    ${ui.notifOpen ? renderNotifPanel() : ""}

    <!-- ==================================
         MAIN LAYOUT
    =================================== -->

    <div class="layout">

      <!-- DESKTOP SIDEBAR -->

      <aside
        class="
          sidebar
          no-print
        "
      >

        ${NAV.filter(
          (nav) => !nav.bendaharaOnly || session.role === "bendahara",
        )
          .map(
            (nav) => `
            <button
              class="
                navitem
                ${ui.view === nav.id ? "active" : ""}
              "
              data-act="nav"
              data-view="${nav.id}"
            >

              <span class="ic">
                ${nav.ic}
              </span>

              ${nav.label}

            </button>
          `,
          )
          .join("")}

      </aside>

      <!-- CONTENT -->

      <main class="main">

        ${renderPage()}

        <div
          class="
            footer-note
            no-print
          "
        >
          Kas TKJT 1 · data tersimpan
          di perangkat ini
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
    <div class="tabs">

      ${POS.map(
        (p) => `
          <button
            data-act="setPos"
            data-val="${p.key}"
            class="${ui.pos === p.key ? "active" : ""}"
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

    <div
      class="grid stat stat-3"
    >

      <div
        class="
          card
          stat-card
          pos-good
        "
      >

        <div class="lbl">
          💰 Saldo kas rutin
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Rutin"))}
        </div>

        <div class="sub">
          Pos kamu
        </div>

      </div>

      <div
        class="
          card
          stat-card
        "
      >

        <div class="lbl">
          🎉 Saldo dana acara
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Acara"))}
        </div>

        <div class="sub">
          Bendahara Acara
        </div>

      </div>

      <div
        class="
          card
          stat-card
          acc-purple
        "
      >

        <div class="lbl">
          🐐 Saldo dana kurban
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Kurban"))}
        </div>

        <div class="sub">
          Bendahara Kurban
        </div>

      </div>

    </div>

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

        <span
          class="
            pos-chip
            ${pos}
          "
        >
          ${meta.icon}
          ${meta.label}
        </span>

      </p>

    </div>

    <div
      class="grid stat"
    >

      <div
        class="
          card
          stat-card
          ${saldoPos(pos) >= 0 ? "pos-good" : "pos-bad"}
        "
      >

        <div class="lbl">
          ${meta.icon}
          Saldo ${meta.label}
        </div>

        <div class="val rp">
          ${rupiah(saldoPos(pos))}
        </div>

        <div class="sub">
          Masuk - keluar
        </div>

      </div>

      <div class="card stat-card">

        <div class="lbl">
          📥 Masuk bulan ini
        </div>

        <div class="val rp">
          ${rupiah(masuk)}
        </div>

        <div class="sub">
          Transaksi bulan ini
        </div>

      </div>

      <div class="card stat-card">

        <div class="lbl">
          📤 Keluar bulan ini
        </div>

        <div class="val rp">
          ${rupiah(keluar)}
        </div>

        <div class="sub">
          Transaksi bulan ini
        </div>

      </div>

      <div class="card stat-card">

        <div class="lbl">
          🎯 Target utama
        </div>

        <div class="val">
          ${target ? esc(target.nama) : "Belum ada"}
        </div>

      </div>

    </div>

    ${statusPembayaranBlock(pos)}
  `;
}

function dashboardSiswa() {
  const curMonth = todayStr().slice(0, 7);

  const myPay = DB.kasMasuk.filter(
    (x) => x.pos === "Rutin" && x.siswa === session.nama,
  );

  const myTotal = myPay.reduce((s, x) => s + Number(x.jumlah), 0);

  const sudah = myPay.some((x) => monthKey(x.tanggal) === curMonth);

  return `
    <div class="page-head">

      <h1>
        Halo,
        ${esc(session.nama.split(" ")[0])}
        👋
      </h1>

      <p>
        Ringkasan kas kelas
        TKJT 1
      </p>

    </div>

    ${bannerPengingat()}

    <div class="grid stat">

      <div
        class="
          card
          stat-card
          pos-good
        "
      >

        <div class="lbl">
          💰 Saldo kas rutin
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Rutin"))}
        </div>

      </div>

      <div
        class="
          card
          stat-card
        "
      >

        <div class="lbl">
          📌 Status saya
        </div>

        <div class="val">

          ${
            sudah
              ? `
                <span
                  class="
                    badge
                    badge-ok
                  "
                >
                  Sudah bayar ✓
                </span>
              `
              : `
                <span
                  class="
                    badge
                    badge-warn
                  "
                >
                  Belum bayar
                </span>
              `
          }

        </div>

      </div>

      <div
        class="
          card
          stat-card
        "
      >

        <div class="lbl">
          🧾 Total kontribusi
        </div>

        <div class="val rp">
          ${rupiah(myTotal)}
        </div>

        <div class="sub">
          ${myPay.length}
          kali setoran
        </div>

      </div>

    </div>

    <div class="section-title">

      <h2>
        Pos dana lainnya
      </h2>

    </div>

    <div class="grid stat">

      <div
        class="
          card
          stat-card
        "
      >

        <div class="lbl">
          🎉 Saldo dana acara
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Acara"))}
        </div>

      </div>

      <div
        class="
          card
          stat-card
          acc-purple
        "
      >

        <div class="lbl">
          🐐 Saldo dana kurban
        </div>

        <div class="val rp">
          ${rupiah(saldoPos("Kurban"))}
        </div>

      </div>

    </div>

    <div class="section-title">

      <h2>
        Riwayat setoran saya
      </h2>

    </div>

    ${renderKasTable(
      myPay.slice().sort((a, b) => b.tanggal.localeCompare(a.tanggal)),
      false,
    )}
  `;
}

/* ============================================================
   STATUS PEMBAYARAN
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
            🎉
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

  const belumBayar = SISWA_MASTER.length - lunas.size;

  const bisaIngatkan = bolehMengingatkan(pos);

  const barisSiswa = SISWA_MASTER.map((name) => {
    const sudah = lunas.has(name);

    const terkirim =
      bisaIngatkan && !sudah ? pengingatTerkirim(pos, name) : null;

    return `
      <tr>

        <td data-label="Nama">
          ${esc(name)}
        </td>

        <td data-label="Status">
          ${
            sudah
              ? `<span class="badge badge-ok">Lunas</span>`
              : `<span class="badge badge-warn">Belum bayar</span>`
          }
        </td>

        ${
          bisaIngatkan
            ? `
              <td data-label="Pengingat" class="no-print">
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
                          ${terkirim ? "🔔 Ingatkan lagi" : "🔔 Ingatkan"}
                        </button>

                        ${
                          terkirim
                            ? `<span class="remind-sent">✓ Terkirim ${esc(fmtWaktu(terkirim.createdAt, true))}</span>`
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
  }).join("");

  return `
    <div class="section-title status-head">

      <div>

        <h2>
          Status pembayaran
          ${meta.label} -
          ${per.label}
        </h2>

        <div class="period-note">
          📅 ${esc(per.nama)} · ${per.info}
        </div>

      </div>

      <div class="status-actions">

        <span class="muted">
          ${lunas.size}/${SISWA_MASTER.length} lunas
        </span>

        ${
          bisaIngatkan
            ? `
              <button
                class="btn btn-soft btn-sm no-print"
                data-act="kirimPengingatSemua"
                ${belumBayar ? "" : "disabled"}
              >
                🔔 Ingatkan semua (${belumBayar})
              </button>
            `
            : ""
        }

      </div>

    </div>

    <div class="table-wrap status-wrap">

      <table class="status-table ${bisaIngatkan ? "has-aksi" : ""}">

        <thead>

          <tr>
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

            <h3>
              🕓 Menunggu verifikasi
              (${pending.length})
            </h3>

            ${pending
              .map(
                (b) => `
                  <div
                    style="
                      display:flex;
                      gap:10px;
                      align-items:center;
                      padding:10px 0;
                      border-bottom:
                      1px solid
                      var(--line-soft);
                    "
                  >

                    <button type="button" class="btn btn-outline btn-sm" data-act="lihatBukti" data-id="${b.id}" title="Lihat foto bukti" style="padding:3px;border:0;background:transparent">
                      <img src="${b.gambar}" alt="Foto bukti QRIS" style="width:64px;height:64px;object-fit:cover;border-radius:8px;display:block">
                    </button>

                    <div
                      style="
                        flex:1
                      "
                    >

                      <strong>
                        ${esc(b.siswa)}
                      </strong>

                      <div
                        class="muted"
                        style="
                          font-size:12px
                        "
                      >
                        ${fmtDate(b.tanggal)}
                        ·
                        ${rupiah(b.jumlah)}
                      </div>

                    </div>

                    <div>

                      <button
                        class="
                          btn
                          btn-sm
                          btn-primary
                        "
                        data-act="approveBukti"
                        data-id="${b.id}"
                      >
                        Terima
                      </button>

                      <button
                        class="
                          btn
                          btn-sm
                          btn-danger
                        "
                        data-act="rejectBukti"
                        data-id="${b.id}"
                      >
                        Tolak
                      </button>

                    </div>

                  </div>
                `,
              )
              .join("")}

          </div>
        `
        : ""
    }

    ${
      canManage
        ? `
          <div class="form-card">

            <h3>
              ${editing ? "✏️ Edit setoran" : "➕ Catat kas masuk"}
            </h3>

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
                          ${esc(name)}
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

            <h3>
              📤 Upload bukti transfer
            </h3>

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
                          ${esc(name)}
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

            <h3>
              📤 Upload bukti transfer
            </h3>

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

function renderKasTable(rows, editable) {
  if (!rows.length) {
    return `
      <div class="table-wrap">

        <div class="empty">

          <div class="big">
            💰
          </div>

          Belum ada catatan
          kas masuk.

        </div>

      </div>
    `;
  }

  return `
    <div class="table-wrap">

      <table>

        <thead>

          <tr>

            <th>
              Tanggal
            </th>

            <th>
              Siswa
            </th>

            <th>
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

                  <td data-label="Siswa">
                    ${esc(row.siswa)}
                  </td>

                  <td
                    data-label="Jumlah"
                    class="rp"
                  >
                    ${rupiah(row.jumlah)}
                  </td>

                  <td
                    data-label="Metode"
                  >

                    <span
                      class="
                        badge
                        ${row.metode === "QRIS" ? "badge-info" : "badge-ok"}
                      "
                    >
                      ${esc(row.metode || "Tunai")}
                    </span>

                  </td>

                  <td
                    data-label="Keterangan"
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

            <h3>
              ${editing ? "✏️ Edit pengeluaran" : "➕ Catat pengeluaran"}
            </h3>

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
                💸
              </div>

              Belum ada data
              pengeluaran.

            </div>

          </div>
        `
        : `
          <div class="table-wrap">

            <table>

              <thead>

                <tr>

                  <th>Tanggal</th>
                  <th>Kategori</th>
                  <th>Keterangan</th>
                  <th>Jumlah</th>

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

            <h3>
              ${editing ? "✏️ Edit target" : "➕ Tambah target"}
            </h3>

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
        Daftar target -
        ${meta.label}
      </h2>

    </div>

    ${
      !rows.length
        ? `
          <div class="table-wrap">

            <div class="empty">

              <div class="big">
                🎯
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
                  <div
                    class="
                      card
                      target-card
                    "
                  >

                    <div class="top">

                      <div>

                        <div class="nm">
                          ${esc(target.nama)}
                        </div>

                        ${
                          target.keterangan
                            ? `
                              <div
                                class="ket"
                              >
                                ${esc(target.keterangan)}
                              </div>
                            `
                            : ""
                        }

                      </div>

                      ${
                        canManage
                          ? `
                            <div>

                              <button
                                class="
                                  btn
                                  btn-sm
                                  btn-outline
                                "
                                data-act="editTarget"
                                data-id="${target.id}"
                              >
                                Edit
                              </button>

                              <button
                                class="
                                  btn
                                  btn-sm
                                  btn-danger
                                "
                                data-act="delTarget"
                                data-id="${target.id}"
                              >
                                Hapus
                              </button>

                            </div>
                          `
                          : `
                            <span
                              class="
                                badge
                                ${percent >= 100 ? "badge-ok" : "badge-warn"}
                              "
                            >
                              ${percent}%
                            </span>
                          `
                      }

                    </div>

                    <div
                      class="
                        progress-outer
                      "
                    >

                      <div
                        class="progress-inner"
                        style="
                          width:${percent}%
                        "
                      ></div>

                    </div>

                    <div
                      class="nums"
                    >

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
            🗓️
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

    const tanggalList = Array.from(
      {
        length: jumlahHari,
      },
      (_, index) => {
        const tanggal = `${year}-${String(month).padStart(2, "0")}-${String(
          index + 1,
        ).padStart(2, "0")}`;

        return {
          nomor: index + 1,

          tanggal,
        };
      },
    );

    const rows = SISWA_MASTER.map((name) => {
      const paidCount = tanggalList.filter((item) =>
        DB.kasMasuk.some((x) =>
          paymentMatchesDay(x, name, year, month, item.nomor, ui.pos),
        ),
      ).length;

      return `
              <div
                class="
                  calendar-person
                "
              >

                <div
                  class="
                    calendar-person-head
                  "
                >

                  <strong>
                    ${esc(name)}
                  </strong>

                  <span
                    class="
                      badge
                      ${paidCount > 0 ? "badge-ok" : "badge-warn"}
                    "
                  >
                    ${paidCount}/
                    ${jumlahHari}
                    hari
                  </span>

                </div>

                <div
                  class="
                    calendar-day-grid
                  "
                >

                  ${tanggalList
                    .map((item) => {
                      const paid = DB.kasMasuk.some((x) =>
                        paymentMatchesDay(
                          x,
                          name,
                          year,
                          month,
                          item.nomor,
                          ui.pos,
                        ),
                      );

                      return `
                          <div
                            class="
                              calendar-day
                              ${paid ? "paid" : ""}
                            "
                            title="
                              ${item.tanggal}
                              —
                              ${rupiah(1000)}
                            "
                          >

                            <span>
                              ${item.nomor}
                            </span>

                            <b>
                              ${paid ? "✓" : "·"}
                            </b>

                          </div>
                        `;
                    })
                    .join("")}

                </div>

              </div>
            `;
    }).join("");

    return `
      <div class="page-head">

        <h1>
          Kalender Pembayaran
        </h1>

        <p>
          ${meta.label} ·
          <strong>
            ${rupiah(nom.jumlah)}
          </strong>
          per hari
        </p>

      </div>

      ${posTabs()}

      <div class="form-card">

        <div
          class="
            form-row
            cols-2
          "
        >

          <div class="field">

            <label>
              📅 Tahun
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

          <div class="field">

            <label>
              🗓️ Bulan
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

        </div>

        <div
          class="locked-note"
          style="
            margin-bottom:0
          "
        >
          🐐 Setoran Kurban:
          <strong>
            ${rupiah(nom.jumlah)}
          </strong>
          per hari.
        </div>

      </div>

      <div
        class="
          calendar-legend
        "
      >

        <span>
          <i></i>
          Sudah bayar
        </span>

        <span>
          · Belum bayar
        </span>

      </div>

      <div
        class="section-title"
      >

        <h2>
          ${monthName}
        </h2>

      </div>

      <div
        class="
          calendar-list
        "
      >
        ${rows}
      </div>
    `;
  }

  /* =======================================
     BULANAN / MINGGUAN
  ======================================= */

  const weekly = nom.frekuensi === "Mingguan";

  const months = Array.from(
    {
      length: 12,
    },
    (_, i) => `${year}-${String(i + 1).padStart(2, "0")}`,
  );

  const rows = SISWA_MASTER.map((name) => {
    const paid = months.filter((monthKeyText, index) =>
      DB.kasMasuk.some((x) =>
        calendarMonthHasPayment(x, name, year, index + 1, weekly),
      ),
    );

    return `
            <div
              class="
                calendar-person
              "
            >

              <div
                class="
                  calendar-person-head
                "
              >

                <strong>
                  ${esc(name)}
                </strong>

                <span
                  class="
                    badge
                    ${paid.length ? "badge-ok" : "badge-warn"}
                  "
                >
                  ${paid.length}
                  ${weekly ? "minggu" : "/12 bulan"}
                </span>

              </div>

              <div
                class="
                  calendar-month-grid
                "
              >

                ${months
                  .map((month, index) => {
                    const isPaid = DB.kasMasuk.some((x) =>
                      calendarMonthHasPayment(x, name, year, index + 1, weekly),
                    );

                    return `
                        <div
                          class="
                            calendar-period
                            ${isPaid ? "paid" : ""}
                          "
                        >

                          <span>
                            ${index + 1}
                          </span>

                          ${isPaid ? "✓" : "·"}

                        </div>
                      `;
                  })
                  .join("")}

              </div>

            </div>
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

    <div class="form-card">

      <div class="field">

        <label>
          📅 Pilih tahun
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

    </div>

    <div
      class="
        calendar-legend
      "
    >

      <span>
        <i></i>
        Sudah bayar
      </span>

      <span>
        · Belum bayar
      </span>

    </div>

    <div
      class="
        calendar-list
      "
    >
      ${rows}
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

    <div
      class="
        card
        qris-box
      "
    >

      <div
        class="
          pos-chip
          ${ui.pos}
        "
      >
        ${meta.icon}
        ${meta.label}
      </div>

      <br><br>

      ${
        q
          ? `
            <img
              src="${q}"
              alt="QRIS"
            >
          `
          : `
            <div
              class="
                qris-placeholder
              "
            >

              <div
                style="
                  font-size:30px
                "
              >
                📷
              </div>

              Belum ada QRIS

            </div>
          `
      }

    </div>

    ${
      canManage
        ? `
          <div class="form-card">

            <h3>
              Kelola QRIS
            </h3>

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
    <div class="page-head"><h1>Kelola Akun</h1><p>Fitur ini hanya tersedia untuk bendahara. Lihat akun terdaftar, ubah peran tidak tersedia, dan reset password akun.</p></div>
    <div class="form-card"><h3>👥 Daftar akun (${accounts.length})</h3>
      ${
        accounts.length
          ? `<div class="table-wrap"><table><thead><tr><th>Nama</th><th>Username</th><th>Peran</th><th>Aksi</th></tr></thead><tbody>
      ${accounts.map((a) => `<tr><td>${esc(a.nama)}</td><td>${esc(a.username)}</td><td>${a.role === "bendahara" ? esc(a.jabatan || "Bendahara") : "Siswa"}</td><td><div class="form-actions"><button class="btn btn-outline btn-sm" data-act="resetAkun" data-id="${a.id}">Reset password</button>${a.id !== session.id ? `<button class="btn btn-danger btn-sm" data-act="hapusAkun" data-id="${a.id}">Hapus</button>` : `<span class="muted">Akun Anda</span>`}</div></td></tr>`).join("")}
      </tbody></table></div>`
          : `<div class="empty">Belum ada akun terdaftar.</div>`
      }
    </div>
    <div class="form-card"><h3>ℹ️ Informasi</h3><p class="muted">Reset password akan mengatur password akun menjadi <strong>reset</strong>. Sarankan pemilik akun segera menggantinya di Pengaturan.</p></div>
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

      <h3>
        Ganti username
      </h3>

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

      <h3>
        Ganti password
      </h3>

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

            <h3>
              Nominal
              ${posMeta(myPos()).label}
            </h3>

            ${
              myPos() === "Acara"
                ? `
                  <div
                    class="
                      locked-note
                    "
                  >
                    🎉 Nominal dana acara
                    diisi manual setiap transaksi.
                  </div>
                `
                : myPos() === "Kurban"
                  ? `
                    <div
                      class="
                        locked-note
                      "
                    >
                      🐐 Nominal Kurban:
                      <strong>
                        Rp 1.000 / hari
                      </strong>
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

    return;
  }

  if (act === "closeMobileMenu") {
    ui.mobileMenuOpen = false;

    render();

    return;
  }

  /* AUTH */

  if (act === "loginTab") {
    ui.loginTab = el.dataset.val;

    ui.msg = null;

    render();

    return;
  }

  if (act === "regRole") {
    ui.regRole = el.dataset.val;

    ui.msg = null;

    render();

    return;
  }

  if (act === "goRegister") {
    ui.authView = "register";

    ui.msg = null;

    render();

    return;
  }

  if (act === "goLogin") {
    ui.authView = "login";

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

    ui.mobileMenuOpen = false;

    ui.notifOpen = false;

    ui.notifBaruIds = [];

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

    ui.confirmDialog = null;

    closeDialog();

    if (callback) {
      callback();
    }

    return;
  }

  if (act === "confirmNo") {
    ui.confirmDialog = null;

    closeDialog();

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

function doLogin(role, username, password) {
  if (!username || !password) {
    ui.msg = {
      type: "error",

      text: "Lengkapi username dan password.",
    };

    render();

    return;
  }

  const account = findAccount(username);

  if (!account || account.role !== role) {
    ui.msg = {
      type: "error",

      text: "Akun tidak ditemukan.",
    };

    render();

    return;
  }

  if (account.passHash !== hashPass(password)) {
    ui.msg = {
      type: "error",

      text: "Password salah.",
    };

    render();

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

  ui.msg = null;

  render();
}

function doLogout() {
  clearSession();

  ui.authView = "login";

  ui.view = "dashboard";

  ui.pos = "Rutin";

  ui.mobileMenuOpen = false;

  ui.notifOpen = false;

  ui.notifBaruIds = [];

  render();
}

function doRegister(role, nama, username, password, password2) {
  if (!nama) {
    ui.msg = {
      type: "error",

      text: "Pilih nama.",
    };

    render();

    return;
  }

  if (!username || /\s/.test(username)) {
    ui.msg = {
      type: "error",

      text: "Username tidak boleh mengandung spasi.",
    };

    render();

    return;
  }

  if (findAccount(username)) {
    ui.msg = {
      type: "error",

      text: "Username sudah dipakai.",
    };

    render();

    return;
  }

  if (password.length < 4) {
    ui.msg = {
      type: "error",

      text: "Password minimal 4 karakter.",
    };

    render();

    return;
  }

  if (password !== password2) {
    ui.msg = {
      type: "error",

      text: "Konfirmasi password tidak sama.",
    };

    render();

    return;
  }

  if (!availableNames(role).includes(nama)) {
    ui.msg = {
      type: "error",

      text: "Nama sudah terdaftar.",
    };

    render();

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
    DB.settings.qris[ui.pos] = reader.result;

    saveDB();

    render();
  };

  reader.readAsDataURL(file);
}

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
    DB.bukti.push({
      id: uid(),

      pos: ui.pos,

      siswa: session.nama,

      tanggal,

      jumlah,

      catatan,

      gambar: reader.result,

      status: "pending",

      createdAt: Date.now(),
    });

    saveDB();

    render();
  };

  reader.readAsDataURL(file);
}

/* ============================================================
   DIALOG
============================================================ */

function confirmAction(title, text, callback, opts) {
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
      >

        <h3>
          ${esc(ui.confirmDialog.title)}
        </h3>

        <p>
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
        `📅 Periode baru: ${periodeAktif(pos).nama}. Status pembayaran direset.`,
      );
    }
  }
}

setInterval(cekPergantianPeriode, 30 * 1000);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    cekPergantianPeriode();
  }
});

window.addEventListener("focus", cekPergantianPeriode);
