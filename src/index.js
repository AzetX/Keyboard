import  './css/index.css'
import {KeyboardComponents} from './modules/components/keyboard.component.js'
import {AnimationKeys} from './modules/components/animation.js'
import {PressRuKeyboards} from './modules/components/keyboardRu.press.js'
import {PressEngKeyboards} from './modules/components/keyboardEng.press.js'
import {ClickKeyboards} from './modules/components/clickKeyboards.js'

const keyboard= new KeyboardComponents('.js-keyboard-language-change')
const animationKey = new AnimationKeys('.app')
const pressRukeyboard = new PressRuKeyboards('#area')
const pressEngkeyboard = new PressEngKeyboards('#area')
const clickKeyboard = new ClickKeyboards('.js-keyboard-language-change')





