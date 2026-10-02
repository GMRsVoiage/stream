# Follow — Nostalgia.exe / Frutiger Aero

**Status:** versão clara Aero criada para teste visual no Streamlabs; aprovação final e funcionamento no OBS ainda dependem da validação do criador.

## Decisões registradas (2026-10-02)

- Chat MSN já concluído: **não alterar**.
- Follow = **novo contato online** em janela de mensageiro antigo, com forte referência ao visual Windows Live Messenger/Skype da época; manter assinatura visual GMRsVoiage.
- A versão anterior em azul escuro/roxo não foi a preferida. Priorizar a **versão clara Frutiger Aero** com vidro azul-celeste, reflexos suaves, branco leitoso e acentos lilás discretos, sem exagerar nos efeitos.
- Buddy estático original do projeto à esquerda (arquivo `buddy/viewer_idle.svg`).
- **Não** buscar avatar da Twitch por enquanto; integração/API/Worker permanece no backlog.
- Notificação compacta, nome legível, nenhum texto duplicado; paleta legível sobre fundo Vaporwave do OBS.

## Instalação

Na configuração **Streamlabs > Alert Box > Twitch > Seguidores**:

1. Habilitar HTML/CSS personalizado e substituir as abas HTML e CSS pelos arquivos [follow.html](follow.html) e [follow.css](follow.css). Preencha também a aba JS com [follow.js](follow.js); ele ajusta nomes longos e remove spans de formatação que provocavam texto na vertical. Remova snippets de diagnóstico anteriores.
2. Campo **Modelo de mensagem**: somente `{name}`. A frase “começou a seguir seu canal!” já está no HTML.
3. Imagem do alerta: **nenhuma**. O buddy vem do repositório por URL dentro do HTML. Não use GIF antigo de follow simultaneamente.
4. **Atraso de texto: 0s** para mostrar o nome junto à janela. O CSS reserva a largura da janela; o JS reduz automaticamente o tamanho da fonte quando necessário (até 11px) e usa reticências apenas em casos extremos. As configurações do painel podem permanecer como estão; a formatação relevante fica no widget.
5. Duração sugerida: **5–6s**. Entrada **Fade In** e saída **Fade Out**. Se preferir Roll In, deixe o movimento só no Streamlabs; não adicione animação CSS duplicada.
6. Salve e use **Test Follow**. A prévia do Streamlabs pode ter fundo escuro, mas o widget tem fundo transparente para o OBS.
7. Recarregue o cache da fonte de navegador no OBS após salvar.

### Backlog

- Buscar imagem de perfil real com API Twitch mediante backend seguro e fallback automático para buddy, quando desejado.
- Reaproveitar convenções visuais em Sub/Doação/Bits/Raid, com variações por evento.
- Evitar atualizações no chat MSN aprovado.
