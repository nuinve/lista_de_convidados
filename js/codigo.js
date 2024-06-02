
        let convidados = [];
        let ulConvidados = document.getElementById("listaConvidados");

        function cadastraConvidado() {
            let convidado = document.getElementById("inputConvidado").value;
            if (convidado) {
                convidados.push(convidado);
                document.getElementById("inputConvidado").value = "";
                desenhaLista();
            }
        }

        function removeConvidado() {
            convidados.shift();
            desenhaLista();
        }

        function desenhaLista() {
            ulConvidados.innerHTML = "";
            for (let i = 0; i < convidados.length; i++) {
                ulConvidados.innerHTML += `<li>${convidados[i]}</li>`;
            }
        }
    