const imageElement = document.getElementById('image')
const imageTextElement = document.getElementById('image-text')
const buttonsContainer =  document.getElementById('buttons-container')
const option1 =  document.getElementById('option1')
const option2 =  document.getElementById('option2')
const option3 =  document.getElementById('option2')

let state = {}

const startGame = () => {
  state = {}
  showTextNode(1)
}

const showTextNode = (id) => {
   const textNode = textNodes.find(node => node.id === id)
   imageTextElement.innerText = textNode.text;
   while(buttonsContainer.firstChild) {
      buttonsContainer.removeChild(buttonsContainer.firstChild)
   }

   textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
}

const selectOption = (option) => {}

const textNodes = [
   {
      id: 1,
      text: 'texto 1',
      options: [
         {
            text: 'Hola',
            nextOption: 2,
            image: ''
         },
         {
            text: 'Adios',
            nextOption: 3
         },
      ]
   }
]
startGame()