# Nostalgia.exe — MSN buddies para Streamlabs

Avatares com silhuetas clássicas do MSN, em SVG transparente 128×128.

| Tipo | Normal | Ativo |
| --- | --- | --- |
| Viewer | [viewer_idle.svg](viewer_idle.svg) | [viewer_talk.svg](viewer_talk.svg) |
| VIP | [vip_idle.svg](vip_idle.svg) | [vip_talk.svg](vip_talk.svg) |
| Subscriber | [sub_idle.svg](sub_idle.svg) | [sub_talk.svg](sub_talk.svg) |
| Founder | [founder_idle.svg](founder_idle.svg) | [founder_talk.svg](founder_talk.svg) |
| Artist | [artist_idle.svg](artist_idle.svg) | [artist_talk.svg](artist_talk.svg) |
| Moderator | [mod_idle.svg](mod_idle.svg) | [mod_talk.svg](mod_talk.svg) |
| Broadcaster | [broadcaster_idle.svg](broadcaster_idle.svg) | [broadcaster_talk.svg](broadcaster_talk.svg) |

## Como instalar

Substitua o conteúdo de cada aba em **Streamlabs > Chat Box > Custom HTML** pelos respectivos arquivos:
- [streamlabs.html](streamlabs.html)
- [streamlabs.css](streamlabs.css)
- [streamlabs.js](streamlabs.js)

A aba JS é essencial para identificar as categorias. Salve as três abas e atualize o cache do navegador no OBS para recarregar a versão nova.

### Reconhecimento das categorias

Prioridade: **broadcaster > mod > artist > founder > sub > VIP > viewer**.

A versão atual corrige um problema da anterior: o avatar era frequentemente marcado como viewer antes da chegada das badges, e o código deixava de verificá-las. Agora, ele pode ser atualizado quando o Streamlabs preencher as badges ou quando os metadados do evento chegarem. Há identificação adicional pelo texto visível das badges e pelo nome do dono do canal.

Se não houver dados nem identificação legível nas badges, usa viewer. A aparência real ainda precisa ser testada com mensagens das categorias desejadas no Streamlabs. Não desative as badges no widget durante os testes.

Para diagnóstico no navegador do widget, cole temporariamente no console:
```js
document.addEventListener("onEventReceived", e => {
  if (e.detail?.listener === "message") console.log("CHAT EVENT", e.detail);
});
```
Não publique capturas completas de eventos sem ocultar identificadores ou outras informações pessoais.
