export class Component{
    constructor(id){
        this.$el = document.querySelectorAll(id)
        this.init()
    }
    init(){}
}
