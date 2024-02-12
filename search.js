function searchBooks() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    console.log("Search Term:", searchTerm); // Confirming the search term is captured correctly

    const filteredBooks = books.filter(book => 
        book.Title?.toLowerCase().includes(searchTerm) ||
        book.Author?.toLowerCase().includes(searchTerm) ||
        book.Themes?.some(theme => theme?.toLowerCase().includes(searchTerm))
    );
    
}
