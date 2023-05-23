const cardArray = [
    {
      name: 'fries',
      img: 'memory-game-images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'memory-game-images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'memory-game-images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'memory-game-images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'memory-game-images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'memory-game-images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'memory-game-images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'memory-game-images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'memory-game-images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'memory-game-images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'memory-game-images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'memory-game-images/hotdog.png'
    }
]
let result = document.getElementById('result');
cardArray.sort(() => 0.5-Math.random())
const board = document.querySelector('#grid');
let chosenCards = []
let chosenCardsId = []
let wonCards = []
let end = document.getElementById('end')


// create game board
function createBoard(){
  for (let i = 0; i<cardArray.length;i++){
    const card = document.createElement('img')
    card.setAttribute('src','./memory-game-images/blank.png')
    card.setAttribute('data-id',i)
    board.appendChild(card)
    card.addEventListener('click',flip)
  }
}
createBoard()
// match
function check(){
  const cards = document.querySelectorAll('#grid img')
  let optionOne = chosenCardsId[0]
  let optionTwo = chosenCardsId[1]
  if(chosenCards[0] == chosenCards[1]){
    alert("Ha Ha Ha you've found it!")
    cards[optionOne].setAttribute('src','./memory-game-images/white.png')
    cards[optionTwo].setAttribute('src','./memory-game-images/white.png')
    cards[optionOne].removeEventListener('click',flip)
    cards[optionTwo].removeEventListener('click',flip)
    wonCards.push(chosenCards)
    result.innerHTML = wonCards.length + '/5'
  }else{
    cards[optionOne].setAttribute('src','./memory-game-images/blank.png')
    cards[optionTwo].setAttribute('src','./memory-game-images/blank.png')
  }
  
  if(wonCards.length === cardArray.length/2){
    end.textContent = "You've found all cards"
  }
  chosenCards = []
  chosenCardsId = []
}

// flip cards
function flip(){
  let cardId = this.getAttribute('data-id')
  chosenCards.push(cardArray[cardId].name)
  chosenCardsId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(chosenCards.length === 2){
    setTimeout(check,500)
  }
}

