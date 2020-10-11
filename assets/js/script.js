let itemArea = document.querySelector('#itemArea');
let tab = document.querySelector('.tab');
let tabLi = document.querySelector('.tab li');
let tabActive;
let listActive;

let itemList = document.querySelector('.itemList');

tab.addEventListener('click', onTab);
// itemList.addEventListener('click', onItem)

function onItem() {
  let item = e.target;
  if (item.tagName === 'BUTTON') {
    item.querySelector('img').getAttribute('src');
  }
}

function tabCheck(active) {
  let creatSpan = document.createElement('span');

  tabActive === undefined && tabLi.querySelector('a span').remove()

  if (tabActive) {
    let check = tabActive.querySelector('span');
    check.remove();
  }

  active.appendChild(creatSpan);
  creatSpan.classList.add('blind');
  creatSpan.innerText = '현재 페이지';
}

function creatitemListItem(type) {
  let tabCont = document.querySelector('.tabCont');
  let ul = document.createElement('ul');

  tabCont.appendChild(ul)
  ul.classList.add('itemList');

  ul.classList.add(`tab${type[0].type[0].toUpperCase()}${type[0].type.slice(1)}`);
  // ul.classList.add(`item${type[0].type[0].toUpperCase()}${type[0].type.slice(1)}`)

  for (let i = 0; i < type.length; i++) {
    let creatLi = document.createElement('li');
    ul.appendChild(creatLi);
    creatLi.innerHTML = `
      <button class="item">
        <img src="${type[i].url}" alt="${type[i].name}">
        <span class="nameTag">${type[i].name}</span>
      </button>
    `
  }
}

function dataItemsList() {
  let doll = items.filter(itemsFilter => itemsFilter.type.includes('doll'))
  creatitemListItem(doll)

  let clothes = items.filter(itemsFilter => itemsFilter.type.includes('clothes'))
  creatitemListItem(clothes)

  let accessory = items.filter(itemsFilter => itemsFilter.type.includes('accessory'))
  creatitemListItem(accessory)
}

function dataActive(id) {
  let doll = document.querySelector('.tabDoll')
  let clothes = document.querySelector('.tabClothes')

  if (id === 'tabDoll') {
    doll.style.display = 'block'
  } else if (id === 'tabClothes') {
    clothes.style.display = 'block'
  }
}

dataItemsList()

function onTab(e) {
  let target = e.target;

  tabActive === undefined && tabLi.classList.remove('on');

  if (target.tagName === 'A') {
    tabActive && tabActive.parentNode.classList.remove('on');
    target.parentNode.classList.add('on');
    tabCheck(target)
    tabActive = target;
  }

  let listCheck = document.querySelectorAll('.itemList')
  for (let i = 0; i < listCheck.length; i++) {
    listCheck[i].style.display = 'none'
  }

  dataActive(target.id)
}