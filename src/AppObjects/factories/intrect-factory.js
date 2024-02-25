class intrectFactory {
    constructor() {
        gContext.inputStates[1].registerObserver(this);
    }
    onMouseClick(mCoords) {
        mCoords = cam.screenToWorld(mCoords)
        let thing = new interactiveRect(mCoords, new vec2(50, 50), "#224455");
        test.push(thing);
    }
}