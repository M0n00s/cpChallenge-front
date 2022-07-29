import { iEchoApi } from '../../../axios/axios'
import { setInverText, startInverText } from './iEchoSlice'


export const getInverText = (text) => {
  return async (dispatch) => {
    dispatch(startInverText())
    // realizar peticion http
    try {
      const resp = await iEchoApi.get(`/iecho?text=${text}`).then(data => data.data)
      // dispatch set text
      dispatch(setInverText(resp))
    } catch (error) {
      console.log(error)
    }
  }
}
