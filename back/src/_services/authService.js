
export const authService = {
    login,
  }

  function login(data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  
    return fetch(`http://127.0.0.1:3000/user/login`, requestOptions)
      .then(handleResponse)
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.data.user._id))
        return user
      })
  }
  function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        localStorage.removeItem('user_id')
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}