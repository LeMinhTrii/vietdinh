fetch("https://dbvietdinh.vercel.app/api/category")
  .then((res) => res.json())
  .then((res) => getCategory(res));
fetch("https://dbvietdinh.vercel.app/api/suggest")
  .then((res) => res.json())
  .then((res) => getSuggest(res));
fetch("https://dbvietdinh.vercel.app/api/sale")
  .then((res) => res.json())
  .then((res) => getSale(res));
fetch("https://dbvietdinh.vercel.app/api/cold")
  .then((res) => res.json())
  .then((res) => getColdTop(res));
fetch("https://dbvietdinh.vercel.app/api/coldprd")
  .then((res) => res.json())
  .then((res) => getColdBox(res));
fetch("https://dbvietdinh.vercel.app/api/tool")
  .then((res) => res.json())
  .then((res) => getToolTop(res));
fetch("https://dbvietdinh.vercel.app/api/toolprd")
  .then((res) => res.json())
  .then((res) => getToolBox(res));
const getCategory = (data) => {
  data &&
    data.map((e, i) => {
      let item = ` <div class="item" data-aos="fade-up" data-aos-duration="${
        1000 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
              <div class="thumnail">
              <img src="./img/${e.photo}" alt="">
                      </div>
                      <p class="name">${e.name}</p>
                  </div>`;
      document.querySelector(".category_content-box").innerHTML += item;
    });
};

getCategory();

const getSuggest = (data) => {
  data &&
    data.map((e, i) => {
      let item = `  <div class="item" data-aos="fade-up" data-aos-duration="${
        600 + i * 2
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
                            <div class="thumnail">
                                <img src="./img/${e.photo}" alt="">
                            </div>
                            <div class="content">
                                <p class="name">${e.name}</p>
                                <p class="price">2.000.000vnđ</p>
                                <p class="sell">Đã bán - 128</p>
                                <div class="btn-buy">
                                    <span class="text">Mua ngay</span>
                                    <img src="./img/shopping-cart 1 (1).png" alt="">
                                </div>
                            </div>
                            <div class="icon_sale">
                                <img src="./img/price-tag 1.png" alt="">
                            </div>
                        </div>`;
      document.querySelector(".suggest_content-box").innerHTML += item;
    });
};
getSuggest();

const getSale = (data) => {
  data &&
    data.map((e, i) => {
      let item = `    <div class="item"data-aos="fade-up" data-aos-duration="${
        600 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out" >
                            <div class="thumnail">
                                <img src="./img/${e.photo}" alt="">
                            </div>
                            <div class="content">
                                <p class="name">${e.name}</p>
                                <div class="bgr-red">
                                    <div class="top">
                                        <p class="price">
                                            <span class="price_root">2.000.000vnđ</span>
                                            <span>1.599.999vnđ</span>
                                        </p>
                                        <div class="finish">
                                            <span class="text_fn">Kết thúc sau</span>
                                            <span class="day">
                                                <span class="number">3</span>
                                                <span class="text">ngày</span>
                                                <img src="./img/shopping-cart 1.png" alt="">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="countdown">
                                        <p class="day">
                                            <span class="number">3</span>
                                            <span class="text">ngày</span>
                                        </p>
                                        <p class="hour">
                                            <span class="number">8</span>
                                            <span class="text">giờ</span>
                                        </p>
                                        <p class="minutes">
                                            <span class="number">12</span>
                                            <span class="text">phút</span>
                                        </p>
                                        <p class="second">
                                            <span class="number">59</span>
                                            <span class="text">giây</span>
                                        </p> 
                                    </div>
                                </div>
                            </div>
                            <div class="hotsale-ic">
                                <img src="./img/flash-sale (2) 1 (1).png" alt="">
                            </div>
                            <div class="discount">
                                -25%
                            </div>
                        </div>`;
      document.querySelector(".sale_content-box").innerHTML += item;
    });
};
getSale();

