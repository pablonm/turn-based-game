import Axios from './Axios'

export const action = (characterCode, actionCode) => Axios.post('/action', { characterCode, actionCode })