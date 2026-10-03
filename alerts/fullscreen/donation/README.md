# Doação Full HD — cheque + Clippy central → dock
Status: primeira implementação, aguardando teste no Streamlabs/OBS.

- Canvas transparente **1920×1080**.
- 0–4s: cheque voa para o centro, carimbo aparece e o Clippy mostra a mensagem no balão amarelo original.
- 4–5,3s: todo o conjunto encolhe para 78% e vai ao **canto inferior esquerdo**, liberando o centro.
- 5,3–11s: mensagem permanece legível no canto.
- 12s: encerra.
- Message Template: `{name} doou {amount}!`; atraso do texto 0s; duração **12s**.
- Original em `alerts/donation/` intacto. Nenhuma alteração nos modelos HTML ou JS Full HD.
- Não reiniciar cheque ou animações internas durante a mudança de posição; a animação está só no container exterior.
