var users = [
    { userID: "Lourenço", password: "lourenço" },
    { userID: "Mariana", password: "mariana" },
    { userID: "a", password: "a" }
];
 

// Função para verificar o login
function logar() {
    var enteredUserID = document.getElementById("userID").value;
    var enteredPassword = document.getElementById("password").value;

    // Verificar se o utilizador e a senha estão corretos
    var user = users.find(function (user) {
        return user.userID === enteredUserID && user.password === enteredPassword;
    });

    if (user) {
        console.log('User authenticated:', user);
    
        // Store user ID in sessionStorage
        sessionStorage.setItem('userID', user.userID);
        
        // Log before redirecting
        console.log('Redirecting to index.html');
        window.location.href = 'index.html';
    } else {
        console.log('User not authenticated');
        alert("Erro no login. Verifique o nome de utilizador e a sua password.");
    }
}

function FazerLogout(){
    sessionStorage.removeItem('userID');
    window.location.href = 'index.html';
   // mostrarMenu();
}

// Adicionar um ouvinte de eventos ao botão de login
//document.getElementById("btnLogin").addEventListener("click", verificarLogin);



function mostrarMenu(){
	const userID = sessionStorage.getItem('userID');
 
 	if (userID){
		mostrarMenuAutenticado();
	}
	else
	{
		mostrarMenuNaoAutenticado();
	}

}
	

function mostrarMenuNaoAutenticado(){
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("blog-section").style.display = "none";
    document.getElementById("produtos-section").style.display = "none";
    document.getElementById("pages-login-link").style.display = "inline";
    document.getElementById("pages-logout-link").style.display = "none";
    document.getElementById("pages-sign-up").style.display = "inline";
};
function mostrarMenuAutenticado(){
    document.getElementById("quiz-section").style.display = "inline";
    document.getElementById("blog-section").style.display = "inline";
    document.getElementById("produtos-section").style.display = "inline";
    document.getElementById("pages-login-link").style.display = "none";
    document.getElementById("pages-logout-link").style.display = "inline";
    document.getElementById("pages-sign-up").style.display = "none";
};

//Mostrar o menu, logo apos carregar a pagina
mostrarMenu();