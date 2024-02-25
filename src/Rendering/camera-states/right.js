class rightState extends cameraState {
    constructor(parent) {
        super(parent)
    }
    move(vel) {
        return vel.addVec2(new vec2(-5, 0));
    }
}