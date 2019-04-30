const dev = {
  apiGatewaySession: {
    URL: 'http://localhost:64772/api'
  },
  apiGatewayAdmin: {
    URL: 'http://localhost:64226/api'
  }
};
  
  const prod = {
    apiGatewaySession: {
      URL: '../Admin.Service/api'
    },
    apiGatewayAdmin: {
      URL: '../Session.Service/api'
    }
  };
  
  const config = process.env.NODE_ENV === 'production' ? prod : dev;
  
  export default {
    ...config
  };
  