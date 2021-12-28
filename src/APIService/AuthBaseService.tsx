import Axios from 'axios'
import {DOMAIN_USER_AUTH } from '../utils/constants/settingSystem'

export class AuthBaseService {
  get = (url: string) => {
    return Axios({
      url: `${DOMAIN_USER_AUTH}/${url}`,
      method: 'GET',
    })
  }
  delete = (url: string) => {
    return Axios({
        url:`${DOMAIN_USER_AUTH}/${url}`,
        method:'DELETE'
    })
}
put = (url: string, model: any ) => {
  return Axios({
      url:`${DOMAIN_USER_AUTH}/${url}`,
      method:'PUT',
      data: model,
     
  }) 
}

post = (url: string, model: any ) => {
    return Axios({
        url:`${DOMAIN_USER_AUTH}/${url}`,
        method:'POST',
        data: model,
       
    }) 
  }
}
