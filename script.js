const mensagens = [
  "Você é mais forte do que imagina 💛",
  "Nunca se esqueça: sua vida importa 🌻",
  "Você não está sozinho, estamos juntos  🤝",
  "Acredite: dias melhores virão  ☀️",
  "Sempre existe esperança 🌈"
];

document.get.ElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
