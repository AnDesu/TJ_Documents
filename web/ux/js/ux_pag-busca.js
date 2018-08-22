
//####################
//##Mudanças de tela##
//####################

$("#paginaHistorico").click(function () {
    alert("Carregar documentos recentes.");
});
$("#paginaLogin").click(function () {
    alert("Carregar pagina login (Busca).");
});



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



//Redimensionar imagem preview do modal
$("#p-c-b-resltd-abrir_modal").click(function () {
    setTimeout(
            function ()
            {
                modl_imgPreview_Redimensionar();
            }, 200);
});

$(window).resize(function () {
    modl_imgPreview_Redimensionar();
});

function modl_imgPreview_Redimensionar() {
    var imageWidth = 210;
    var imageHeight = 297;
    var imageratio = (imageHeight / imageWidth);

    //resize com tela em modo desktop
    if ($(window).width() > 767)
    {
        
//        if (($('#p-c-b-r-modl-imgPreview').width() < ($('#desaqui-y').width())))
//        {
//
//            imageHeight = $(window).height() - 40;
//            imageWidth = imageHeight / imageratio;
//            $('#p-c-b-r-modl-imgPreview').css({width: 'calc(' + imageWidth + 'px)'});
//            $('#p-c-b-r-modl-imgPreview').css({height: 'calc(' + imageHeight + 'px)'});
//        }
//        if ($('#p-c-b-r-modl-imgPreview').width() > ($('#desaqui-y').width()))
//        {
//            imageWidth = $('#desaqui-y').width();
//            imageHeight = imageWidth * imageratio;
//            $('#p-c-b-r-modl-imgPreview').css({width: 'calc(' + imageWidth + 'px)'});
//            $('#p-c-b-r-modl-imgPreview').css({height: 'calc(' + imageHeight + 'px)'});
//        }
//        if (($('#p-c-b-r-modl-imgPreview').height() > ($(window).height() - 40)))
//        {
//
//            imageHeight = $(window).height() - 40;
//            imageWidth = imageHeight / imageratio;
//            $('#p-c-b-r-modl-imgPreview').css({width: 'calc(' + imageWidth + 'px)'});
//            $('#p-c-b-r-modl-imgPreview').css({height: 'calc(' + imageHeight + 'px)'});
//        }
//        $('#p-c-b-r-modl-imgPreview').css("margin-left", 'calc(' + ($('#desaqui-y').width() - $('#p-c-b-r-modl-imgPreview').width()) + 'px)');

        imageHeight = $(window).height() - 40;
        imageWidth = imageHeight / imageratio;
        
        if ( imageWidth > ($('#p-c-b-r-modl-descricao').width()))
        {
            imageWidth = $('#p-c-b-r-modl-descricao').width();
            imageHeight = imageWidth * imageratio;
        }
        $('#p-c-b-r-modl-imgPreview').css({width: 'calc(' + imageWidth + 'px)'});
        $('#p-c-b-r-modl-imgPreview').css({height: 'calc(' + imageHeight + 'px)'});

        $('#p-c-b-r-modl-imgPreview').css("margin-left", 'calc(' + ($('#p-c-b-r-modl-descricao').width() - $('#p-c-b-r-modl-imgPreview').width()) + 'px)');
    }

    //resize em modo mobile
    else
    {
        imageHeight = $(window).height() - $('#p-c-b-r-modl-descricao').height() - 20;
        imageWidth = imageHeight / imageratio;

        if (imageWidth > ($('#p-c-b-r-modl-descricao').width()))
        {
            imageWidth = $('#p-c-b-r-modl-descricao').width();
            imageHeight = imageWidth * imageratio;
        }
        $('#p-c-b-r-modl-imgPreview').css({width: 'calc(' + imageWidth + 'px)'});
        $('#p-c-b-r-modl-imgPreview').css({height: 'calc(' + imageHeight + 'px)'});

        $('#p-c-b-r-modl-imgPreview').css("margin-left", 'calc(' + ($('#p-c-b-r-modl-descricao').width() - $('#p-c-b-r-modl-imgPreview').width()) / 2 + 'px)');
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
                $('#P-Inicio_DisplayMiniaturas').focus();
            }, 10);
});