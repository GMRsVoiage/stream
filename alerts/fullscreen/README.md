# Nostalgia.exe — camada de alertas Full HD

**Status em 2026-10-04:** conjunto Full HD **validado no Streamlabs/OBS e considerado correto no estado atual**. Follow, Sub, Doação e Raid usam o fluxo centro → canto aprovado.

## Arquitetura

- Usar uma **fonte de navegador OBS** da Alert Box em **1920 × 1080**, no topo da cena, sem aplicar Crop/Pad ou usar Transformar > Ajustar ao tamanho reduzido.
- O canvas todo é transparente. As janelas continuam pequenas, exceto eventos maiores (Raid e efeitos futuros), que podem usar regiões adicionais sem mudar a fonte.
- Criar cena OBS compartilhada **ALERTAS — 1920x1080** e inseri-la como fonte de cena em Gameplay/Just Chatting/Jogo Exclusivo; não duplicar múltiplos browser sources com a mesma Alert Box (risco de alertas/sons repetidos).
- Esta versão é **visualmente Full HD**, mas efeitos que reagem às coordenadas da webcam exigem ajuste por cena e ficam para fase seguinte.

## Arquivos

- [Follow](follow/follow.html) — Messenger aparece no centro e reduz até o canto inferior esquerdo, + [CSS](follow/follow.css) + [JS](follow/follow.js).
- [Sub](sub/sub.html) — instalador abre no centro, depois reduz até o canto inferior esquerdo, + [CSS](sub/sub.css) + [JS](sub/sub.js).
- [Doação](donation/donation.html) — cheque voador + Clippy aparecem no centro, depois o conjunto reduz até o canto inferior esquerdo, + [CSS](donation/donation.css) + [JS](donation/donation.js).
- [Raid](raid/raid.html) — Nostalgia Call: notificação no canto inferior direito, cursor fictício, janela central que reduz para o canto superior esquerdo **antes** do atendimento automático, + [CSS](raid/raid.css) + [JS](raid/raid.js).

## Configuração por tipo no Streamlabs

Ativar Custom HTML/CSS/JS em cada tipo **apenas após salvar uma cópia de seus códigos antigos**. Cuidado com configurações globais ou variações personalizadas que possam compartilhar código entre tipos.

| Evento | Message Template | Texto atrasado | Duração sugerida | Som |
| --- | --- | --- | --- | --- |
| Follow | `{name}` | 0 s | 6 s | atual aprovado |
| Sub básico | `{name}` | 0 s | 7 s | Windows 7 Balloon aprovado |
| Doação | `{name} doou {amount}!` | 0 s | **12 s** | escolher |
| Raid | `<span class="raid-source">{name}</span><span class="raid-count">{count}</span>` | 0 s | 9–11 s | **toque de chamada Skype clássico** |

A documentação oficial Streamlabs informa `{name}` e `{count}` para Raid e permite HTML no modelo da mensagem. A Raid não usa EventSub nem lista indivíduos da Raid.

O áudio da Raid fica configurado **somente no campo de som do Streamlabs**. Não reproduzir toque via JS para evitar som duplicado. A entrada/saída configurada no Streamlabs deve ser Fade In/Fade Out moderada; os movimentos internos da janela são do CSS. Se a transição estiver duplicada, prefira "None" na entrada e mantenha somente o CSS.

## Revalidação segura

O conjunto atual já passou pela validação visual. Se houver mudança futura em HTML/CSS/JS, repetir de forma isolada:

1. preservar uma cópia da versão funcional;
2. testar o tipo alterado em Browser Source 1920×1080;
3. conferir nome longo, som, animação, recorte e duração;
4. confirmar que apenas uma Alert Box compartilhada está habilitada;
5. comparar uso de CPU/GPU antes de promover a mudança.

## Notas

- **Não mover automaticamente os alertas existentes.** Reversão: recolocar os arquivos anteriores por tipo no Streamlabs.
- As versões Full HD foram testadas e aprovadas visualmente no OBS/Streamlabs no estado atual.
- **Fluxos atuais:** Raid notificação → centro → **canto superior esquerdo** → atender (11 s); Follow centro → canto inferior esquerdo (6 s); Sub centro → canto inferior esquerdo (7 s); Doação centro até Clippy e carimbo → canto inferior esquerdo (12 s). Ajustes futuros de dock exigem nova validação.
- Recursos de raid com participantes identificados e efeitos interagindo com a webcam continuam em backlog, não estão implementados.

Referência oficial: https://support.streamlabs.com/hc/en-us/articles/360007779154-Message-Template-Parameters-for-Alert-Box-Widget-on-Streamlabs-Twitch-and-Youtube

## Padrão aprovado: centro → canto → conclusão

A janela é exibida brevemente no centro para anunciar o evento. Depois, o contêiner inteiro diminui com CSS e segue para uma posição lateral, mantendo o gameplay livre. Somente então ocorre a ação final, quando aplicável. Nenhum dos widgets move o cursor real ou controla o OBS.

**Observação:** a duração de 12 s da Doação substitui a sugestão anterior de 10 s. O conjunto atual já foi validado; alterações futuras devem ser revalidadas antes de substituir a versão funcional.
