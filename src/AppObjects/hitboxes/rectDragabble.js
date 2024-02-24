class rectDraggable extends hitboxDragabble {
    constructor(coords, size, color, parent) {
        super(coords, size, color, parent);
        this.primitive = new rectanglePrimitive(coords, size, color)
    }
}