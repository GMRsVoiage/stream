# Nostalgia.exe Desktop World — OBS overlay v1.2

**Status:** layout de gameplay ajustado e funcionando no OBS. A webcam é uma cena aninhada independente e não faz parte desta moldura HTML.

A cena é uma camada transparente **1920×1080** para elementos de interface. Gameplay, webcam, chat e alertas permanecem fontes separadas no OBS.

## Arquivos

- `overlay.html` + `overlay.css` — moldura da área de gameplay e da região de chat.
- O background do Desktop World permanece como fonte de imagem separada no OBS.
- A webcam usa [../nostalgia-cam/README.md](../nostalgia-cam/README.md).
- O chat ativo usa [../../buddy/README.md](../../buddy/README.md).

## Ordem recomendada de fontes

De baixo para cima:

1. Background estático do Desktop World.
2. Camada opcional de ambiente/Ambilight da gameplay.
3. Captura de jogo/monitor principal.
4. Cena aninhada `WEBCAM`.
5. Chat Browser Source.
6. `overlay.html` em Browser Source 1920×1080.
7. Cena/fonte compartilhada de alertas Full HD.

A camada HTML contém apenas decoração; não renderiza o jogo, webcam ou mensagens.

## Coordenadas de referência

Canvas: **1920×1080**.

| Região | X | Y | Largura | Altura |
|---|---:|---:|---:|---:|
| Gameplay — frame externo | 240 | 129 | 1190 | 720 |
| Gameplay — referência interna 16:9 | 243 | 160 | 1184 | 666 |
| Chat — frame externo | 1486 | 292 | 407 | 620 |

### Transform atual da gameplay no OBS

O ajuste manual mais recente ficou aproximadamente em:

- posição: **X 242 / Y 161**
- tamanho: **1185 × 667**
- centro geométrico: **X 834,5 / Y 494,5**

Esse transform difere 1 px da referência nominal do HTML por arredondamento/ajuste visual e é aceitável. Para centralizar uma camada adicional exatamente sobre a gameplay, use o mesmo centro **834,5 / 494,5**.

Não use o frame externo 1190×720 como tamanho da captura: ele inclui titlebar/rodapé.

## Chat da gameplay

A fonte usada na gameplay é independente do BRB:

- Browser Source aproximadamente **407×620**;
- posicionada na região do frame de chat;
- fundo transparente;
- **sem Corner Pin/perspectiva**.

O chat do BRB deve ser criado/reutilizado como outra instância quando precisar de filtros diferentes. Não aplicar o Corner Pin do BRB nesta fonte da gameplay.

## Ambilight dinâmico no OBS

A gameplay atualmente pode usar uma camada de ambiente feita no próprio OBS:

- reutilizar/duplicar visualmente a gameplay atrás da captura principal;
- manter o mesmo centro **834,5 / 494,5**;
- expandir a camada para além das bordas;
- aplicar `obs-shaderfilter` com `box-blur.shader`;
- complementar com **Correção de cor** para reduzir opacidade/brilho e controlar saturação.

A intenção é fazer o entorno acompanhar as cores do jogo em tempo real, evitando um background claro fixo ao redor de cenas muito escuras.

Esse Ambilight é **configuração de OBS** e não faz parte de `overlay.html`. O valor exato de expansão pode ser ajustado localmente sem alterar o layout HTML.

## Webcam

A webcam não possui mais moldura dentro deste overlay. Use a cena reutilizável `WEBCAM` com o Nostalgia Cam e redimensione a cena aninhada inteira.

## Personalização

As coordenadas do frame continuam definidas no início de `overlay.css`:

- `--game-x/y/w/h`
- `--chat-x/y/w/h`

Esses valores descrevem a moldura do Desktop World; transformações finas das fontes reais continuam no OBS.

## Performance

Manter gameplay e câmera como fontes nativas. O HTML deve continuar apenas com UI estática/leve. Blur dinâmico e efeitos dependentes da imagem do jogo ficam no OBS, onde podem ser controlados e desativados sem modificar o overlay.
