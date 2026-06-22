/* ============================================================
   Yudum Güları — site etkileşimleri
   ============================================================ */

/* ---- Günün Hatırlatması (her gün değişir) ---- */
const dailyReminders = [
  "Bugün hiçbir şeyi düzeltmek zorunda değilsin. Sadece nefes al.",
  "İçinden geçeni bastırma; ona bir isim ver, sonra bırak gitsin.",
  "Yorulmak ayıp değil. Dur, biraz da kendine bak.",
  "Bir fincan çayı, sadece çayı içmeye ayır bugün. Telefonsuz.",
  "Kendine, en sevdiğin insana konuşur gibi konuş.",
  "Sustuğun bir şey mi var? Bugün bir cümlesini bir deftere fısılda.",
  "Bedenin sana bir şey söylüyor. Üç derin nefeste onu dinle.",
  "Mükemmel olmak zorunda değilsin; bütün olman yeter.",
  "Bir 'hayır' bazen en şefkatli cevaptır. İzin var.",
  "Pencereyi aç. Rüzgârın yüzüne değişine bir an izin ver.",
  "Geçmişe attığın taşlar bugünkü suyu bulandırmasın.",
  "Sevdiğin bir şarkıyı sonuna kadar, gözlerin kapalı dinle.",
  "Erken büyümüş çocuğa bugün biraz oyun hakkı tanı.",
  "Birinin sözüne değil, davranışına bak. Gerçek orada.",
  "Bugün küçük bir iyilik yap — önce kendine."
];

/* ---- Haftanın Daveti (her hafta değişir) ---- */
const weeklyExperiences = [
  "Bu hafta bir gün, hiç fotoğraf çekmeden bir gün batımı izle. Sadece sen ve gökyüzü.",
  "Bu hafta tanımadığın bir yola sapıp 10 dakika öylesine yürü. Nereye varacağını merak et.",
  "Bu hafta bir mektup yaz — geçmişteki kendine ya da affetmek istediğin birine. Göndermek zorunda değilsin.",
  "Bu hafta bir öğünü yavaşça, her lokmanın tadını alarak ye. Acele yok.",
  "Bu hafta 20 dakika telefonu başka odada bırakıp sadece kendinle kal.",
  "Bu hafta denize, bir ağaca ya da toprağa çıplak ayakla değ. Doğaya bir 'merhaba' de."
];

const dayOfYear = () => {
  const now = new Date();
  return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
};
const weekOfYear = () => Math.floor(dayOfYear() / 7);

let dailyIdx = dayOfYear() % dailyReminders.length;
let weeklyIdx = weekOfYear() % weeklyExperiences.length;

const dailyEl = document.getElementById("dailyText");
const weeklyEl = document.getElementById("weeklyText");
if (dailyEl) dailyEl.textContent = dailyReminders[dailyIdx];
if (weeklyEl) weeklyEl.textContent = weeklyExperiences[weeklyIdx];

const fade = (el, list, idx) => {
  el.style.opacity = 0;
  setTimeout(() => { el.textContent = list[idx]; el.style.opacity = 1; }, 220);
};
const dShuffle = document.getElementById("dailyShuffle");
const wShuffle = document.getElementById("weeklyShuffle");
if (dShuffle) dShuffle.addEventListener("click", () => {
  dailyIdx = (dailyIdx + 1) % dailyReminders.length;
  fade(dailyEl, dailyReminders, dailyIdx);
});
if (wShuffle) wShuffle.addEventListener("click", () => {
  weeklyIdx = (weeklyIdx + 1) % weeklyExperiences.length;
  fade(weeklyEl, weeklyExperiences, weeklyIdx);
});
if (dailyEl) dailyEl.style.transition = "opacity .25s ease";
if (weeklyEl) weeklyEl.style.transition = "opacity .25s ease";

/* ---- Nav: scroll arkaplanı ---- */
const nav = document.getElementById("nav");
const isHomeNav = !nav.classList.contains("scrolled");
const onScroll = () => {
  if (!isHomeNav) return;
  nav.classList.toggle("scrolled", window.scrollY > 60);
};
window.addEventListener("scroll", onScroll);
onScroll();

/* ---- Mobil menü ---- */
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

/* ---- Reveal animasyonu ---- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---- Yıl ---- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
