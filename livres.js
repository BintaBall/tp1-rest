//axios

const axios = require("axios");



async function searchBook(title) {
    const url = `https://openlibrary.org/search.json?title=${title}`;
    const response = await axios.get(url);
    console.log("Livres trouvés :", response.data.docs.slice(0, 5));
}

searchBook("Harry Potter");
