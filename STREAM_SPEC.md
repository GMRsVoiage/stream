# STREAM_SPEC.md — GMRsVoiage

> Status: especificação funcional inicial da nova identidade da live.

## 1. Objetivo

A live deve usar componentes visuais modulares, leves e reutilizáveis no OBS.

Resolução de referência:

```text
1920 × 1080
```

A identidade é definida por `BRAND_SPEC.md`. As regras de trabalho para agentes estão em `AGENTS.md`.

## 2. Princípio de composição

Durante gameplay:

> o jogo é o conteúdo principal; branding ocupa as bordas e áreas funcionais.

A composição de referência é:

```text
┌─────────────────────────────────────┬───────────────┐
│          meta compacta              │    webcam     │
│                                     ├───────────────┤
│                                     │               │
│                                     │     chat      │
│             gameplay                │               │
│                                     │               │
│                                     │               │
│                                     │ decoração /   │
│                                     │ alertas temp. │
└─────────────────────────────────────┴───────────────┘
```

A coluna direita é intencional e funcional.

## 3. QR Code

O QR Code não deve permanecer fixo na cena principal.

Se voltar a ser usado, deve aparecer apenas:

- temporariamente;
- por comando;
- em intervalo controlado;
- durante cenas sem gameplay;
- quando houver uma ação específica.

A área anteriormente ocupada pelo QR deve favorecer webcam, chat ou respiro visual.

## 4. Webcam

A webcam deve ocupar a parte superior da coluna direita.

Direção:

- maior que a versão antiga;
- asset separado;
- moldura independente da captura;
- aparência Vaporwave clássica;
- poucos ornamentos;
- sem excesso de glow.

Estrutura OBS:

```text
webcam capture
      +
webcam overlay
```

## 5. Chat

O chat deve ficar abaixo da webcam e ser implementado preferencialmente em HTML/CSS/JS.

O visual deve misturar:

- janela Windows XP / early web;
- paleta Vaporwave;
- tipografia legível;
- comportamento moderno apenas onde necessário.

O chat deve parecer um aplicativo antigo dentro do universo GMRsVoiage.

### Arquitetura prevista

```text
Twitch / Streamer.bot / adapter
            ↓
       message data
            ↓
       chat renderer
            ↓
          HTML
            ↓
     shared CSS tokens
            ↓
     OBS Browser Source
```

A origem exata das mensagens pode mudar sem exigir a reescrita do visual.

Separar:

- camada de integração;
- modelo das mensagens;
- renderização;
- animação;
- tema visual.

### Mensagem

Cada mensagem deve suportar:

- nome;
- cor do usuário quando disponível;
- badges;
- texto;
- emotes;
- ação /me quando aplicável.

### Comportamento

- mensagens entram com animação curta;
- mensagens antigas desaparecem ou sobem;
- sem scrollbars visíveis;
- sem interação por mouse;
- nomes e texto devem continuar legíveis em 1080p;
- efeitos não podem competir com gameplay.

## 6. Meta / Goal

A meta deve ser mais compacta que a versão anterior.

Preferência:

- faixa fina no topo;
- texto curto;
- progresso simples;
- estética de barra de progresso Windows/early web reinterpretada;
- sem ocupar toda a largura sem necessidade.

Informação secundária, como prazo, deve ter hierarquia menor.

## 7. Alertas

Alertas devem ser temporários e parecer eventos do sistema.

Direções permitidas:

- follow → notificação;
- sub → janela de conclusão/instalação;
- donate → diálogo;
- raid → alerta maior;
- eventos engraçados → erro de sistema falso.

Depois do alerta, a cena deve voltar ao estado normal.

## 8. Background

O background deve ser um asset independente.

Para gameplay, evitar background pesado quando o jogo já ocupa a área principal.

Background completo é mais apropriado para:

- Starting;
- BRB;
- Ending;
- Just Chatting;
- cenas especiais.

## 9. Starting

