# Nostalgia.exe — Starting Soon + BRB

**Status em 2026-10-04:** Starting Soon e BRB estão implementados como cenas do Nostalgia.exe. O BRB já usa o quarto chibi real no OBS e o chat foi separado para receber perspectiva própria. A arte final da Voya.exe ainda não está no repositório.

As cenas são pensadas para canvas **1920×1080**.

## Starting Soon

Arquivo principal: `starting.html`.

Sequência atual:

1. login — 0 a ~3,3 s;
2. conexão — ~3,3 a 7,7 s;
3. portal — ~7,7 a 11,7 s;
4. estado permanente: **A LIVE JÁ VAI COMEÇAR**.

A animação é CSS-only e permanece leve. O background é uma fonte separada do OBS.

No Browser Source:

- 1920×1080;
- arquivo local ou hospedagem estática;
- habilitar **Atualizar navegador quando a cena se tornar ativa** apenas se quiser reiniciar a sequência em toda entrada.

Música/áudio continuam fontes independentes do OBS.

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

É possível passar `?sprite=CAMINHO_RELATIVO.png` para testar uma arte futura; isso não transforma automaticamente o placeholder em implementação final da mascote.

## Ordem de fontes do BRB

De cima para baixo:

1. Voya/Buddy — `brb.html`, 1920×1080.
2. Chat real — fonte independente com Corner Pin.
3. Quarto chibi — imagem estática.

Não adicionar uma segunda janela CSS de chat nem outro quarto ao `brb.html`.

## Ideias ainda não implementadas

O ciclo visual de horário do quarto — amanhecer, dia, pôr do sol e noite — foi discutido como evolução interessante, mas **ainda não é parte da implementação versionada**. Se for adotado, preferir filtros/camadas do OBS sobre o background do quarto sem alterar chat e Voya.

## Performance

- sem vídeo de fundo permanente;
- sem dependências externas;
- animação simples da camada de personagem;
- chat e perspectiva executados separadamente pelo OBS;
- background do quarto é uma imagem estática.
