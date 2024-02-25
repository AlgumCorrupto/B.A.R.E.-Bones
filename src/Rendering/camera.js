class camera {
    position;
    velocity = new vec2(0, 0);;
    velFactor
    zoom;
    xState = new emptyState(this);
    yState = new emptyState(this);
    limit
    friction;
    mOffset;
    e = false;
    q = false;
    a = false;
    s = false;
    w = false;
    d = false;
    constructor(coords, size) {
        this.position = coords;
        this.limit = 11;
        this.friction = 1;
        this.size = size;
        this.mOffset = new vec2(0,0);
        this.halfViewport = new vec2(canvas.width, canvas.height);
        const scaledWidth = canvas.width * this.size.x;
        const scaledHeight = canvas.height * this.size.y
        this.scaledOffset = new vec2((scaledWidth - canvas.width) * 0.5, (scaledHeight - canvas.height) * 0.5)
        kb.Observer(this);
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
    update() {
        if(this.e) {
            this.size = this.size.addConst(.1);
        }
        if(this.q) {
            this.size = this.size.subConst(.1);
        }
        if(this.size.x < 0.1) {
            this.size.x = 0.1;
        }
        if(this.size.y < 0.1) {
            this.size.y = 0.1
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

        this.velocity = this.xState.move(this.velocity);
        this.velocity = this.yState.move(this.velocity);

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
        //d key
        if(e.keyCode == 68) {
           this.xState = new rightState(this);
        }
        //a key
        if(e.keyCode == 65) {
            this.xState = new leftState(this)
        }
        //w key
        if(e.keyCode == 87) {
            this.yState = new upState(this);
        }
        //s key
        if(e.keyCode == 83) {
            this.yState = new downState(this);
        }

        if(e.keyCode == 69) {
            this.e = true
        }
        if(e.keyCode == 81) {
            this.q = true
        }
    }
    onShiftPress(e) {
        this.limit = 30;
    }
    onKeyRel(e) {
        //d
        if(e.keyCode == 68) {
            this.xState = new emptyState(this);
         }
         //a
         if(e.keyCode == 65) {
            this.xState = new emptyState(this);
         }
         //w
         if(e.keyCode == 87) {
            this.yState = new emptyState(this);
         }
         //s
         if(e.keyCode == 83) {
            this.yState = new emptyState(this);
         }
         //e
         if(e.keyCode == 69) {
            this.e = false
        }
        //q
        if(e.keyCode == 81) {
            this.q = false
        }
    }
    onShiftRel(e) {
        this.limit = 11;
    }
}