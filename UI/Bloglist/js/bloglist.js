const searchIcon = document.querySelector('.search-svg');
const searchInput = document.querySelector('.search-input');

const showSearchInput = () => {
    if(searchInput.className == 'search-input') {
        searchInput.className += ' show';
    } else {
        searchInput.className = 'search-input';
    }
}

searchIcon.addEventListener('click' , showSearchInput);