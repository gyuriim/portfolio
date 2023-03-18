/* 풀스크린 */ 
var scroll = function(){
    
    var $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $("#banner");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 4){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
    };
    
};

scroll();


// /* 스와이퍼 */
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     autoplay: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });




// /* 스크롤 부드럽게 */
// var headerScroll = document.querySelectorAll('.layout-category');

// headerScroll.addEventListener('click', e => {
//     this.classList.add('scroll-behavior:smooth')
// });




/* 햄버거버튼 */
const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".closebtn")

openBtn.addEventListener("click",function(e){
    document.querySelector("#myNav").style.width = "50%"
})

closeBtn.addEventListener("click",function(e){
    document.querySelector("#myNav").style.width = "0"
})




/* 아코디언메뉴 */
var workPanel = document.querySelectorAll('.work-panel');

for(var i=0; i < workPanel.length; i++) {
    workPanel[i].addEventListener('click', function(){

        for(var x=0; x < workPanel.length; x++){
            workPanel[x].classList.remove('active');
        }
        this.classList.add('active');
    });
};




/* 마우스호버 */
const experienceTypeList = document.querySelectorAll('experience-type-list > li') 
const experiencePhoto = document.querySelectorAll('experience-photo > div')

experienceTypeList.forEach(item => {

    item.addEventListener('mouseover', e => {
        experiencePhoto.classList.add("display");
    });

})
