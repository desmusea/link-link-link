const textElement = document.getElementById('text')
const imgElement = document.getElementById('image')
const descriptionElement = document.getElementById('description')
const optionButtonsElement = document.getElementById('option-buttons')

let count = 20
let state = {english: false, spanish: true, option: 0}
const descriptionEs = `teresita🍒fútbol🍒club somos Desmusea, Jorge Núñez y Klari Moreno. Con motivo de la Museum Online Game Jam organizada en el marco de A MAZE. / Berlin 2021 - 10th International Games and Playful Media Festival desarrollamos link link link`
const descriptionEn = `We teresita🍒fútbol🍒club are Desmusea, Jorge Núñez and Klari Moreno. On the occasion of the Museum Online Game Jam, organized in the frame of A MAZE / Berlin 2021 - 10th International Games and Playful Media Festival, we developed "link link link"`
const textNodes = [
  {
    id: 0,
    text: '<button class="btn" onclick="selectOption(1)">Link link link</button> es un relato generado a través de hipervínculos que conectan distintas piezas de Museos de Investigación de Leibniz</div>',
    image: './src/images/tfc.png'
  },
  {
    id: 1,
    text: '<div>Esta figura de la Virgen acompañada del niño Jesús se puede <button class="btn" onclick="selectOption(9)">abrir</button> por la mitad, haciendo visible la Trinidad en el <button class="btn" onclick="selectOption(17)">interior</button>. Una vez sus <button class="btn" onclick="selectOption(5)">“alas”</button> se encuentran abiertas, las clases espirituales y seculares aparecen en postura de adoración. La Virgen se convierte así en un <button class="btn" onclick="selectOption(13)">manto</button> protector.</div>',
    image: './src/images/virgen-cerrada.jpg'
  },
  {
    id: 2,
    text: '<div><button class="btn" onclick="selectOption(5)">En realidad</button> no son azules ni nada parecido, creo.</div>',
    image: './src/images/virgen-abierta.jpg'
  },
  {
    id: 3,
    text: '<div>Guarda el reloj en su mochila y, antes de irse, echa un último vistazo a la Virgen que asoma en la <button class="btn" onclick="selectOption(17)">penumbra</button> de aquella iglesia.</div>',
    image: './src/images/virgen-cerrada.jpg'
  },
  {
    id: 4,
    text: '<div>Me gusta pensar en esta Virgen como un pequeño  <a class="btn" href="https://www.gnm.de/objekte/schreinmadonna/" target="_blank" rel="noopener noreferrer">museo</a>, que al abrirse nos permite contemplar las piezas de su <button class="btn" onclick="selectOption(20)">interior</button>.</div>',
    image: './src/images/virgen-abierta.jpg'
  },
  {
    id: 5,
    text: '<div>El cisne, en la sociedad celta, es el mediador entre el hombre y los Dioses. Se comunica con ellos en ese viaje <button class="btn" onclick="selectOption(19)">a través</button> del Más Allá. El cisne ayuda, junto a los dioses, a regir al mundo en todas las fases de la Luna y el <button class="btn" onclick="selectOption(10)">cambio de estaciones</button>.</div>',
    image: './src/images/cisne.jpg'
  },
  {
    id: 6,
    text: '<div>También recuerda unos gritos que le <button class="btn" onclick="selectOption(11)">despertaron</button> mientras dormía. Se asomó por la ventana y había un gran cisne <button class="btn" onclick="selectOption(20)">disecado</button> en mitad de la calle. Estaba abandonado al lado de unos cubos de basura.</div>',
    image: './src/images/cisne.jpg'
  },
  {
    id: 7,
    text: '<div>De vuelta ya, el cisne se <button class="btn" onclick="selectOption(4)">convirtió</button> en una especie de pan mojado. Había pasado mucho tiempo y todo el <button class="btn" onclick="selectOption(14)">trabajo</button> de taxidermia se estropeó.',
    image: './src/images/cisne.jpg'
  },
  {
    id: 8,
    text: '<div>Su <button class="btn" onclick="selectOption(19)">mirada</button> le recordaba a algo. Era como si ya lo hubiera visto antes, quizás en algún  <a class="btn" href="https://bonn.leibniz-lib.de/en/museum/permanent-exhibition" target="_blank" rel="noopener noreferrer">museo</a>...',
    image: './src/images/ojo-cisne.jpg'
  },
  {
    id: 9,
    text: '<div>Ha abierto la figura de la Virgen y ahora está ante este reloj de sol portátil usado durante el Imperio Romano. ¿Qué hora es? Y no sabe qué responder, si es <button class="btn" onclick="selectOption(20)">hora de zambullirse</button> o que <button class="btn" onclick="selectOption(3)">lo siente y que es muy tarde</button>.</div>',
    image: './src/images/reloj.jpg'
  },
  {
    id: 10,
    text: '<div>¿Has visto cómo ha cambiado el color del <button class="btn" onclick="selectOption(8)">agua</button>? - Se pregunta. - El sol ya no está igual y no sé el tiempo que ha pasado mientras <button class="btn" onclick="selectOption(7)">estaba navegando</button> por el Más Allá.</div>',
    image: './src/images/reloj.jpg'
  },
  {
    id: 11,
    text: '<div>El azul de la piedra que lleva en el bolsillo se ha <button class="btn" onclick="selectOption(15)">desteñido</button> y le ha manchado la mano. ¿De qué color son los ojos de la  <button class="btn" onclick="selectOption(2)">virgen</button>?',
    image: './src/images/reloj.jpg'
  },
  {
    id: 12,
    text: '<div>Las circunstancias variables son las que fijan les trabajadores del Tiempo, indicando su naturaleza. Ayudan tanto en el viaje como en el reposo. Ha tomado mucho el sol, tiene el <button class="btn" onclick="selectOption(1)">cuerpo</button>  mojado y lleno de <button class="btn" onclick="selectOption(13)">arena</button>. Quizás es momento de volver al  <a class="btn" href="https://web.rgzm.de/index.php?id=1" target="_blank" rel="noopener noreferrer"> <a class="btn" href="https://web.rgzm.de/index.php?id=1" target="_blank" rel="noopener noreferrer">museo</a></a>.</div>',
    image: './src/images/reloj.jpg'
  },
  {
    id: 13,
    text: '<div>La azurita, con su color <button class="btn" onclick="selectOption(6)">azul</button>  característico, se forma en los depósitos de cobre expuestos a la intemperie. Se conoce desde hace miles de años, y se ha utilizado en joyas y elementos decorativos, e incluso como cosmético.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 14,
    text: '<div>Cuando era <button class="btn" onclick="selectOption(4)">pequeña</button> tenía una colección de minerales. Recuerda que cada una de las muestras estaba guardada en una cajita muy pequeña de cartón blanco. Un día, al volver a su casa, se dio cuenta de que una de las cajitas estaba vacía. Faltaba uno de los minerales, pero aunque revisó toda su colección, no era capaz de recordar cuál.</div>',
    image: './src/images/virgen-nena.jpg'
  },
  {
    id: 15,
    text: '<div>La exposición directa a la luz, el calor, y el aire libre provocan que la azurita vaya perdiendo progresivamente su color. Los expertos recomiendan que, si vas a almacenarla, lo hagas en un recipiente <button class="btn" onclick="selectOption(1)">hermético</button>, <button class="btn" onclick="selectOption(12)">oscuro</button> y <button class="btn" onclick="selectOption(18)">fresco</button>.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 16,
    text: '<div>Una vez leyó que la vibración del <button class="btn" onclick="selectOption(3)">cristal</button> de azurita puede estimular los dones psíquicos, como la clarividencia y la intuición. Puede que en la cartela de un <a class="btn" href="https://www.bergbaumuseum.de/museum" target="_blank" rel="noopener noreferrer">museo</a>.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 17,
    text: '<div>El dascyllus aruanus es un pez marino, generalmente asociado a corales marinos. Son bastante tolerantes a <button class="btn" onclick="selectOption(12)">circunstancias variables</button> y ayudan a acondicionar el ambiente de un acuario para peces menos resistentes. El pez ha sido un símbolo relacionado con el culto cristiano. Durante los primeros años del Cristianismo, se usó como símbolo secreto para indicar su fe.</div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 18,
    text: '<div>Aún así, sigue notando el hilillo de aire que entra por la rendija. Es un aire extremadamente frío y cortante. Si esperas <span id="counter">20</span> segundos, un grupo de peces templará el agua y podrán llevarte a la superficie.</div>',
    image: './src/images/peces.jpg',
  },
  {
    id: 19,
    text: '<div>Sumerge los ojos en un estanque que se convierte en un mar coralino lleno de dascyllus aruanus, <button class="btn" onclick="selectOption(14)">de nuevo</button>. Se extraña mucho, ¿qué clase de magia es esta? Piensa que debe estar en un sueño. O en un  <a class="btn" href="https://www.senckenberg.de/en/museums-and-events/" target="_blank" rel="noopener noreferrer">museo</a>.</div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 20,
    text: '<div>Al fondo del <button class="btn" onclick="selectOption(21)">mar</button> no llegan ni la luz ni el <button class="btn" onclick="selectOption(15)">tiempo</button>.</div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 21,
    text: '<div class="poem"><span>It’s azurite, he said, makes the pool blue.</span><span> A green-tinged <button class="btn" onclick="selectOption(18)">blue</button> Venetian artists used </span><span>for painting sea, keeping lapis lazuli</span> <span>for their hazy, angel-haunted skies. </span></div><span>Jamie McKendrick</span> ',
    image: './src/images/azurita.png'
  }
]

