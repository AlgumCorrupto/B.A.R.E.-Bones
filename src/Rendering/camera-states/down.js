class downState extends cameraState {
    constructor(parent) {
        super(parent)
    }
    move(vel) {
        return vel.addVec2(new vec2(0, -5));
    }
}