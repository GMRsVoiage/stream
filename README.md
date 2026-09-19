# GMRsVoiage Stream

Sistema leve de overlays e peças visuais para o canal **twitch.tv/rafaelmanu001**, baseado no **GMRsVoiage AquaWave Visual System**.

A base usa **HTML + CSS + SVG** e JavaScript mínimo, sem frameworks. A ideia é manter as fontes de navegador do OBS leves, editáveis e reaproveitáveis também para banners e outras artes.

## Protótipo atual

- `scenes/main.html` — overlay principal Dark Synthwave 1920×1080.
- `scenes/webcam.html` — moldura responsiva com neon percorrendo exatamente a borda.
- `scenes/starting.html` — tela Starting Soon animada 1920×1080.
- `render/twitch-banner.html` — composição de banner 1200×480.
- `render/profile-icon.html` — base de ícone 512×512 com o sol Synthwave.
- `js/scene-config.js` — configuração leve para nomes/status/jogo variáveis.
- `css/tokens.css` — tokens do AquaWave.
- `css/components.css` — componentes reutilizáveis.
- `css/scenes.css` — composição visual e animações.
- `assets/*.svg` — elementos vetoriais leves.

## Testar no navegador

Clone o repositório e abra `index.html`.

Para uma visualização mais consistente, também é possível servir a pasta com qualquer servidor HTTP local simples. O projeto não exige build.

## Usar no OBS

1. Adicione uma **Fonte de Navegador**.
2. Marque **Arquivo local**.
3. Selecione a cena desejada.
4. Para `main.html` e `starting.html`, use **1920 × 1080**.
5. Para `webcam.html`, use diretamente a resolução da câmera, por exemplo **1280 × 720** ou **640 × 360**.
6. **30 FPS** é suficiente para as animações atuais.
7. Ative **Desligar a fonte quando não estiver visível** quando fizer sentido.

## Valores variáveis e futuras automações

As cenas carregam `js/scene-config.js`. Ele já deixa três valores prontos para automações:

- `name` — nome exibido.
- `game` — jogo/perfil atual.
- `status` — estado da transmissão.

Exemplo ao abrir por URL:

```text
webcam.html?name=Rafaelmanu001&game=CS2&status=AO%20VIVO
```

Também é possível alterar os valores em runtime:

```js
AquaWave.set({
  name: "Rafaelmanu001",
  game: "Counter-Strike 2",
  status: "RANQUEADA"
});
```

Isso é uma base para, futuramente, OBS WebSocket, scripts locais ou automações por jogo trocarem textos e perfis de cena sem reconstruir o overlay.

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

As animações usam principalmente `transform` e `opacity`.

Quando uma animação mais complexa fizer sentido, a ideia é usar **WebM pequeno e localizado**, em vez de transformar a cena inteira em vídeo.
