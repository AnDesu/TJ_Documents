
//####################
//##Mudanças de tela##
//####################

$("#paginaHistorico").click(function () {
    alert("Carregar documentos recentes.");
});
$("#paginaLogin").click(function () {
    alert("Carregar pagina logout.");
});

function irListaUsuarios()
{
    alert("irlistaUsuarios");
}



//############################
//##Navegação dentro da tela##
//############################

//adicionar modal "adicionarUsuario"
$(function () {
    $("#adicionarUsuario_Html").load("adicionarUsuario.html");
    var script = document.createElement('script');
    script.src = "ux/js/ux_pag-adicionarUsuario.js";
    document.body.appendChild(script);
});