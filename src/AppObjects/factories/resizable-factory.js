class resizableFactory {
    constructor() {

    }

    static createLoc(coords, size, color, parent, location) {
        let hitbox = new resizableHitbox(coords, size, color, parent)
        let loc = 0;
        switch(location) {
            case 'left':
                loc = new leftRectResizable(hitbox);
                break;
            case 'right':
                loc = new rightRectResizable(hitbox);
                break;
            case 'down':
                loc = new downRectResizable(hitbox);
                break;
            case 'up':
                loc = new upRectResizable(hitbox);
                break;
            default: 
                throw new error("this is not a resizable type");
        }
        hitbox.changeLocation(loc);
        return hitbox;
    }
}