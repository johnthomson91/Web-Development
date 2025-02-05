const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    resetImages();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    displayResult(res.data);
    form.elements.query.value = ''

})

const displayResult = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.appendChild(img);
        }
    }
}

function resetImages() {
    const images = document.querySelectorAll('IMG');
    for (let image of images) {
        image.remove();
    }
}