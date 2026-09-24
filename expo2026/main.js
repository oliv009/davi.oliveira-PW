const html   = document.documentElement;
const btn    = document.getElementById('themeToggle');
const DARK   = 'dark';
const LIGHT  = 'light';
const saved = localStorage.getItem('theme') || LIGHT;
const svg = document.getElementsByTagName("img")[1];
let corsvg = "svg-light";
applyTheme(saved);
btn.addEventListener('click', () => {
  const next = html.dataset.theme === DARK ? LIGHT : DARK;
svg.classList.toggle(corsvg);
  applyTheme(next);
  localStorage.setItem('theme', next);
  if(corsvg === "svg-light"){
  localStorage.setItem('svg', "svg-dark");
  }
if (corsvg === "svg-dark"){
    localStorage.setItem('svg',"svg-light" );}
localStorage.getItem('svg');
});
function applyTheme(theme) {
  html.dataset.theme   = theme;
  btn.setAttribute('aria-label', theme === DARK ? 'Ativar modo claro' : 'Ativar modo escuro');
}