export class MovingLines{
    #lines;
    #timer;
    #extraLineElements;
    #randomHeight;
    #isCalculated = false;
    constructor (fieldContainerElement){
        this.#lines = fieldContainerElement.querySelectorAll(".lines");
        this.#extraLineElements = fieldContainerElement.querySelector(".extraLine");
    }

    #moveHiddenLine(value){
        if(!this.#isCalculated){
            this.#randomHeight = 50 + Math.floor(Math.random() * 301);
            this.#extraLineElements.style.height = `${this.#randomHeight}px`;
            this.#isCalculated = true;
        }

        this.#extraLineElements.classList.remove("hidden");
        this.#extraLineElements.style.right = `-${value}px`;
    }
    
    #removeHiddenLine(){
        this.#extraLineElements.classList.add("hidden");
    }

    #moveLines(element){
        let x = parseFloat(getComputedStyle(element).right);
        x = (x + 2) % 750;
        element.style.right = `${x}px`;
    
        if(x > 700){
            this.#moveHiddenLine(750 - x);
        }
        
        if(x === 0){
            if(this.#isCalculated){
                this.#isCalculated = false;
                element.style.height = `${this.#randomHeight}px`;
            }
            this.#removeHiddenLine();
        }
    }

    start(){
        this.#timer = setInterval(() => {
            this.#lines.forEach(line => {
                this.#moveLines(line);
            })
        }, 10)
    }

    stop(){
        if(this.#timer) clearInterval(this.#timer)
    }
};


