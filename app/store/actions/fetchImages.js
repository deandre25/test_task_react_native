const ACCESS_KEY = 'ZiPkBwJGmYxOP4KNmOPqnXtdETsO-MsA-CQpdrxYMYI'

export const fetchImages = () => {
  return fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch images: ${res.status}`);
      }
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      throw error;
    });
}