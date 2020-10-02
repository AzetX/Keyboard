import {Component} from '../core/component.js'

export class ClickKeyboards extends Component{
    constructor(el){
        super(el)
    }
    init(){
        this.$el[0].addEventListener('click', handleClickRu.bind(this))
        this.$el[1].addEventListener('click', handleClickEng.bind(this))
        // document.addEventListener('click', handleClick.bind(this)) 
        // При проверке в 37 строке, когда переключаем клавиатуру, 
        // идет повторная проверка Backspace на русском, из-за этого регистры не меняются. Поэтому использовал 2 индентичные функции, 
        // с проверкой только для keyboardRu и keyboardEng. Из-за этого код увеличился.
        //   Не понимаю как решить эту проблему   
    }

}



function handleClickRu(event){
   
    const action = event.target
    if(action.hasAttribute('data-action')===false) return
  
    let char = action.innerHTML

    if(char==='Caps lock'){
       
        action.classList.toggle('lower')
        action.classList.toggle('upper')
   }
   else{
  
    action.classList.toggle('upper')
    action.classList.toggle('lower')

   }
    const caps = document.querySelectorAll('.capslock')  
    let str;
    if(caps[0].classList.contains('upper')){
        str = char.toUpperCase()
       
   }

   else{
        str = char.toLowerCase()
   }
  
 

    switch(str){   
        case "backspace":  area.value=area.value.substring(0, area.value.length - 1);
        break;
        case "BACKSPACE":  area.value=area.value.substring(0, area.value.length - 1);
        break;
        case "space": area.value+= ' ';
        break;
        case "SPACE": area.value+= ' ';
        break;
        case "enter": area.value+= String.fromCharCode(action.dataset.action);
        break;
        case "ENTER": area.value+= String.fromCharCode(action.dataset.action);
        break;
        case "caps lock": area.value+='';
        break;
        case "CAPS LOCK": area.value+='';
        break;
        case "shift": area.value+='';
        break;
        case "SHIFT": area.value+='';
        break;
        case "tab": area.value+='';
        break;
        case "TAB": area.value+='';
        break;
        case "ctrl": area.value+='';
        break;
        case "CTRL": area.value+='';
        break;
        case "fn": area.value+='';
        break;
        case "FN": area.value+='';
        break;
        case '<img src="https://img.icons8.com/fluent-systems-filled/24/000000/windows-client.png">': area.value+='';
        break;
        case '<IMG SRC="HTTPS://IMG.ICONS8.COM/FLUENT-SYSTEMS-FILLED/24/000000/WINDOWS-CLIENT.PNG"><IMG SRC="HTTPS://IMG.ICONS8.COM/FLUENT-SYSTEMS-FILLED/24/000000/WINDOWS-CLIENT.PNG">': area.value+='';
        break;
        case "alt": area.value+='';
        break;
        case "ALT": area.value+='';
        break;
        case "alt gr": area.value+='';
        break;
        case "ALT GR": area.value+='';
        break;
        case '<img src="https://img.icons8.com/material/26/000000/cls.png">': area.value+='';
        case '<IMG SRC="HTTPS://IMG.ICONS8.COM/MATERIAL/26/000000/CLS.PNG"><IMG SRC="HTTPS://IMG.ICONS8.COM/MATERIAL/26/000000/CLS.PNG">': area.value+='';
        break;
        case '<b>&lt;</b>': area.value+='';
        break;
        case '<B>&LT;</B>': area.value+='';
        break;
        case '<b>&gt;</b>': area.value+='';
        break;
        case '<B>&GT;</B>': area.value+='';
        break;
        default: area.value+=str;
    }
}



function handleClickEng(event){
   
    const action = event.target
    if(action.hasAttribute('data-action')===false) return
  
  
    let char = action.innerHTML
    
    if(char==='Caps lock'){
       
        action.classList.toggle('lower')
        action.classList.toggle('upper')
   }
   else{
  
    action.classList.toggle('upper')
    action.classList.toggle('lower')

   }
   
   const caps = document.querySelectorAll('.capslock')
   console.log(caps)
   let strEng;
   if(caps[1].classList.contains('upper')){
    strEng = char.toUpperCase()
   }
   else{
    strEng = char.toLowerCase()
   }
 

    switch(strEng){   
        case "backspace":  area.value=area.value.substring(0, area.value.length - 1);
        break;
        case "BACKSPACE":  area.value=area.value.substring(0, area.value.length - 1);
        break;
        case "space": area.value+= ' ';
        break;
        case "SPACE": area.value+= ' ';
        break;
        case "enter": area.value+= String.fromCharCode(action.dataset.action);
        break;
        case "ENTER": area.value+= String.fromCharCode(action.dataset.action);
        break;
        case "caps lock": area.value+='';
        break;
        case "CAPS LOCK": area.value+='';
        break;
        case "shift": area.value+='';
        break;
        case "SHIFT": area.value+='';
        break;
        case "tab": area.value+='';
        break;
        case "TAB": area.value+='';
        break;
        case "ctrl": area.value+='';
        break;
        case "CTRL": area.value+='';
        break;
        case "fn": area.value+='';
        break;
        case "FN": area.value+='';
        break;
        case '<img src="https://img.icons8.com/fluent-systems-filled/24/000000/windows-client.png">': area.value+='';
        break;
        case '<IMG SRC="HTTPS://IMG.ICONS8.COM/FLUENT-SYSTEMS-FILLED/24/000000/WINDOWS-CLIENT.PNG"><IMG SRC="HTTPS://IMG.ICONS8.COM/FLUENT-SYSTEMS-FILLED/24/000000/WINDOWS-CLIENT.PNG">': area.value+='';
        break;
        case "alt": area.value+='';
        break;
        case "ALT": area.value+='';
        break;
        case "alt gr": area.value+='';
        break;
        case "ALT GR": area.value+='';
        break;
        case '<img src="https://img.icons8.com/material/26/000000/cls.png">': area.value+='';
        case '<IMG SRC="HTTPS://IMG.ICONS8.COM/MATERIAL/26/000000/CLS.PNG"><IMG SRC="HTTPS://IMG.ICONS8.COM/MATERIAL/26/000000/CLS.PNG">': area.value+='';
        break;
        case '<b>left</b>': area.value+='';
        break;
        case '<b>right</b>': area.value+='';
        break;
        case '<B>LEFT</B>': area.value+='';
        break;
        case '<B>RIGHT</B>': area.value+='';
        break;
        default: area.value+=strEng;
    }
}



