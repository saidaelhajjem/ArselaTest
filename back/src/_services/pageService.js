
export const pageService = {
    create,
    getAll,
    deletePage
  }

  function create(data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  
    return fetch(`http://127.0.0.1:3000/pages/create`, requestOptions)
      .then(handleResponse)
      .then((page) => {
        
        return page
      })
  }

  function getAll() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  
    return fetch(`http://127.0.0.1:3000/pages/getAll`, requestOptions)
      .then(handleResponse)
      .then((page) => {
        
        return page
      })
  }
  
  function deletePage(data) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  
    return fetch(`http://127.0.0.1:3000/pages/delete/${data}`, requestOptions)
      .then(handleResponse)
      .then((page) => {
        
        return page
      })
  }



  function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
     

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}