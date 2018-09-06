//#############################
//##Alterações dentro da tela##
//#############################

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


//Colapso
$('.colapso').click(function () {
    var idArray = $(this).attr('data-colapsoTarget');
    if (idArray == null || idArray == '')
    {
        return;
    }
    idArray = JSON.parse(idArray);
    var id1 = "#" + idArray[0];

    var iconImg = "#" + $(this).attr('data-colapsoArrow');

    if ($(id1).hasClass("d-none"))
    {
        $(id1).removeClass("d-none");

        $(iconImg).addClass("c-icn-ativado");
    } else
    {
        for (ids = 0; ids < idArray.length; ids++)
        {
            var id = "#" + idArray[ids];
            $(id).addClass("d-none");
            
            if ($(id + "_arrow"))
            {
                $(id + "_arrow").removeClass("c-icn-ativado");
            }
        }

        $(iconImg).removeClass("c-icn-ativado");
    }
    
});




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