document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const text = book.innerText.toLowerCase();
        book.style.display = text.includes(query) ? 'flex' : 'none';
    });
});
