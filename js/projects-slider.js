//selecionando a classe "controls" implementada nas setas
const controls = document.querySelectorAll(".control"); 

let currentItem = 0;
//Selecionando todos os itens da lista através da classe container-card
const itens = document.querySelectorAll(".container-card");

//Descobrindo a quantidade de itens da lista com a propriedade .lenght
const maxItens = itens.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-card-left");

        var pAux = itens[currentItem].querySelector(".container-card p");
        pAux.style.display = "none";


        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if (currentItem >= maxItens){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItens - 1;
        }
        
        itens.forEach(item => 
            item.classList.remove("current-item"));
        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        }); 

        itens[currentItem].classList.add("current-item");
        
        var p = itens[currentItem].querySelector(".current-item p");
        p.style.display = "block";

    })
});
