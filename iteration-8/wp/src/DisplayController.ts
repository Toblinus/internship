export default class DisplayController {
    private elm: HTMLElement;

    constructor(elm: HTMLElement){
        this.elm = elm;
    }

    clear(){
        while(this.elm.firstChild){
            this.elm.removeChild(this.elm.firstChild);
        }
    }

    printList(list: string[]){
        this.clear();
        list.forEach(item => {
            const newElm = document.createElement("p");
            newElm.innerText = item;
            this.elm.appendChild(newElm);
        })

    }

    printMsg(text: string){
        this.clear();
        const newElm = document.createElement("p");
        newElm.innerText = text;
        this.elm.appendChild(newElm);
    }
}