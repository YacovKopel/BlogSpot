const newPost=document.querySelector('.newPostbtn')

const addPost = async () => {
      await document.location.replace('/newpost');
      alert(response.statusText)}

  
  document.querySelector('.newPostbtn').addEventListener('click', addPost);