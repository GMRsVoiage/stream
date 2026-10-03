# Backlog — participantes de Raid e estilo chamada clássica

**Status:** conceito da Raid aprovado; identificação complementar de participantes fica em backlog. Não implementar nesta fase.

## Raid — escopo imediato
- **Exigência atualizada:** a Raid deverá reproduzir a **interface original do Skype antigo com fidelidade visual 1:1**, em vez de uma releitura genérica Frutiger Aero. Precisamos fixar uma versão histórica específica (por exemplo, Skype 5.x no Windows 7) e uma captura de referência da tela de chamada recebida antes de considerar o visual final aprovado.
- O alerta é renderizado sobre uma fonte transparente 1920×1080; o aplicativo pode ocupar uma janela localizada, e efeitos especiais adicionais podem percorrer todo o quadro. Não exigir interação com webcam.
- Mostrar nome do streamer que iniciou a raid e o total de espectadores informado pela Twitch/Streamlabs.
- Reproduzir geometria, tipografia, botões, barras, ícones, cores, avisos e sequência visual da **versão histórica selecionada**. Adaptar apenas os dados dinâmicos do evento (nome do streamer e contagem), sem afirmar conhecer a identidade dos espectadores.
- A Raid fullscreen atual em `alerts/fullscreen/raid` é um **protótipo inspirado no Skype**, não uma reprodução 1:1. Não tratar a versão atual como entrega final.
- **Som aprovado:** toque clássico de chamada recebida do Skype (o criador afirmou possuir autorização para usar esses materiais). Configurar o áudio no Streamlabs; evitar reprodução simultânea pelo código para não duplicar o toque.
- Após a Raid, a próxima prioridade escolhida pelo criador é **Starting Soon**.


## Proposta de fluxo visual — notificação → chamada coletiva

**Estado:** proposta recebida do criador em 2026-10-03; documentada, aguardando protótipo e teste no OBS para aprovação visual. Referência de época: Skype 5.x/6.x no Windows 7, período de Minecraft com Hamachi.

1. **0–1 s:** aparece uma notificação de Skype no **canto inferior direito** do canvas transparente 1920×1080, informando **“Chamada em grupo recebida”** e o nome do streamer.
2. **1–2 s:** **cursor fictício** se move e clica automaticamente na notificação. Não deve controlar o mouse real do computador.
3. **2–6 s:** a notificação dá lugar à **janela de chamada coletiva**, visualmente fiel à versão histórica de Skype aprovada, com botões clássicos de atender/recusar. Texto dinâmico: **“{name} entrou na chamada com {count} pessoas”**. A API fornece nome/quantidade, não identidades individuais.
4. **6–9 s:** o botão verde é acionado na animação, o toque para, aparece boas-vindas e a janela encerra a animação.

**Sincronia de áudio:** se quisermos que o toque pare exatamente ao atender, avaliar hospedagem de áudio próprio (controlado pelo widget) e desativar toque duplicado em Sounds do Streamlabs, respeitando eventuais restrições de autoplay do navegador. Alternativa mais simples: efeito sonoro pré-editado com duração fixa e transição temporal. Não prometer interrupção de áudio fornecido exclusivamente pelo Streamlabs sem teste.

**Fidelidade 1:1:** antes do acabamento final, escolher uma **captura concreta** da tela de chamada/notificação na versão de Skype 5.x ou 6.x para Windows 7; não misturar UI de versões diferentes. A versão fullscreen já no repositório é apenas protótipo e será substituída após validação.

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
