document.addEventListener('DOMContentLoaded', () => {
    const getPosts = () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        httpGet('/posts', {}, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                const userPosts = respData.filter((post) => post.author == user.username);
                const userBlogWrapper = document.querySelector('.post-wrapper');
                userBlogWrapper.innerHTML = "";
                userPosts.forEach((post) => {
                    userBlogWrapper.innerHTML += `<a href="Bloglist/post.html?id=${post.id}">
                    <h2 class="post-title">
                      ${post.title}
                    </h2>
                  </a>
                  <p class="post-meta">Posted by
                    <a href="Bloglist/post.html">${post.author}</a>
                    on May 30, 2019</p>`
                })           
            }
        })
    }
    getPosts();
})