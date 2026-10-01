# Nostalgia.exe — transição Alt+Tab + abertura de aplicativo

Esta transição faz a troca de cenas parecer uma troca entre programas antigos.
O HTML é **autônomo**, sem assets externos, scripts de terceiros ou conexão com a Twitch.

## Como funciona

- **0–380 ms:** aparece o desktop Nostalgia.exe e o alternador Alt+Tab.
- **350–780 ms:** inicia a janela do próximo programa e avança a barra de carregamento.
- **600 ms:** ponto de troca recomendado para a Stinger do OBS. A animação cobre totalmente a tela.
- **780–1200 ms:** a interface desaparece e revela a nova cena.

A versão **genérica** pode ser usada entre qualquer par de cenas. As variantes
não leem automaticamente a cena de destino do OBS; são arquivos separados caso
você configure uma Stinger diferente para um grupo de cenas.

| Destino (`?to=`) | Aplicativo anunciado |
| --- | --- |
| `generic` | Next.exe |
| `messenger` | Messenger.exe |
| `broadcast` | Broadcast.exe |
| `away` | Away.exe |
| `portal` | Portal.exe |
| `logout` | Logout.exe |

Esses são rótulos cenográficos, não programas reais. O som está desligado de
propósito: podemos adicionar efeitos próprios, sem depender de arquivos do MSN
ou do Windows.

## Visualizar no navegador

Com um servidor HTTP local na raiz do repositório:

```sh
python -m http.server 8000
```

Visite [transição genérica](http://localhost:8000/themes/nostalgia/transitions/app-switch.html)
ou [abertura do mensageiro](http://localhost:8000/themes/nostalgia/transitions/app-switch.html?to=messenger).
Clique ou pressione **Espaço** para reproduzir novamente.

A página é transparente fora da transição. Ela serve como **fonte para exportação**,
não como troca automática de cenas do OBS.

## Gerar vídeos transparentes WebM

Requisitos: Python, Playwright com Chromium e FFmpeg com suporte a `libvpx-vp9`.

```sh
pip install playwright
python -m playwright install chromium
python themes/nostalgia/transitions/export_stinger.py --to generic --output app-switch-generic.webm
python themes/nostalgia/transitions/export_stinger.py --to messenger --output app-switch-messenger.webm
```

O exportador utiliza a **mesma animação HTML**, capturando cada quadro sem fundo
e codificando VP9 com canal alfa. Por padrão os vídeos têm **1920×1080 a 30 fps**,
cerca de 1,23 s (último quadro completamente transparente).
Para testes rápidos: `--size 1280x720`.

## Instalar no OBS

1. Abra **Transições de cena** e clique em **+ → Stinger**.
2. Escolha o vídeo `app-switch-generic.webm`.
3. Defina o ponto de transição como **600 ms** (tipo de ponto: Tempo).
4. Mantenha a duração original do vídeo e teste entre Gameplay e Just Chatting.

A opção `?to=messenger` **não faz o OBS identificar o destino automaticamente**:
exporte seu próprio WebM de destino e configure-o quando quiser uma transição
específica. Não altere o arquivo de vídeo em `app-switch.html` esperando que
o OBS recarregue uma Stinger existente — exporte de novo.

## Limites e integração futura

- Não requer ou interfere com o plugin Move Transition.
- O próprio OBS continua controlando gameplay, webcam e fontes; a Stinger só
  **encobre brevemente** o momento da troca.
- O modo `Starting` já possui uma narrativa login → conexão → portal aprovada:
  a introdução completa será desenvolvida separadamente. Esta Stinger não
  substitui a cena Starting.
- A versão atual evita partículas e recursos pesados e não contém som.
- Não há vídeo pronto versionado no Git nesta fase; os exports são gerados
  a partir dos arquivos-fonte para não inflar o repositório.
