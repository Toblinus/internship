function createURL(username) {
    return `https://api.github.com/users/${username}/repos`;
}
class DisplayController {
    constructor(elm) {
        this.elm = elm;
    }
    clear() {
        while (this.elm.firstChild) {
            this.elm.removeChild(this.elm.firstChild);
        }
    }
    printList(list) {
        this.clear();
        list.forEach(item => {
            const newElm = document.createElement("p");
            newElm.innerText = item;
            this.elm.appendChild(newElm);
        });
    }
    printMsg(text) {
        this.clear();
        const newElm = document.createElement("p");
        newElm.innerText = text;
        this.elm.appendChild(newElm);
    }
}
const display = new DisplayController(document.getElementById("display"));
function getRepos() {
    const name = document.getElementById('username').value;
    fetch(createURL(name))
        .then((val) => val.json()
        .then((answ) => {
        if (!Array.isArray(answ)) {
            display.printMsg(answ.message);
        }
        else {
            const reposList = answ.map(repo => repo.name);
            display.printList(reposList);
        }
    })
        .catch(r => console.log(r)))
        .catch(r => console.log(r));
}
async function request() {
    const name = document.getElementById('username').value;
    const str = createURL(name);
    return fetch(str);
}
async function getRepos1() {
    try {
        const response = await request();
        const obj = await response.json();
        if (!Array.isArray(obj)) {
            display.printMsg(obj.message);
        }
        else {
            const reposList = obj.map(repo => repo.name);
            display.printList(reposList);
        }
    }
    catch {
        display.printMsg("Error");
    }
}
window.onload = () => {
    const modeInput = document.getElementById("rad1");
    document.getElementById("getter-btn").onclick = () => {
        if (modeInput.checked) {
            getRepos();
        }
        else {
            getRepos1();
        }
    };
};
