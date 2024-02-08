

const cardInfo1 = {
    "title": "Nike",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#deaf01"
}

const cardInfo2 = {
    "title": "Independent",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#554a33"
}

const cardInfo3 = {
    "title": "Michael Kors",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    "color": "#01322f",
}

const title = "Adidas"
const text = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
const image = "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
const color = "#deaf01"

const cardInfo4 = {
    title,
    text,
    image,
    color
}

function createCard(card, info) {

    card.style.backgroundImage = `url(${info.image})`
    card.style.color = info.color

    const h1 = card.querySelector('h1')
    h1.textContent = info.title

    const p = card.querySelector('p')
    p.textContent = info.text
}

const cards = document.querySelectorAll('.card')
createCard(cards[0], cardInfo1)
createCard(cards[1], cardInfo2)
createCard(cards[2], cardInfo3)
