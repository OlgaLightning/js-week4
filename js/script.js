function formatName(username) {
    username = username.trim();
    username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    return username;
}

function checkSpam(str) {
    return str.replace(/viagra|xxx/ig, '***');
}

addBtn.addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput');
    const avatarInput = document.getElementById('avatarInput');
    const messageInput = document.getElementById('messageInput');
    const addBtn = document.getElementById('addBtn');
    const chatFeed = document.querySelector('.chatFeed');

    if (nameInput.value === '' || avatarInput.value === '' || messageInput.value === '') {
        return alert('Please fill in all empty fields')
    } else {
        const username = formatName(nameInput.value);
        const avatar = avatarInput.value;
        const message = checkSpam(messageInput.value);

        chatFeed.insertAdjacentHTML('afterbegin',
            `<div class='userMessage'>
                <div class='chatEntry'>
                    <img src=${avatar} />
                    <h3>${username}</h3>
                </div>
                <div class='p'>${message}</div>
            </div>
        `)

        nameInput.value = '';
        avatarInput.value = '';
        messageInput.value = '';
    }
});