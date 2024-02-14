let slideInterval;
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const description = document.getElementById("description");
const chicken = document.querySelector(".chicken");
let isChickenVisible;

document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const submitButton = document.getElementById("submitButton");
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    if (!emailPattern.test(email)) {
      alert("الرجاء إدخال بريد إلكتروني صحيح.");
      return;
    }
    alert("شكرًا لك! سنتواصل معك قريبًا.");
    emailInput.value = "";
  });
});


let people = [
  {
    photo: 'url("./pics/2.jpg")',
    name: "محمد عبدالله",
    description: "الف شكر يا صحبى ",
  },
  {
    photo: 'url("./pics/3.jpg")',
    name: "خالد ابو الفتوح",
    description:
      "والله العظيم، Canva Pro جابت لي أكتر من اللي أنا كنت بتوقعه، شغل جامد",
  },
  {
    photo: 'url("./pics/4.jpg")',
    name: "على الفنان",
    description: "شغل فاخر من الاخر",
  },
  {
    photo: 'url("./pics/1.jpg")',
    name: "حيدر الفضيل",
    description: "هيك الشغل والا بلا فديتك والله يا اخوى",
  },
  {
    photo: 'url("./pics/5.jpg")',
    name: "صابر محمود",
    description: "الف شكر على الاكونت يا صحبى ",
  },
  {
    photo: 'url("./pics/6.jpg")',
    name: "ناير نصحى",
    description: "عاش والله مفيش اكونت freepik",
  },
  {
    photo: 'url("./pics/7.jpg")',
    name: "حسام الدين عبدالله",
    description: "شكرا يا راجل يا محترم , ومستنيين الجديد منك بإذن الله",
  },
  {
    photo: 'url("./pics/8.jpg")',
    name: "عاصم جلال عاشور",
    description: "تسلم الاياااااادى",
  },
  {
    photo: 'url("./pics/9.jpg")',
    name: "خالد ربيع",
    description: "شكرا يا صحبى",
  },
  {
    photo: 'url("./pics/10.jpg")',
    name: "ابراهيم محمد",
    description: "يا سلام لو اكونتات فرى بيك بالمرة تبقا عظمة قوى كدا",
  },
];




imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
description.innerText = people[0].description;
let currentPerson = 0;
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";
  let tl = gsap.timeline();
  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0,
    });
  }
  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`,
  });
  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`,
  });
  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);
  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0,
  });
  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1,
    });
  }
}

function setNextCardLeft() {
  currentPerson = (currentPerson + 1) % people.length;
  slide("left", currentPerson);
}

function setNextCardRight() {
  currentPerson = (currentPerson - 1 + people.length) % people.length;
  slide("right", currentPerson);
}
leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);
window.addEventListener("resize", () => {
  description.style.height = "100%";
});
function startSlideInterval() {
  slideInterval = setInterval(() => {
    setNextCardLeft();
  }, 3500);
}
function stopSlideInterval() {
  clearInterval(slideInterval);
}
startSlideInterval();


// to change language ==> getting translations and change page content
function changeLanguage(selectElement) {
  const selectedValue =
    selectElement.value || localStorage.getItem("lang") || "ar";
  document.documentElement.lang = selectedValue;
  localStorage.setItem("lang", selectedValue);
  const elements = document.querySelectorAll("[data-translation]");
  elements.forEach((element) => {
    const translationKey = element.dataset.translation;
    element.textContent = translations_js[selectedValue][translationKey] || "";
  });
}

// *************************************************
// *************************************************
// *************************************************
// to load translations file
async function loadTranslations() {
  let lang = localStorage.getItem("lang") || "ar"
  changeLanguage(lang);
  // try {
  //   const response = await fetch("./translations.json");
  //   if (!response.ok) {
  //     throw new Error(`Failed to load translations: ${response.status}`);
  //   }
  //   translations = await response.json();
  
  //   console.log(translations);
  // } catch (error) {
  //   console.error("Error loading translations:", error);
  // }
}
let bars = document.querySelector(".bars")

bars.addEventListener("click", () => {
  document.querySelector(".links").classList.toggle("mobile")
})