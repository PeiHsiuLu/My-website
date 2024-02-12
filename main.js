function scrollToHome() {
    var homeDiv = document.querySelector('.home');
    homeDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAboutMe() {
    var aboutMeDiv = document.querySelector('.about-me');
    aboutMeDiv.scrollIntoView({ behavior: 'smooth' });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown if the user clicks outside of it
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button-3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
  if (!event.target.matches('.button-4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show-2')) {
              openDropdown.classList.remove('show-2');
          }
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown-2").classList.toggle("show-2");
}

// 获取需要固定的元素
var container = document.querySelector('.container');

// 获取容器最初的位置
var containerOffsetTop = container.offsetTop;

// 监听窗口滚动事件
window.addEventListener('scroll', function() {
    // 如果页面滚动的距离大于等于容器最初的位置，则固定容器
    if (window.pageYOffset >= containerOffsetTop) {
        container.style.position = 'fixed';
        container.style.top = '0';
    } else {
        // 否则取消固定容器
        container.style.position = 'static';
    }
});












