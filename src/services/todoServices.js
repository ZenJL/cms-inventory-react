import httpRequest from './httpRequest';

export const fetchTodo = async () => {
  return httpRequest.get(`https://tony-json-server.herokuapp.com/api/todos`, {
    showLoading: true,
  });
};
