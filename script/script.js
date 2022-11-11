"use script";

const ourServicesListContainer = document.querySelector(".our-services-list");
const tabContent = document.querySelectorAll(".tab-services-content");
const servicesBtn = document.querySelectorAll(".services-btn");
const arrow = document.querySelectorAll(".arrow");

let dataName;

let dataBtnName;
const listBtnSphere = document.querySelector(".list-btn-sphere");

let check = false;

ourServicesListContainer.addEventListener("click", setTab);

function setTab(event) {
  dataName = event.target.dataset.tabName;

  if (event.target.nodeName === "BUTTON") {
    tabContent.forEach((item) => {
      item.classList.contains(dataName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });

    servicesBtn.forEach((itemColor) => {
      itemColor.classList.remove("background-services-btn");
    });
    event.target.classList.add("background-services-btn");

    arrow.forEach((itemArrow) => {
      itemArrow.classList.contains(dataName)
        ? itemArrow.classList.add("is-active-arrow")
        : itemArrow.classList.remove("is-active-arrow");
    });
    event.currentTarget.classList.add("is-active-arrow");
  }
}

const btnAmazingWork = document.querySelector(".btn-amazing-work");
let allSphereImg = document.querySelectorAll(".all-sphere");
const containerImg = document.querySelector(".section-four-box-img");
let listBoxImg = document.querySelector(".list-box-img");
let arrUrlImg = [
  "./image/section-4/graphic design/graphic-design1.jpg",
  "./image/section-4/graphic design/graphic-design2.jpg",
  "./image/section-4/graphic design/graphic-design3.jpg",
  "./image/section-4/graphic design/graphic-design4.jpg",
  "./image/section-4/graphic design/graphic-design5.jpg",
  "./image/section-4/graphic design/graphic-design6.jpg",
  "./image/section-4/graphic design/graphic-design7.jpg",
  "./image/section-4/graphic design/graphic-design8.jpg",
  "./image/section-4/graphic design/graphic-design9.jpg",
  "./image/section-4/graphic design/graphic-design10.jpg",
  "./image/section-4/graphic design/graphic-design11.jpg",
  "./image/section-4/graphic design/graphic-design12.jpg",
  "./image/section-4/wordpress/wordpress1.jpg",
  "./image/section-4/wordpress/wordpress2.jpg",
  "./image/section-4/wordpress/wordpress3.jpg",
  "./image/section-4/wordpress/wordpress4.jpg",
  "./image/section-4/wordpress/wordpress5.jpg",
  "./image/section-4/wordpress/wordpress6.jpg",
  "./image/section-4/wordpress/wordpress7.jpg",
  "./image/section-4/wordpress/wordpress8.jpg",
  "./image/section-4/wordpress/wordpress9.jpg",
  "./image/section-4/wordpress/wordpress10.jpg",
  "./image/section-4/wordpress/wordpress11.jpg",
  "./image/section-4/wordpress/wordpress12.jpg",
];

let imgAddClass = [
  "graphic-design-img",
  "web-design-img",
  "landing-pages-img",
  "wordpress-img",
  "graphic-design-img",
  "web-design-img",
  "landing-pages-img",
  "wordpress-img",
];
let imgAddTitle = [
  "Graphic Design",
  "Web Design",
  "Landing Pages",
  "Wordpress",
  "Graphic Design",
  "Web Design",
  "Landing Pages",
  "Wordpress",
];

btnAmazingWork.addEventListener("click", loadImg);

function loadImg() {
  let startUrl = 0;
  let startClass = 0;
  let startTitle = 0;

  let wrapperAnimation = document.querySelector(".wrapper-animation");
  wrapperAnimation.classList.remove("hide-animation");
  setTimeout(() => {
    wrapperAnimation.classList.add("hide-animation");
  }, 2000);

  setTimeout(() => {
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        let newElemItem = document.createElement("li");
        let newElemWrap = document.createElement("div");
        newElemWrap.classList.add("wrap-img");
        let newElem = document.createElement("img");
        newElem.classList.add(imgAddClass[startClass]);
        newElem.style.width = "285px";
        newElem.style.height = "211px";
        newElem.setAttribute("src", arrUrlImg[startUrl]);
        newElem.classList.add("new-img-aw");
        newElem.classList.add("all-sphere");

        startUrl++;

        newElemWrap.append(newElem);
        newElemWrap.append(createMouseoverComponent(imgAddTitle[startTitle]));
        newElemItem.append(newElemWrap);
        listBoxImg.append(newElemItem);
      }
      startTitle++;
      startClass++;
    }

    arrUrlImg.splice(0, 12);
    if (arrUrlImg.length === 0) {
      btnAmazingWork.remove();
    }

    function filterImgEvent() {
      let allSphere = document.querySelectorAll(".all-sphere");

      allSphere.forEach((item) => {
        item.classList.contains(dataBtnName)
          ? item.classList.remove("hideItem")
          : item.classList.add("hideItem");
      });
    }

    if (check) {
      filterImgEvent();
    }

    addEventImg();
  }, 2010);
}

