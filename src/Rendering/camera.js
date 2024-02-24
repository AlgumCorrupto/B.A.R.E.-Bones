class camera {
    position;
    velocity;
    zoom;
    a = false;
    s = false;
    w = false;
    d = false;
    e = false;
    q = false;
    limit
    friction;
    mOffset;
    constructor(coords, size) {
        this.position = coords;
        this.velocity = new vec2(0, 0)
        this.limit = 11;
        this.friction = 1;
        this.size = size;
        this.mOffset = new vec2(0,0);
        this.halfViewport = new vec2(canvas.width, canvas.height);
        const scaledWidth = canvas.width * this.size.x;
        const scaledHeight = canvas.height * this.size.y
        this.scaledOffset = new vec2((scaledWidth - canvas.width) * 0.5, (scaledHeight - canvas.height) * 0.5)
        inputer.registerObserver(this);
    }

    worldToScreen(coords){
        coords = coords.addVec2(this.position);
        coords = coords.mutVec2(this.size)
        return coords.subVec2(cam.scaledOffset);
    };
    screenToWorld(coords){
        coords = coords.addVec2(cam.scaledOffset);
        coords = coords.divVec2(this.size)
        return coords.subVec2(this.position);
    }
    //worldToScreen(coords){
    //    return this.size.mutVec2(coords.addVec2(this.position))
    //};
    //screenToWorld(coords){
    //    coords = coords.subVec2(this.position);
    //    return coords.divVec2(this.size)
    //}
    //worldToScreen(coords){
    //    coords = this.position.mutVec2(cam.size);
    //    coords = coords.subVec2(cam.scaledOffset);
    //    coords = coords.addVec2(this.position)
    //    return coords.mutVec2(this.size)
    //};
    //screenToWorld(coords){
    //    coords = this.position.mutVec2(cam.size);
    //    coords = coords.subVec2(cam.scaledOffset);
    //    coords = coords.subVec2(this.position);
    //    return coords.divVec2(this.size)
    //}
    update() {
        
        if(this.e) {
            this.size = this.size.addConst(.1);
        }
        if(this.q) {
            this.size = this.size.subConst(.1);
        }

        const scaledWidth = canvas.width * this.size.x;
        const scaledHeight = canvas.height * this.size.y;

        this.scaledOffset = new vec2((scaledWidth - canvas.width) * 0.5,
                                    (scaledHeight - canvas.height) * 0.5)
        this.position = this.position.addVec2(this.velocity.divVec2(this.size));
        
        if(this.velocity.x > 0) {
            this.velocity.x -= this.friction
        } else if (this.velocity.x < 0) {
            this.velocity.x += this.friction
        }
        if(this.velocity.y > 0) {
            this.velocity.y -= this.friction
        } else if (this.velocity.y < 0) {
            this.velocity.y += this.friction
        }

        if(this.d) {
            this.velocity = this.velocity.addVec2(new vec2(-5, 0))
        }
        if(this.a) {
            this.velocity = this.velocity.addVec2(new vec2(5, 0))
        }
        if(this.w) {
            this.velocity = this.velocity.addVec2(new vec2(0, 5))
        }
        if(this.s) {
            this.velocity = this.velocity.addVec2(new vec2(0, -5))
        }

        if(this.velocity.x > this.limit) {
            this.velocity.x = this.limit
        } else if(this.velocity.x < 0 - this.limit) {
            this.velocity.x = 0 - this.limit
        }
        
        if(this.velocity.y > this.limit) {
            this.velocity.y = this.limit
        } else if(this.velocity.y < 0 - this.limit) {
            this.velocity.y = 0 - this.limit
        }

    }

    onMouseMove(mCoords) {
        this.mCoords = mCoords;
    }

    onKeyPress(e) {
        if(e.key == "d") {
           this.d = true
        }
        if(e.key == "a") {
            this.a = true
        }
        if(e.key == "w") {
            this.w = true
        }
        if(e.key == "s") {
            this.s = true
        }
        if(e.key == "e") {
            this.e = true
        }
        if(e.key == "q") {
            this.q = true
        }
    }
    onKeyRel(e) {
        if(e.key == "d") {
            this.d = false
         }
         if(e.key == "a") {
             this.a = false
         }
         if(e.key == "w") {
             this.w = false
         }
         if(e.key == "s") {
            this.s = false
         }
         if(e.key == "e") {
            this.e = false
        }
        if(e.key == "q") {
            this.q = false
        }
    }
}