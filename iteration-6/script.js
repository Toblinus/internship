document.cookie = "name=Bob";
document.cookie = "name=Bob; max-age=3600;";
console.log(document.cookie);
console.log(location);
console.log(navigator);

let storage = localStorage;

window.onload = () => {
    //debugger
    document.getElementById("current-location").innerText = "Текущий адрес страницы: " + location.href;
    document.getElementById("history__back").onclick = () => history.back();
    
    const inputHistoryNewItem = document.getElementById("history__input");
    document.getElementById("history__add").onclick = () => {
        if(!inputHistoryNewItem.value){
            return;
        }
        history.pushState({}, null, [location.href, encodeURIComponent(inputHistoryNewItem.value)].join("/"));
        inputHistoryNewItem.value = "";
        inputHistoryNewItem.focus();
    }

    document.getElementById("show-alert__btn").onclick = function() {
        const input = document.getElementById("show-alert__input");
        alert(input.value);
        
        input.value = "";
    }

    document.getElementById("localStorage").onchange = () => {
        storage = localStorage;
        console.log(storage);
    }

    document.getElementById("sessionStorage").onchange = () => {
        storage = sessionStorage;
        console.log(storage);
    }

    const storageKey = document.getElementById("save-data__key");
    const storageValue = document.getElementById("save-data__value");

    document.getElementById("storage__save").onclick = () => {
        if(!storageKey.value || !storageValue.value) {
            return;
        }

        storage.setItem(storageKey.value, storageValue.value);
        storageKey.value = "";
        storageValue.value = "";
    }

    document.getElementById("storage__load").onclick = () => {
        if(!storageKey.value) {
            return;
        }
        storageValue.value = storage.getItem(storageKey.value);
    }

    document.getElementById("storage__del").onclick = () => {
        if(!storageKey.value) {
            return;
        }

        storage.removeItem(storageKey.value);
        storageKey.value = "";
        storageValue.value = "";
    }

    document.getElementById("storage__clear").onclick = () => {
        storage.clear();
        storageKey.value = "";
        storageValue.value = "";
    }
}