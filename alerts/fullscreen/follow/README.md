# Follow Full HD — fluxo central → dock
Status: primeira implementação, aguardando teste no Streamlabs/OBS.

- Canvas transparente **1920×1080**.
- 0–1s: contato Messenger aparece no centro.
- Após ~1,5s: a janela encolhe levemente e vai ao **canto inferior esquerdo**.
- Encerramento em ~6s.
- Message Template: `{name}`; atraso do texto 0s; duração 6s.
- HTML e JS seguem sem alteração. O alerta compacto original em `alerts/follow/` permanece intacto.
- Verificar legibilidade e sobreposição com o HUD do jogo durante o teste.

## Correção de visibilidade no Streamlabs
- **Versão v2:** a camada `#alert-text` ocupa todo o canvas e **não** recebe animação. Somente `.gmrs-follow-window` é animada, como no fluxo funcional da Raid; isso evita interferência dos estilos internos de texto do Streamlabs.
- HTML e JS permanecem os mesmos. No Streamlabs: ativar Custom HTML/CSS, usar os três arquivos Full HD correspondentes, modelo `{name}`, atraso de texto 0 e duração 6s. Atualizar o cache da fonte no OBS após salvar.
- Aguardando confirmação por teste real; se continuar totalmente invisível, verificar se configurações da categoria Followers do Alert Box estão ativas e se o HTML/CSS personalizados foram colados no evento correto.
