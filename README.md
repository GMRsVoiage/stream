# GMRsVoiage Stream

Overlays, cenas e peças visuais da live **GMRsVoiage**. O tema ativo é **Nostalgia.exe — A internet que nunca existiu**. O protótipo anterior **AquaWave** permanece preservado como legado e não é mais a direção principal de desenvolvimento.

A base continua propositalmente leve: **HTML + CSS + SVG + JavaScript mínimo**, sem framework obrigatório. Gameplay, webcam e áudio permanecem fontes nativas do OBS sempre que isso reduz custo e complexidade.

## Estado atual — 2026-10-04

- **Gameplay / Desktop World:** layout horizontal 1920×1080 implementado e já ajustado no OBS. Documentação: [scenes/nostalgia-desktop-world](./scenes/nostalgia-desktop-world/README.md).
- **Webcam:** cena OBS reutilizável `WEBCAM` com moldura Nostalgia Cam e máscara opcional para cantos arredondados. Documentação: [scenes/nostalgia-cam](./scenes/nostalgia-cam/README.md).
- **Chat:** integração atual usa o Chat Box do Streamlabs com Buddies por categoria e balões transparentes. Documentação: [buddy](./buddy/README.md). O adaptador de janela Messenger em `themes/nostalgia/components/chat/` permanece como alternativa.
- **BRB:** quarto chibi estático + chat real como fonte independente com perspectiva no OBS + camada transparente da futura Voya.exe. O próximo refinamento aprovado é um ciclo simples de iluminação por horário, mantendo o código pequeno e funcional. Documentação: [themes/nostalgia/scenes](./themes/nostalgia/scenes/README.md).
- **Starting Soon:** a implementação atual login → conexão → portal continua versionada, mas foi **substituída como direção final**. O redesign aprovado passa por computador ligando → desktop → navegador/página com tratamento CRT → abertura de um programa → estado final em loop; esse loop será a deixa para trocar manualmente para a cena da live.
- **Alertas Full HD:** Follow, Sub, Doação e Raid em 1920×1080 foram validados no Streamlabs/OBS e estão considerados corretos no estado atual. Documentação: [alerts/fullscreen](./alerts/fullscreen/README.md).
- **Áudio:** configuração atual considerada correta/consolidada; gain staging fino continua podendo ser revisitado sem bloquear o restante do projeto.
- **Transições:** Stinger Alt+Tab + abertura de aplicativo implementada, com corte recomendado em 600 ms. Documentação: [themes/nostalgia/transitions](./themes/nostalgia/transitions/README.md).
- **Voya.exe:** conceito e regras estão aprovados em [NOSTALGIA_SPEC.md](./NOSTALGIA_SPEC.md). A arte final aguardará desenho manual; antes da integração final será preparada uma folha técnica com tamanhos, posições, áreas seguras e gestos necessários.
- **Automações:** Streamer.bot + OBS WebSocket continuam planejados para uma fase técnica próxima. Foram adiados por prioridade, **não enviados ao backlog**.

## Referência atual do OBS

Canvas principal: **1920×1080**.

Na configuração atual da gameplay, a captura foi ajustada aproximadamente para **X 242 / Y 161 / 1185×667**, com centro em **X 834,5 / Y 494,5**. O HTML do Desktop World usa como referência nominal o interior 16:9 em torno de **X 243 / Y 160 / 1184×666**; pequenas diferenças de 1 px podem ocorrer pelo transform do OBS.

O chat da gameplay é uma fonte independente de aproximadamente **407×620**, posicionada na região direita do layout e **sem Corner Pin**. O chat do BRB deve ser outra fonte/instância, pois recebe deformação de perspectiva própria.

Existe também um efeito de **Ambilight dinâmico feito no próprio OBS**, usando uma cópia/reuso visual da gameplay atrás da captura principal, centralizada no mesmo ponto, com `obs-shaderfilter` (box blur) + correção de cor. Esse efeito é configuração de OBS, não código obrigatório do repositório.

### Validação de performance

Snapshot de 2026-10-04 com a composição atual ativa:

- CPU OBS: **4,2%**
- tempo médio de render: **1,2 ms**
- quadros perdidos por atraso de renderização: **0,1%**
- quadros ignorados por atraso de codificação: **0,00%**
- perda de rede observada: **0,1%**
- saída em aproximadamente **5950 kb/s**

Esse teste foi aceito como suficiente para considerar a base visual atual — incluindo Ambilight/shaders — estável. Reabrir otimização apenas se jogos/cenas futuras aumentarem esses indicadores de forma perceptível.

## Estrutura principal

- `NOSTALGIA_SPEC.md` — fonte de verdade das decisões visuais e arquiteturais aprovadas.
- `core/` — infraestrutura neutra e configuração compartilhável.
- `themes/nostalgia/` — tema ativo, cenas, componentes e transições.
- `scenes/nostalgia-desktop-world/` — moldura/layout principal de gameplay.
- `scenes/nostalgia-cam/` — moldura reutilizável da webcam.
- `buddy/` — Chat Box ativo com Buddies por categoria.
- `alerts/fullscreen/` — alertas Full HD.
- `backlog/` — ideias adiadas ou ainda não aprovadas como implementação atual.
- `scenes/`, `css/`, `js/` e partes antigas — legado AquaWave e arquivos históricos ainda preservados.

## Desenvolvimento local

O projeto não exige build para as páginas estáticas. Na raiz:

```sh
python -m http.server 8000
```

A prévia base do tema fica em:

```text
http://localhost:8000/themes/nostalgia/preview.html
```

Testes de configuração:

```sh
node --test tests/config.test.mjs
```

Não aponte o OBS para URLs `github.com/.../blob/...`: essas páginas são o visualizador de código do GitHub. Use arquivo local ou uma hospedagem estática.

## Direção de desempenho

Evitar por padrão:

- frameworks de frontend quando HTML/CSS simples resolve;
- WebGL/Three.js;
- vídeos 1920×1080 permanentes;
- GIFs;
- blur animado em tela inteira dentro de Browser Source;
- `backdrop-filter` em grandes áreas;
- loops JavaScript contínuos sem necessidade.

Efeitos de gameplay que o OBS já executa bem — como blur/ambiente dinâmico — devem continuar no OBS em vez de serem reimplementados em HTML.

## Legado AquaWave

AquaWave está arquivado conceitualmente e preservado para consulta/recuperação. Não tratar `scenes/main.html`, `scenes/starting.html`, `css/scenes.css` e arquivos relacionados como a implementação atual do Nostalgia.exe.
