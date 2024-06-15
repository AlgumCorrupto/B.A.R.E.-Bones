class intrectFactory {
    constructor() {
        gContext.inputStates[1].registerObserver(this.onMouseClick, "click");
    }
    onMouseClick(mCoords, button) {
        if(button != 0) {
            return
        }
        mCoords = cam.screenToWorld(mCoords)
        let thing = new interactiveRect(mCoords, new vec2(50, 50), "#224455", idCount);
        idCount++
        let action = new MementoAction(thing, thing.size, thing.coords, true)
        memento.update(action)
        //console.log(idCount)
        test.push(thing);
        console.log(test)
    }
}