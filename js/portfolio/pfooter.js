import template from "../template/footer.hbs";
export function footFunc() {
  const main = document.querySelector("main");
  // console.log(main);
  main.insertAdjacentHTML("afterend", template());
}
