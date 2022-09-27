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
export const postNewOrder = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response.message)
      }
    })
}

