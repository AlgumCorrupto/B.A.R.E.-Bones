class context {
    constructor(inputStates) {
        this.inputStates = inputStates;
        this.inputer = inputStates[0];
        this.stateIndex = 0;
        kb.Observer(this);
        //this.rectFactory = new intrectFactory(this);
    }

    cycleStates(direction) {
        this.stateIndex += direction;
        if(this.stateIndex >= this.inputStates.length) {
            this.stateIndex = 0;
        } else if(this.stateIndex < 0) {
            this.stateIndex = this.inputStates.length - 1;
        } 
        console.log(this.stateIndex)
        this.inputer = this.inputStates[this.stateIndex];
    }

    onKeyPress(e) {
        if(e.keyCode == 90) {
            this.cycleStates(-1)
        }
        if(e.keyCode == 67) {
            this.cycleStates(1)
        }
    }

}