# Sub Full HD — instalação central → dock
Status: primeira implementação, aguardando teste no Streamlabs/OBS.

- Canvas transparente **1920×1080**.
- 0–2s: janela de instalação do Nostalgia.exe abre no centro.
- 2–3s: reduz levemente e vai ao **canto inferior esquerdo** sem reiniciar sua barra de progresso.
- ~7s: desaparece.
- Message Template: `{name}`; atraso do texto 0s; duração sugerida **7s**.
- O alerta clássico original em `alerts/sub/` permanece preservado. O HTML e o JS Full HD não foram alterados.