Deve comunicar que a transmissão começará em breve sem excesso visual.

Elementos possíveis:

- cenário Vaporwave completo;
- marca GMRsVoiage;
- título principal;
- status simples;
- webcam opcional.

Evitar preencher toda a tela com partículas, chrome ou efeitos modernos.

## 10. BRB

Deve preservar a mesma identidade do Starting, mas com leitura imediata de pausa.

Elementos possíveis:

- "JÁ VOLTO";
- background completo;
- webcam opcional;
- pequenos elementos de sistema;
- animação discreta.

## 11. Ending

Deve encerrar a transmissão com composição limpa.

Elementos possíveis:

- "STREAM ENCERRADA";
- agradecimento;
- GMRsVoiage;
- redes sociais apenas se confirmadas;
- background Vaporwave completo.

Não inventar handles.

## 12. Just Chatting

A cena de conversa pode usar mais background e identidade visual do que gameplay.

Pode conter:

- webcam maior;
- chat mais evidente;
- background completo;
- widgets;
- elementos XP;
- decoração Vaporwave.

Ainda deve preservar espaço negativo.

## 13. Separação de responsabilidades

Usar OBS nativo para:

- gameplay;
- webcam;
- imagens;
- vídeos;
- media sources.

Usar Browser Source para:

- chat;
- alertas;
- metas;
- textos dinâmicos;
- widgets;
- interações.

## 14. Estrutura de assets desejada

Evoluir gradualmente para:

```text
assets/
├── backgrounds/
├── branding/
├── webcam/
├── statues/
├── palms/
├── grids/
├── checkerboards/
├── icons/
├── textures/
└── windows/
```

Não mover arquivos existentes sem necessidade apenas para cumprir esta estrutura de uma vez.

## 15. CSS

Tokens compartilhados devem viver em uma fonte comum.

Separar quando fizer sentido:

```text
css/
├── tokens.css
├── base.css
├── components.css
├── scenes.css
├── vaporwave.css
├── xp.css
└── aero.css
```

Não é obrigatório criar todos imediatamente.

## 16. Desempenho

Priorizar:

- CSS estático;
- transform;
- opacity;
- SVG leve;
- PNG/WebP quando adequado;
- WebM pequeno para animações localizadas.

Evitar:

- blur animado em tela inteira;
- backdrop-filter grande;
- WebGL sem necessidade;
- partículas em massa;
- loops JS de alta frequência;
- vídeos 1080p permanentes para elementos que poderiam ser estáticos.

## 17. Implementação do rebranding

### Fase 1 — especificação

- [x] AGENTS.md
- [x] BRAND_SPEC.md
- [x] STREAM_SPEC.md

### Fase 2 — fundação visual

- [ ] revisar tokens atuais;
- [ ] substituir defaults visuais de Rafaelmanu001 por GMRsVoiage;
- [ ] consolidar paleta;
- [ ] escolher tipografia;
- [ ] revisar logo/símbolo;
- [ ] criar biblioteca de assets base.

### Fase 3 — componentes

- [ ] background;
- [ ] webcam overlay;
- [ ] chat HTML/CSS;
- [ ] goal;
- [ ] alerts;
- [ ] branding/lower-third.

### Fase 4 — cenas

- [ ] gameplay;
- [ ] Just Chatting;
- [ ] Starting;
- [ ] BRB;
- [ ] Ending.

### Fase 5 — automações

- [ ] Streamer.bot;
- [ ] OBS WebSocket;
- [ ] eventos de Twitch;
- [ ] doações;
- [ ] Home Assistant;
- [ ] integrações por jogo quando fizer sentido.

## 18. Critério de conclusão

Um componente só está pronto quando:

- respeita `BRAND_SPEC.md`;
- é legível em 1080p;
- não atrapalha gameplay;
- está separado dos elementos que não precisam ser acoplados;
- não usa segredos hardcoded;
- permanece leve o suficiente para Browser Source/OBS;
- funciona com a marca GMRsVoiage.
