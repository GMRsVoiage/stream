# Nostalgia.exe — Starting Soon + BRB

**Status:** First implementation ready for OBS visual testing. These are new theme-native scenes; existing `scenes/starting.html` (AquaWave), gameplay frames, webcam scene, alert files and Buddy are unchanged.

Both Browser Sources are **1920×1080**, transparent over the **approved static Desktop World background** already used in OBS. Do not point OBS at GitHub `blob` URLs, which are GitHub's code viewer. Use local files with their neighboring CSS files (repo checkout) or publish under static hosting.

## Starting Soon

- `starting.html` imports `desktop-world.css` and `starting.css`.
- On page load: login (0–3.3s) → connection (3.3–7.7s) → portal (7.7–11.7s) → stays on **A LIVE JÁ VAI COMEÇAR**.
- CSS-only sequence: no live counters, event claims, video, permanent particle effects, JS or additional Browser Source.
- In OBS set the Browser Source to reload when scene becomes active if you want the login sequence on **every** entrance; leave this unchecked if you prefer not to restart it when returning to the scene.
- Put this source above the static background; music/audio remain separate OBS sources.

## BRB — cama​​da exclusiva da Voya

- O `brb.html` agora importa apenas `brb.css` + `brb.js` e permanece **100% transparente**.
- O quarto chibi aprovado é um **arquivo de imagem estático** em [`assets/backgrounds/desktop-world-brb-chibi.png`](../../../assets/backgrounds/desktop-world-brb-chibi.png), posicionado abaixo no OBS.
- O chat já existente deve ser uma **fonte de navegador separada**, não faz parte deste arquivo: posicione e dimensione livremente no OBS.
- Para dar perspectiva real ao chat, instale e configure separadamente um filtro compatível com **Corner Pin / quatro cantos**; simples redimensionamento e arraste do OBS não deformam individualmente os quatro vértices. Testar compatibilidade do filtro com sua versão do OBS antes de instalar.
- A arte final da Voya ainda não está presente. Enquanto isso, `brb.html` exibe **Buddy temporário** (`themes/nostalgia/scenes/assets/buddy-blue-solo.svg`) percorrendo um trajeto preliminar delimitado no chão. Em resposta ao teste no OBS, foi restaurado **um único Buddy azul clássico**, pequeno, com altura de **15,5% do canvas**. A rota permanece delimitada no tapete; validar a composição após atualizar. Passar `?sprite=CAMINHO_RELATIVO.png` substitui-o pela arte futura, mas **mantém o movimento dessa arte desativado** até calibrarmos proporções e colisões.
- O código anterior que desenhava outro quarto e outra moldura de chat foi preservado apenas para consulta em `themes/nostalgia/scenes/archive/brb-prototype-2026-10.html` e `brb-prototype-2026-10.css`.

### Calibração antes de liberar a caminhada

Abra o arquivo local **`brb-debug.html`** na fonte de navegador de 1920×1080 sobre a imagem chibi no OBS; esse arquivo já ativa o debug sem editar URL ou JS. Alternativamente, `brb.html?debug=1` funciona quando estiver servido via HTTP. A área verde marca o polígono **provisório e conservador** onde os pés da Voya poderiam caminhar; o círculo marca sua posição inicial. Envie um print para acertarmos os pontos no `brb.js`, evitando móveis e vazios. No print marcado pelo criador: **verde = chão caminhável**, **roxo = paisagem**, **amarelo = chat independente**. A nova zona foi estimada pela região verde com margem interna; o trajeto inicial ficou no lado esquerdo para evitar que o corpo da Voya oculte o chat. Calibrar o tamanho do sprite, obstáculos, perspectiva e possíveis oclusões só quando houver arte definitiva. O debug desenha polígono VERDE, caminho AMARELO e Buddy animado. No `brb.html` comum apenas o Buddy fica visível, sobre transparência total. A faixa roxa e a área do chat são regiões definidas na marcação do usuário, não telas que este HTML pinta.

Ordem de fontes do OBS, de cima para baixo:
1. Voya BRB — fonte HTML 1920×1080 (invisível enquanto o sprite não estiver pronto)
2. Chat real — fonte independente com tamanho e perspectiva definidos por você
3. Quarto chibi — fonte de imagem `desktop-world-brb-chibi.png`

Não adicionar uma janela de chat ou quarto CSS duplicados ao `brb.html`.

## Common

- Design is tuned for a **1920×1080 OBS canvas**, with CSS percentages only for the scene composition. No need to use separate CSS in OBS when loading HTML as a local file; CSS files must remain in the same directory.
- Both scenes use the same fictional Windows-era application styling. Existing assets and `NOSTALGIA_SPEC.md` remain authoritative, and aesthetic approval still depends on your OBS screenshots.
- Performance: lightweight HTML/CSS over static image, no background video, no requestAnimationFrame, no external dependencies.
- For animation reset, right click Starting Browser Source and **Refresh browser source**; if OBS does not re-run the startup when switching scenes, check **Refresh browser when scene becomes active** in its properties.
- Future BRB: replace temporary Voya slot with approved character artwork, add occasional idle/walking motion only if performance allows, and optionally display chat inside a separate MSN monitor when source placement is confirmed.
