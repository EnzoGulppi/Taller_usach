/*----------- Tarea 8 ----------- */

// Clase Personaje
class Personaje {
    constructor(nombrePersonaje, species, image) {
      this._nombrePersonaje = nombrePersonaje;
      this._species = species;
      this._image = image;
    }
  
    // Funciones getter de la clase
    get nombrePersonaje() {
      return this._nombrePersonaje;
    }
    get species() {
      return this._species;
    }
    get imagen() {
      return this._image;
    }
  
    // Metodo SHOW para mostrar cartas
    show() {
      const contenedorCard = document.getElementById('contenedorCartas');
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const img = document.createElement('img');
      img.src = this._image;
      card.appendChild(img);
  
      const nombre = document.createElement('h4');
      nombre.textContent = `Nombre: ${this._nombrePersonaje}`;
      card.appendChild(nombre);
  
      const especies = document.createElement('p');
      especies.textContent = `Especie: ${this._species}`;
      card.appendChild(especies);
  
      contenedorCard.appendChild(card);
    }
  }
  
  // COnsumir API y crear instancia personajes
  async function fetchPersonajes() {
    let characters = [];
    let url = 'https://rickandmortyapi.com/api/character';
  

    // While para presentar al menos 20 personajes en la pagina
    while (characters.length < 20) {
      const response = await fetch(url);
      const data = await response.json();
  
      const resultados = data.results;
      characters = characters.concat(resultados);
  
      url = data.info.next;
      if (!url){ //En este caso si no funciona la url
        break;
      } 
    }

    
    const instanciasPersonajes = characters.map(character => {
      const { name, species, image } = character;
      return new Personaje(name, species, image);
    });
    
    //Metodos para los personajes
    instanciasPersonajes.forEach(character => {
      character.show();
    });
  }
  
  // Cargamos las cartas de los personajes
  fetchPersonajes();
  
  