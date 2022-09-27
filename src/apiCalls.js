const apiCall = () => {
  return fetch(`http://localhost:3001/api/v1/orders`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .catch((error) => {
      return true;
    });
};
export const getOrders = (data) => {
  let promise = Promise.all([apiCall(data)]).then((movieData) => {
    return movieData;
  });
  return promise;
}