listBtnSphere.addEventListener("click", filterImgEvent);

function filterImgEvent(event) {
  let allSphere = document.querySelectorAll(".all-sphere");
  let btnSphere = document.querySelectorAll(".btn-sphere");
  let itemsBorderLi = document.querySelectorAll(".item-border-li");

  if (event.target.nodeName === "BUTTON") {
    dataBtnName = event.target.dataset.btnName;

    check = true;

    allSphere.forEach((item) => {
      item.classList.contains(dataBtnName)
        ? item.classList.remove("hideItem")
        : item.classList.add("hideItem");
    });

    btnSphere.forEach((item) => {
      item.classList.remove("is-active-border");
    });
    event.target.classList.add("is-active-border");

    itemsBorderLi.forEach((itemLi) => {
      itemLi.classList.add("item-border");
    });
    event.target.closest("li").classList.remove("item-border");
  }
}

function addEventImg() {
  let wrapImg = document.querySelectorAll(".wrap-img");
  Array.from(wrapImg).forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      event.target.firstElementChild.classList.add("image");
      event.target.lastElementChild.classList.add("link-image");
    });
  });

  Array.from(wrapImg).forEach((item) => {
    item.addEventListener("mouseleave", (event) => {
      event.target.firstElementChild.classList.remove("image");
      event.target.lastElementChild.classList.remove("link-image");
    });
  });
}
addEventImg();

function createMouseoverComponent(secondTitle) {
  let contMouseOver = document.createElement("div");
  contMouseOver.classList.add("cont-mouse-over");

  let lineCreativeDesign = document.createElement("div");
  lineCreativeDesign.classList.add("line-creative-design");
  contMouseOver.append(lineCreativeDesign);

  let contTwoCircle = document.createElement("div");
  contTwoCircle.classList.add("cont-two-circle");
  contMouseOver.append(contTwoCircle);

  let firstCircleCont = document.createElement("div");
  firstCircleCont.classList.add("first-circle-cont");
  contTwoCircle.append(firstCircleCont);

  let linkFirstCircleCont = document.createElement("a");
  linkFirstCircleCont.setAttribute("href", "#");
  firstCircleCont.append(linkFirstCircleCont);

  let ellipseFirstImg = document.createElement("img");
  ellipseFirstImg.setAttribute(
    "src",
    "./image/section-4/items-hover/Ellipse.png"
  );
  linkFirstCircleCont.append(ellipseFirstImg);

  let chainImg = document.createElement("img");
  chainImg.setAttribute("src", "./image/section-4/items-hover/Chain.png");
  chainImg.classList.add("chain");
  linkFirstCircleCont.append(chainImg);

  let secondCircleCont = document.createElement("div");
  secondCircleCont.classList.add("second-circle-cont");
  contTwoCircle.append(secondCircleCont);

  let linkSecondCircleCont = document.createElement("a");
  linkSecondCircleCont.setAttribute("href", "#");
  secondCircleCont.append(linkSecondCircleCont);

  let ellipseSecondtImg = document.createElement("img");
  ellipseSecondtImg.setAttribute(
    "src",
    "./image/section-4/items-hover/Ellipse-1.png"
  );
  linkSecondCircleCont.append(ellipseSecondtImg);

  let squareLittle = document.createElement("img");
  squareLittle.setAttribute("src", "./image/section-4/items-hover/Layer.png");
  squareLittle.classList.add("square-little");
  linkSecondCircleCont.append(squareLittle);

  let titleMouseOverImg = document.createElement("h4");
  titleMouseOverImg.classList.add("title-mouse-over-img");
  titleMouseOverImg.textContent = "creative design";
  contMouseOver.append(titleMouseOverImg);

  let secondTitleMouseOverImg = document.createElement("h6");
  secondTitleMouseOverImg.classList.add("second-title-mouse-over-img");
  secondTitleMouseOverImg.textContent = secondTitle;
  contMouseOver.append(secondTitleMouseOverImg);

  return contMouseOver;
}

