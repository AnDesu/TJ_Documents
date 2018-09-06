//#############################
//##Alterações dentro da tela##
//#############################

//Redimensionar modal
function modalAlterarSenhaUsuario_Redimensionar_Init() {
    setTimeout(
            function ()
            {
                modalAlterarSenhaUsuario_Redimensionar();
                initForm_AlterarSenha();
            }, 200);
}

$(window).resize(function () {
    modalAlterarSenhaUsuario_Redimensionar();
});

function modalAlterarSenhaUsuario_Redimensionar() {
    var imageHeight = $(window).height() + 0;
    var divWidth = $('#modalAlterarSenhaUsuario_Container').height() + 30;

    if (imageHeight < divWidth)
    {
        imageHeight = divWidth;
    }

    $('#modalAlterarSenhaUsuario').css({height: 'calc(' + imageHeight + 'px)'});


    var divPosition = (imageHeight - divWidth - 10) / 2;
    $('#modalAlterarSenhaUsuario_Container').css({"margin-top": 'calc(' + divPosition + 'px)'});
}



//validar formulario AlterarSenha
function validarForm_AlterarSenha()
{
    $('#Form_AlterarSenhaUsuario_senha').addClass("form_campo-invalido");
    $('#Form_AlterarSenhaUsuario_senha').val("");
    $("#Form_AlterarSenhaUsuario_senha").attr("placeholder", "Digite uma Senha válida");
    
    $("#Form_AlterarSenhaUsuario_senha").focus();
}
function initForm_AlterarSenha()
{
    $('#Form_AlterarSenhaUsuario_senha').removeClass("form_campo-invalido");
    $('#Form_AlterarSenhaUsuario_senha').val("");
    $("#Form_AlterarSenhaUsuario_senha").attr("placeholder", "Entre com a nova Senha");
}