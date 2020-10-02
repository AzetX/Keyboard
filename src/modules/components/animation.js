import { Component } from '../core/component'

export class AnimationKeys extends Component {
    constructor(id){
        super(id)
    }
    init(){
      
        this.$el[0].addEventListener('mouseenter', enterMouse.bind(this), true)
        this.$el[0].addEventListener('mouseleave', leaveMouse.bind(this), true)
        this.$el[0].addEventListener('click', highlightClick.bind(this), true)
        this.$el[0].addEventListener('keypress', highlightPress.bind(this), true)
       
    }
}

const keyGeneral= ['key', 'key space', 'key slash', 'key enter', 'key backspace', 'key tab', 'key capslock lower', 'key shift', 'key capslock upper',  'key capslock']

function enterMouse(event){
  const target = event.target
    if(keyGeneral.every(i => i!=target.classList.value)) return
    target.style.cursor = "pointer" 
    target.style.backgroundColor = "lightblue"
    target.style.color = "white"
}//анимация при наведении мышкой

function leaveMouse(event){
    event.target.style.backgroundColor = ""
    event.target.style.color = ""
}//убрать анимации, если мышь покинула

function highlightClick(event){
    if(keyGeneral.every(i => i!=event.target.classList.value)) return
    event.target.style.backgroundColor ='red'
    setTimeout(()=>{
        event.target.style.backgroundColor = ''
    }, 200)
}//анимация при клики мышкой



function highlightPress(event){
    if(keyGeneral.every(i => i!=event.target.classList.value)) return
    event.target.style.backgroundColor ='red'
    setTimeout(()=>{
        event.target.style.backgroundColor = ''
    }, 200)
}//анимация при клики клавиатурой






















// function highlight(event){
    // event.preventDefault()
    // const className = event.target.classList.value
    // console.log(className)
    // if(className==='key'){
    //     event.target.style.background ='yellow'
    // }
    
    
// }

       // for(let i=0; i<key.length; i++){
        //     this.key[i].addEventListener('mouseenter', function(event){
        //         this.style.color = 'red'
        //         this.style.backgroundColor='yellow'
        //     })
            
        //     this.$el[i].addEventListener('mouseleave', function(event){
        //         this.style.color = ''
        //         this.style.backgroundColor='transparent'
        //     })            
    // }
    // this.$el[0].style.cursor = "pointer";
    // for(let i=0; i<this.$el.length; i++){
     
    //     this.$el[i].addEventListener('click', mouseTarget)
    // }
// console.log(this.$el.map)