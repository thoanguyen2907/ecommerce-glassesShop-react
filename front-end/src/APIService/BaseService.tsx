import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Product } from '../types'
import { DOMAIN } from '../utils/constants/settingSystem'


export class BaseService {



  get = (url: string) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    })
  }
  delete = (url: string) => {
    return Axios({
        url:`${DOMAIN}/${url}`,
        method:'DELETE',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    })
}
put = (url: string, model: any ) => {
  return Axios({
      url:`${DOMAIN}/${url}`,
      method:'PUT',
      data: model,
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
     
  }) 
}
post = (url: string, model: any ) => {
  return Axios({
      url:`${DOMAIN}/${url}`,
      method:'POST',
      data: model,
     headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}    
  }) 
}
}
