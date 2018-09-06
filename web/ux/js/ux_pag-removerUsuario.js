//#############################
//##Alterações dentro da tela##
//#############################

//Redimensionar modal
function modalRemoverUsuario_Redimensionar_Init() {
    setTimeout(
            function ()
            {
                modalRemoverUsuario_Redimensionar();
//                initForm_removerUsuario();
            }, 200);
}

$(window).resize(function () {
    modalRemoverUsuario_Redimensionar();
});

function modalRemoverUsuario_Redimensionar() {
    var imageHeight = $(window).height() + 0;
    var divWidth = $('#modalRmvrUsr_Container').height() + 30;

    if (imageHeight < divWidth)
    {
        imageHeight = divWidth;
    }

    $('#modalRemoverUsuario').css({height: 'calc(' + imageHeight + 'px)'});


    var divPosition = (imageHeight - divWidth - 10) / 2;
    $('#modalRmvrUsr_Container').css({"margin-top": 'calc(' + divPosition + 'px)'});
}



//validar formulario criarUsuario
function validarForm_removerUsuario()
{
    
}
function initForm_removerUsuario()
{
}