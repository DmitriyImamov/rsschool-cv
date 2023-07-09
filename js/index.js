const burgerBtn = document.getElementById('header__burger-btn');
const navList = document.getElementById('header__nav');
const selectLang = document.getElementById('header__lang');
const allLang = ['en' , 'ru'];

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('header__burger-btn_close')) {
    burgerBtn.classList.remove('header__burger-btn_close');
    navList.classList.remove('header__nav_open');
  } else {
    burgerBtn.classList.add('header__burger-btn_close');
    navList.classList.add('header__nav_open');
  }
});

function changeURLLang() {
  let lang = selectLang.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLang() {
  let hash = window.location.hash.slice(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  selectLang.value = hash;
}

selectLang.addEventListener('change', changeURLLang);

changeLang();