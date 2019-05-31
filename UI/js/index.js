document.addEventListener('DOMContentLoaded', () => {
    const getPosts = () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        httpGet('/posts', {}, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                const userBlogWrapper = document.querySelector('.post-wrapper');
                userBlogWrapper.innerHTML = "";
                respData.forEach((post) => {
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
    if (localStorage.getItem("loggedInUser") === null) {
        const needUser = document.querySelectorAll('.need-user');
        needUser.forEach((user) => {
            user.style.display = 'none';
        })
    } else if(localStorage.getItem("loggedInUser") !== null) {
        const noUser = document.querySelectorAll('.no-user');
        noUser.forEach((user)=> {
            user.style.display = 'none';
        })
    }
})