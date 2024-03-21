import { useEffect } from "react"
import axios from "axios";

function useAxios() {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',

  })
  useEffect(()=>{
    // request 
    const requestInterceptor = axios.interceptors.request.use((config)=> {
     
      return config;
    }, function (error) {
      Interaction
      return Promise.reject(error);
    });
    //response interceptor
    const responseInterceptor = axios.interceptors.response.use((response) => {
      return response;
    },function (error) {
        return Promise.reject(error);
        
      });
      return ()=> {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);

      }
  },[axiosInstance])


  return (
    <div>useAxios</div>
  )
}

export default useAxios