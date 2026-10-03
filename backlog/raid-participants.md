# Backlog — participantes de Raid e estilo chamada clássica

**Status:** conceito da Raid aprovado; identificação complementar de participantes fica em backlog. Não implementar nesta fase.

## Raid — escopo imediato
- Próximo alerta a construir: Raid inspirada em **chamada recebida do Skype clássico**, reinterpretada no Nostalgia.exe / Frutiger Aero.
- Mostrar nome do streamer que iniciou a raid e o total de espectadores informado pela Twitch/Streamlabs.
- Simular interface de chamada recebida, botão de atender e boas-vindas, sem afirmar conhecer a identidade de todos os espectadores.
- Após a Raid, a próxima prioridade escolhida pelo criador é **Starting Soon**.

## Backlog — contatos que aparecem após Raid
- Explorar segunda animação opcional estilo conferência do Skype mostrando usuários **que interagirem no chat após o início da Raid** (como contatos entrando em uma chamada).
- **Não rotular estes usuários como participantes confirmados da Raid**: a Twitch não disponibiliza uma lista individual oficial de todos os espectadores raidantes.
- A API/EventSub `channel.raid` informa broadcaster de origem/destino e campo `viewers`, mas não contém os nomes de cada espectador.
- A API Get Chatters consulta usuários conectados ao chat e não equivale à lista de espectadores; há atraso na atualização e possíveis bots/lurkers. Priorizar participação voluntária no chat, quando implementado.
- Antes da implementação: avaliar integração Streamer.bot/Events da Twitch, evitar sobreposição com widgets de chat já concluídos, limitar duração e quantidade de avatares para não sobrecarregar o OBS.

## Referências de viabilidade
- https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelraid
- https://dev.twitch.tv/docs/api/reference#get-chatters
- https://help.twitch.tv/s/article/understanding-viewer-count-vs-users-in-chat

**Decisão documentada em 2026-10-03.** Backlog aprovado não significa funcionalidade implementada.
