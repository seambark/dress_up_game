let dollBody = document.querySelector('.doll');
let dollHair = document.querySelector('.dollHead .hair');
let dollClothes = document.querySelector('.dollBody .clothes');
let dollAccessory = document.querySelector('.dollBody .accessory');
let dollPet = document.querySelector('.dollPet');

let itemArea = document.querySelector('#itemArea');
let tab = document.querySelector('.tab');
let tabLi = document.querySelector('.tab li');
let tabCont = document.querySelector('.tabCont');
let tabActive;

tab.addEventListener('click', onTab);
tabCont.addEventListener('click', onItem)

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
  let ul = document.createElement('ul');

  tabCont.appendChild(ul)
  ul.classList.add('itemList');

  ul.classList.add(`tab${type[0].type[0].toUpperCase()}${type[0].type.slice(1)}`);

  for (let i = 0; i < type.length; i++) {
    let creatLi = document.createElement('li');
    ul.appendChild(creatLi);
    creatLi.innerHTML = `
      <button class="item">
        <img src="${type[i].urlThmb}" alt="${type[i].name}">
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

  let hair = items.filter(itemsFilter => itemsFilter.type.includes('hair'))
  creatitemListItem(hair)

  let pet = items.filter(itemsFilter => itemsFilter.type.includes('pet'))
  creatitemListItem(pet)
}

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

function dataActive(id) {
  let doll = document.querySelector('.tabDoll')
  let clothes = document.querySelector('.tabClothes')
  let hair = document.querySelector('.tabHair')
  let accessory = document.querySelector('.tabAccessory')
  let pet = document.querySelector('.tabPet')

  if (id === 'tabDoll') {
    doll.style.display = 'block'
  } else if (id === 'tabClothes') {
    clothes.style.display = 'block'
  } else if (id === 'tabHair') {
    hair.style.display = 'block'
  } else if (id === 'tabAccessory') {
    accessory.style.display = 'block'
  } else if (id === 'tabPet') {
    pet.style.display = 'block'
  }
}

dataItemsList()

function creatItemsImg(src) {
  let creatImgBack = document.createElement('img');
  let creatImg = document.createElement('img');
  let srcData = src.querySelector('img').getAttribute('src');
  let altData = src.querySelector('img').getAttribute('alt')
  let type = src.parentNode.parentNode
  let typeClass = type.getAttribute('class')

  let imgBaCK = items.filter(itemsFilter => itemsFilter.urlThmb.includes(srcData))

  creatImg.setAttribute('src', imgBaCK[0].url);
  creatImg.setAttribute('alt', altData);

  if (typeClass === 'itemList tabDoll') {
    altData === '베베' && dollBody.classList.remove('type02')
    altData === '베시' && dollBody.classList.add('type02')
  } else if (typeClass === 'itemList tabHair') {
    itemsImgRemove(dollHair)
    dollHair.appendChild(creatImg)

    if (imgBaCK[0].urlBack) {
      creatImgBack.setAttribute('src', imgBaCK[0].urlBack)
      creatImgBack.setAttribute('alt', altData + ' 뒷면')
      dollHair.appendChild(creatImgBack)
    }
  } else if (typeClass === 'itemList tabClothes') {
    itemsImgRemove(dollClothes)
    dollClothes.appendChild(creatImg)
  } else if (typeClass === 'itemList tabAccessory') {
    itemsImgRemove(dollAccessory)
    dollAccessory.appendChild(creatImg)
  } else if (typeClass === 'itemList tabPet') {
    itemsImgRemove(dollPet)
    dollPet.appendChild(creatImg)
  }
}

function itemsImgRemove(del) {
  del.innerHTML = ''
}

function onItem(e) {
  let item = e.target;
  if (item.tagName === 'BUTTON') {
    creatItemsImg(item)
  }
}