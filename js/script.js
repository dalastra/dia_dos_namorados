document
.getElementById("formLogin")
.addEventListener("submit", function(e){

    e.preventDefault();

    const filme = document
    .getElementById("filme")
    .value
    .trim()
    .toLowerCase();

    const senha = document
    .getElementById("senha")
    .value
    .trim();

    if(
        (filme === "enrolados" || filme === "rapunzel") &&
        senha === "15/03/2026"
    ){
        window.location.href = "inicio.html";
    }
    else{
        alert(
            "errou mano"
        );
    }

});