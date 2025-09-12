const mensagens = [
  "Falar é a melhor solução, sua vida importa! 💛",
  "Você não está sozinho, sempre há alguém disposto a ouvir! 🌻",
  "Não desista de você, você é mais forte do que imagina. 🤝",
  "Procure ajuda, você merece ser ajudado! ☀️",
  "Sempre existe esperança, nunca desiste. 🌈"
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
