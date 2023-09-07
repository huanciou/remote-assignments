const heading = document.querySelector(".js-heading");
const welcome = document.querySelector(".js-welcome");
const action = document.querySelector("#js-action");
const hiddenSection = document.querySelector("#js-hiddenSection");
const viewBackToSection = document.querySelector("#js-viewBackToSection");

heading.addEventListener("click", () => {
  welcome.innerText = "Have a Good Time!";
});

let isHidden = true;

action.addEventListener("click", (e) => {
  if (isHidden) {
    hiddenSection.style.display = "flex";
    hiddenSection.scrollIntoView({ behavior: "smooth" });
    e.target.innerText = "Hidden";
    isHidden = false;
  } else {
    hiddenSection.style.display = "none";
    viewBackToSection.scrollIntoView({ behavior: "smooth" });
    e.target.innerText = "Call to Action";
    isHidden = true;
  }
});
