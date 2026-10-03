# Nostalgia.exe — camada de alertas Full HD

**Status:** primeira implementação técnica 1920×1080 publicada para **testes no Streamlabs/OBS**. Não substitui automaticamente as versões aprovadas.

## Arquitetura

- Usar uma **fonte de navegador OBS** da Alert Box em **1920 × 1080**, no topo da cena, sem aplicar Crop/Pad ou usar Transformar > Ajustar ao tamanho reduzido.
- O canvas todo é transparente. As janelas continuam pequenas, exceto eventos maiores (Raid e efeitos futuros), que podem usar regiões adicionais sem mudar a fonte.
- Criar cena OBS compartilhada **ALERTAS — 1920x1080** e inseri-la como fonte de cena em Gameplay/Just Chatting/Jogo Exclusivo; não duplicar múltiplos browser sources com a mesma Alert Box (risco de alertas/sons repetidos).
- Esta versão é **visualmente Full HD**, mas efeitos que reagem às coordenadas da webcam exigem ajuste por cena e ficam para fase seguinte.

## Arquivos

- [Follow](follow/follow.html) — janela Messenger compacta, canto inferior esquerdo da tela, + [CSS](follow/follow.css) + [JS](follow/follow.js).
- [Sub](sub/sub.html) — instalador compacto, canto inferior esquerdo, + [CSS](sub/sub.css) + [JS](sub/sub.js).
- [Doação](donation/donation.html) — cheque voador central com sprite original do Clippy, + [CSS](donation/donation.css) + [JS](donation/donation.js).
- [Raid](raid/raid.html) — **novo**: chamada recebida inspirada no Skype clássico, com anéis de chamada expandindo na tela, atender automático e texto de boas-vindas, + [CSS](raid/raid.css) + [JS](raid/raid.js).

## Configuração por tipo no Streamlabs

Ativar Custom HTML/CSS/JS em cada tipo **apenas após salvar uma cópia de seus códigos antigos**. Cuidado com configurações globais ou variações personalizadas que possam compartilhar código entre tipos.

| Evento | Message Template | Texto atrasado | Duração sugerida | Som |
| --- | --- | --- | --- | --- |
| Follow | `{name}` | 0 s | 6 s | atual aprovado |
| Sub básico | `{name}` | 0 s | 7 s | Windows 7 Balloon aprovado |
| Doação | `{name} doou {amount}!` | 0 s | 10 s | escolher |
| Raid | `<span class="raid-source">{name}</span><span class="raid-count">{count}</span>` | 0 s | 9–11 s | **toque de chamada Skype clássico** |

A documentação oficial Streamlabs informa `{name}` e `{count}` para Raid e permite HTML no modelo da mensagem. A Raid não usa EventSub nem lista indivíduos da Raid.

O áudio da Raid fica configurado **somente no campo de som do Streamlabs**. Não reproduzir toque via JS para evitar som duplicado. A entrada/saída configurada no Streamlabs deve ser Fade In/Fade Out moderada; os movimentos internos da janela são do CSS. Se a transição estiver duplicada, prefira "None" na entrada e mantenha somente o CSS.

## Ordem segura de testes

1. Salvar os códigos anteriores em arquivo local ou usar os arquivos `alerts/follow`, `alerts/sub`, `alerts/donation` que foram preservados.
2. Testar primeiro **Raid** em uma fonte Browser Source temporária **1920×1080**, após inserir o HTML/CSS/JS e o modelo com `{name}`/`{count}`. Verificar nome longo, espectadores, som, animação e ausência de recorte.
3. Em seguida testar Follow, Sub e Doação, um por vez, com os arquivos sob `alerts/fullscreen/`.
4. Só depois atualizar a cena compartilhada em produção e conferir que não há duas fontes Alert Box habilitadas.
5. Medir uso OBS/CPU/GPU em cena com e sem o alerta. GIF, blur pesado e loops de processamento contínuos estão fora desta fase.

## Notas

- **Não mover automaticamente os alertas existentes.** Reversão: recolocar os arquivos anteriores por tipo no Streamlabs.
- As versões Full HD preservam o design aprovado; não pressupor que já foi testado no OBS.
- O posicionamento atualmente escolhido é Follow/Sub no canto inferior esquerdo e Doação central, enquanto Raid entra ao centro. Coordenadas serão adaptadas depois ao layout final do OBS para não cobrir chat/webcam.
- Recursos de raid com participantes identificados e efeitos interagindo com a webcam continuam em backlog, não estão implementados.

Referência oficial: https://support.streamlabs.com/hc/en-us/articles/360007779154-Message-Template-Parameters-for-Alert-Box-Widget-on-Streamlabs-Twitch-and-Youtube
