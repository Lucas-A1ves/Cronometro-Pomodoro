import state from "./state.js";
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
state.isRunning=document.documentElement.classList.toggle('running')
 
timer.countdown()
sounds.buttonPressAudio.play()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function set() {
 el.minutes.setAttribute('contenteditable', true) // Botão para configurar minutos
 el.minutes.focus()
}

export function toggleMusic(){
  state.isMute=document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.chuvaPressAudio.play()
    return
  }
   sounds.chuvaPressAudio.pause()
}