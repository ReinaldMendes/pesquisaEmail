//crie uma biclioteca que voce pode adicionar, remover, listar livros,
// os livros possuem os atributos nome, tamanho, autor e genero.

const usuarios = [];
let estado = "menu";
let nome, idade, email;
console.log(
  "Escolha uma opção:\n1. Adicionar Usuario\n2. Ver pelo email usuario\n3. Listar usuario\n4. Sair"
);
process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (estado === "menu") {
    if (input === "1") {
      estado = "adicionar_nome";
      console.log("Digite o nome do usuario:");
    } else if (input === "2") {
      estado = "remover_nome";
      console.log("Digite o nome do Usuario a ser removido:");
    } else if (input === "3") {
      if (usuarios.length === 0) {
        console.log("Nenhum usuario cadastrado");
      } else {
        console.log("Usuarios Cadastrados:");
        for (let usuario of usuarios) {
          console.log(
            `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Tamanho: ${usuario.email}`
          );
        }
      }
      console.log(
        "Escolha uma opção:\n1. Adicionar Usuario\n2. Ver pelo email usuario\n3. Listar usuario\n4. Sair"
      );
    } else if (input === "4") {
      console.log("Saindo...");
      process.exit();
    } else {
      console.log("Opção inválida. Tente novamente.");
    }
  } else if (estado === "adicionar_nome") {
    nome = input;
    estado = "adicionar_idade";
    console.log("Digite a idade do usuario:");
  } else if (estado === "adicionar_idade") {
    idade = input;
    estado = "adicionar_email";
    console.log("Digite o email do usuario");
  } else if (estado === "adicionar_email") {
    email = input;
    usuarios.push({
      nome: nome,
      idade: idade,
      email: email,
    });
    console.log("Usuario adicionado com sucesso!");
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar Usuario\n2. Ver pelo email usuario\n3. Listar usuario\n4. Sair"
    );
  } else if (estado === "email_encontrado") {
    let nomeEmail = input;
    let encontrado = false;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email.toLowerCase() === nomeEmail.toLowerCase()) {
        console.log("Usuario encontrado com sucesso!");
        console.log(
          `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Tamanho: ${usuario.email}`
        );
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      console.log("Usuario não encontrado!");
    }
    estado = "menu";
    console.log(
      "Escolha uma opção:\n1. Adicionar Usuario\n2. Ver pelo email usuario\n3. Listar usuario\n4. Sair"
    );
  }
});
