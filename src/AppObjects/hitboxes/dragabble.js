class hitboxDragabble extends hitbox {
    onMouseClick = (mCoords, button) => {
        let size = new vec2(1, 1);
        mCoords = cam.screenToWorld(mCoords)
        let bounding = this.primitive.inBounds(mCoords, size);
        if(!bounding) {
            return false;
        }
        this.active = true;
        //offset = this.relativeTo(mCoords);
        return true;
    }
    onMouseMove = (mCoords) => {
        if(!this.active) {
            return;
        }
        //distance moved by the mouse
        let dCoords = mCoords.subVec2(startCoords);
        dCoords = dCoords.divVec2(cam.size)
        //update coords
        this.updateParent(this.coords.addVec2(dCoords), this.size);
    }
    onMouseLeave = (e) => {
        if(this.active) {
            this.active = false
        }
    }
    onMouseRel = (e) => {
        if(this.active) {
            this.active = false
        }
    }
    constructor(coords, size, color, parent) {
        super(coords, size, color, parent)
        this.registerObservers();
        //gContext.inputStates[0].registerObserver(this.onMouseMove, "move")
        //gContext.inputStates[0].registerObserver(this.onMouseRel, "leave")
        //gContext.inputStates[0].registerObserver(this.onMouseClick, "click")
        //gContext.inputStates[0].registerObserver(this.onMouseRel, "rel")
    }
}