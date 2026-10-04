# Backlog — alertas em 1920 × 1080 e interatividade

**Status em 2026-10-04:** a migração Full HD e os fluxos centro → canto foram **implementados e validados no Streamlabs/OBS**. A parte básica dos alertas está concluída; este arquivo permanece apenas para ideias avançadas ainda adiadas. Instruções atuais em [alerts/fullscreen/README.md](../alerts/fullscreen/README.md).

## Implementado como rascunho para testes
- Novas cópias independentes de Follow, Sub e Doação preparadas para canvas transparente 1920×1080, sem modificar as versões aprovadas.
- Primeira Raid fullscreen em estilo chamada clássica Skype com anéis de conexão, atender automático, nome e contagem via `{name}`/`{count}`; toque clássico configurado pelo usuário no Streamlabs.
- Orientações para fonte de navegador OBS única 1920×1080 e inclusão em diferentes cenas sem alertas duplicados.

## Implementação dos novos fluxos (2026-10-03)
- Raid: notificação → clique fictício → chamada central → reduz e vai ao canto superior esquerdo → atende.
- Follow: Messenger central → reduz e segue para canto inferior esquerdo.
- Sub: instalador central → reduz sem reiniciar a barra e segue para canto inferior esquerdo.
- Doação: cheque central + carimbo + Clippy → reduz como conjunto e segue para canto inferior esquerdo.
- A versão Full HD foi validada no Streamlabs/OBS; códigos legados continuam preservados como retorno seguro.

## Backlog pós-validação da primeira versão
- **Direção aprovada:** efeitos especiais podem ocupar o canvas inteiro de 1920×1080 e percorrer suas bordas. A referência mencionada pelo criador não interagia com a webcam; **interação com webcam não é requisito**.
- **Ideia não aprovada para agora:** interatividade espacial dependente da webcam/face/cena; só avaliar se solicitada.
- **Referência criativa:** um alerta de raid visto pelo criador que tinha alguém soltando fogo pela boca. É inspiração para explorar, **não decisão de copiar ou implementar exatamente esse efeito**.
- Explorar entrada de usuários que conversam após raid (não afirmar que são participantes confirmados) — detalhes em [raid-participants.md](raid-participants.md).
- **Backlog aprovado (não implementar agora):** importação dos widgets do GitHub/CDN para colar somente pequenos imports HTML/CSS/JS no Streamlabs. Investigar a compatibilidade de carregamento externo e interpolação dos placeholders do Streamlabs. Não mudar a instalação atual nesta etapa.
- Se necessário, criar engine centralizada para eventos e variantes; não carregar browser sources/vídeos pesados permanentemente.

## Regras de desempenho e segurança
- Canvas 1920×1080 **não significa** animação pesada em tela inteira ou aumento das janelas.
- CSS `transform`/`opacity` e SVG leve para eventos atuais. WebM curto e transparente somente se justificar efeitos complexos.
- Evitar vídeo permanente 1080p, WebGL, blur full-screen, requestAnimationFrame contínuo e duplicação das fontes de navegador.
- Nunca colocar credenciais Twitch/Streamlabs no HTML público; passar ações que afetam a máquina/OBS por ferramentas autorizadas e com limites.

## Próxima prioridade fora deste backlog

A validação de Raid, Follow, Sub e Doação foi concluída. A prioridade visual seguinte é o **redesign do Starting Soon**: computador ligando → desktop → navegador/página com efeito CRT → abertura de programa → loop final de espera.

Streamer.bot + OBS WebSocket continuam planejados para uma fase técnica posterior próxima; estão adiados por ordem de execução, não classificados como backlog.
