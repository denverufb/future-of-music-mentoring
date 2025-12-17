/* THEME */
function toggleTheme(){
  const t = document.body.dataset.theme === "light" ? "" : "light";
  document.body.dataset.theme = t;
  localStorage.setItem("theme",t);
}
document.body.dataset.theme = localStorage.getItem("theme") || "";

/* ACCENT COLOR */
function setAccent(color){
  document.documentElement.style.setProperty("--accent",color);
  document.documentElement.style.setProperty("--accent-glow",color+"88");
  localStorage.setItem("accent",color);
}
const savedAccent = localStorage.getItem("accent");
if(savedAccent) setAccent(savedAccent);

/* PROGRESS BAR FILL ON VIEW */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const bar = e.target;
      bar.style.width = bar.dataset.progress + "%";
    }
  });
},{threshold:.6});

document.querySelectorAll(".progress-bar").forEach(bar=>{
  observer.observe(bar);
});

/* AUTO PULSE EVERYTHING INTERACTIVE */
document.querySelectorAll("button,a,.card").forEach(el=>{
  el.classList.add("pulse");
});
