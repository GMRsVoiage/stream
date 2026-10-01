# Nostalgia.exe — MSN buddies para o Streamlabs

Avatares como **silhuetas duplas clássicas do MSN**. SVG transparente 128×128, sem pessoas, rostos, palavras ou enfeites; entre `idle` e `talk` muda apenas a intensidade do brilho externo. Funciona sem fontes externas e permanece nítido em 52–120 px.

| Categoria | Normal | Ativo |
| --- | --- | --- |
| Viewer | [viewer_idle.svg](viewer_idle.svg) | [viewer_talk.svg](viewer_talk.svg) |
| VIP | [vip_idle.svg](vip_idle.svg) | [vip_talk.svg](vip_talk.svg) |
| Subscriber | [sub_idle.svg](sub_idle.svg) | [sub_talk.svg](sub_talk.svg) |
| Founder | [founder_idle.svg](founder_idle.svg) | [founder_talk.svg](founder_talk.svg) |
| Artist | [artist_idle.svg](artist_idle.svg) | [artist_talk.svg](artist_talk.svg) |
| Moderator | [mod_idle.svg](mod_idle.svg) | [mod_talk.svg](mod_talk.svg) |
| Broadcaster | [broadcaster_idle.svg](broadcaster_idle.svg) | [broadcaster_talk.svg](broadcaster_talk.svg) |

Cores distintas: viewer azul/verde MSN; VIP roxo; sub azul/dourado; founder bronze/dourado; artista lilás/turquesa; mod verde; broadcaster vermelho/rosa.

## Integração

Em **Streamlabs > Chat Box > Custom HTML** copie o conteúdo de cada arquivo na aba correspondente:
- [streamlabs.html](streamlabs.html) → HTML
- [streamlabs.css](streamlabs.css) → CSS
- [streamlabs.js](streamlabs.js) → JS

Os arquivos SVG são públicos em `https://raw.githubusercontent.com/GMRsVoiage/stream/main/buddy/{role}_{state}.svg`; o JS já contém a base correta. Cada mensagem exibe seu próprio buddy ao lado do balão Aero transparente com fonte Trebuchet MS.

### Detecção de insígnias

Prioridade, se houver múltiplas insígnias: **broadcaster > moderador > artista > founder > sub > VIP > viewer**. Twitch Artist pode chegar como `artist`, `artist-badge` ou `artist_badge`; o código contempla essas variantes. Se as informações faltarem no evento do Streamlabs, há uma tentativa de identificação pelos elementos visíveis da insígnia e depois fallback para viewer.

**Validação pendente:** testar com mensagens reais de cada categoria no Streamlabs/OBS porque o formato dos eventos e das badges pode variar conforme a configuração. `SVG` precisa carregar no Chromium usado pela fonte de navegador. Staff, Partner, Turbo e Prime são badges de conta, não papéis específicos deste canal, e permanecem no visual viewer (exceto quando acumularem um papel reconhecido).
