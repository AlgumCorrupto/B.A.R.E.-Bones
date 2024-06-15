class Memento {
    constructor(history, index) {
        this.history = history
        this.index = index
    }

    goBack() {
        if(this.index >= 0) {
            this.history[this.index].pop()
            this.index--
            this.history[this.index].doAction();
        }
    }

    goFoward() {
        if(this.index <= this.history.length - 2) {
            this.index++
            this.history[this.index].doAction();
        }
    }

    update(action) {
        if(this.index != this.history.length - 1) {
            this.history = this.history.slice(0, this.index + 1)
        }
        this.index = this.history.length
        this.history.push(action)
    }
}