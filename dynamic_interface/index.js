var TOOL;
var box;
$(document).ready(function(){
    $("#btn_restart").hide();
    $("#TOOL1").hide();
    $("#TOOL2").hide();
    $("#TOOL3").hide();
    $("#btn_start").hover(
        function(){
            $("#btn_start").css("width","200px").css("height","200px");
            $("#btn_start").css("left","45%").css("top","36%");
        },
        function(){
            $("#btn_start").css("width","170px").css("height","170px");
            $("#btn_start").css("left","46%").css("top","37%");
        }
    ); 
    $("#btn_start").click(
        function(){
            $("#page_start").hide();
            $("#btn_start").hide();
        }
    );

    $("#tool1").hover(
        function(){
            $("#tool1").css("width","120px").css("height","120px");
            $("#tool1").css("left","9.5%").css("top","3%");
        },
        function(){
            $("#tool1").css("width","100px").css("height","100px");
            $("#tool1").css("left","10%").css("top","4%");
        }
    )
    $("#tool2").hover(
        function(){
            $("#tool2").css("width","120px").css("height","120px");
            $("#tool2").css("left","9.5%").css("top","17%");
        },
        function(){
            $("#tool2").css("width","100px").css("height","100px");
            $("#tool2").css("left","10%").css("top","18%");
        }
    )
    $("#tool3").hover(
        function(){
            $("#tool3").css("width","120px").css("height","120px");
            $("#tool3").css("left","9.5%").css("top","31%");
        },
        function(){
            $("#tool3").css("width","100px").css("height","100px");
            $("#tool3").css("left","10%").css("top","32%");
        }
    )
    init();
    $("#tool1").click(
        function(){
            $("#TOOL1").show();
            $("#TOOL3").hide();
            //取得 id 為 "TOOL1" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL1");
            //將 onclick 註冊給 pickup	
            pickup();
        }
    )
    $("#tool2").click(
        function(){
            $("#TOOL1").hide();
            $("#TOOL2").show();
            $("#TOOL3").hide();
            //取得 id 為 "TOOL2" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL2");
            //將 onclick 註冊給 pickup	
            pickup();
        }
    )
    $("#tool3").click(
        function(){
            $("#TOOL1").hide();
            $("#TOOL3").show();
            //取得 id 為 "TOOL3" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL3");
            //將 onclick 註冊給 pickup	
            pickup();
        }
    )

    
});



/***********************************************************************************/
function init(){
}
//撿起來
function pickup(){
    //設定滑鼠移動時， box 跟著移動
    document.onmousemove = move;
    //將onclick註冊給putdown所以再次按下滑鼠的時候，就是放下	
    TOOL.onclick = putdown;
}
function move(e){
    if(!e){
        e = window.event;
    }
    TOOL.style.left = (e.clientX - 100) + "px";//若不加px，file fox會跑不起來。減5只是讓滑鼠留在方塊裡面
    TOOL.style.top = (e.clientY - 100) + "px";
}
//放下
function putdown(){
    document.onmousemove = null;
    TOOL.onclick = pickup;//更改事件處理器
}
/***********************************************************************************/