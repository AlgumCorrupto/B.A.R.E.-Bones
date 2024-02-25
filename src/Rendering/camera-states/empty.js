class emptyState extends cameraState {
    constructor(parent) {
        super(parent)
    }
    move(vel) {
        return vel
    }
}