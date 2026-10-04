# Nostalgia.exe — tema ativo

A identidade visual aprovada está registrada em [NOSTALGIA_SPEC.md](../../NOSTALGIA_SPEC.md).

Este diretório contém o **tema principal em desenvolvimento e uso no OBS**. AquaWave permanece apenas como legado preservado; novas cenas e componentes devem seguir Nostalgia.exe salvo decisão explícita em contrário.

## Estado atual

A fundação já evoluiu para componentes e cenas operacionais:

- `css/tokens.css` — tokens de design compartilhados.
- `css/base.css` — base do tema.
- `assets/shared/` — assets realmente compartilhados.
- `config/theme.json` — configuração declarativa do tema.
- `preview.html` e `portal-preview.html` — prévias conceituais, não fontes obrigatórias do OBS.
- `transitions/` — Stinger Alt+Tab + abertura de aplicativo.
- `scenes/starting.html` — implementação atual do Starting Soon; a direção final aprovada agora é computador ligando → desktop → navegador/página com efeito CRT → abertura de programa → loop de espera.
- `scenes/brb.html` — camada transparente da Voya/Buddy para o BRB.
- `components/chat/` — adaptador alternativo de janela Messenger; o chat atualmente usado na live está documentado em [../../buddy/README.md](../../buddy/README.md).

Outras partes ativas vivem fora desta pasta quando são integrações/atalhos específicos de OBS:

- [Desktop World gameplay](../../scenes/nostalgia-desktop-world/README.md)
- [Nostalgia Cam](../../scenes/nostalgia-cam/README.md)
- [Chat Buddy / Streamlabs](../../buddy/README.md)
- [Alertas Full HD](../../alerts/fullscreen/README.md)

## Princípios de implementação

- OBS continua responsável por gameplay, webcam, áudio, transformações e filtros quando isso for mais barato do que reproduzir a mesma função no navegador.
- Browser Sources devem permanecer transparentes e leves quando funcionam apenas como molduras/camadas.
- O chat real e os alertas continuam sendo alimentados pelo provedor; não inventar eventos em prévias estáticas.
- Cenas do BRB, gameplay e chat podem reutilizar a mesma identidade visual, mas **não precisam compartilhar a mesma instância de fonte no OBS** quando filtros diferentes forem necessários.
- Credenciais de Twitch, OBS, Streamer.bot ou dispositivos físicos nunca devem ser versionadas.

## Visualizar localmente

Na raiz do repositório:

```sh
python -m http.server 8000
```

Páginas úteis:

- `http://localhost:8000/themes/nostalgia/preview.html`
- `http://localhost:8000/themes/nostalgia/portal-preview.html`
- `http://localhost:8000/themes/nostalgia/transitions/demo.html`

Teste da configuração:

```sh
node --test tests/config.test.mjs
```

A especificação é a fonte de verdade das decisões aprovadas; README descreve **estado de implementação e uso** e deve ser atualizado quando o OBS ou os componentes mudarem.


## Prioridades aprovadas a partir de 2026-10-04

1. Redesenhar o Starting Soon segundo a nova narrativa de inicialização do computador e loop final.
2. Implementar no BRB um ciclo de iluminação por horário com código simples e local, sem criar infraestrutura desnecessária.
3. Preparar futuramente uma folha técnica da Voya.exe para a arte manual: tamanhos, posições, áreas seguras, gestos e usos por cena.
4. Retomar Streamer.bot + OBS WebSocket depois desses acabamentos; essa integração está adiada, mas permanece na fila de curto/médio prazo e não no backlog.

Áudio, alertas Full HD e a base de performance atual do OBS estão considerados validados no estado corrente.
