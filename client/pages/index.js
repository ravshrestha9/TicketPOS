//import buildClient from '../api/build-client'

import axios from "axios";

const LandingPage = ({currentUser}) => {
 console.log(currentUser);
 //Axios.get('/api/users/currentuser');
 return <h1>Landing Page</h1>;
};

//async (context) 
LandingPage.getInitialProps = async() => {
//  // const client = buildClient(context);
//  // const {data} = await client.get('/api/users/currentuser');

//  // return data;

//  const response = await Axios.get('/api/users/currentuser');

if(typeof window === 'undefined'){
 const {data} = await axios.get('http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser');
 return data;
}else{
 const response = await axios.get('/api/users/currentuser');
 return response.data;
}
 return {};
};

export default LandingPage;
