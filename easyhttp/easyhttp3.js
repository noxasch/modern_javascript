// ES7 async & await
// make the promises and fetch much more cleaner
// and shorter

class EasyHTTP {

  async get(url){
    const res = await fetch(url);
    const data = await res.json();
    return data
  }

  // POST using fetch() + async + await
  async post(url, data){
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  // PUT using fetch() + Promises
  async put(url, data){
    const res = fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  // PUT using fetch() + Promises
  async delete(url, data){
    const res = fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      });
      const resData = await 'Resource Deleted...';
      return resData;
  }
}