export function renderMagazines(magazines) 

{

    const magazineEl = document.createElement('div');
    const magazineNameEl = document.createElement('h3');
    const magazinePublishedEl = document.createElement('p');
    const reachEl = document.createElement('p');
    const languageEl = document.createElement('p');

    magazineEl.classList.add('magazine');

    magazineNameEl.textContent = magazines.name;
    magazinePublishedEl.innerHTML = `<b>First Published:</b> ${magazines.first_published}`;
    reachEl.innerHTML = `<b>Reach:</b> ${magazines.reach}`;
    languageEl.innerHTML = `<b>Language:</b> ${magazines.language}`;

    magazineEl.append(magazineNameEl, magazinePublishedEl, reachEl, languageEl);
    
    return magazineEl;
}