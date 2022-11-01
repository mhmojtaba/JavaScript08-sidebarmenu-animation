const open = document.querySelector(".menuopen");
// console.log(open);

const close = document.querySelector(".menuclose");
// console.log(close);
const layer = document.querySelector(".layer1");
console.log(layer);

open.onclick = () => {
  layer.classList.add("active");
  open.classList.add("check");
  close.classList.remove("check");
};

close.onclick = () => {
  layer.classList.remove("active");
  close.classList.add("check");
  open.classList.remove("check");
};
