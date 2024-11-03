const cursor = document.querySelector(".cursor");
const hover = document.querySelectorAll(".hover");
const pos = document.documentElement;

let shapes1 = document.querySelector(".shapes_1");
let shapes2 = document.querySelector(".shapes_2");
let shapes3 = document.querySelector(".shapes_3");
let shapes4 = document.querySelector(".shapes_4");
let shapes5 = document.querySelector(".shapes_5");
let shapesC1 = document.querySelector(".shapes_c_1");
let shapesC2 = document.querySelector(".shapes_c_2");
let shapesS1 = document.querySelector(".shapes_s_1");
let shapesS2 = document.querySelector(".shapes_s_2");
let shapesCS1 = document.querySelector(".shapes_cs_1");


document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    pos.style.setProperty('--x', `${x}px`);
    pos.style.setProperty('--y', `${y}px`);
});
document.addEventListener("mousedown", function () {
    cursor.style.border = 'solid 8px';
})
document.addEventListener("mouseup", function () {
    cursor.style.border = 'solid 2px';
})

for (let i = 0;  i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
        cursor.style.borderRadius = 0;
        cursor.style.width = '15px';
        cursor.style.height = '15px';
    });
    hover[i].addEventListener("mouseleave", function () {
        cursor.style.borderRadius = '50%';
        cursor.style.width = '12px';
        cursor.style.height = '12px';
    });
}

window.addEventListener("scroll", function () {
    var value = window.scrollY;
    shapes1.style.top = value * -0.25 + "px";
    shapes2.style.left = -40 + value * -0.5 + "px";
    shapes3.style.right = value * -0.25 + "px";
    shapes4.style.right = value * -0.25 + "px";
    shapes5.style.top = value * -0.25 + "px";
    shapesS1.style.left = 40 + value * -0.25 + "px";
    shapesS2.style.right = value * -0.5 + "px";
    shapesC1.style.top = -60 + value * -0.5 + "px";
    shapesC2.style.bottom = 200 + value * 0.3 + "px";
    shapesCS1.style.bottom = 50 + value * 0.3 + "px";
})

let elements = document.querySelectorAll(".text-roll");

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });