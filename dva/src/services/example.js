import request from '../utils/request';



export function query() {
  return request('/api/users');
}
export function userlogin(option){
  return request('http://localhost:7001/public/spa/spa/login',option)
}
