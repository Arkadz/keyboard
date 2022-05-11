import '../style.css';


const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
        eventKeys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        flag: true
    },

    startKeyboard() {
        const header_element = document.createElement('h1');
        header_element.innerText = 'Virtual Keyboard';
        document.body.appendChild(header_element);

        const textarea = document.createElement('textarea');
        textarea.classList.add('use-keyboard-input');
        document.body.appendChild(textarea);
        
        const p = document.createElement('p');
        p.innerText = 'Shift + Alt to switch En / Ru';
        document.body.appendChild(p);

        
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

       
        this.elements.main.classList.add('keyboard', 'keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.appendChild(this.createKeys(this.properties.flag));

        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

        
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

       
        document.querySelectorAll('.use-keyboard-input').forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });

        document.addEventListener('keydown', (event)=>{
                
            if (event.key == 'Shift' && event.altKey) {
                this.elements.keysContainer.innerHTML = '';
                this.properties.flag = !this.properties.flag;
                this.elements.keysContainer.appendChild(this.createKeys(this.properties.flag));
            }

            this.elements.keys.forEach(item=>{
                if (item.dataset.key == event.key || item.dataset.key == event.key.toLocaleLowerCase()) {
                   
                    if (item.dataset.val != 'none') this.properties.value += event.key;
                   
                   item.classList.add('key_down');
                  
                   setTimeout(()=>{item.classList.remove('key_down')},200);
                } 
            })
        });
    },

    createKeys(flag) {
        
        function keyReturn(isEn) {
            return isEn ? keyLayout : keyLayoutRus;
        }
        
        const fragment = document.createDocumentFragment();

        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "#", "enter",
            "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "R_Shift", "up",
            "ctrl", "Win", "alt", "space", "alt", "ctrl", "left", "down", "right"
        ];

        const keyLayoutRus = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "[", "]", "\\", "del",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", ";", "'", "#", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "?", "R_Shift", "up",
            "ctrl", "Win", "alt", "space", "alt", "ctrl", "left", "down", "right"
        ]

       
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        const array_key = keyReturn(flag);

        array_key.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "del", "enter", "up"].indexOf(key) !== -1;

            
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");
                    keyElement.setAttribute("data-key", "Backspace");
                    keyElement.setAttribute("data-val", "none");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.handEvent("oninput");
                    });

                    break;
            
                case "del":
                    
                    keyElement.textContent = "del";
                    keyElement.setAttribute("data-capsLock", "none");
                    keyElement.setAttribute("data-key", "Delete");
                    keyElement.setAttribute("data-val", "none");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.handEvent("oninput");
                    });
        
                    break;
    

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    keyElement.setAttribute("data-val", "none");
                    keyElement.addEventListener("click", () => {
                        this.toggleCapsLock();
                        
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
                    keyElement.setAttribute("data-val", "none");
                    keyElement.setAttribute("data-key", "Enter");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this.handEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("");
                    keyElement.setAttribute("data-key", " ");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this.handEvent("oninput");
                    });

                    break;


                case "tab":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_tab");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.handEvent("oninput");
                    });
    
                    break;

                case "Win":
                    keyElement.innerHTML = createIconHTML("grid_view");
            
                    keyElement.addEventListener("click", () => {
                    this.properties.value += "";
                    this.handEvent("oninput");
                    });
            
                    break;

                case "left":
                    keyElement.innerHTML = createIconHTML("arrow_left");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "";
                        this.handEvent("oninput");
                    });
    
                        break;

                case "down":
                            
                    keyElement.innerHTML = createIconHTML("arrow_drop_down");
            
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "";
                        this.handEvent("oninput");
                    });
            
                    break;

                case "right":
                    keyElement.innerHTML = createIconHTML("arrow_right");
        
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "";
                        this.handEvent("oninput");
                    });
        
                    break;

                case "up":
                    keyElement.innerHTML = createIconHTML("arrow_drop_up");
            
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "";
                        this.handEvent("oninput");
                    });
                    break;
                
                case "shift":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Shift";
                    keyElement.setAttribute("data-capsLock", "none");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "";
                        this.handEvent("oninput");
                    });
    
                break;

                case "R_Shift":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Shift";
                    keyElement.setAttribute("data-capsLock", "none");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.handEvent("oninput");
                    });
    
                break;

                case "ctrl":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "ctrl";
                    keyElement.setAttribute("data-capsLock", "none");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.handEvent("oninput");
                    });
    
                break;

                case "alt":
                    
                    keyElement.textContent = "alt";
                    keyElement.setAttribute("data-capsLock", "none");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.handEvent("oninput");
                    });
    
                break;



                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.setAttribute("data-key", key);
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this.handEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    handEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        
        for (const key of document.querySelector("body > div > div").childNodes) {
            
            if (key.childElementCount === 0 && key.dataset.capslock != 'none') {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },
    

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.startKeyboard();
    Keyboard.elements.main.classList.remove("keyboard--hidden");
});

