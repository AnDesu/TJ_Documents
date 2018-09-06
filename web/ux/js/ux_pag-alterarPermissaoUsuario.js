//#############################
//##Alterações dentro da tela##
//#############################

//Redimensionar modal
function modalAlterarPermissaoUsuario_Redimensionar_Init() {
    setTimeout(
            function ()
            {
                modalAlterarPermissaoUsuario_Redimensionar();
                initForm_AlterarPermissao();
            }, 200);
}

$(window).resize(function () {
    modalAlterarPermissaoUsuario_Redimensionar();
});

function modalAlterarPermissaoUsuario_Redimensionar() {
    var imageHeight = $(window).height() + 0;
    var divWidth = $('#modalAlterarPermissaoUsuario_Container').height() + 30;

    if (imageHeight < divWidth)
    {
        imageHeight = divWidth;
    }

    $('#modalAlterarPermissaoUsuario').css({height: 'calc(' + imageHeight + 'px)'});


    var divPosition = (imageHeight - divWidth - 10) / 2;
    $('#modalAlterarPermissaoUsuario_Container').css({"margin-top": 'calc(' + divPosition + 'px)'});
}



//validar formulario AlterarPermissao
function validarForm_AlterarPermissao()
{
    alert("validarForm_AlterarPermissao");
}
function initForm_AlterarPermissao()
{
    $('#Form_AlterarPermissaoUsuario_senha').removeClass("form_campo-invalido");
    $('#Form_AlterarPermissaoUsuario_senha').val("");
    $("#Form_AlterarPermissaoUsuario_senha").attr("placeholder", "Entre com a nova Permissao");
}