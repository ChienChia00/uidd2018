var TOOL;
var SALT;
var AREA;
var tool_state=0;
var TOOL2_show=0;
var load_num=0;
var mount=0;
var salt1_state=0;
var salt2_state=0;
var salt3_state=0;
var salt4_state=0;
var salt5_state=0;
var flag_page_intro=0;
$(document).ready(function(){
    $("#btn_restart").hide();
    $("#intro_page").hide();
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
    $("#btn_restart").hover(
        function(){
            $("#btn_restart").css("width","420px").css("height","170px");
            $("#btn_restart").css("left","59%").css("top","79%");
        },
        function(){
            $("#btn_restart").css("width","380px").css("height","150px");
            $("#btn_restart").css("left","60%").css("top","80%");
        }
    );
    $("#btn_intro").hover(
        function(){
            $("#btn_intro").css("width","420px").css("height","170px");
            $("#btn_intro").css("left","39%").css("top","79.5%");
        },
        function(){
            $("#btn_intro").css("width","380px").css("height","150px");
            $("#btn_intro").css("left","40%").css("top","80.5%");
        }
    );
    $("#btn_start").click(
        function(){
            $("#page_start").hide();
            $("#btn_start").hide();
            alert("click intro to learn how to play!!!");
        }
    );
    $("#btn_intro").click(
        function(){
            if(flag_page_intro == 0)
            {
                flag_page_intro=1;
                $("#intro_page").show();
                return;
            }
            if(flag_page_intro == 1)
            {
                flag_page_intro=0;
                $("#intro_page").hide();
                return;
            }
        }
    )
    $("#btn_restart").click(
        function(){
            $("#page_start").hide();
            $("#btn_restart").hide();
            mount = 0;
            load_num = 0;
            tool_state = 0;
            TOOL2_show = 0;
            salt1_state = 0;
            salt2_state = 0;
            salt3_state = 0;
            salt4_state = 0;
            salt5_state = 0;
            mountain(mount);
            $("#salt1").css("background-image","url('picture/salt0.png')");
            $("#salt2").css("background-image","url('picture/salt0.png')");
            $("#salt3").css("background-image","url('picture/salt0.png')");
            $("#salt4").css("background-image","url('picture/salt0.png')");
            $("#salt5").css("background-image","url('picture/salt0.png')");
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
    $("#tool1").click(
        function(){
            tool_state=1;
            $("#TOOL1").show();
            $("#TOOL3").hide();
            //取得 id 為 "TOOL1" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL1");
            //將 onclick 註冊給 pickup	
            pickup();
            $("#area1").hover(
                function(){
                    SALT = document.getElementById("salt1");
                    change1(SALT,AREA,1);
                }
            )
            $("#area2").hover(
                function(){
                    SALT = document.getElementById("salt2");
                    change2(SALT,AREA,1);
                }
            )
            $("#area3").hover(
                function(){
                    SALT = document.getElementById("salt3");
                    change3(SALT,AREA,1);
                }
            )
            $("#area4").hover(
                function(){
                    SALT = document.getElementById("salt4");
                    change4(SALT,AREA,1);
                }
            )
            $("#area5").hover(
                function(){
                    SALT = document.getElementById("salt5");
                    change5(SALT,AREA,1);
                }
            )
        }
    )
    $("#tool2").click(
        
        function(){
            tool_state=2;
            TOOL2_show=1;
            $("#TOOL1").hide();
            $("#TOOL2").show();
            $("#TOOL3").hide();
            //取得 id 為 "TOOL2" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL2");
            //將 onclick 註冊給 pickup	
            pickup();
            $("#area_salt_mountain").click(
                function(){
                    if(load_num >= 4)
                    {
                        mount = mount+1;
                        mountain(mount);
                        load_num = 0;
                        load(load_num);
                        if(mount == 5)  //表示結束
                        {
                            end();
                        }
                    }
                }
            )
        }
    )
    $("#tool3").click(
    
        function(){
            tool_state=3;
            $("#TOOL1").hide();
            $("#TOOL3").show();
            //取得 id 為 "TOOL3" 物件，並且指定給 TOOL 變數
            TOOL = document.getElementById("TOOL3");
            //將 onclick 註冊給 pickup	
            pickup();
            $("#area1").click(
                function(){
                    SALT = document.getElementById("salt1");
                    dig1(SALT,AREA,-1);
                    load(load_num);
                }
            )
            $("#area2").click(
                function(){
                    SALT = document.getElementById("salt2");
                    dig2(SALT,AREA,-1);
                    load(load_num);
                }
            )
            $("#area3").click(
                function(){
                    SALT = document.getElementById("salt3");
                    dig3(SALT,AREA,-1);
                    load(load_num);
                }
            )
            $("#area4").click(
                function(){
                    SALT = document.getElementById("salt4");
                    dig4(SALT,AREA,-1);
                    load(load_num);
                }
            )
            $("#area5").click(
                function(){
                    SALT = document.getElementById("salt5");
                    dig5(SALT,AREA,-1);
                    load(load_num);
                }
            )
        }
    )

});



/***********************************************************************************/
//撿起來
function pickup(){
    //設定滑鼠移動時， TOOL 跟著移動
    document.onmousemove = move;
    //將ondblclick註冊給putdown所以雙擊按下滑鼠的時候，就是放下	
    TOOL.ondblclick = putdown;
    
    /*
    //將onclick註冊給turn所以單擊按下滑鼠的時候，就是
    TOOL.onclick = turn;
    */
}
function move(e){
    if(!e){
        e = window.event;
    }
    TOOL.style.left = (e.clientX - 100) + "px";//若不加px，file fox會跑不起來。
    TOOL.style.top = (e.clientY - 100) + "px";
}
//放下
function putdown(){
    document.onmousemove = null;
    TOOL.ondblclick = pickup;//更改事件處理器
}
/*
//旋轉
function turn(){
    $(TOOL).css("background-color","rgba(0,0,0,0.3)");
    $(TOOL).css("transform","rotate(20deg)");

}
*/
/***********************************************************************************/
function load(LOAD){
    if(TOOL2_show == 1)
    {
        if(LOAD == 0)
        {
            $("#TOOL2").css("background-image","url('picture/TOOL_2_0.png')");
        }
        if(LOAD == 1)
        {
            $("#TOOL2").css("background-image","url('picture/TOOL_2_1.png')");
        }
        if(LOAD == 2)
        {
            $("#TOOL2").css("background-image","url('picture/TOOL_2_2.png')");
        }
        if(LOAD == 3)
        {
            $("#TOOL2").css("background-image","url('picture/TOOL_2_3.png')");
        }
        if(LOAD == 4)
        {
            $("#TOOL2").css("background-image","url('picture/TOOL_2_4.png')");
        }
    }
}
/***********************************************************************************/
function change1(SALT,AREA,num){
    if(tool_state == 1)
    {
        if(salt1_state == 0)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt5.png')");
            salt1_state = salt1_state + num;
            return;
        }
    }    
}
function change2(SALT,AREA,num){
    if(tool_state == 1)
     {

        if(salt2_state == 0)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt5.png')");
            salt2_state = salt2_state + num;
            return;
        }
    }
}
function change3(SALT,AREA,num){
    if(tool_state == 1)
    {
        if(salt3_state == 0)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt5.png')");
            salt3_state = salt3_state + num;
            return;
        }
    }
}
function change4(SALT,AREA,num){
    if(tool_state == 1)
    {
        if(salt4_state == 0)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt5.png')");
            salt4_state = salt4_state + num;
            return;
        }
    }
}
function change5(SALT,AREA,num){
    if(tool_state == 1)
    {
        if(salt5_state == 0)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt5.png')");
            salt5_state = salt5_state + num;
            return;
        }
    }
}
/***********************************************************************************/
function dig1(SALT,AREA,num){
    if(tool_state == 3)
    {
        if(TOOL2_show == 1)
        {
            if(salt1_state>0)
            {
                load_num = load_num + 1;
            }
        }
        if(salt1_state == 5)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt1_state = salt1_state + num;
            return;
        }
        if(salt1_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt0.png')");
            salt1_state = salt1_state + num;
            return;
        }
    }
}
function dig2(SALT,AREA,num){
    if(tool_state == 3)
    {
        if(TOOL2_show == 1)
        {
            if(salt2_state>0)
            {
                load_num = load_num + 1;
            }
        }
        if(salt2_state == 5)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt2_state = salt2_state + num;
            return;
        }
        if(salt2_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt0.png')");
            salt2_state = salt2_state + num;
            return;
        }
    }
}
function dig3(SALT,AREA,num){
    if(tool_state == 3)
    {
        if(TOOL2_show == 1)
        {
            if(salt3_state>0)
            {
                load_num = load_num + 1;
            }
        }
        if(salt3_state == 5)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt3_state = salt3_state + num;
            return;
        }
        if(salt3_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt0.png')");
            salt3_state = salt3_state + num;
            return;
        }
    }
}
function dig4(SALT,AREA,num){
    if(tool_state == 3)
    {
        if(TOOL2_show == 1)
        {
            if(salt4_state>0)
            {
                load_num = load_num + 1;
            }
        }
        if(salt4_state == 5)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt4_state = salt4_state + num;
            return;
        }
        if(salt4_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt0.png')");
            salt4_state = salt4_state + num;
            return;
        }
    }
}
function dig5(SALT,AREA,num){
    if(tool_state == 3)
    {
        if(TOOL2_show == 1)
        {
            if(salt5_state>0)
            {
                load_num = load_num + 1;
            }
        }
        if(salt5_state == 5)
        {
            $(SALT).css("background-image","url('picture/salt4.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 4)
        {
            $(SALT).css("background-image","url('picture/salt3.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 3)
        {
            $(SALT).css("background-image","url('picture/salt2.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 2)
        {
            $(SALT).css("background-image","url('picture/salt1.png')");
            salt5_state = salt5_state + num;
            return;
        }
        if(salt5_state == 1)
        {
            $(SALT).css("background-image","url('picture/salt0.png')");
            salt5_state = salt5_state + num;
            return;
        }
    }
}
/***********************************************************************************/
function mountain(M){
    if(M==0)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain0.png')");
    }
    if(M==1)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain1.png')");
    }
    if(M==2)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain2.png')");
    }
    if(M==3)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain3.png')");
    }
    if(M==4)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain4.png')");
    }
    if(M==5)
    {
        $("#salt_mountain").css("background-image","url('picture/salt_mountain5.png')");
    }
}
/***********************************************************************************/
function end(){
    $("#TOOL2").hide();
    $("#page_start").show();
    $("#btn_restart").show();
    $("#page_start").css("background-image","url('picture/a.png')");
}