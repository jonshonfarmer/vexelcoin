const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const gameMenu = document.querySelector("#game-page");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 1200 && scrollPos < 600) {
    gameMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 1200 && scrollPos < 1400) {
    homeMenu.classList.add("highlight");
    gameMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 1200 && scrollPos < 2300) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 1200 && scrollPos < 2800) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 1200 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
//russian

// crypto coin

const settings = {
  async: true,
  scrollDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cstellar%2Cmetapioneers&vs_currencies=usd",
  method: "GET",
  headers: {},
};

const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.stellar.usd;
  doge.innerHTML = response.metapioneers.usd;
});

//flag
// const languageSelected = document.querySelector(".language-selected");
// const language = document.querySelector(".language");
// const flag = document.querySelector(".flag");
// const flag1 = document.querySelector(".flag1");

// languageSelected.addEventListener("click", function () {
//   language.classList.toggle("flagActive");
// });

// if (!language.classList.contains("flagActive")) {
//   flag.addEventListener("click", function () {
//     language.classList.remove("flagActive");
//   });
//   flag1.addEventListener("click", function () {
//     language.classList.remove("flagActive");
//   });
// }

// if (
//   !language.classList.contains("flagActive") &&
//   window.innerWidth <= 1060 &&
//   menuBars
// ) {
//   flag.addEventListener("click", function () {
//     language.classList.remove("flagActive");
//     menu.classList.toggle("is-active");
//     menuLinks.classList.remove("active");
//   });
//   flag1.addEventListener("click", function () {
//     language.classList.remove("flagActive");
//     menu.classList.toggle("is-active");
//     menuLinks.classList.remove("active");
//   });
// }

// $(".en").click(function () {
//   $("#game-page").text("GAME");
//   $("#home-page").text("COIN");
//   $("#about-page").text("ABOUT");
//   $("#services-page").text("CONTACS");
//   $("#tranzactie").text("Purchase VXL");
//   $(".language-selected").text("English");
//   $(".en").text("English");
//   $(".ru").text("Russian");
//   $(".poph2").text("HOW TO BUY VEXEL?");
//   $(".popP").text(
//     " Maybe you are new or dont know all the steps in buying a cryptocureny on LOBSTR this link will give you step by step instruction on how to purchase vexel"
//   );
//   $(".popA").text("INTRUCTIONS");
//   $(".log").text("Welcome to VEXONIC");
//   $(
//     ".log2"
//   ).text(`Isn't this your biggest dream? To play your favorite game and make
//   money.`);
//   $(".howToBuy1").text("Game Introduction:");
//   $(".gameLink").text("Learn more...");
//   $(
//     ".log3"
//   ).text(`The game takes place in a 2D universe. After procuring the ship
//   and upgrading it, you have the opportunity to destroy other things
//   in the universe and receive coins for it. The game market will
//   allow you to easily purchase the spaceship, choose its color and
//   armament. This game is an easy way to get to know metaverse and
//   make money without much effort, all you need is to buy Vexel coin,
//   create an account, equip yourself and you can start making money.
//   Weekly draws will not leave you indifferent, as in each of them
//   you can win a spaceship and other worthwhile prizes. Let our
//   journey begin!`);
//   $(".timeh2").text("We're Launching Soon");
//   $(".time1").text("Days");
//   $(".time2").text("Hours");
//   $(".time3").text("Minutes");
//   $(".time4").text("Seconds");
//   $(".header").text("VEXEL COIN - JOIN THE SAFEST AND FUTURE OF");
//   $(".crypto").text("CRYPTOCURRENCY");
//   $(
//     ".text"
//   ).text(`One of the most promising coins of 2023 expected to be on binance by
//   the end of 2025 trusted by SolidProof and ranked amongst the biggest
//   names on the market rn. A very big community of big investors and
//   24/7 support`);
//   $(".cump").text("PURCHASE VXL");
//   $(".coiner").text("Bitcoin");
//   $(".coiner1").text("Lumen");
//   $(".coiner2").text("Vexel");
//   $(".proof_text").text("PROFESIONALLY VERIFIED AND APPROVED");
//   $(".proof_text1").text("PROFESIONALLY VERIFIED AND APPROVED");
//   $("#inf1").text("Expected holders in 2023");
//   $("#inf2").text("Awaited liquidity 2023");
//   $("#inf3").text("Vexel coins will be listed");
//   $("#inf4").text("Coins capital");
//   $("#h1").text("WHY SHOULD YOU INVEST IN VEXEL?");
//   $("#h2").text("VEXEL WILL GENERATE IN 10X WHEN WE LAUCH ON LOBBY");
//   $(
//     "#p"
//   ).text(` We expect investors from Russia and Ukraine which will drive the
//   price of the coin up, so buy till you can`);
//   $(".cump1").text("PURCHASE VXL");
//   $(".sfarsit").text("We respond 24/7");
//   $(".auto").text("Join our telegram for more questions and daily news");
//   $(".btn_telega").text("Open chat");
//   $(".america").addClass(".active-en");
// });

