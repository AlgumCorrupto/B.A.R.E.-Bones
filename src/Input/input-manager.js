class inputManager {
    _singletonEnforcer = Symbol();
    _instance = Symbol();
    observers =  [];
    mClick = [];
    mLeave = [];
    mMove = [];
    mRel = [];
    constructor() {  }
    mouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        let mCoords = new vec2(parseInt(e.clientX - OFFSETX), parseInt(e.clientY - OFFSETY))
        for(let i = 0; i < this.mMove.length; i++) {
            this.mMove[i].cb(mCoords);
        }
        startCoords = mCoords;
    }
    mouseClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let clicked;
        let mCoords = new vec2(parseInt(e.clientX - OFFSETX), parseInt(e.clientY - OFFSETY))
        console.log(mCoords)
        for(let i = 0; i < this.mClick.length; i++) {
            //clicked = this.observers[i].onMouseClick(mCoords, e.button);
            clicked = this.mClick[i].cb(mCoords, e.button);
            if(clicked) {
                break
            }
        }
        startCoords = mCoords;
    }
    mouseLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        for(let i = 0; i < this.mLeave.length; i++) {
            this.mLeave[i].cb(e);
        }
    }
    mouseRel(e) {
        e.preventDefault();
        e.stopPropagation();
        for(let i = 0; i < this.mRel.length; i++) {
            this.mRel[i].cb(e);
        }
    }

    // observer functions
    registerObserver(callback, type) {
        switch(type) {
            case "click":
                this.mClick.push({
                    cb: (mCoords, btn) => { return callback(mCoords, btn)},
                    fn: callback
                });
                break;
            case "leave":
                this.mLeave.push({
                    cb: (mCoords) => {callback(mCoords)},
                    fn: callback
                });
                break;
            case "rel":
                this.mRel.push({
                    cb: (mCoords) => {callback(mCoords)},
                    fn: callback
            });
                break;
            case "move":
                this.mMove.push({
                    cb: (mCoords) => {callback(mCoords)},
                    fn: callback
                });
                break;
            default:
                throw new Error("the type that you informed doesn't correspond to a valid type")
                break;
        }
    }
    removeObserver(callback, type) {
        switch(type) {
            case "click":
                for(let i = 0; i < this.mClick.length; i++) {
                    if(this.mClick[i].fn == callback) {
                        this.mClick.splice(i, 1);
                    }
                }
                break;
            case "leave":
                for(let i = 0; i < this.mLeave.length; i++) {
                    if(this.mLeave[i].fn == callback) {
                        this.mLeave.splice(i, 1);
                    }
                }
                break;
            case "rel":
                for(let i = 0; i < this.mRel.length; i++) {
                    if(this.mRel[i].fn == callback) {
                        this.mRel.splice(i, 1);
                    }
                }
                break;
            case "move":
                for(let i = 0; i < this.mMove.length; i++) {
                    if(this.mMove[i].fn == callback) {
                        this.mMove.splice(i, 1);
                    }
                }
                break;
            default:
                throw new Error("the type that you informed doesn't correspond to a valid type")
                break;
        }
        //for(let i = 0; i < this.observers.length; i++) {
        //    if(observer == this.observers[i]) {
        //        this.mClick.splice(i, 1);
        //    }
        //}
    }
    doRemove(callback, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].fn == callback) {
                array.splice(i, 1);
            }
        }
    }
}