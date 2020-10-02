import {Component} from '../core/component.js'

export class KeyboardComponents extends Component {
    constructor(id){
        super(id)
    }
    
    init(){
        const link = document.querySelector('a')
        link.addEventListener('click', changeLanguage.bind(this))
    }//Реализовываем логику
}

function changeLanguage(event){
    event.preventDefault()
    const rusKeyb = this.$el[0]
    const engKeyb = this.$el[1]

    if (engKeyb.style.display === 'none'){
        engKeyb.style.display = 'block'
        rusKeyb.style.display = 'none'
    
    } else {
        engKeyb.style.display = 'none'
        rusKeyb.style.display = 'block'
    }
    
}