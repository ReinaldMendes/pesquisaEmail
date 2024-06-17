let usuarios = [
  {
    nome: "Reinald",
    idade: 30,
    email: "reinald@gmail.com",
  },
  {
    nome: "Rui",
    idade: 31,
    email: "rui@gmail.com",
  },
];

console.log("Qual email você quer procurar?");

process.stdin.on("data", function (data) {
  let email = data.toString().trim();
  let usuario;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == email) {
      usuario = usuarios[i];
    }
  }
  if (usuario) {
    console.log(usuario);
  } else {
    console.log("Usuario não encontrado");
  }
});
