class downRectResizable extends downResizable {
    constructor(parent) {
        super(parent)
        this.parent.primitive = new rectanglePrimitive(this.coords, this.size, this.color);
        //this.parent.updateItself();
    }
}