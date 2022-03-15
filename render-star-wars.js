export function renderStarWars(heros) 

{

    const starWarsEl = document.createElement('div');
    const starWarsNameEl = document.createElement('h3');
    const starWarsHeightEl = document.createElement('p');
    const starWarsWeightEl = document.createElement('p');
    const starWarsHairEl = document.createElement('p');
    const starWarsSkinEl = document.createElement('p');
    const filmsListEl = document.createElement('ul');

    starWarsEl.classList.add('star-wars');

    starWarsNameEl.textContent = heros.name;
    starWarsHeightEl.innerHTML = `<b>Height:</b> ${heros.height}`;
    starWarsWeightEl.innerHTML = `<b>Weight:</b> ${heros.mass}`;
    starWarsHairEl.innerHTML = `<b>Hair Color:</b> ${heros.hair_color}`;
    starWarsSkinEl.innerHTML = `<b>Skin Color:</b> ${heros.skin_color}`;
    filmsListEl.innerHTML = '<b>Films Appeared in:</b>';
    for (let film of heros.films){
        const filmsEl = document.createElement('li');
        filmsEl.textContent = film;
        filmsListEl.append(filmsEl);

    }

    starWarsEl.append(starWarsNameEl, starWarsHeightEl, starWarsWeightEl, starWarsHairEl, starWarsSkinEl, filmsListEl);
    
    return starWarsEl;
}