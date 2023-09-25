function fixedEffect(Tag,EffectOption){
    

    let winHeight= $(window).height() //브라우저의 높이
    let fixedDiv=$(Tag) // 태그
    let fixedDivTop = fixedDiv.offset().top // 태그높이 
    let movingStaiton = $(".movingStation")
    let movingStaitonHeight = $(".movingStation").offset().top
    let actionDistanceLength= EffectOption.Length?EffectOption.Length:0
    let trainLength=$(".train").children().length
    let WrapDistance=actionDistanceLength/trainLength
    // Fixed 동작길이 (Fixed시 스크롤 길이)
    $(window).scroll(function(){
        let wstop = $(window).scrollTop()
        let scrollDistance=wstop-fixedDivTop
         // fixed 지점에서부터의 스크롤길이
        
        if(scrollDistance<0){
            movingStaiton.css("position", "relative")
            movingStaiton.css("top","0")
        }
        
        if(scrollDistance>=0 && scrollDistance<=actionDistanceLength){
            let count=Math.floor(scrollDistance/WrapDistance)
            // 리스트간 동작실행 조절 변수 정수값. (스크롤길이/ 리스트간 동작실행길이)
            let percent= (scrollDistance/WrapDistance)-count
            // 리스트간 동작실행 조절 변수 소수값(단계별 변화 실행 변수)
            console.log(count,percent)
            
            //Fixed 동작실행

            movingStaiton.css("position", "fixed")
            movingStaiton.css("top","0")
            //스크롤에 따른 슬라이드효과 예시
            moveSlider(count)
            // opacity(count,percent)
            // scaleImg(count,percent,0.2)
            // moveScaleImg(count,percent,0.2,100)

        }
        if(scrollDistance>actionDistanceLength){
            //동작 종료
            movingStaiton.css("position", "relative")
            movingStaiton.css("top",actionDistanceLength+"px")
        }
    })

    //css 선행변형

    $(".train").css("width",(100*trainLength)+"%")

    // 슬라이드효과 함수
    
    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-(100/trainLength)*idx)+"%)")
    }
    function moveTextSlider(idx,per){
        $(".train>li").eq(idx).children(".txt").css("transform","translateY("+per+"px)")
    }
    function opacity(idx,per){
        $(".train>li").eq(idx).children(".txt").css("opacity",per)   
    }
    function scaleImg(idx,per,scale){
        $(".train>li").eq(idx).children(".txt").css("transform","scale("+(1-(per*scale))+")")   
    }
    function moveScaleImg(idx,per,scale,length){
        $(".train>li").eq(idx).children(".txt").css("transform","translateY("+(per*length)+"px) scale("+(1-(per*scale))+")")

    }
}