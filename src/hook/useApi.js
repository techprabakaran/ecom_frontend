import axios from 'axios'
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../stores/global';
import http_common from '../http_common'

export const useApi = () => {
  const dispatch = useDispatch();

  const requestHit = (method, url, payloads = {}) => {
    return new Promise(async(resolve, reject) => {
      try {      
          dispatch(showLoader())
          let temptoken = await localStorage.getItem('token')
          const config = {
            headers: {
              Authorization: `Bearer ${temptoken}`
            }
          }
          if (method === 'get') {
            let response = await axios.get(`${http_common}${url}`, config)          
            dispatch(hideLoader())    
            resolve(response.data)
          } else {
            let response = await axios.post(`${http_common}${url}`, payloads, config)          
            dispatch(hideLoader())    
            resolve(response.data)
          }
      } catch (error) {    
          dispatch(hideLoader())
          reject({
            status: false,
            message: error.message ? error.message : 'Some error occured',
            data: null
        })
      }
    })
  };

  return [requestHit] ;
};
