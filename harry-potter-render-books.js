export function renderBooks(books) 

{

    const booksEl = document.createElement('div');
    const booksNameEl = document.createElement('h3');
    const booksPublishedEl = document.createElement('p');
    const booksLanguageEl = document.createElement('p');
    const mainCharacterEl = document.createElement('p');
    const mainCharacterNameEl = document.createElement('p');
    const mainCharacterAgeEl = document.createElement('p');
    const mainCharacterHouseEl = document.createElement('p');

    booksEl.classList.add('harry-potter');

    booksNameEl.textContent = books.name;
    booksPublishedEl.innerHTML = `<b>First Published:</b> ${books.first_published}`;
    booksLanguageEl.innerHTML = `<b>Language:</b> ${books.language}`;
    mainCharacterEl.innerHTML = `<b>Main Character:</b>`;
    mainCharacterNameEl.innerHTML = `<b>Name:</b> ${books.main_character.name}`;
    mainCharacterAgeEl.innerHTML = `<b>Age:</b> ${books.main_character.age}`;
    mainCharacterHouseEl.innerHTML = `<b>House:</b> ${books.main_character.house}`;

    booksEl.append(booksNameEl, booksPublishedEl, booksLanguageEl, mainCharacterEl, mainCharacterNameEl, mainCharacterAgeEl, mainCharacterHouseEl);
    
    return booksEl;
}