
//####################
//##Mudanças de tela##
//####################




//#############################
//##Alterações dentro da tela##
//#############################

//alterar tema do layout
var themes = {
    "default": "ui/css/ui_tema-principal.css",
    "contraste": "ui/css/ui_tema-acssbldd-contraste.css"
};
$(function () {
    var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
    themesheet.appendTo('head');

    $('.theme-link').click(function () {
        var themeurl = themes[$(this).attr('data-theme')];
        themesheet.attr('href', themeurl);
    });
});

//Posicionar princpl-conteudo
$(window).resize(function () {
    p_contd_posicionar();
});

function p_contd_posicionar() {
    var objectWidth = $('#princpl_conteudo').width();
    var objectHeight = $('#princpl_conteudo').height();

//    var objectPositionY = (($(window).height()) / 2) - (objectHeight / 2) - 80;
    var offsetCentralizador = ((window.outerHeight - window.innerHeight) / 2);
//    offsetCentralizador = Math.min(80, offsetCentralizador);
//    offsetCentralizador = Math.max(0, offsetCentralizador);


//    var objectPositionY = (($(window).height()) / 2) - (objectHeight / 2) - offsetCentralizador;
    var objectPositionY = ((window.innerHeight) / 2) - (objectHeight / 2) - offsetCentralizador;

    $('#principal').css({"padding-top": 'calc(' + objectPositionY + 'px)'});
}



// Fazer Login
var state_FormLogin = 0;
var FormLogin_isMovendo = false;
var FormLogin_eMail = "";

//function Login_AcionarFormulario()
//{
//    if (!isMovendo) {
//        isMovendo = true;
//
//        //Animacao da ida do input para fora da tela
//        $("#Input_LoginSenha").prop("readonly", true);
//        $("#Img_LoginIcon").hide();
//        $("#Input_LoginSenha").animate
//                (
//                        {
//                            left: '-320px',
//                            opacity: '0'
//                        }
//                , 300
//                        , function () {
//                            $("#Input_LoginSenha").css({"left": '320px'});
//                            var eMail = $("#Input_LoginSenha").val();
//                            $("#Input_LoginSenha").val("");
//
//                            if (state_FormLogin == -1) {
//                                $("#Input_LoginSenha").attr("placeholder", "E-Mail");
//                                $("#Input_LoginSenha").attr("type", "text");
//                            } else
//                            {
//                                $("#Input_LoginSenha").attr("placeholder", "Senha");
//                                $("#Input_LoginSenha").attr("type", "password");
//                                $("#p_contd_TituloLogin").html("Entrar como "+eMail);
//                            }
//                            // Impedir que a animacao volte para o E-mail
//                            if (state_FormLogin == 1)
//                            {
//                                //Animacao da volta do input a sua posicao original
//                                $("#Input_LoginSenha").animate
//                                        (
//                                                {
//                                                    left: '0px',
//                                                    opacity: '1'
//                                                }
//                                        , 300
//                                                , function () {
//                                                    isMovendo = false;
//                                                    state_FormLogin = 0 - state_FormLogin;
//
//                                                    $("#Input_LoginSenha").prop("readonly", false);
//                                                    $("#Img_LoginIcon").show();
//                                                }
//                                        );
//                            }
//
//                        }
//                );
//    }
//}








function Login_AcionarFormulario(incrementoState)
{
//    alert("incremento " + incrementoState);

    if (!FormLogin_isMovendo) {
        FormLogin_isMovendo = true;
        Login_MoverFrenteFormulario(incrementoState);
    }
}
function Login_MoverFrenteFormulario(incrementoState)
{
    $("#Input_LoginSenha").prop("readonly", true);
    $("#Img_LoginIcon").hide();
    $("#Formulario_LoginSenha").attr("onsubmit", "");

    $("#Input_LoginSenha").animate
            (
                    {
                        left: '-320px',
                        opacity: '0'
                    }
            , 300
                    , function () {




                        Login_MoverTrasFormulario(incrementoState);

                    }
            );
}
function Login_MoverTrasFormulario(incrementoState)
{
    $("#Input_LoginSenha").css({"left": '320px'});
    state_FormLogin = state_FormLogin + incrementoState;
//    alert("next state " + state_FormLogin);

    //Muda o input
//    alert("atual estado " + state_FormLogin);

    switch (state_FormLogin) {
        case 0:
            $("#Input_LoginSenha").attr("placeholder", "E-Mail");
            $("#Input_LoginSenha").attr("type", "text");
            $("#p_contd_TituloLogin").html("Entrar no TJ docs");
            $("#p_c_TitlLgn_Link").html("");
            break;
        case 1:
            FormLogin_eMail = $("#Input_LoginSenha").val();
            $("#Input_LoginSenha").attr("placeholder", "Senha");
            $("#Input_LoginSenha").attr("type", "password");
            $("#p_contd_TituloLogin").html("Entrar como " + FormLogin_eMail);
            $("#p_c_TitlLgn_Link").html("<a href='#3' onclick='Login_AcionarFormulario(-1)'><img class='icones-menor p-contd-Voltar' src='ui/img/Left_arrow-Icon.svg' title='Voltar'></a>");
            break;
        case 2:
            $("#p_contd_TituloLogin").html("Bem-vindo " + FormLogin_eMail);
            $("#p_c_TitlLgn_Link").html("");
            document.getElementById("Input_LoginSenha").disabled = true;
            $("#Input_LoginSenha").remove();
            $("#p_contd_TituloLogin").focus();
            break;
    }

    if (state_FormLogin < 2)
    {
        $("#Input_LoginSenha").val("");

        $("#Input_LoginSenha").animate
                (
                        {
                            left: '0px',
                            opacity: '1'
                        }
                , 300
                        , function () {
                            FormLogin_isMovendo = false;
                            $("#Input_LoginSenha").prop("readonly", false);
                            $("#Input_LoginSenha").focus();
                            $("#Img_LoginIcon").show();
                            $("#Formulario_LoginSenha").attr("onsubmit", "Login_AcionarFormulario(1)");
                        }
                );
    }
}



//############################
//##Navegação dentro da tela##
//############################




//###########
//##Loading##
//###########
$(function () {
    setTimeout(
            function ()
            {
                $(":root").show();
                p_contd_posicionar();

            }, 10);
});

$(function () {
    setTimeout(
            function ()
            {
                $("#b_P_Loadng_Dot1").addClass("classe_animacao_Loading");
            }, 10);
    setTimeout(
            function ()
            {
                $("#b_P_Loadng_Dot2").addClass("classe_animacao_Loading");
            }, 100);
    setTimeout(
            function ()
            {
                $("#b_P_Loadng_Dot3").addClass("classe_animacao_Loading");
            }, 200);
});