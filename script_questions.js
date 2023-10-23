var perguntas = [
  {
    categoria: 0,
    texto: "Qual atriz interpretou a Barbie no novo filme Live-action?",
    alternativas: [
      "Cameron Diaz",
      "Jennifer Aniston",
      "Margot Robbie",
      "Nicole Kidman",
    ],
    resposta: 2, // A resposta correta é a terceira alternativa (índice 2)
  },
  {
    categoria: 0,
    texto:
      "Quantos foram os atores que interpretaram o James Bond na saga de filmes 007?",
    alternativas: ["6", "5", "7", "9"],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 0,
    texto: "Quantos filmes tem a saga de Harry Potter?",
    alternativas: ["6", "8", "7", "9"],
    resposta: 1, // A resposta correta é a segunda alternativa (índice 1)
  },
  {
    categoria: 0,
    texto: "Quantas são as branquelas no filme de mesmo nome?",
    alternativas: ["3", "5", "4", "2"],
    resposta: 3, // A resposta correta é a quarta alternativa (índice 3)
  },
  {
    categoria: 0,
    texto: "Quem é o pai de Luke Skywalker na saga de filmes Star Wars?",
    alternativas: ["Anakin", "Mandalorian", "Yoda", "Obi-Wan Kenobi"],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 0,
    texto:
      "Qual atriz que interpreta a mulher maravilha nos filmes da Liga da Justiça?",
    alternativas: [
      "Jennifer Lawrence",
      "Gal Gadot",
      "Dove Cameron",
      "Sofia Carson",
    ],
    resposta: 1, // A resposta correta é a segunda alternativa (índice 1)
  },
  {
    categoria: 1,
    texto: "Qual é a maior causa do desmatamento na Amazônia?",
    alternativas: [
      "Agricultura",
      "Urbanização",
      "Mineração",
      "Mudanças climáticas",
    ],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 1,
    texto: "Qual país tem a maior parte da Amazônia dentro de suas fronteiras?",
    alternativas: ["Peru", "Colômbia", "Brasil", "Venezuela"],
    resposta: 2, // A resposta correta é a terceira alternativa (índice 2)
  },
  {
    categoria: 1,
    texto: "Qual o impacto do desmatamento na biodiversidade da Amazônia?",
    alternativas: [
      "Aumento da biodiversidade",
      "Nenhum impacto",
      "Permanece a mesma",
      "Redução da biodiversidade",
    ],
    resposta: 3, // A resposta correta é a quarta alternativa (índice 3)
  },
  {
    categoria: 1,
    texto:
      "Qual é o nome do acordo internacional que visa combater o comércio de produtos relacionados ao desmatamento na Amazônia?",
    alternativas: [
      "Acordo de Paris",
      "Protocolo de Kyoto",
      "Acordo de Oslo",
      "Acordo de Copenhague",
    ],
    resposta: 2, // A resposta correta é a terceira alternativa (índice 2)
  },
  {
    categoria: 1,
    texto:
      "Quais são os principais impactos ambientais do agronegócio na Amazônia, além do desmatamento?",
    alternativas: [
      "Erosão do solo e degradação",
      "Redução das emissões de CO2",
      "Melhoria na qualidade do solo",
      "Aumento da biodiversidade",
    ],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 1,
    texto:
      " Qual o principal produto agrícola associado ao desmatamento na Amazônia brasileira?",
    alternativas: ["Café", "Soja", "Milho", "Cana de açúcar"],
    resposta: 1, // A resposta correta é a segunda alternativa (índice 1)
  },
  {
    categoria: 2,
    texto:
      " De acordo com estudos científicos da revista Nature, na chamada Época das cavernas, as decisões dos homens e das mulheres eram:",
    alternativas: [
      "Desiguais, as dos homens tendo mais peso",
      "Iguais",
      "Desiguais, as mulheres tendo mais peso",
      "Não tomavam decisões",
    ],
    resposta: 1, // A resposta correta é a segunda alternativa (índice 1)
  },
  {
    categoria: 2,
    texto: " Que dia se comemora o dia da mulher?",
    alternativas: [
      "23 de julho",
      "4 de janeiro",
      "8 de março",
      "10 de dezembro",
    ],
    resposta: 2, // A resposta correta é a terceira alternativa (índice 2)
  },
  {
    categoria: 2,
    texto: " No Brasil, em que ano foi permitido os dias votarem?",
    alternativas: ["1932", "1930", "1960", "1940"],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 2,
    texto:
      "Qual foi o país a eleger Vigdis Finnbogadottir, a primeira mulher presidente, em 1980?",
    alternativas: ["Islândia", "Noruega", "Dinamarca", "Suiça"],
    resposta: 0, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 2,
    texto:
      "Qual o nome do movimento global que buscava a permissão do voto feminino?",
    alternativas: [
      "Movimento feminino do voto",
      "Movimento de mulheres no poder",
      "Movimento de mulheres nas urnas",
      "Movimento sufragista",
    ],
    resposta: 3, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 2,
    texto:
      "Quem foi a primeira mulher negra a se formar em uma faculdade de engenharia civil no Brasil, em 1945 na Universidade Federal do Paraná?",
    alternativas: [
      "Marília Mendonça",
      "Samara Martins",
      "Juliana Souza",
      "Enedina Marques",
    ],
    resposta: 3, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto:
      "Qual é a recomendação mínima de minutos de atividade física moderada por semana, de acordo com as diretrizes de saúde?",
    alternativas: ["15 minutos", "60 minutos", "120 minutos", "300 minutos"],
    resposta: 1, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto:
      "Qual é o principal benefício da atividade física regular para o coração?",
    alternativas: [
      "Redução do apetite",
      "Aumento do estresse",
      "Melhora da circulação sanguínea",
      "Diminuição da densidade óssea",
    ],
    resposta: 2, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto: "Qual é a importância do alongamento antes do exercício?",
    alternativas: [
      "Aumento da força muscular",
      "Prevenir lesões",
      "Melhorar o desempenho imediato",
      "Acelerar a recuperação muscular",
    ],
    resposta: 1, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto:
      "Qual é a atividade que combina movimentos de dança com exercícios aeróbicos?",
    alternativas: ["Pilates", "Yoga", "Zumba", "Levatamento de peso"],
    resposta: 2, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto: "Qual é a importânica da hidratação durante o exercício físico?",
    alternativas: [
      "Manter o cabelo saudável",
      "Melhorar a flexibilidade",
      "Evitar a fadiga muscular",
      "Aumentar o apetite",
    ],
    resposta: 2, // A resposta correta é a primeira alternativa (índice 0)
  },
  {
    categoria: 3,
    texto:
      "Qual é a recomendação geral para o número de dias por semana que você deve se exercitar para manter uma boa saúde?",
    alternativas: [
      "1 dia por semana",
      "3 dias por semana",
      "5 dias por semana",
      "7 dias por semana",
    ],
    resposta: 2, // A resposta correta é a primeira alternativa (índice 0)
  },

  // Adicione mais perguntas aqui...
];

