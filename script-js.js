// Функции для работы с постами
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let advertisements = JSON.parse(localStorage.getItem('advertisements')) || [];

function createPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() === '') return;

    const newPost = {
        id: Date.now(),
        content: postContent,
        author: 'Текущий пользователь',
        date: new Date().toLocaleString()
    };

    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
    document.getElementById('postContent').value = '';
}

function renderPosts() {
    const postsArea = document.getElementById('postsArea');
    postsArea.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.author}</h3>
            <p>${post.content}</p>
            <small>${post.date}</small>
        `;
        postsArea.appendChild(postElement);
    });
}

function renderAdvertisements() {
    const advertisementBlock = document.getElementById('advertisementBlock');
    if (advertisementBlock) {
        advertisementBlock.innerHTML = '';
        advertisements.forEach(ad => {
            const adElement = document.createElement('div');
            adElement.innerHTML = `
                <h4>${ad.title}</h4>
                <p>${ad.content}</p>
            `;
            advertisementBlock.appendChild(adElement);
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderAdvertisements();
});
