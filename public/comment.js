const newPost=document.querySelector('.addComment')

const newComment = async (event) => {
    event.preventDefault();
  const userComment = document.querySelector("#userComment").value.trim();

  if (userComment) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ userComment}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/post/:id");
    } else {
      console.log(err)
      alert("Failed to log in");
    }
  }
}

document.querySelector('.addComment').addEventListener('click', newComment);
