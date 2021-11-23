import template from "../template/header.hbs";
export function headFunc() {
  const body = document.querySelector("body");
  // console.log(body);
  body.insertAdjacentHTML("afterbegin", template());
}
