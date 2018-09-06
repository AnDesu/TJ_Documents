
//####################
//##Mudanças de tela##
//####################

$("#paginaHistorico").click(function () {
    alert("Carregar documentos recentes.");
});
$("#paginaLogin").click(function () {
    alert("Carregar pagina login.");
});



//############################
//##Navegação dentro da tela##
//############################

//adicionar modal "removerUsuario"
$(function () {
    $("#removerUsuario_Html").load("removerUsuario.html");
    var script = document.createElement('script');
    script.src = "ux/js/ux_pag-removerUsuario.js";
    document.body.appendChild(script);
});

//adicionar modal "adicionarUsuario"
$(function () {
    $("#adicionarUsuario_Html").load("adicionarUsuario.html");
    var script = document.createElement('script');
    script.src = "ux/js/ux_pag-adicionarUsuario.js";
    document.body.appendChild(script);
});

//adicionar modal "alterarSenhaUsuario"
$(function () {
    $("#alterarSenhaUsuario_Html").load("alterarSenhaUsuario.html");
    var script = document.createElement('script');
    script.src = "ux/js/ux_pag-alterarSenhaUsuario.js";
    document.body.appendChild(script);
});

//adicionar modal "alterarPermissaoUsuario"
$(function () {
    $("#alterarPermissaoUsuario_Html").load("alterarPermissaoUsuario.html");
    var script = document.createElement('script');
    script.src = "ux/js/ux_pag-alterarPermissaoUsuario.js";
    document.body.appendChild(script);
});