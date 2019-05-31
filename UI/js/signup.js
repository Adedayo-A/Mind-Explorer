document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.registration-form').onsubmit = (e) => {
        e.preventDefault();
        const data = {
            username: document.querySelector('#form-first-name').value,
            password: document.querySelector('#form-email').value
        };
        httpPost('/users', data, (err, respData, xhttp) => {
            if (err) {
                console.log(err);
            } else {
                localStorage.setItem('loggedInUser', JSON.stringify(respData));
                window.location.href = "index.html";
    
            }
        })   
    }

    document.querySelector('.login-form').onsubmit = (e) => {
        e.preventDefault();
        const username = document.querySelector('#form-username').value;
        const password = document.querySelector('#form-password').value;
        httpGet('/users', {}, (err, respData, xhttp) => {
            for(let i = 0; i < respData.length; i++){
                if(respData[i].username == username && respData[i].password == password) {
                    localStorage.setItem('loggedInUser', JSON.stringify(respData[i]));
                    window.location.href = "index.html";
                }
            }
            if (err) {
                console.log(err);
            } else {
                console.log(xhttp.responseText, xhttp.status);
            }
        })
    }
})