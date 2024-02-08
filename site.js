// parameters don't need to be in parentheses if there's only one
const getCardInfo = index => {
    if (index === 0) return {
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#deaf01"
    }
    
    if (index === 1) return {
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#554a33"
    }
    
    if (index === 2) return {
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f",
    }
}


// Anonymous function
// if you're destructuring an object in the parameters, you must use parentheses around the object
const createCard = (card, {title, text, image, color}) => {
    // object destructuring
    // const {title, text, image, color} = info

    card.style.backgroundImage = `url(${image})`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

// Creates cards and shows info to the user for each card class
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) createCard(cards[i], getCardInfo(i))

//setTimeout(() => createCard(cards[0], cardInfo1), 3000)

// Arrow function: curly braces and return statement are optional (but if you use them, you must use both)
// if you're returning an object, you must use parentheses around the object
// const sayHello = name => ({title: "Ms.", name})
// console.log(sayHello("Jane")) // undefined

const info = getCardInfo(0)
const {title, text} = info

console.log(title, text)