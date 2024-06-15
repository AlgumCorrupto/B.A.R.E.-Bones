class MementoAction {
    constructor(parent, size, coords, remove=false) {
        this.parent = parent
        this.size = new vec2(size.x, size.y)
        this.coords = new vec2(coords.x, coords.y)
        this.remove = remove
    }

    pop() {
        if(this.remove == true) {
            this.parent.unregisterChildren();
            for(let i = 0; i < test.length; i++) {
                if(test[i].uid == this.parent.uid) {
                    this.parent.primitive.coords = new vec2(0,0);
                    this.parent.primitive.size = new vec2(0,0);
                    test.splice(i, 1);
                }
            }
        }
    }
    doAction() {
        if(this.remove == false){
            this.parent.update(this.coords, this.size)
            this.parent.updateHitboxes();
        }
        else {
            for(let i = 0; i < test.length; i++) {
                if(test[i].uid == this.parent.uid) {
                    return
                }
            }
            this.parent = new interactiveRect(new vec2(this.coords.x, this.coords.y), new vec2(this.size.x, this.size.y), "#224455", idCount);
            idCount++;
            test.push(this.parent);
            console.log(test)
        }
    }
}