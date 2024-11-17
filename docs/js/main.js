addEventListener("DOMContentLoaded", main);

function main() {
  const swich = document.querySelector("#swich");
  const navList = document.querySelector("#navList");
  addEventListener("click", (event) => {
    if (event.target.parentNode.id == "navToggleOpen") {
      navList.classList.add("nav__list_active");
      document.body.classList.add("not-scroll");
    } else if (event.target.parentNode.id == "navToggleClose") {
      navList.classList.remove("nav__list_active");
      document.body.classList.remove("not-scroll");
    }
  });

  swich.addEventListener("change", (event) => {
      if(event.target.checked) {
        document.body.setAttribute("data-theme", "dark");
    }else {
        document.body.removeAttribute("data-theme")
    }
  });
}
