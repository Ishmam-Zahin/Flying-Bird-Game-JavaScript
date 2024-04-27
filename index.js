import {MovingLines} from "./MovingLines.js";
import {Bird} from "./Bird.js";

const fieldContainerElement = document.querySelector(".fieldContainer");

const l = new MovingLines(fieldContainerElement);
const b = new Bird(fieldContainerElement);
l.start();

fieldContainerElement.addEventListener("click", () => {
    l.stop();
    b.stopFall();
});

document.addEventListener("keydown", () => {
    b.moveUp();
})
document.addEventListener("keyup", () => {
    b.moveDown();
})
b.startFall();


