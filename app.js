let friends = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let friend = input.value.trim();

    if (friend !== "" && !friends.includes(friend)) {
        friends.push(friend);
        friends.sort();
        renderizarLista();
        input.value = "";
    } else if(friend == ""){
        alert("Digite o nome")
    }
}

function renderizarLista() {
    let listFriends = document.getElementById('listaAmigos');
    listFriends.innerHTML = "";

    friends.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        // removeButton.textContent = "🗑";
        removeButton.textContent =  "⛔️"
        
        removeButton.onclick = () => removerAmigo(index);

        li.appendChild(removeButton);
        listFriends.appendChild(li);
    });
}

function removerAmigo(index) {
    friends.splice(index, 1);
    renderizarLista(); 
}

function sortearAmigo() {
    if (friends.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteadoIndex = Math.floor(Math.random() * friends.length);
    let amigoSorteado = friends[sorteadoIndex];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <li id="typing-effect">
        🎉 O amigo sorteado é: <strong></strong>! 🎉
      </li>
    `;
    
    let nameElement = document.querySelector("#typing-effect strong");
    typeEffect(nameElement, amigoSorteado, 100);
}

function typeEffect(element, text, speed) {
    element.textContent = "";
    let index = 0;

    function typing() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typing, speed);
        }
    }

    typing();
}
