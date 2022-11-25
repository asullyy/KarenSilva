//------BackgroundAnimation-top---------
let ulBackgroundAnimationTop = document.querySelector("#BackgroundAnimation-top");

for (let i=0;i<3;i++){
    const li = document.createElement("li");
    const img = document.createElement("img");

    //randonmizando a escolha da imagem
    const numberImg = Math.floor(Math.random()*3);
    
    if(numberImg == 1){
        img.setAttribute("src", "./img/x-pink.png");;
    }else if (numberImg == 2){
        img.setAttribute("src", "./img/x-green.png");
    }else{
        img.setAttribute("src", "./img/circle.png");
    } 

    //estilizando o tamanho das imagens
    const size = Math.floor(Math.random()*(35-10)+10); //randomizando os tamanhos
    const positions = Math.random()*(99-1)+1; //randomizando as posições
    
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.top = `-${size}px`;

    li.appendChild(img);
    const delay = Math.random()*(5-0.1)+0.1;
    const duration = Math.random()*(70-20)+20;
    li.style.left = `${positions}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    
    ulBackgroundAnimationTop.appendChild(li);
}

//------BackgroundAnimation-bottom---------
let ulBackgroundAnimationBottom = document.querySelector("#BackgroundAnimation-bottom");

for (let i=0;i<3;i++){
    const li = document.createElement("li");
    const img = document.createElement("img");

    //randonmizando a escolha da imagem
    const numberImg = Math.floor(Math.random()*3);
    
    if(numberImg == 1){
        img.setAttribute("src", "./img/x-pink.png");;
    }else if (numberImg == 2){
        img.setAttribute("src", "./img/x-green.png");
    }else{
        img.setAttribute("src", "./img/circle.png");
    } 

    //estilizando o tamanho das imagens
    const size = Math.floor(Math.random()*(35-10)+10); //randomizando os tamanhos
    const positions = Math.random()*(99-1)+1; //randomizando as posições
    
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.top = `-${size}px`;

    li.appendChild(img);
    const delay = Math.random()*(5-0.1)+0.1;
    const duration = Math.random()*(70-20)+20;
    li.style.left = `${positions}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    
    ulBackgroundAnimationBottom.appendChild(li);
}