// $(".ru").click(function () {
//   $("#game-page").text("Игра");
//   $("#home-page").text("Дом");
//   $("#about-page").text("O монете");
//   $("#services-page").text("Контакты");
//   $(".cump").text("Купить VXL");
//   $(".language-selected").text("Русский");
//   $(".en").text("Английский");
//   $(".ru").text("Русский");
//   $(".poph2").text("КАК КУПИТЬ ВЕКСЕЛ?");
//   $(".popP").text(
//     "Может быть, вы новичок или не знаете всех шагов по покупке криптовалюты на LOBSTR, эта ссылка даст вам пошаговую инструкцию о том, как купить vexel."
//   );
//   $(".popA").text("ИНСТРУКЦИИ");
//   $(".log").text("Добро пожаловать в ВЕКСОНИК");
//   $(".log2").text(
//     `Разве это не твоя самая большая мечта? Играть в любимую игру и зарабатывать деньги.   `
//   );
//   $(".howToBuy1").text("Введение в игру:");
//   $(".gameLink").text("Узнать больше...");
//   $(
//     ".log3"
//   ).text(`Действие игры происходит в 2D-вселенной. После приобретения корабля
//   и улучшая его, у вас есть возможность уничтожать другие вещи
//   во вселенной и получайте за это монеты. Рынок игр будет
//   позволяют легко приобрести космический корабль, выбрать его цвет и
//   вооружение. Эта игра — простой способ познакомиться с метавселенной и
//   зарабатывай без особых усилий, все что тебе нужно это купить монету Vexel,
//   создайте учетную запись, оборудуйте себя, и вы можете начать зарабатывать деньги.
//   Еженедельные розыгрыши не оставят вас равнодушными, ведь в каждом из них
//   Вы можете выиграть космический корабль и другие ценные призы. Пусть наш
//   путешествие начинается!`);
//   $(".timeh2").text("Мы скоро запускаем");
//   $(".time1").text("Дни");
//   $(".time2").text("Часы");
//   $(".time3").text("Минуты");
//   $(".time4").text("Секунды");
//   $(".header").text("VEXEL COIN - ПРИСОЕДИНЯЙТЕСЬ К БЕЗОПАСНОМУ БУДУЩЕМУ");
//   $(".crypto").text("CRYPTOCURRENCY");
//   $(".text").text(
//     `Один из самых перспективных монет на 2023 год, ожидается листинг на binance к концу 2025 года… Сообщество надёжных инвесторов и 24/7 поддержка.`
//   );
//   $(".howToBuy").text("КАК КУПИТЬ ВЕКСЕЛ:");
//   $(".buyLink").text("ИНСТРУКЦИИ");
//   $(".cump1").text("Купить VXL");
//   $(".coiner").text("Bitcoin");
//   $(".coiner1").text("Lumen");
//   $(".coiner2").text("Vexel");
//   $(".proof_text").text("PROFESIONALLY VERIFIED AND APPROVED");
//   $(".proof_text1").text("PROFESIONALLY VERIFIED AND APPROVED");
//   $("#inf1").text("Ожидаемые держатели в 2023");
//   $("#inf2").text("Ожидаемая ликвидность в 2023");
//   $("#inf3").text("Монеты Vexel будут перечислены");
//   $("#inf4").text("Столица монеты");
//   $(".coc1").text("ЧТО ВЫ ПОЛУЧИТЕ ИНВЕСТИРУЯ В VEXEL?");
//   $(".coc2").text(
//     "VEXEL ОБЕЩАЕТ РОСТ БОЛЕЕ ЧЕМ В 10 РАЗ ПОСЛЕ ЛИСТИНГА НА HUOBI КОТОРЫЙ ПЛАНИРУЕТСЯ НА АПРЕЛЬ ЭТОГО ГОДА"
//   );
//   $(".coc3").text(`Команда Vexoin состоит из 10 инженеров-программистов, которые
//   многолетний опыт работы в области крипто и метастиха. Мы
//   запустил эту игру с намерением помочь людям, которые мало зарабатывают
//   деньги на своей обычной работе. Мы ждем вас, чтобы стать частью нашего
//   проект, поэтому купите Vexel, и вы быстро вернете свои деньги
//   и более`);
//   $(".cump1").text("Купить VXL");
//   $(".sfarsit").text("Мы отвечаем 24/7");
//   $(".auto").text(
//     "Присоединяйтесь к нашей телеграмме, чтобы получать больше вопросов и ежедневных новостей"
//   );
//   $(".btn_telega").text("Открыть чат");
//   $(".language-selected").img("Flag_of_the_United_States.png");
//   $("#rus").addClass(".active-ru");
// });

const countDownDate = new Date("Apr 6, 2023 00:00:00").getTime();
const x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

const mainBtn = document.querySelector(".main__btn1_link");
const inputField = document.querySelector(".inpt");

mainBtn.addEventListener("click", function () {
  inputField.value = "";
  alert("Thank you for joining Vexel community");
});

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
