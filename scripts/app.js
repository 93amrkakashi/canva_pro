const userLang = navigator.language || navigator.userLanguage;

function setLanguage() {
  const selectedLang = document.getElementById("languageSelect").value;
  const isArabic = selectedLang === "ar";
  document.body.dir = isArabic ? "rtl" : "ltr";
}
let translations_js = {
  ar: {
    order_now: "أطلب الآن",
    opinions: "الآراء",
    shahada: "شهادات العملاء",
    get_offer: "احصل على العرض",
    email_placeholder: "ادخل بريدك الإلكتروني ....",
    get_email: `فقط أدخل بريدك الإلكتروني للحصول على العرض `,
    get_heading: `أحصل على حساب <span class="c_words">Canva Pro</span> مجانا`,
    why_choose: `لماذا تختار <span class="c_word">Canva Pro</span>؟`,
    canva_zft: `
    يُعتبر <span class="c_word">Canva Pro</span> تجربة تصميم متقدمة ومميزة للأفراد والشركات على حد سواء. يوفر <span
      class="c_word">Canva Pro</span> مجموعة من المزايا الفريدة التي تجعل عملية التصميم أكثر سهولة وفعالية. يمكنك
    الوصول إلى مكتبة ضخمة من القوالب الاحترافية لتصميم الشعارات والمنشورات والعروض التقديمية وغيرها بسرعة وسهولة.

    مع <span class="c_word">Canva Pro</span>، تحصل على وصول غير محدود إلى مكتبة الصور والرموز التعبيرية والرسوم
    البيانية، مما يتيح لك إضافة لمسة فنية إلى تصاميمك بكل سهولة.

    بالإضافة إلى ذلك، يتيح لك <span class="c_word">Canva Pro</span> الاستفادة من ميزات إدارة العلامات التجارية، حيث
    يمكنك تخصيص الألوان والخطوط وتحميل الشعارات الخاصة بك للحفاظ على الهوية البصرية لعلامتك التجارية.

    باختصار، يعتبر <span class="c_word">Canva Pro</span> خيارًا رائعًا للمصممين المحترفين والهواة على حد سواء، حيث
    يوفر أدوات قوية ومرنة لإنشاء تصاميم استثنائية بسهولة وسرعة، مما يجعله اختيارًا لا غنى عنه لمن يسعى لتحسين جودة
    وتأثير تصاميمهم.`,
  },
  en: {
    order_now: "Order Now",
    opinions: "Opinions",
    shahada: "Customer Testimonials",
    get_offer: "Get the Offer",
    email_placeholder: "Enter your email ....",
    get_email: `Just enter your email to get the offer`,
    get_heading: `Get a <span class="c_words">Canva Pro</span> Account for Free`,
    why_choose: `Why Choose <span class="c_word">Canva Pro</span>?`,
    canva_zft: `
    <span class="c_word">Canva Pro</span> is considered an advanced and distinctive design experience for individuals and companies alike. <span
      class="c_word">Canva Pro</span> provides a unique set of features that make the design process easier and more efficient. You can
    access a huge library of professional templates for designing logos, posters, presentations, and more quickly and easily.

    With <span class="c_word">Canva Pro</span>, you get unlimited access to a library of images, icons, and graphics, allowing you to add an artistic touch to your designs with ease.

    Additionally, <span class="c_word">Canva Pro</span> allows you to take advantage of brand management features, where you can customize colors, fonts, and upload your own logos to maintain the visual identity of your brand.

    In short, <span class="c_word">Canva Pro</span> is a great choice for both professional designers and enthusiasts alike, as it provides powerful and flexible tools to create exceptional designs quickly and easily, making it an indispensable choice for those looking to improve the quality and impact of their designs.`,
  },
};
function changeLanguage() {
  const selectedLang = document.getElementById("languageSelect").value;
  const translations = translations_js[selectedLang];
  const emailInput = document.querySelector(
    'input[data-translation="email_placeholder"]'
  );
  emailInput.placeholder = translations["email_placeholder"];
  document.body.dir = document.getElementById("languageSelect").value == "ar" ? "rtl" : "ltr";
  const elements = document.querySelectorAll("[data-translation]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translation");
    if (translations.hasOwnProperty(translationKey)) {
      element.innerHTML = translations[translationKey];
    }
  });
}

function sendEmail(email) {
  console.log(email)
  let url = `https://65gkf.bemobtrcks.com/go/b83d8323-1249-4b8e-9741-1070c9f5c4a6?userId=${email}`
  window.open(url, '_blank');

}

document.addEventListener("DOMContentLoaded", function () {
  setLanguage();
  changeLanguage();

  const emailForm = document.getElementById("emailForm");
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById("email").value.trim();

    if (!emailPattern.test(email)) {
      alert("الرجاء إدخال بريد إلكتروني صحيح.");
      return;
    }
    sendEmail(email);
    // alert("شكرًا لك! سنتواصل معك قريبًا.");
    document.getElementById("email").value = "";
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
let currentPerson = 0;
const reviewWrap = document.getElementById("reviewWrap");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const description = document.getElementById("description");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let slideInterval;
let isChickenVisible;
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

const bars = document.querySelector(".bars");
const links = document.querySelector(".links");
bars.addEventListener("click", () => {
  links.classList.toggle("mobile");
});
links.addEventListener("click", (event) => {
  if (event.target.tagName == "A") {
    links.classList.add("mobile");
  }
});
