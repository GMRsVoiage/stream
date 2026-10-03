# Follow Full HD — fluxo central → dock
Status: primeira implementação, aguardando teste no Streamlabs/OBS.

- Canvas transparente **1920×1080**.
- 0–1s: contato Messenger aparece no centro.
- Após ~1,5s: a janela encolhe levemente e vai ao **canto inferior esquerdo**.
- Encerramento em ~6s.
- Message Template: `{name}`; atraso do texto 0s; duração 6s.
- HTML e JS seguem sem alteração. O alerta compacto original em `alerts/follow/` permanece intacto.
- Verificar legibilidade e sobreposição com o HUD do jogo durante o teste.
