
// const axios = require('axios')
// const cookie = require('cookie')

// // Checking if backend URL is setup
// if (!process.env.BACK_URL){
//     console.log('Missing environment variable BACK_URL')
// }

// // Setting it as a default URL in the options
// const options = {
//   baseURL: `http://${process.env.BACK_URL}:3001/api/v1/`
// }

// // Creating the instance
// const instance = axios.create(options);

// instance.interceptors.request.use(function (config){
//     if (typeof window !== 'undefined'){
//       const authToken = cookie.parse(document.cookie).authToken
//       if (authToken){
//         config.headers.authorization = authToken
//       } else {
//         delete config.headers.authorization
//       }
//     }
//     return config
//   })

//   module.exports = instance;