function setCarousel() {
  const users = document.querySelectorAll(".user");
  const descriptioUsersWrap = document.querySelectorAll(".user-selected");
  let dataUserName;
  let dataUserNameSecond;
  Array.from(users).forEach((item) => {
    item.addEventListener("click", chooseActiveUser);
  });

  function chooseActiveUser(event) {
    dataUserName = event.target.closest("div").dataset.userName;

    Array.from(descriptioUsersWrap).forEach((elem) => {
      elem.classList.contains(dataUserName)
        ? elem.classList.add("is-active-user-big")
        : elem.classList.remove("is-active-user-big");
    });
    Array.from(users).forEach((i) => {
      i.classList.remove("is-active-user");
      event.target.closest("div").classList.add("is-active-user");
      i.closest("div").style.marginBottom = 0;
    });

    Array.from(users)[0].classList.remove("is-active-user-margin");

    let pixel = 0;
    let upItem = setInterval(() => {
      event.target.closest("div").style.marginBottom = `${pixel}px`;
      pixel += 4;

      if (pixel === 20) {
        clearInterval(upItem);
      }
    }, 55);
  }

  const btnArrowRight = document.querySelector(".arrow-box-right");
  const btnArrowLeft = document.querySelector(".arrow-box-left");
  let indElem;

  btnArrowRight.addEventListener("click", (event) => {
    Array.from(users).forEach((element, index, arr) => {
      if (element.classList.contains("is-active-user")) {
        indElem = index;
        element.classList.remove("is-active-user");

        Array.from(users)[0].classList.remove("is-active-user-margin"); //анимация
        element.style.marginBottom = 0; //анимация

        if ([index + 1] < 4) {
          dataUserName = arr[index + 1].dataset.userName;
        } else {
          index = 0;
          dataUserName = arr[index].dataset.userName;
        }
      }
    });
    indElem++;
    if (indElem > 3) {
      indElem = 0;
    }
    Array.from(users)[indElem].classList.add("is-active-user");

    animationImgUp();

    Array.from(descriptioUsersWrap).forEach((elem) => {
      elem.classList.contains(dataUserName)
        ? elem.classList.add("is-active-user-big")
        : elem.classList.remove("is-active-user-big");
    });
  });

  btnArrowLeft.addEventListener("click", (event) => {
    Array.from(users).forEach((element, index, arr) => {
      if (element.classList.contains("is-active-user")) {
        indElem = index;
        element.classList.remove("is-active-user");

        Array.from(users)[0].classList.remove("is-active-user-margin"); //анимация
        element.style.marginBottom = 0; //анимация

        if ([index - 1] >= 0) {
          dataUserName = arr[index - 1].dataset.userName;
        } else {
          index = 3;
          dataUserName = arr[index].dataset.userName;
        }
      }
    });

    indElem--;

    if (indElem < 0) {
      indElem = 3;
    }
    Array.from(users)[indElem].classList.add("is-active-user");

    animationImgUp();

    Array.from(descriptioUsersWrap).forEach((elem) => {
      elem.classList.contains(dataUserName)
        ? elem.classList.add("is-active-user-big")
        : elem.classList.remove("is-active-user-big");
    });
  });

  function animationImgUp() {
    let pixel = 0;
    let upItem = setInterval(() => {
      Array.from(users)[indElem].style.marginBottom = `${pixel}px`;
      pixel += 4;

      if (pixel === 20) {
        clearInterval(upItem);
      }
    }, 55);
  }
}
setCarousel();

function mouseenterItemMenu() {
  let menuList = document.querySelector(".menu__list");
  let itemImgLink = document.querySelector(".item-img-link");
  menuList.addEventListener("mouseover", (event) => {
    if (
      event.target.nodeName === "A" &&
      event.target.firstElementChild !== itemImgLink
    ) {
      event.target.parentNode.classList.add("border-item-menu");
    }
  });

  menuList.addEventListener("mouseout", (event) => {
    if (
      event.target.nodeName === "A" &&
      event.target.firstElementChild !== itemImgLink
    ) {
      event.target.parentNode.classList.remove("border-item-menu");
    }
  });
}
mouseenterItemMenu();
