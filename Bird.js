export class Bird{
    #birdEelement;
    #timer;
    #direction = 1.4;

    constructor(fieldContainerElement){
        this.#birdEelement = fieldContainerElement.querySelector(".bird");
        // console.log(this.#birdEelement)
    }

    moveUp(){
        this.#direction = -1;
    }

    moveDown(){
        this.#direction = 1.4;
    }

    move(){
        let x = parseFloat(getComputedStyle(this.#birdEelement).top);
        x += 2*this.#direction;
        this.#birdEelement.style.top = `${x}px`
    }

    startFall(){
        this.#timer = setInterval(() =>{
            this.move();
        }, 10);
    }

    stopFall(){
        if(this.#timer) clearInterval(this.#timer);
    }
};