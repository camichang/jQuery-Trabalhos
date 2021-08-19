$(document).ready(function () {
    $("#btn1").click(function () {
        $("#div1").css({ backgroundColor: "cyan" });
        $("#div2").css({ backgroundColor: "purple" });
        $("#div3").css({ backgroundColor: "lightgreen" });
        $("#div4").css({ backgroundColor: "lightpink" });
        $("#div5").css({ backgroundColor: "plum" });
        $("#div1").fadeTo(2000, 0.3);
        $("#div2").fadeTo(2000, 0.3);
        $("#div3").fadeTo(2000, 0.3);
        $("#div4").fadeTo(2000, 0.3);
        $("#div5").fadeTo(2000, 0.3);
        $("#div1").width(100).height(100).css({ overflow: "auto" });
        $("#div2").width(150).height(150).css({ overflow: "auto" });
        $("#div3").width(200).height(200).css({ overflow: "auto" });
        $("#div4").width(250).height(250);
        $("#div5").width(300).height(300);
    });

    $("#btn2").click(function () {
        $("div").css({ backgroundColor: "cornflowerblue" });
        $("div").width(300).height(150).css({ overflow: "auto" });
    });

    $("#btn3").dblclick(function () {
        $("#div2").slideDown();
        $("#div3").slideDown();
    });

    $("#btn3").dblclick(function () {
        $("#div2").slideUp();
        $("#div3").slideUp();
    });

    $(".form_campo").focusin(function () {
        $(this).css({ backgroundColor: "lightcoral" });
    });

    $(".form_campo").focusout(function () {
        $(this).css({ backgroundColor: "white" });
    });

    $("#btn1_2").click(function(){
        $(".div_pag2").slideToggle(600);
    })
    $("#btn2_2").click(function(){    
        $(".div_pag2").slideDown(400);
    })
    $("#btn3_2").click(function(){    
        $(".div_pag2").slideUp(400);
    })
    $("#btn4_2").click(function(){    
        $(".div_pag2").fadeToggle(400);
    })
    $("#btn5_2").click(function(){    
        $(".div_pag2").fadeTo("slow", 0.5);
    })
    $("#btn6_2").click(function(){    
        $(".div_pag2").fadeIn(2000);
    })
    $("#btn7_2").click(function(){    
        $(".div_pag2").hide();
    })
    $("#btn8_2").click(function(){    
        $(".div_pag2").show();
    })
    $("#btn9_2").click(function(){    
        $(".div_pag2").fadeOut();
    })
    $("#btn10_2").click(function(){    
        $(".div_pag2").toggle();
    })

});

function form_enviar() { 
    var nome = document.getElementById("form_nome").value;
    var email = document.getElementById("form_email").value;
    document.getElementById("mensagemEnviado").innerHTML = "Olá " + nome+ " envio feito com sucesso, o e-mail inserido foi o " + email+  "<br>" +"Agradecemos o envio!"
    document.getElementById("form_cadastro").reset();
}

