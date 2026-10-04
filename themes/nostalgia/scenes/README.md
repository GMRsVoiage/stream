# Nostalgia.exe — Starting Soon + BRB

**Status em 2026-10-04:** o BRB está montado e funcionando no OBS. O Starting Soon atual continua versionado, mas sua narrativa foi substituída por um redesign aprovado ainda não implementado. A arte final da Voya.exe aguardará desenho manual antes da integração definitiva.

As cenas são pensadas para canvas **1920×1080**.

## Starting Soon

Arquivo atual: `starting.html`.

A versão existente ainda executa login → conexão → portal, mas **não é mais a direção final aprovada**. Ela deve permanecer funcional até o redesign ser implementado.

### Nova narrativa aprovada

1. computador inicialmente desligado;
2. power-on / boot;
3. entrada no desktop Nostalgia.exe;
4. cursor abre uma página/navegador com tratamento CRT coerente com a cena;
5. um programa é aberto a partir desse ambiente;
6. o programa entra em um **estado de espera em loop leve**;
7. esse loop funciona como a deixa visual para o operador trocar manualmente para a cena em que a live começará.

A duração exata e o programa final ainda podem ser calibrados visualmente; não fixar temporizações antes do teste no OBS.

Requisitos mantidos:

- 1920×1080;
- execução leve;
- sem depender de vídeo de fundo permanente;
- efeitos CRT moderados, sem blur/shader pesado contínuo no Browser Source;
- música/áudio separados no OBS.

## BRB

O BRB é montado em camadas e **não desenha o quarto nem o chat dentro do HTML**.

### Quarto

Background aprovado:

`assets/backgrounds/desktop-world-brb-chibi.png`

Ele deve ser uma fonte de imagem estática no OBS.

### Chat

O chat real é uma Browser Source independente, usando o mesmo widget/Buddy da live. No BRB ele recebe perspectiva para encaixar no monitor/painel do cenário.

Configuração atual:

- fonte do chat separada da usada na gameplay;
- perspectiva feita no OBS com **obs-shaderfilter 2.6.0 / User-defined shader** e um shader de Corner Pin/quatro cantos;
- não copiar esse filtro para o chat da gameplay normal;
- posição/tamanho e os quatro vértices são ajustes locais do OBS e não devem ser hardcoded no HTML do quarto.

### Voya / placeholder

`brb.html` importa `brb.css` + `brb.js` e permanece transparente.

A arte final da **Voya.exe** ainda não existe no repositório. Por enquanto é usado:

`themes/nostalgia/scenes/assets/buddy-blue-solo.svg`

O placeholder é um único Buddy azul clássico, pequeno, com altura de aproximadamente **15,5% do canvas**, percorrendo a rota provisória no chão.

`brb-debug.html` continua disponível para visualizar polígono/caminho de movimento. A calibração definitiva de colisões e escala só deve ser feita quando a arte final da Voya existir.

Antes da produção/integracão definitiva será preparada uma **folha técnica para a artista**, com referências de tamanho, posição dos pés, áreas seguras, poses/gestos necessários e usos em Starting, BRB e transições. A arte final será desenhada manualmente fora do repositório antes de ser incorporada.

É possível passar `?sprite=CAMINHO_RELATIVO.png` para testar uma arte futura; isso não transforma automaticamente o placeholder em implementação final da mascote.

## Ordem de fontes do BRB

De cima para baixo:

1. Voya/Buddy — `brb.html`, 1920×1080.
2. Chat real — fonte independente com Corner Pin.
3. Quarto chibi — imagem estática.

Não adicionar uma segunda janela CSS de chat nem outro quarto ao `brb.html`.

## Próxima evolução aprovada do BRB — iluminação por horário

O ciclo visual do quarto foi aprovado como próximo refinamento, com prioridade para **simplicidade e funcionamento previsível**.

Direção:

- amanhecer / dia / entardecer / noite como estados visuais amplos;
- código local pequeno, sem API externa obrigatória;
- alterar somente a iluminação/camada do quarto;
- chat e Voya permanecem independentes e legíveis;
- evitar infraestrutura grande (Home Assistant, Streamer.bot ou serviços externos) apenas para essa função;
- horários exatos e transições serão calibrados quando a implementação começar.

## Performance

- sem vídeo de fundo permanente;
- sem dependências externas;
- animação simples da camada de personagem;
- chat e perspectiva executados separadamente pelo OBS;
- background do quarto é uma imagem estática.
