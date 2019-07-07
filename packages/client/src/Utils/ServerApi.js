import Axios from './Axios'

export const move = characterCode => Axios.post('/move', { characterCode })
export const left = characterCode => Axios.post('/left', { characterCode })
export const right = characterCode => Axios.post('/right', { characterCode })