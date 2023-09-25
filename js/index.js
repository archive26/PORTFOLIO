$(document).ready(function(){

  // 마우스 스크롤이 skill창에 도달했을 때 자동으로 %가 한번만 뜸

  // $(".frame").on("wheel DOMMouseScroll", function (event) {
  //   //console.log(event)
  //   let E = event.originalEvent
  //   let delta = 0;
  //   if (E.detail) {
  //     delta = E.detail * -40
  //   } else {
  //     delta = E.wheelDelta
  //   }

  //   if (delta < 0) {
  //     //마우스 휠을 내렸을 때
  //     //console.log($(this).next().length)
      

  //   } else {
  //     //마우스 휠을 올렸을 때
  //   }
  //   return false
  // })

  let skillState = false;
  $(window).scroll(function(){
    let sctop = $(window).scrollTop()
    let skilltop = $(".skill1").offset().top
    if(sctop>=skilltop && skillState == false){
      $(".skill>li").each(function(){
        let per = $(this).attr("data-per")
        console.log(per)
        $(this).find("circle").css("stroke-dashoffset",314-(314*(per/100)))
      })
      skillState = true
    }
  })

    //top버튼 누르면 부드럽게 상단으로 이동
    $(".btntop").click(function(){
        $("html,body").animate({scrollTop:0},1000)
        // moveScroll({
        //     top:0,
        //     speed:1000
        // })
    }) 
    
    // resume 버튼 팝업 창
    $(".resumebtn").click(function(){
      
        $(".resumesite").addClass("on")
    })

    $(".resumesite>.closebtn").click(function(){
        $(".resumesite").removeClass("on")
    })


    // 마우스 cursor 동그라미 변경 후 커서 기능 하도록
    $(document).mousemove(function(event){
        let posX = event.clientX-15
        let posY = event.clientY-15
        // console.log(posX,posY)
        $(".cursor").css("left",posX+"px")
        $(".cursor").css("top",posY+"px")
        $(".cursor").addClass("on")
        
        $(".cursorGuideBox").css("left",(posX+150)+"px")
        $(".cursorGuideBox").css("top",posY+"px")
    })

    // 상단에 메뉴창 클릭 시 해당 페이지로 이동
    $(".menu1").click(function(){
        let targetTop = $(".about").offset().top
        $("html,body").animate({scrollTop:targetTop},1000)
    })
    $(".menu2").click(function(){
      let targetTop = $(".work_popup").offset().top
      $("html,body").animate({scrollTop:targetTop},1000)
    })
    $(".menu3").click(function(){
      let targetTop = $(".contact").offset().top
      $("html,body").animate({scrollTop:targetTop},1000)
    })


    $(".contents_wrap>div").on("wheel DOMMouseScroll", function (event) {
        //console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if (E.detail) {
          delta = E.detail * -40
        } else {
          delta = E.wheelDelta
        }
    
        if (delta < 0) {
          //마우스 휠을 내렸을 때
          //console.log($(this).next().length)
          if ($(this).next().length != 0) {
            let posTop = $(this).next().offset().top
            //정해준 영역의 다음 형제로 스크롤 되게
            $("html,body").stop().animate({ scrollTop: posTop }, 1000)
          }
    
        } else {
          //마우스 휠을 올렸을 때
          if ($(this).prev().length != 0) {
            let posTop = $(this).prev().offset().top
            $("html,body").stop().animate({ scrollTop: posTop }, 1000)
          }
        }
        return false
      })

      // 팝업창 클릭시 슬라이드 이동//
    let popup_count = 0;
    $(".btn_popup_next").click(function(){
      popup_count++
      if(popup_count>5){
        popup_count = 0
      }
      $(".popup_train").css("transform","translateX("+(-(100/6)*popup_count)+"%)")
    })

    $(".btn_popup_prev").click(function(){
      popup_count--
      if(popup_count<0){
        popup_count = 5
      }
      $(".popup_train").css("transform","translateX("+(-(100/6)*popup_count)+"%)")
    })

    // 배너창 클릭시 슬라이드 이동//
    let banner_count = 0;
    $(".btn_banner_prev").click(function(){
      banner_count--
      if(banner_count<0){
        banner_count = 3
      }
      $(".banner_train").css("transform","translateX("+(-25*banner_count)+"%)")
    })

    $(".btn_banner_next").click(function(){
      banner_count++
      if(banner_count>3){
        banner_count = 0
      }
      $(".banner_train").css("transform","translateX("+(-25*banner_count)+"%)")
    })

       // 낮밤
       $(".btnDay").click(function(e){
        e.preventDefault()
        $("body").addClass("day")
    })
       $(".btnNight").click(function(e){
           e.preventDefault()
           $("body").removeClass("day")
       })

// 팝업 이미지 클릭 시 해당 이미지 보이게 //
   $(".popupfull").click(function(){
    let imgsrc = $(this).children().attr("src")
    $(".full").find("img").attr("src",imgsrc)
    $(".full").addClass("on")
  })

  $(".full").click(function(){
    $(this).removeClass("on")
  })


// 배너 이미지 클릭 시 해당 이미지 보이게 //
  $(".banner_full").click(function(){
    let imgsrc2 = $(this).children().attr("src")
    $(".full2").find("img").attr("src",imgsrc2)
    $(".full2").addClass("on")
  })

  $(".full2").click(function(){
   $(this).removeClass("on")
  })
   
  //리디자인 클릭 시 해당 이미지 보이게
 $(".rede_bg").click(function(){
  $(".REDE_open").addClass("on")
  })

 $(".re_close").click(function(){
  $(".REDE_open").removeClass("on")
 }) 



})

