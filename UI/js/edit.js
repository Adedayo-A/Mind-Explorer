document.addEventListener('DOMContentLoaded', () => {
    const postId = window.location.search.replace('?id=', '');

    document.querySelector('#edit-post').onsubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const data = {
            title: document.querySelector('.input-edit-title').value,
            content: document.querySelector('.edit-content').value,
            author: user.username
        };
        httpPut(`/posts/${postId}`, data, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                window.location.href = "bloglist.html";                
            }
        })
    }

    const getPost = () => {
        httpGet(`/posts/${postId}`, {}, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                document.querySelector('.edit-content').value = respData.content;
                document.querySelector('.input-edit-title').value = respData.title;
            }
        })
    }
    getPost();
})