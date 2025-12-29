lucide.createIcons();

/* NAVBAR SCROLL */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
};

/* ROUTER */
const app = document.getElementById("app");

function route() {
  const path = location.hash.replace("#", "") || "/";
  app.innerHTML = routes[path] || routes["/404"];
}

window.addEventListener("hashchange", route);
window.addEventListener("load", route);

/* PAGES */
const routes = {
  "/": `
    <section class="hero container">
      <div>
        <p class="bronze-text">Premium Iron Craftsmanship</p>
        <h1>Saify <span class="bronze-text">Iron Works</span></h1>
        <p>Crafting durable, elegant iron furniture with decades of expertise.</p>
      </div>
    </section>
  `,
  "/products": `<h1 class="container">Products Page</h1>`,
  "/services": `<h1 class="container">Services Page</h1>`,
  "/about": `<h1 class="container">About Us</h1>`,
  "/contact": `
    <section class="container">
      <h1>Contact Us</h1>
      <form class="card glass">
        <input placeholder="Name"/><br/><br/>
        <input placeholder="Email"/><br/><br/>
        <textarea placeholder="Message"></textarea><br/><br/>
        <button>Send</button>
      </form>
    </section>
  `,
  "/404": `<h1 class="container">Page Not Found</h1>`
};

const visitUs = ()=>{

}