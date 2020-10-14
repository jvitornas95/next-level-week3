const options = {
    dragging: false,
    toutchZomm: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-23.6424973, -46.5862847], 13);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


L.marker([-23.6424973, -46.5862847], { icon })
.addTo(map)

function selectImage(event){
    const button = event.currentTarget

    //Remover todas as classes active
    const buttons = document.querySelectorAll('.images button')

    buttons.forEach(btn => {
        
        btn.classList.remove('active')

    })

    //Selecionar a imagem clicada 
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //Atualizar o container de imagem
    imageContainer.src = image.src

    //Adicionar active ao botao clicado
    button.classList.add('active')
}


