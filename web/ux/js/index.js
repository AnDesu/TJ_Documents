
//####################
//##Mudanças de tela##
//####################

$("#paginaHistorico").click(function () {
    alert("Carregar documentos recentes.");
});
$("#paginaLogin").click(function () {
    alert("Carregar pagina login.");
});



//#############################
//##Alterações dentro da tela##
//#############################

$("#alterar_P-DisplayLista").click(function () {
//    alert("Carregar display lista.");


    $("#P-DisplayMiniaturas").addClass("d-none");
    $("#alterar_P-DisplayLista").addClass("d-none");
    $("#P-DisplayLista").removeClass("d-none");
    $("#alterar_P-DisplayMiniaturas").removeClass("d-none");

    $('#P-Inicio_DisplayLista').focus();
});

$("#alterar_P-DisplayMiniaturas").click(function () {
//    alert("Carregar display lista.");

    $("#P-DisplayLista").addClass("d-none");
    $("#alterar_P-DisplayMiniaturas").addClass("d-none");
    $("#P-DisplayMiniaturas").removeClass("d-none");
    $("#alterar_P-DisplayLista").removeClass("d-none");

    $('#P-Inicio_DisplayMiniaturas').focus();
});

//$("#alterar_Ui-Tema").click(function () {
//    alert("Alterar tema.");
//    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
//});

//Alternar contraste
var themes = {
    "default": "ui/css/ui_tema-principal.css",
    "contraste": "ui/css/ui_tema-acssbldd-contraste.css"
};
$(function () {
    var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
    themesheet.appendTo('head');

    $('.theme-link').click(function () {
        if ($(this).attr('data-theme') == "contraste")
        {
            $(this).attr('data-theme', "default");
        } else
        {
            $(this).attr('data-theme', "contraste");
        }

        var themeurl = themes[$(this).attr('data-theme')];
        themesheet.attr('href', themeurl);
    });
});



//############################
//##Navegação dentro da tela##
//############################

//Selecionar documentos em miniaturas pelas setas
$(document).keydown(
        function (e)
        {
            //Impedir as setas de ativarem a barra de rolagem
            if (e.keyCode == 39 || e.keyCode == 38 || e.keyCode == 37 || e.keyCode == 40) {
                if ($(".tabByArrow").is(':focus')) {
                    e.preventDefault();
                }
            }

            if (e.keyCode == 39 || e.keyCode == 40) {
                $(".tabByArrow:focus").next().focus();

            }
            if (e.keyCode == 37 || e.keyCode == 38) {
                $(".tabByArrow:focus").prev().focus();

            }



//             //Impedir as setas de ativarem a barra de rolagem
//            if (e.keyCode == 38 e.keyCode == 40) {
//                if ($(".tabByUpDownArrow").is(':focus')) {
//                    e.preventDefault();
//                }
//            }
//            
//            if (e.keyCode == 38) {
//                $(".tabByUpDownArrow:focus").prev().focus();
//            }
//            if (e.keyCode == 40) {
//                $(".tabByUpDownArrow:focus").next().focus();
//            }

        }
);



//###########
//##Loading##
//###########
$(function () {
    setTimeout(
            function ()
            {
                $(":root").show();
            }, 10);
});