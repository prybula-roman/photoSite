import template from "../../template/header.hbs";
console.dir(template);

export function pheadFunc() {
  const body = document.querySelector("body");
  console.log(body);
  body.insertAdjacentHTML("afterbegin", template());
}
