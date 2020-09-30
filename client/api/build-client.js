import axios from 'axios';

export default ({req}) =>{
 if(typeof window === 'undefined'){
  //We are on the server
  //If in server request needs to be directed to
 // http://service.namespace.svc.cluster.local
  return axios.create({
   baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
   headers: req.headers
  });
 }
 else{
  //We must be on the browser 
 return axios.create({
  baseURL: '/'
 })
 }
}