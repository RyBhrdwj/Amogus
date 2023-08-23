const colors = [
    {name: 'red', value: '#FF0000', shadow: '#A40127'},
    {name: 'yellow', value: '#FFFF00', shadow: '#26BB26'},
    {name: 'green', value: '#00FF00', shadow: '#05AD0F'},
    {name: 'orange', value: '#FFA500', shadow: '#CC7A00'},
    {name: 'blue', value: '#0000FF', shadow: '#1D1D98'},
    {name: 'violet', value: '#EE82EE', shadow: '#BB60BB'},
    {name: 'light blue', value: '#ADD8E6', shadow: '#88AACC'},
    {name: 'dark grey', value: '#212121', shadow: '#1a1a1a'},
    {name: 'brown', value: '#A52A2A', shadow: '#802020'},
    {name: 'white', value: '#FFFFFF', shadow: '#A99E9E'}
];


const parent = document.getElementsByClassName('color-selector')[0];

colors.forEach(color => {

    const selector = document.createElement('div');

    selector.classList.add('selector');

    selector.style.background = `linear-gradient(135deg, ${color.value} 50%, ${color.shadow} 50%)`;

    selector.setAttribute('data-color', color.value);
    selector.setAttribute('data-shadow', color.shadow);

    parent.appendChild(selector);
});

parent.addEventListener('click', (event) => {

    const selectedColor = event.target.closest('.selector');

    if(!selectedColor) return;

    const color = selectedColor.getAttribute('data-color');
    const shadow = selectedColor.getAttribute('data-shadow');

    const character = document.getElementsByClassName('amogus')[0];

    character.style.setProperty('--character-color', color);
    character.style.setProperty('--shadow-color', shadow);
});