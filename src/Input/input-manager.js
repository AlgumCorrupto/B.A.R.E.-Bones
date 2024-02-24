class inputManager {
    _singletonEnforcer = Symbol();
    _instance = Symbol();
    observers =  [];
    constructor() {
    }
    mouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        let mCoords = new vec2(parseInt(e.clientX - OFFSETX), parseInt(e.clientY - OFFSETY))
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onMouseMove !== "undefined") {
                inputer.observers[i].onMouseMove(mCoords);
            }
        }
        startCoords = mCoords;
    }
    mouseClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let clicked;
        let mCoords = new vec2(parseInt(e.clientX - OFFSETX), parseInt(e.clientY - OFFSETY))
        console.log(mCoords)
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onMouseClick !== "undefined") {
                clicked = inputer.observers[i].onMouseClick(mCoords);
            }
            if(clicked) {
                break;
            }
        }
        startCoords = mCoords;
    }
    mouseLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onMouseLeave !== "undefined") {
                inputer.observers[i].onMouseLeave(e);
            }
        }
    }
    mouseRel(e) {
        e.preventDefault();
        e.stopPropagation();
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onMouseRel !== "undefined") {
                inputer.observers[i].onMouseRel(e);
            }
        }
    }
    keyPress(e) { 
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onKeyPress !== "undefined") {
                inputer.observers[i].onKeyPress(e);
            }
        }
    }
    keyRel(e) {
        for(let i = 0; i < inputer.observers.length; i++) {
            if(typeof inputer.observers[i].onKeyRel !== "undefined") {
                inputer.observers[i].onKeyRel(e);
            }
        }
    }
    //Register observer functions
    registerObserver(observer) {
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