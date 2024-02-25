class inputManager {
    _singletonEnforcer = Symbol();
    _instance = Symbol();
    observers =  [];
    constructor() {
        this.ths = this
    }
    mouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        let mCoords = new vec2(parseInt(e.clientX - OFFSETX), parseInt(e.clientY - OFFSETY))
        for(let i = 0; i < this.observers.length; i++) {
            if(typeof this.observers[i].onMouseMove !== "undefined") {
                this.observers[i].onMouseMove(mCoords);
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
        for(let i = 0; i < this.observers.length; i++) {
            if(typeof this.observers[i].onMouseClick !== "undefined") {
                clicked = this.observers[i].onMouseClick(mCoords);
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
        for(let i = 0; i < this.observers.length; i++) {
            if(typeof this.observers[i].onMouseLeave !== "undefined") {
                this.observers[i].onMouseLeave(e);
            }
        }
    }
    mouseRel(e) {
        e.preventDefault();
        e.stopPropagation();
        for(let i = 0; i < this.observers.length; i++) {
            if(typeof this.observers[i].onMouseRel !== "undefined") {
                this.observers[i].onMouseRel(e);
            }
        }
    }

    // observer functions
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