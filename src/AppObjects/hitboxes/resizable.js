class resizableHitbox extends hitbox {
    location
    constructor(coords, size, color, parent) {
        super(coords, size,"#FFFF00AA", parent)
        this.registerObservers();
        //gContext.inputStates[0].registerObserver(this.onMouseMove, "move")
        //gContext.inputStates[0].registerObserver(this.onMouseLeave, "leave")
        //gContext.inputStates[0].registerObserver(this.onMouseClick, "click")
        //gContext.inputStates[0].registerObserver(this.onMouseRel, "rel")
    }
    changeLocation(location) {
        this.location = location;
    }
    updateItself(coords) {
        this.location.updateItself(coords);
    }
    updateParent(coords, size) {
        this.location.updateParent(coords, size)
    }
    onMouseClick = (mCoords, button) => {
        let size = new vec2(1, 1);
        mCoords = cam.screenToWorld(mCoords)
        let bounding = this.primitive.inBounds(mCoords, size);
        if(!bounding) {
            return false;
        }
        this.active = true;
        console.log(`bounding? ${bounding}`)
        return true;
        //offset = this.relativeTo(mCoords);
    }
    onMouseMove = (mCoords) => {
        if(!this.active) {
            return;
        }
        this.location.handleMove(mCoords);
        //this.update(this.coords.addVec2(dCoords), this.size);
    }
    onMouseLeave = (mCoords) => {
        if(this.active) {
            this.active = false;
            let action = new MementoAction(this.parent, this.parent.size, this.parent.coords)
            memento.update(action)
        }
    }
    onMouseRel = (mCoords) => {
        if(this.active) {
            let action = new MementoAction(this.parent, this.parent.size, this.parent.coords)
            memento.update(action)
            this.active = false;
        }
    }
}