var indicePerguntaAtual = 0;
var score = 0;
var index_categoria = parseInt(localStorage.getItem("indexcategoria"));
var perguntas_filtradas = perguntas.filter(
  (q) => q.categoria === index_categoria
);
document.getElementById("pergunta").textContent = index_categoria;

function carregarPergunta() {
  document.getElementById("pergunta").textContent =
    perguntas_filtradas[indicePerguntaAtual].texto;
  var alternativas = perguntas_filtradas[indicePerguntaAtual].alternativas;
  for (var j = 0; j < alternativas.length; j++) {
    document.getElementById("alternativas").children[j].textContent =
      alternativas[j];
  }
}

function verificarResposta(indiceResposta) {
  if (indiceResposta === perguntas_filtradas[indicePerguntaAtual].resposta) {
    score = score + 10 * segundos;
    document.getElementById("resultado").textContent = "Reposta Correta";
    if (isCorrect) {
      question.classList.add("correct");
    } else {
      question.classList.add("incorrect");
    }
  }

  indicePerguntaAtual++;

  if (indicePerguntaAtual < perguntas_filtradas.length) {
    setTimeout(carregarPergunta(), 5000);
    reiniciarTimer();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "score.html";
  }
}

carregarPergunta();

var timerElement = document.getElementById("timer");
var segundos = 15;
var intervalo;

function atualizarTimer() {
  var segundosFormatados = segundos.toFixed(2); // Formata para duas casas decimais
  timerElement.textContent = segundosFormatados;

  if (segundos < 5) {
    timerElement.classList.add("pulsar");
  } else {
    timerElement.classList.remove("pulsar");
  }

  if (segundos <= 0) {
    clearInterval(intervalo);
    timerElement.textContent = "Tempo Esgotado!";
    indicePerguntaAtual++;
    carregarPergunta();
    reiniciarTimer();
    // Aqui você pode adicionar a lógica para a próxima pergunta ou ação apropriada
  } else {
    segundos -= 0.01; // Reduz 0.01 a cada centésimo de segundo
  }
}

// Inicia o temporizador
intervalo = setInterval(atualizarTimer, 10);

function reiniciarTimer() {
  clearInterval(intervalo);
  segundos = 15; // Defina o tempo desejado para o próximo timer
  atualizarTimer(); // Atualize imediatamente o timer para 15.00 segundos
  intervalo = setInterval(atualizarTimer, 10);
}
