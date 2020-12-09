
// This section is about the moving letters on top of the search bar
// Wrap every letter in a span
var textWrapper = document.querySelector('.search .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// the effect on this part is based on the example taken from https://tobiasahlin.com/moving-letters/
anime.timeline({loop: true})
  .add({
    targets: '.search .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.search',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }); // End of the mooving letters effect 



/*

    ******  This part is an attempt to adapt the code from this tutorial https://www.youtube.com/watch?v=wxz5vJ1BWrc&t=3s&ab_channel=JamesQQuick ******
    ******  I changed part of the code and this is the original functionality of the code but it wasn't working and it was affecting the moving letters ******
    ******  I left it here to get back after, if you can please try to organise it and get it working ******

                            ******  I hope the search bar looks good enough :)   ******


async function getProducts() {
    let url = '../XML/products.xml';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderProducts() {
    let users = await getProducts();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            
                            <h2>${products.name} ${products.price}</h2>
                            <div class="description"><a href="description:${products.description}">${products.description}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderProducts();

********** End of the original code from https://www.youtube.com/watch?v=wxz5vJ1BWrc&t=3s&ab_channel=JamesQQuick ******





***************  This part of the code is an attempt to get it workning based on the explanation in this website *********
******   https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,resolve%20into%20the%20actual%20data. **********

const charactersList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let products = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = products.filter((products) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredProducts);
});

const loadCharacters = async () => {
    let url = '../XML/products.xml';
    try {
        const res = await fetch(url);
        hpCharacters = await res.json();
        displayProducts(name);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (name) => {
    const htmlString = products
        .map((products) => {
            return `
            <li class="products">
                <h2>${product.name}</h2>
                <p>Category: ${products.category}</p>
                
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadProducts();


async function renderProducts() {
    let users = await getProducts();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            
                            <h2>${products.name} ${products.price}</h2>
                            <div class="description"><a href="description:${products.description}">${products.description}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderProducts();
*/



