import template from "../template/main.hbs";
export function mainFunc() {
  const header = document.querySelector("header");
  // console.log(header);
  header.insertAdjacentHTML("afterend", template());
}
