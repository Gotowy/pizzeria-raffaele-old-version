/* PIZZA TABS ARE OPENED (TABLET SIZE AND BIGGER) */
window.matchMedia("screen and (min-width: 620px)").matches
  ? document
      .querySelectorAll(".list")
      .forEach((element) => element.classList.add("grid"))
  : null;

/* MOBILE MENU BUTTON BEHAVIOR */
const button = document.querySelector(".mobileButton");
button.addEventListener("click", () => {
  const list = document.querySelector(".menuList").classList;
  list.length == 1 ? list.add("visible") : list.remove("visible");
});

/* DISPLAYING PIZZA TABS CONTENT */
const elements = document.querySelectorAll(".title");
elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    const list = e.target.parentNode.children[1].classList;
    list.length == 1 ? list.add("grid") : list.remove("grid");
  });
});

/* CHANGING MAIN CONTENT */
const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    document.querySelector(".tabContent").innerHTML = xhr.responseText;
    document
      .querySelectorAll(".category")
      .forEach((element) => element.classList.remove("block"));
  } else console.log("There was an error");
};

const tab = (tab) => {
  xhr.open("get", `subpages/${tab}.html`);
  xhr.send();
  window.scrollTo(0, 0);
  let innerHTML = "";
  switch (tab) {
    case "home":
      innerHTML = "";
      break;
    case "delivery":
      innerHTML = "Dostawa";
      break;
    case "contact":
      innerHTML = "Kontakt";
      break;
    default:
      return "";
  }
  document.querySelector(".head").innerHTML = innerHTML;
  /*CLOSING MOBILE MENU LIST ON CLICKING A LINK*/
  window.matchMedia("screen and (max-width: 960px)").matches
    ? document.querySelector(".menuList").classList.remove("visible")
    : null;
};

const menu = () => {
  document
    .querySelectorAll(".category")
    .forEach((element) => element.classList.add("block"));
  document.querySelector(".tabContent").innerHTML = "";
  window.scrollTo(0, 0);

  document.querySelector(".head").innerHTML = "Menu";
  /*CLOSING MOBILE MENU LIST ON CLICKING A LINK*/
  window.matchMedia("screen and (max-width: 960px)").matches
    ? document.querySelector(".menuList").classList.remove("visible")
    : null;
};

tab("home");
