const headerBtn: HTMLButtonElement = document.querySelector(".header__btn"),
  headerNavMenu: HTMLDivElement = document.querySelector(".header__navmenu");

const headerBtnClick = (e: MouseEvent): void => {
  headerBtn.classList.toggle("active");
  headerNavMenu.classList.toggle("active");
};

headerBtn.onclick = headerBtnClick;
