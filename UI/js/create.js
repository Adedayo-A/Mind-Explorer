document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#create-post').onsubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const data = {
            title: document.querySelector('.input-post-title').value,
            content: document.querySelector('.post-content').value,
            author: user.username
        };
        httpPost('/posts', data, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(xhttp.responseText, xhttp.status);
                window.location.href = "bloglist.html";                
            }
        })
    }
})