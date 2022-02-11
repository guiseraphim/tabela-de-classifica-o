var j1 = { nome: "J1", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var j2 = { nome: "J2", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var j3 = { nome: "J3", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

j1.pontos = calculaPontos(j1);
j2.pontos = calculaPontos(j2);
j3.pontos = calculaPontos(j3);

var jogadores = [j1, j2, j3];

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarEmpate() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
  }
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadores(jogadores);
}

function zerar() {
  j1.vitorias = 0;
  j1.empates = 0;
  j1.derrotas = 0;

  j2.vitorias = 0;
  j2.empates = 0;
  j2.derrotas = 0;

  j3.vitorias = 0;
  j3.empates = 0;
  j3.derrotas = 0;

  j1.pontos = calculaPontos(j1);
  j2.pontos = calculaPontos(j2);
  j3.pontos = calculaPontos(j3);

  exibirJogadores(jogadores);
}