// DOM Manipulation

// Selecting elements

// By id
const title = document.getElementById('main-heading');
console.log('Title:', title);

// By class
const list = document.getElementsByClassName('list-items');
console.log('List:', list);

// By HTML tag
{
  const list_items = document.getElementsByTagName('li');
  console.log('List:', list_items);
}

// querySelector()
{
  const container = document.querySelector('.container');
  console.log('Container:', container);
}

// querySelectorAll()
{
  const list_items = document.querySelectorAll('li');
  console.log('List items:', list_items);
}

// Changing the style of elements

// Inline styling
title.style.color = 'red';

for (let index = 0; index < list.length; index++)
{
  list[index].style.color = 'orange';
}

{
  // Creating elements
  const ul = document.querySelector('ul')
  const li = document.createElement('li')

  // Adding a class
  li.setAttribute('id', 'main-heading')
  li.removeAttribute('id', 'main-heading')
  li.classList.add('list-items')
  // li.classList.remove('list-items')

  console.log(li.getAttribute('class'));

  // Adding text
  li.innerText = 'Some Movie'

  ul.append(li)
}

// Removing a HTML element
document.querySelector('#first-list-item').remove()

// Navigating the DOM

// Parent node traversal
let ul = document.querySelector('ul')
console.log('ul.parentElement:', ul.parentElement);
console.log('ul.parentNode:', ul.parentNode);

// Child node traversal
console.log('ul.childNodes:', ul.childNodes);
console.log('ul.childElementCount:', ul.childElementCount);
console.log('ul.firstChild:', ul.firstChild);
console.log('ul.lastChild:', ul.lastChild);
console.log('ul.firstElementChild:', ul.firstElementChild);
console.log('ul.lastElementChild:', ul.lastElementChild);

// ul.childNodes[4].style.backgroundColor = 'red';

console.log('ul.children:', ul.children);

ul.children[1].style.backgroundColor = 'red'

// Sibling node traversal
console.log('ul.previousSibling:', ul.previousSibling);
console.log('ul.previousElementSibling:', ul.previousElementSibling);
console.log('ul.nextSibling:', ul.nextSibling);
console.log('ul.nextElementSibling:', ul.nextElementSibling);

// Event listeners
