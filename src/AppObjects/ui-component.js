class interactiveRect extends appObj {
    constructor(coords, size, color, uid) {
        super(coords, size, color)
        this.uid = uid;
        this.primitive = new rectanglePrimitive(coords, size, color);
        this.resizableAreas = [
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "right"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "left"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "up"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "down")
        ]
        gContext.inputStates[1].registerObserver(this.onMouseClick, "click");
        this.dragabbleHitArea = new rectDraggable(coords, size, color, this);
        this.draw();
    }
    updateHitboxes() {
        this.dragabbleHitArea.updateItself(this.coords, this.size);
        for(let i = 0; i < this.resizableAreas.length; i++) {
            this.resizableAreas[i].updateItself(this.coords, this.size);
        }
    }
    update(coords, size, color) {
        this.coords = coords;
        this.size = size;
        this.color = color;
    }
    draw() {
        this.primitive.draw();
        for(let i = 0; i < this.resizableAreas.length; i++) {
            this.resizableAreas[i].draw();
        }
        this.primitive.update(this.coords, this.size, this.color)
        this.updateHitboxes();
    }
    unregisterChildren() {
        gContext.inputStates[0].removeObserver(this.dragabbleHitArea.onMouseClick, "click")
        gContext.inputStates[0].removeObserver(this.dragabbleHitArea.onMouseLeave, "leave")
        gContext.inputStates[0].removeObserver(this.dragabbleHitArea.onMouseRel, "rel");
        gContext.inputStates[0].removeObserver(this.dragabbleHitArea.onMouseMove, "move");
        this.dragabbleHitArea.primitive.coords = new vec2(0,0);
        this.dragabbleHitArea.primitive.size = new vec2(0,0);
        for(let i = 0; i < this.resizableAreas; i++) {
            this.resizableAreas.primitive.size = new vec2(0,0);
            this.resizableAreas.primitive.coords = new vec2(0,0);
            gContext.inputStates[0].removeObserver(this.resizableAreas[i].onMouseClick, "click")
            gContext.inputStates[0].removeObserver(this.resizableAreas[i].onMouseMove, "move");
            gContext.inputStates[0].removeObserver(this.resizableAreas[i].onMouseRel, "rel")
            gContext.inputStates[0].removeObserver(this.resizableAreas[i].onMouseLeave, "leave")
        }
        //gContext.inputStates[0].removeObserver(this.dragabbleHitArea.onMouseClick)
    }

    onMouseClick = (mCoords, button) => {
        if(button != 2) {
            return false
        }
        mCoords = cam.screenToWorld(mCoords)
        let isBounding = this.primitive.inBounds(mCoords, new vec2(1,1))
        if(isBounding) {
            this.unregisterChildren();
            for(let i = 0; i < test.length; i++) {
                if(test[i].uid == this.uid) {
                    this.primitive.coords = new vec2(0,0);
                    this.primitive.size = new vec2(0,0);
                    test.splice(i, 1);
                    console.log("hello")
                }
            }
            return true
        }

    }
}