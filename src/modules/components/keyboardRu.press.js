import {Component} from '../core/component.js'

export class PressRuKeyboards extends Component{
    constructor(el){
        super(el)
    }
    init(){
        this.$el[0].addEventListener('keydown', getDataKeyPress.bind(this));
    }

}
const keys = document.querySelectorAll('.keyboardRus .key')
const keyElement = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, ' ', 91, 18, 32, 18, 17, '', 37, 39]//массив keyCode
keyElement.map((elem, ind, arr) => keys[ind].setAttribute('data-action', keyElement[ind]))//добавляю keyCode для  keyboardRus


function getDataKeyPress(event){

   for(let i=0; i<keys.length; i++){
       let value = keys[i]
       if(+value.getAttribute('data-action')===event.keyCode){
        value.style.backgroundColor ='red'
        setTimeout(()=>{
            value.style.backgroundColor = ''
        }, 200)
       }
    }
    
    switch(event.key){//комбинация клавиш alt+shift для переключения языка
        case 'Shift': 
        if(event.getModifierState('Alt')){
            const keyboard= document.querySelectorAll('.js-keyboard-language-change')
            const rusKeyb = keyboard[0]
            const engKeyb = keyboard[1]
        
            if (engKeyb.style.display === 'none'){
                engKeyb.style.display = 'block'
                rusKeyb.style.display = 'none'
            
            } else {
                engKeyb.style.display = 'none'
                rusKeyb.style.display = 'block'
            }
        }
        break;
        // case 'Alt':
        // if(event.getModifierState("Shift")){
        //     event.preventDefault();
        //     alert('Нажмите на кнопку "Toggle", чтобы переключить язык :)')
        // }
        // break;        
    }
    

}