const textNodesEn = [
  {
    id: 0,
    text: '<button class="btn" onclick="selectOption(1)">Link link link</button> is a story generated through hyperlinks that connect different artifacts from the Leibniz Research Museums.</div>',
    image: './src/images/tfc.png'
  },
  {
    id: 1,
    text: '<div>This figure of the Virgin Mary accompanied by the Christ Child can be <button class="btn" onclick="selectOption(9)">opened</button> in half, making the Trinity visible <button class="btn" onclick="selectOption(17)">inside</button>.  Once her <button class="btn" onclick="selectOption(5)">"wings"</button> are opened, the spiritual and secular classes appear in a posture of adoration. The Virgin thus becomes a protective <button class="btn" onclick="selectOption(13)">mantle</button>.</div>',
    image: './src/images/virgen-cerrada.jpg'
  },
  {
    id: 2,
    text: '<div><button class="btn" onclick="selectOption(5)">Actually</button> they are not blue or anything like that. I think.</div>',
    image: './src/images/virgen-abierta.jpg'
  },
  {
    id: 3,
    text: '<div>They put the sundial in his backpack and, before leaving, take one last look at the Virgin in the <button class="btn" onclick="selectOption(17)">half-light</button> of the church.</div>',
    image: './src/images/virgen-cerrada.jpg'
  },
  {
    id: 4,
    text: '<div>I like to think of this Virgin as a small <a class="btn" href="https://www.gnm.de/objekte/schreinmadonna/" target="_blank" rel="noopener noreferrer">museum</a>, which when opened, allows us to contemplate the pieces <button class="btn" onclick="selectOption(20)">inside</button>.</div>',
    image: './src/images/virgen-abierta.jpg'
  },
  {
    id: 5,
    text: '<div>The swan, in Celtic society, is the mediator between the man and the Gods. It communicates with them in the journey <button class="btn" onclick="selectOption(19)">through</button> the Beyond. The swan helps, together with the Gods, to rule the world in all the phases of the moon and the <button class="btn" onclick="selectOption(10)">change of seasons</button>.</div>',
    image: './src/images/cisne.jpg'
  },
  {
    id: 6,
    text: '<div>hey also remember some screams that <button class="btn" onclick="selectOption(11)">woke them up</button>  while sleeping. They looked out the window, and there was a large <button class="btn" onclick="selectOption(20)">stuffed</button> swan in the middle of the street. It was abandoned next to some garbage cans.</div>',
    image: './src/images/cisne.jpg'
  },
  {
    id: 7,
    text: '<div>Back already, the swan <button class="btn" onclick="selectOption(4)">turned into</button> something similar to wet bread. Too much time had passed, and all the taxidermy  <button class="btn" onclick="selectOption(14)">work</button> was ruined.',
    image: './src/images/cisne.jpg'
  },
  {
    id: 8,
    text: '<div>Its <button class="btn" onclick="selectOption(19)">gaze</button> eminded them of something. It was as if they had seen it before, perhaps in some <a class="btn" href="https://bonn.leibniz-lib.de/en/museum/permanent-exhibition" target="_blank" rel="noopener noreferrer">museum</a>...',
    image: './src/images/ojo-cisne.jpg'
  },
  {
    id: 9,
    text: `<div>They have opened the figure of the Virgin, and now they are in front of this portable sundial used during the Roman Empire. What time is it? And they don't know what to answer <button class="btn" onclick="selectOption(20)">whether it's time to dive in </button> or that <button class="btn" onclick="selectOption(3)">they are sorry and it's too late</button>.</div>`,
    image: './src/images/reloj.jpg'
  },
  {
    id: 10,
    text: `<div>Have you seen how the color of the <button class="btn" onclick="selectOption(8)">water</button> has changed?  - they ask. - The sun is no longer the same, and I don't know how much time has passed while I <button class="btn" onclick="selectOption(7)">was sailing</button> through the Beyond.</div>`,
    image: './src/images/reloj.jpg'
  },
  {
    id: 11,
    text: '<div>The blue of the stone in his pocket has <button class="btn" onclick="selectOption(15)">faded</button> and stained his hand. What color are the <button class="btn" onclick="selectOption(2)">virgin</button> eyes?',
    image: './src/images/reloj.jpg'
  },
  {
    id: 12,
    text: '<div>Variable circumstances are set by the Time workers, indicating their nature. They both help when traveling and when resting. You have sunbathed too much, your <button class="btn" onclick="selectOption(1)">body</button> is wet and full of <button class="btn" onclick="selectOption(13)">sand</button>. Perhaps it is time to return to the <a class="btn" href="https://web.rgzm.de/index.php?id=1" target="_blank" rel="noopener noreferrer">museum</a>.</div>',
    image: './src/images/reloj.jpg'
  },
  {
    id: 13,
    text: '<div>Azurite, with its characteristic <button class="btn" onclick="selectOption(6)">blue</button> color, forms in copper deposits exposed to the elements. It has been known for thousands of years, and has been used in jewelry and decorative items, and even as a cosmetic.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 14,
    text: `<div>When they were <button class="btn" onclick="selectOption(4)">little</button> they had a mineral collection. They remember that each of the specimens was kept in a very small white cardboard box.
    One day, when they returned home, they noticed that one of the boxes was empty. One of the minerals was missing, but although they went through his entire collection, they could not remember which one it was.
    </div>`,
    image: './src/images/virgen-nena.jpg'
  },
  {
    id: 15,
    text: '<div>Direct exposure to light, heat, and open air, cause azurite to progressively lose its color. Experts recommend that, if you are going to store it, you should do so in a <button class="btn" onclick="selectOption(1)">hermetic</button>, <button class="btn" onclick="selectOption(12)">dark</button> and <button class="btn" onclick="selectOption(18)">cool</button> container.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 16,
    text: '<div>He once read that the vibration of the azurite <button class="btn" onclick="selectOption(3)">crystal</button> can stimulate psychic gifts, such as clairvoyance and intuition. Maybe on the cartouche of a <a class="btn" href="https://www.bergbaumuseum.de/museum" target="_blank" rel="noopener noreferrer">museum</a>.</div>',
    image: './src/images/azurita.png'
  },
  {
    id: 17,
    text: '<div><i class="italic">Dascyllus aruanus </i>is a marine fish, usually associated with marine corals. They are quite tolerant to <button class="btn" onclick="selectOption(12)">varying circumstances</button> and help to condition the aquarium environment for less resistant fish. </div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 18,
    text: '<div>Even so, you still notice the trickle of air coming through the slit. It is extremely cold, biting air. If you wait <span id="counter">20</span> seconds, a group of fish will warm the water and be able to bring you to the surface.</div>',
    image: './src/images/peces.jpg',
  },
  {
    id: 19,
    text: '<div>They dip their eyes into a pond that turns into a coral sea full of <i>dascyllus aruanus</i>, <button class="btn" onclick="selectOption(14)">again</button>. It gets very strange, what kind of magic is this? They think they must be in a dream. Or in a <a class="btn" href="https://www.senckenberg.de/en/museums-and-events/" target="_blank" rel="noopener noreferrer">museum</a>.</div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 20,
    text: '<div>Neither light nor <button class="btn" onclick="selectOption(15)">time</button> can reach the bottom of the <button class="btn" onclick="selectOption(21)">sea</button>.</div>',
    image: './src/images/peces.jpg'
  },
  {
    id: 21,
    text: '<div class="poem"><span>It’s azurite, he said, makes the pool blue.</span><span> A green-tinged <button class="btn" onclick="selectOption(18)">blue</button> Venetian artists used </span><span>for painting sea, keeping lapis lazuli</span> <span>for their hazy, angel-haunted skies. </span></div><span>Jamie McKendrick</span> ',
    image: './src/images/azurita.png'
  }
]

function selectLang (lang) {
  state = {
    ...state,
    english: lang === 'en',
    spanish: lang !== 'en',
  }
  selectOption(state.option)
  descriptionElement.innerText = lang === 'en' ? descriptionEn : descriptionEs
}

function startGame() {
  showTextNode(state.option)
  descriptionElement.innerText = state.english ? descriptionEn : descriptionEs
}

function showTextNode(id) {
  const nodes = state.english ? textNodesEn : textNodes
  const textNode = nodes.find(textNode => textNode.id === id)
  textElement.innerHTML = textNode.text
  imgElement.src = textNode.image
  imgElement.alt = textNode.alt
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
}

const setCounter = () => {
  const counter = document.getElementById("counter")
  let timeleft = 20;
  let downloadTimer = setInterval(function(){
    if (timeleft <= 0) {
      selectOption(7)
      clearInterval(downloadTimer);
    }
    if (counter) {
      counter.innerText = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

function selectOption(option) {
  state = {...state, option}
  showTextNode(option)
  if (option === 18) {
    return setCounter()
  }
}


dragElement(document.getElementById("text-tab"));
dragElement(document.getElementById("image-tab"));
dragElement(document.getElementById("description-tab"));


function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

startGame()