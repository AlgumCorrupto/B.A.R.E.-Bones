class kbManager {
    constructor() {
        this.observers = [];
    }   
    keyPress(e) { 
        for(let i = 0; i < kb.observers.length; i++) {
            if(e.key == "Shift") {
                kb.shiftKeyPress(e);
            }
            if(e.key == "Control") {
                kb.ctrlKeyPress(e);
            }
            if(e.key == "AltLeft") {
                kb.altKeyPress(e);
            }
            if(typeof kb.observers[i].onKeyPress !== "undefined") {
                kb.observers[i].onKeyPress(e);
            }
        }
    }
    ctrlKeyPress(e) {
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onCtrlPress !== "undefined") {
                kb.observers[i].onCtrlPress(e);
            }
        }
    }
    shiftKeyPress(e){
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onShiftPress !== "undefined") {
                kb.observers[i].onShiftPress(e);
            }
        }
    }
    altKeyPress(e) {
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onAltPress !== "undefined") {
                kb.observers[i].onAltPress(e);
            }
        }
    }
    keyRel(e) {
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onKeyRel !== "undefined") {
                kb.observers[i].onKeyRel(e);
            }
            if(e.key == "Shift") {
                kb.shiftKeyRel(e);
            }
            if(e.key == "Control") {
                kb.ctrlKeyRel(e);
            }
            if(e.key == "Alt") {
                kb.altKeyRel(e);
            }
        }
    }
    ctrlKeyRel(e) {
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onCtrlRel !== "undefined") {
                kb.observers[i].onCtrlRel(e);
            }
        }
    }
    shiftKeyRel(e){
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onShiftRel !== "undefined") {
                kb.observers[i].onShiftRel(e);
            }
        }
    }
    altKeyRel(e) {
        for(let i = 0; i < kb.observers.length; i++) {
            if(typeof kb.observers[i].onAltRel !== "undefined") {
                kb.observers[i].onAltRel(e);
            }
        }
    }
    // observer functions
    Observer(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        for(let i = 0; i < this.observers.length; i++) {
            if(observer == this.observers[i]) {
                this.observers.splice(i, 1);
            }
        }
    }
}