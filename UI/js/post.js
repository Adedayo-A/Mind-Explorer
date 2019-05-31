document.addEventListener('DOMContentLoaded', () => {
    const getPost = () => {
        const postId = window.location.search.replace('?id=', '');
        httpGet(`/posts/${postId}`, {}, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                document.querySelector('.edit-button a').setAttribute('href', `../edit.html?id=${postId}`);  
                document.querySelector('.title').textContent = respData.title;           
                document.querySelector('.author').textContent = respData.author;           
                document.querySelector('.post-content').textContent = respData.content;  
                document.querySelector('.post-content').textContent = respData.content;

                document.querySelector('.delete-button a').onclick = () => {
                    httpDelete(`/posts/${postId}`, (err, respData, xhttp) => {
                        if (err) {
                            console.log(err);
                        } else {
                            window.location.href = "../bloglist.html";
                        }
                    })
                }
        
                if (localStorage.getItem("loggedInUser") === null) {
                    document.querySelector('.edit-button').style.display = 'none';
                    document.querySelector('.delete-button').style.display = 'none';
                } else {
                    const user = JSON.parse(localStorage.getItem("loggedInUser"));
                    if (user.username !== respData.author) {
                        document.querySelector('.edit-button').style.display = 'none';
                        document.querySelector('.delete-button').style.display = 'none';
                    }
                }
            }
        })
    }
    getPost();
})