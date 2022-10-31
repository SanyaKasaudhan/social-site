import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  console.log("dataaa")
  return (dispatch) => {
    fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => 
    {console.log('D',data)
      dispatch(updatePosts(data.products));
    });
    // const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(updatePosts(data.data.posts));
    //   });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
