# Nostalgia.exe — MSN Buddies para Streamlabs

**Status:** esta é a implementação de chat atualmente usada como base na live.

Cada mensagem recebe um Buddy inspirado na linguagem dos mensageiros dos anos 2000 e um balão transparente/leve. O Streamlabs continua responsável por entregar mensagens, badges e emotes; o JavaScript desta pasta só classifica a categoria visual.

## Assets

| Tipo | Normal | Ativo |
| --- | --- | --- |
| Viewer | [viewer_idle.svg](viewer_idle.svg) | [viewer_talk.svg](viewer_talk.svg) |
| VIP | [vip_idle.svg](vip_idle.svg) | [vip_talk.svg](vip_talk.svg) |
| Subscriber | [sub_idle.svg](sub_idle.svg) | [sub_talk.svg](sub_talk.svg) |
| Founder | [founder_idle.svg](founder_idle.svg) | [founder_talk.svg](founder_talk.svg) |
| Artist | [artist_idle.svg](artist_idle.svg) | [artist_talk.svg](artist_talk.svg) |
| Moderator | [mod_idle.svg](mod_idle.svg) | [mod_talk.svg](mod_talk.svg) |
| Broadcaster | [broadcaster_idle.svg](broadcaster_idle.svg) | [broadcaster_talk.svg](broadcaster_talk.svg) |

## Instalação no Streamlabs

Em **Chat Box → Custom HTML/CSS/JS**, use:

- [streamlabs.html](streamlabs.html)
- [streamlabs.css](streamlabs.css)
- [streamlabs.js](streamlabs.js)

O JavaScript é necessário para a classificação das categorias.

Prioridade:

**broadcaster > mod > artist > founder > sub > VIP > viewer**

Quando os dados de badges chegam depois da criação inicial da mensagem, o script pode atualizar o Buddy. Se não houver informação suficiente, a categoria cai para viewer.

## OBS — configuração atual

### Gameplay

Use uma Browser Source independente:

- URL do Chat Box do Streamlabs;
- tamanho aproximado **407×620**;
- fundo transparente;
- mensagens alinhadas de baixo para cima;
- **sem Corner Pin**.

No Desktop World, a região externa do chat fica aproximadamente em **X 1486 / Y 292 / 407×620**.

### BRB

O quarto do BRB precisa deformar o chat para combinar com a perspectiva da arte. Por isso:

- use outra fonte/instância do chat;
- aplique o Corner Pin somente nessa fonte;
- a configuração atual usa **obs-shaderfilter 2.6.0** com **User-defined shader**;
- mantenha o chat, o quarto e a camada da Voya/Buddy como fontes separadas.

Não reutilize no gameplay uma fonte que já carrega os filtros do BRB.

## Diagnóstico

Para inspecionar eventos no navegador do widget, temporariamente:

```js
document.addEventListener("onEventReceived", e => {
  if (e.detail?.listener === "message") console.log("CHAT EVENT", e.detail);
});
```

Não publique dumps completos de eventos sem remover identificadores e outras informações pessoais.

## Variante alternativa

Existe também uma apresentação em formato de janela Messenger completa em [`themes/nostalgia/components/chat/`](../themes/nostalgia/components/chat/README.md). Ela é uma alternativa visual e não deve ser confundida com este chat Buddy atualmente usado no OBS.
