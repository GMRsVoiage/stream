# Nostalgia.exe Desktop World — imagens de cenário

Este diretório separa **imagens estáticas usadas como fontes de imagem no OBS** das molduras HTML/CSS. Assim, a imagem é renderizada pelo OBS e os elementos interativos continuam independentes.

## Cenário principal

- [`desktop-world-main.png`](./desktop-world-main.png): cópia lógica do arquivo já presente em [`scenes/base.png`](../../scenes/base.png). Os dois caminhos apontam para o mesmo conteúdo versionado, sem recompressão.
- Usar nas cenas Gameplay, Just Chatting e como cenário-base do Starting.
- Não esticar nem modificar o original para encaixar chat ou webcam: eles são fontes separadas.

## BRB — quarto chibi

- Nome reservado: **`desktop-world-brb-chibi.png`**.
- Imagem escolhida: **o quarto chibi com um grande painel/janela vazia à direita**, preparado para exibir o chat real, e espaço livre ao centro para inserir a Voya como camada independente.
- A imagem gerada na conversa **ainda precisa ser anexada a este repositório em forma de arquivo PNG**. Esta documentação não indica que o binário já foi enviado.
- Após subir o arquivo no caminho acima, usar como fonte estática na cena BRB; posicionar chat e Voya como fontes independentes no OBS, sem imprimir mensagens ou personagem permanentemente no background.

## Ordem de fontes recomendada

### Gameplay

1. Alertas e demais efeitos
2. Molduras HTML/CSS
3. Webcam, chat e captura do jogo
4. `desktop-world-main.png`

### BRB

1. Mensagens de pausa/molduras HTML-CSS (opcional, revisar a composição do `brb.html` existente antes de combinar)
2. Voya (quando aprovada e criada)
3. Chat real dentro do painel à direita
4. `desktop-world-brb-chibi.png`

Evitar sobrepor o cenário BRB novo ao ambiente ilustrado por CSS no `themes/nostalgia/scenes/brb.html` atual; a composição será ajustada após o PNG estar versionado.
