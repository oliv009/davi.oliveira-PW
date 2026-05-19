
function autenticarUsuario() {
    
    const usuarioDigitado = document.getElementById('usuario').value.trim();
    const senhaDigitada = document.getElementById('senha').value;
    
    
    const usuarioCorreto = "admin";
    const senhaCorreta = "12345";

    
    if (usuarioDigitado === "" || senhaDigitada === "") {
        mostrarMensagem("Por favor, preencha todos os campos.", "error");
        return; 
    }

    
    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        mostrarMensagem("Acesso concedido! Redirecionando...", "success");
        
        
        setTimeout(function() {
            window.location.href = ""; 
        }, 1500);
    } else {
        mostrarMensagem("Usuário ou senha incorretos.", "error");
    }
}


function mostrarMensagem(texto, tipo) {
    const boxFeedback = document.getElementById('mensagemFeedback');
    boxFeedback.innerText = texto;
    boxFeedback.style.display = 'block';

    boxFeedback.classList.remove('alert-error', 'alert-success');

    if (tipo === "error") {
        boxFeedback.classList.add('alert-error');
    } else if (tipo === "success") {
        boxFeedback.classList.add('alert-success');
    }
}