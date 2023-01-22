// DOM Manipulation

// Selecting elements

// By id
const title = document.getElementById('main-heading');
console.log(title);

// By class
const list = document.getElementsByClassName('list-items');
console.log(list);

// By HTML tag
{
  const list_items = document.getElementsByTagName('li');
  console.log(list_items);
}

// querySelector()
{
  const container = document.querySelector('.container');
  console.log(container);
}

// querySelectorAll()
{
  const list_items = document.querySelectorAll('li');
  console.log(list_items);
}

// Changing the style of elements

// Inline styling
title.style.color = 'red';

for (let index = 0; index < list.length; index++)
{
  list[index].style.color = 'orange';
}
