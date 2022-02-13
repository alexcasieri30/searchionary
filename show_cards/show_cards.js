document.body.onload = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'flashcard');

    word = document.createElement('p')
    word.innerHTML = 'test word'
    word.setAttribute('class', 'word');
    card.appendChild(word)

    definition = document.createElement('p')
    definition.innerHTML = 'test def'
    definition.setAttribute('class', 'definition');
    card.appendChild(word)

    document.body.appendChild(card);
};