document.getElementById('createPostBtn').addEventListener('click', function() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('postFullScreen').style.display = 'flex';
});

document.getElementById('backToHome').addEventListener('click', function() {
    document.getElementById('postFullScreen').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
});

document.getElementById('backToCreate').addEventListener('click', function() {
    document.getElementById('postsContainer').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
});

document.getElementById('publishPost').addEventListener('click', function() {
    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    if (title && content) {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="like">Like</button>
            <button class="comment">Comment</button>
            <button class="share">Share</button>
        `;
        document.getElementById('posts').prepend(postDiv);
        document.getElementById('postFullScreen').style.display = 'none';
        document.getElementById('postsContainer').style.display = 'block';
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
        
        postDiv.querySelector('.like').addEventListener('click', function() {
            alert('You liked this post!');
        });
        postDiv.querySelector('.comment').addEventListener('click', function() {
            let comment = prompt('Enter your comment:');
            if (comment) {
                let commentPara = document.createElement('p');
                commentPara.innerHTML = `<strong>Comment:</strong> ${comment}`;
                postDiv.appendChild(commentPara);
            }
        });
        postDiv.querySelector('.share').addEventListener('click', function() {
            alert('Post shared!');
        });
    }
});
