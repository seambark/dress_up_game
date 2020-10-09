let tab = document.querySelector('.tab');
let tabLi = document.querySelector('li');
let tabActive;

tab.addEventListener('click', onTab)

function onTab(e) {
  let target = e.target;

  tabActive === undefined && tabLi.classList.remove('on');

  if (target.tagName === 'A') {
    tabActive && tabActive.parentNode.classList.remove('on');
    target.parentNode.classList.add('on');
    tabCheck(target)
    tabActive = target;
  }
}

function tabCheck(active) {
  let creatSpan = document.createElement('span');

  tabActive === undefined && tabLi.querySelector('a span').remove()

  if (tabActive) {
    let check = tabActive.querySelector('span');
    check.remove()
  }

  active.appendChild(creatSpan)
  creatSpan.classList.add('blind')
  creatSpan.innerText = '현재 페이지'
}
