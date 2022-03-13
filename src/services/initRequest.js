//// Using Axios interceptors
import axios from 'axios';
// import { store } from 'stores';

//// actions
import { setLoading } from 'state/app/appSlice';

const configs = {
  baseURL: process.env.REACT_APP_ENDPOINT,
  // timeout: 30000,    //// Call API, after ... sec without receiving data => display/show timeout err
  showLoading: false,
};

export const instance = axios.create(configs);

export default function initRequest(store) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  //// client request API
  instance.interceptors.request.use(
    (config) => {
      // console.log('request successful: ', config);

      //// check to show loading
      if (config.showLoading) {
        //// show loading
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      //// check and auth token if in local store
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['x-auth-token'] = accessToken;
      }

      return config;
    },
    (error) => {
      if (error.config.showLoading) {
        //// hide loading
        decreaseRequestCount();
      }

      return Promise.reject(error);
    }
  );

  //// BE response API
  instance.interceptors.response.use(
    (res) => {
      // console.log('response re: ', config);
      if (res.config.showLoading) {
        //// hide loading
        decreaseRequestCount();
      }
      return res;
    },
    async (error) => {
      if (error && error.config.showLoading) {
        //// hide loading
        decreaseRequestCount();
      }

      //// handle request timeout
      if (error.code === 'ENCONNADRTED') {
        //// hide loading
        decreaseRequestCount();
        //// code something to show error or ...
      }

      //// handle refresh token
      const statusCode = error.response.status;
      if (statusCode === 401 && error.config._retry) {
        error.config._retry = true;
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const result = await instance.post(`/auth/refreshtoken`, {
            refreshToken: 'xxx',
          });

          const accessToken = result.data;
          window.localStorage.setItem('accessToken', result.data.accessToken);
          instance.defaults.headers['x-auth-token'] = accessToken;

          //// client -> call api A -> api A expires => call api refreshToken -> auto call api A again after
          return instance(error.config);
        } catch (err) {
          if (err.response && err.response.data) {
            return Promise.reject(error.response.data);
          }

          return Promise.reject(error);
        }
      }

      //// handle errors
      switch (statusCode) {
        case 500: {
          //// handle something
          break;
        }
        case 403: {
          //// handle something
          break;
        }
        case 401: {
          //// handle something
          break;
        }

        default:
          break;
      }
      return Promise.reject(error);
    }
  );
}
