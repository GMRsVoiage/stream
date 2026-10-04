# Nostalgia.exe — transição Alt+Tab + abertura de aplicativo

Esta transição faz a troca de cenas parecer uma troca entre programas antigos. O HTML é autônomo, sem assets externos, scripts de terceiros ou conexão com a Twitch.

## Estado atual

- animação determinística de aproximadamente **1,2 s**;
- ponto de troca recomendado no OBS: **600 ms**;
- versão genérica e variantes por aplicativo;
- sem áudio embutido;
- independente do Move Transition;
- a cena **Starting Soon já existe separadamente** em `themes/nostalgia/scenes/starting.html` e não é substituída por esta Stinger.

## Linha do tempo

- **0–380 ms:** desktop Nostalgia.exe + alternador Alt+Tab.
- **350–780 ms:** janela do próximo programa e barra de carregamento.
- **600 ms:** ponto de corte recomendado; a animação cobre a tela.
- **780–1200 ms:** interface desaparece e revela a nova cena.

## Destinos

| `?to=` | Aplicativo anunciado |
| --- | --- |
| `generic` | Next.exe |
| `messenger` | Messenger.exe |
| `broadcast` | Broadcast.exe |
| `away` | Away.exe |
| `portal` | Portal.exe |
| `logout` | Logout.exe |

Os rótulos são cenográficos. O OBS continua responsável pela troca real de cenas.

## Visualização local

Na raiz:

```sh
python -m http.server 8000
```

Abra:

- `http://localhost:8000/themes/nostalgia/transitions/demo.html`
- `http://localhost:8000/themes/nostalgia/transitions/app-switch.html`
- `http://localhost:8000/themes/nostalgia/transitions/app-switch.html?to=messenger`

Clique ou pressione **Espaço** para reproduzir novamente.

## Exportar WebM transparente

Requisitos: Python, Playwright/Chromium e FFmpeg com `libvpx-vp9`.

```sh
pip install playwright
python -m playwright install chromium
python themes/nostalgia/transitions/export_stinger.py --to generic --output app-switch-generic.webm
python themes/nostalgia/transitions/export_stinger.py --to messenger --output app-switch-messenger.webm
```

Padrão: 1920×1080, 30 fps, aproximadamente 1,23 s. Para teste rápido: `--size 1280x720`.

## Instalar no OBS

1. **Transições de cena → + → Stinger**.
2. Selecione o WebM exportado.
3. Configure ponto de transição por **Tempo = 600 ms**.
4. Teste entre as cenas reais.

A query `?to=` não faz o OBS detectar o destino. Para uma variante específica, exporte o WebM correspondente e configure-o no OBS.

## Limites

- não move cursor real;
- não troca cenas sozinha;
- não depende de Move Transition;
- não contém som por padrão;
- não renderiza gameplay ou webcam;
- os WebM exportados não precisam ser versionados no Git; o HTML/exportador continuam sendo a fonte.
