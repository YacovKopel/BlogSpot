const newPost=document.querySelector('.submitbtn')

const newpost = async (event) => {
    event.preventDefault();
  const title = document.querySelector(".title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (title && content) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log(err)
      alert("Failed to log in");
    }
  }
}

document.querySelector('.submitbtn').addEventListener('click', newpost);
