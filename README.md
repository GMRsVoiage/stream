# GMRsVoiage Stream

Sistema leve de overlays e peças visuais para o canal **twitch.tv/rafaelmanu001**, baseado no **GMRsVoiage AquaWave Visual System**.

A base usa **HTML + CSS + SVG**, sem frameworks e sem JavaScript obrigatório. A ideia é manter as fontes de navegador do OBS leves, editáveis e reaproveitáveis também para banners e outras artes.

## Protótipo atual

- `scenes/main.html` — overlay principal 1920×1080 com fundo transparente.
- `scenes/webcam.html` — moldura de webcam 1920×1080 com fundo transparente.
- `scenes/starting.html` — tela Starting Soon 1920×1080.
- `render/twitch-banner.html` — composição de banner 1200×480.
- `render/profile-icon.html` — composição de ícone 512×512.
- `index.html` — página simples para navegar entre os protótipos.
- `css/tokens.css` — tokens do AquaWave.
- `css/components.css` — componentes reutilizáveis.
- `css/scenes.css` — composição visual das cenas.
- `assets/*.svg` — elementos vetoriais leves.

## Testar no navegador

Clone o repositório e abra `index.html`. Cada card leva para uma cena separada.

Para uma visualização mais consistente, também é possível servir a pasta com qualquer servidor HTTP local simples. O projeto não exige build.

## Usar no OBS

1. Adicione uma **Fonte de Navegador**.
2. Marque **Arquivo local**.
3. Selecione, por exemplo, `scenes/main.html`.
4. Use **1920 × 1080**.
5. Para os elementos animados deste protótipo, **30 FPS já é suficiente**.
6. Ative **Desligar a fonte quando não estiver visível** quando a cena não precisar continuar carregada em segundo plano.
7. Evite duplicar várias Browser Sources idênticas sem necessidade; prefira reutilizar cenas/fontes quando fizer sentido.

As páginas `main.html` e `webcam.html` têm fundo transparente e foram pensadas para ficar sobre o jogo/câmera.

## Direção de desempenho

O projeto evita por padrão:

- frameworks de frontend;
- WebGL/Three.js;
- partículas em JavaScript;
- vídeos 1920×1080 permanentes;
- GIFs;
- blur animado em tela inteira;
- `backdrop-filter` em grandes áreas;
- animações contínuas que alterem layout.

As animações existentes usam principalmente `transform`, e os elementos decorativos são SVG/CSS.

Quando uma animação mais complexa fizer sentido, a ideia é usar **WebM pequeno e localizado**, em vez de transformar a cena inteira em vídeo.

## Personalização rápida

As cores principais ficam em `css/tokens.css`:

```css
--primary: #35e7ff;
--secondary: #7447ff;
--accent: #ff3ed2;
```

A meta da cena principal ainda é conteúdo de demonstração e pode ser alterada diretamente em `scenes/main.html`.

## Próximas etapas

Este primeiro commit serve para testar:

- linguagem visual;
- posicionamento;
- legibilidade;
- peso no OBS;
- quantidade de elementos decorativos;
- proporções de webcam e HUD.

Depois dos testes, as cenas podem ser refinadas e receber integração dinâmica de metas, alertas, seguidores, subs e outros dados.