const getColdTop = (data) => {
  data &&
    data.map((e, i) => {
      let item = `     <div class="item" data-aos="fade-up" data-aos-duration="${
        600 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
                                <div class="thumnail">
                                    <img src="./img/${e.photo}" alt="">
                                </div>
                                <p class="name">${e.name}</p>
                            </div>`;
      document.querySelector(".cold_content-top .listbox").innerHTML += item;
    });
};
getColdTop();
const getColdBox = (data) => {
  data &&
    data.map((e, i) => {
      let item = `    <div class="item" data-aos="fade-up" data-aos-duration="${
        600 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
                            <div class="thumnail">
                                <img src="./img/${e.photo}" alt="">
                            </div>
                            <p class="name">${e.name}</p>
                            <div class="content">
                                <span class="price_root">2.000.000vnđ</span>
                                <span class="price">2.000.000vnđ</span>
                                <a href="#" class="btn_buy">Mua Ngay</a>
                            </div>
                            <div class="sale_icon">
                                <img src="./img/flash-sale (2) 1.png" alt="">
                            </div>
                            <div class="discount_icon">
                                <span class="text">-20%</span>
                                <img src="./img/sale 1.png" alt="">
                            </div>
                        </div>`;
      document.querySelector(".cold_content-box").innerHTML += item;
    });
};
getColdBox();
const getToolTop = (data) => {
  data &&
    data.map((e, i) => {
      let item = `     <div class="item" data-aos="fade-up" data-aos-duration="${
        600 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
                                <div class="thumnail">
                                    <img src="./img/${e.photo}" alt="">
                                </div>
                                <p class="name">${e.name}</p>
                            </div>`;
      document.querySelector(".tool_content-top .listbox").innerHTML += item;
    });
};
getToolTop();
const getToolBox = (data) => {
  data &&
    data.map((e, i) => {
      let item = ` <div class="item" data-aos="fade-up" data-aos-duration="${
        600 + i * 3
      }" data-aos-offset="0"  data-aos-easing="ease-in-out">
                            <div class="thumnail">
                                <img src="./img/${e.photo}" alt="">
                            </div>
                            <p class="name">${e.name}</p>
                            <div class="content">
                                <span class="price_root">2.000.000vnđ</span>
                                <span class="price">2.000.000vnđ</span>
                                <a href="#" class="btn_buy">Mua Ngay</a>
                            </div>
                            <div class="sale_icon">
                                <img src="./img/flash-sale (2) 1.png" alt="">
                            </div>
                            <div class="discount_icon">
                                <span class="text">-20%</span>
                                <img src="./img/sale 1.png" alt="">
                            </div>
                        </div>`;
      document.querySelector(".tool_content-box.box-cpn").innerHTML += item;
    });
};
getToolBox();

const handleCountDown = () => {
  const allday = document.querySelectorAll(".day .number"),
    allhour = document.querySelectorAll(".hour .number"),
    allminute = document.querySelectorAll(".minutes .number"),
    allsecond = document.querySelectorAll(".second .number");
  const countDownDate = new Date("07/10/2023 00:00:00").getTime(),
    now = new Date().getTime(),
    distance = countDownDate - now,
    seconds = 1000,
    days = seconds * 60 * 60 * 24,
    hours = seconds * 60 * 60,
    minutes = seconds * 60,
    dd = Math.floor(distance / days),
    hh = Math.floor((distance % days) / hours),
    mm = Math.floor((distance % hours) / minutes),
    ss = Math.floor((distance % minutes) / seconds);
  allday.forEach((e) => {
    e.innerHTML = dd;
  });
  allhour.forEach((e) => {
    e.innerHTML = hh;
  });
  allminute.forEach((e) => {
    e.innerHTML = mm;
  });
  allsecond.forEach((e) => {
    e.innerHTML = ss;
  });
  if (distance < 0) {
    clearInterval(time);
    allday.forEach((e) => {
      e.innerHTML = "0";
    });
    allhour.forEach((e) => {
      e.innerHTML = "0";
    });
    allminute.forEach((e) => {
      e.innerHTML = "0";
    });
    allsecond.forEach((e) => {
      e.innerHTML = "0";
    });
  }
};
const time = setInterval(handleCountDown, 1000);
// libs
var elem = document.querySelector(".owl-carousel");
var flkty = new Flickity(elem, {
  // options
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 1500,
  wrapAround: true,
});

// scroll animation
AOS.init();

// phamduong

$("#search").placeholderTypewriter({
  text: [
    "Tìm kiếm sản phẩm...",
    "Tủ lạnh...",
    "Tivi...",
    "Máy giặt....",
    "Tìm kiếm mọi thứ ở đây...",
  ],
});
(function ($) {
  $(function () {
    //on DOM ready
    $(".list-post").simplyScroll({
      customClass: "vert",
      orientation: "vertical",
      // orientation: 'horizontal',
      auto: true,
      manualMode: "auto",
      pauseOnHover: 1,
      speed: 1,
      loop: 0,
    });
  });
})(jQuery);
const category_header = document.querySelector(".category-header");
const category_bar = document.querySelector(".category-bar");
category_header.addEventListener("click", function () {
  if (category_bar.style.display == "block") {
    category_bar.style.display = "none";
    category_bar.style.visibility = "hidden";
  } else {
    category_bar.style.display = "block";
    category_bar.style.visibility = "visible";
  }
});

const nav = document.querySelector(".header");
const nav_header = document.querySelector(".nav-header");
const category = document.querySelector(".category .category-header");
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) {
    nav_header.style.position = `fixed`;
    nav_header.style.width = `100%`;
    nav_header.style.transform = `translateY(-44px)`;
    category.style.transform = `translateY(-44px)`;
  } else {
    nav_header.style.position = `static`;
    nav_header.style.transform = `translateY(0)`;
    category.style.transform = `translateY(0)`;
  }
});

const dropdownFooter = document.querySelectorAll(".item .header-item span svg");
const titleItem = document.querySelectorAll(".item .title-item");
dropdownFooter.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (titleItem[index].style.display == `none`) {
      element.style.transform = `rotate(180deg)`;
      titleItem[index].style.display = `block`;
    } else {
      element.style.transform = `rotate(0deg)`;
      titleItem[index].style.display = `none`;
    }
  });
});
