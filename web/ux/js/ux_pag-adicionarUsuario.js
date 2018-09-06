//#############################
//##Alterações dentro da tela##
//#############################

//Redimensionar modal
function modalCriarUsuario_Redimensionar_Init() {
    setTimeout(
            function ()
            {
                modalCriarUsuario_Redimensionar();
                initForm_criarUsuario();
            }, 200);
}

$(window).resize(function () {
    modalCriarUsuario_Redimensionar();
});

function modalCriarUsuario_Redimensionar() {
    var imageHeight = $(window).height() + 0;
    var divWidth = $('#modalCrrUsr_Container').height() + 30;

    if (imageHeight < divWidth)
    {
        imageHeight = divWidth;
    }

    $('#modalCriarUsuario').css({height: 'calc(' + imageHeight + 'px)'});


    var divPosition = (imageHeight - divWidth - 10) / 2;
    $('#modalCrrUsr_Container').css({"margin-top": 'calc(' + divPosition + 'px)'});
}



//validar formulario criarUsuario
function validarForm_criarUsuario()
{
    $('#Form_CriarUsuario_eMail').addClass("form_campo-invalido");
    $('#Form_CriarUsuario_eMail').val("");
    $("#Form_CriarUsuario_eMail").attr("placeholder", "Digite um E-Mail válido");
    
    $("#Form_CriarUsuario_eMail").focus();
}
function initForm_criarUsuario()
{
    $('#Form_CriarUsuario_eMail').removeClass("form_campo-invalido");
    $('#Form_CriarUsuario_eMail').val("");
    $("#Form_CriarUsuario_eMail").attr("placeholder", "E-Mail");
}