# Nostalgia.exe — cheque voador / doações

**Status:** segunda versão para teste no Streamlabs; o criador pediu balão mais fiel ao Office Assistant clássico, mas ainda NÃO aprovou o alerta completo. Não modificar os widgets Follow e Sub já aprovados.

## Decisões de design
- Doações: **cheque voador** com aparência de documento de banco fictício (Nostalgia Bank), nome/valor e carimbo COMPENSADO.
- Mensagem da doação: assistente **Clippy** ao lado de balão **estilo Office Assistant clássico** (amarelo-claro, borda preta fina e seta apontando ao personagem), em vez da versão anterior em vidro Aero, que foi rejeitada pelo criador. O assistente segue como ilustração SVG leve integrada ao HTML, não um GIF pesado.
- Mensagem ausente: “Parece que você recebeu uma doação!”.
- Duração pensada para 10 segundos; papel cai/quica, depois carimbo, depois assistente.
- Sem conexão Twitch ou API externa. O som de doação continua pendente de escolha.

## Instalação do alerta de doação
1. Streamlabs > Alert Box > Tips/Donations: habilitar HTML/CSS personalizado.
2. Colar `donation.html`, `donation.css`, `donation.js` nas três abas.
3. Manter o modelo de mensagem **`{name} doou {amount}!`**, que será impresso no cheque. O campo `{userMessage}` alimenta o balão de fala.
4. Deixar **imagem padrão vazia**, atraso de texto **0s**, duração sugerida **10s**.
5. Preferir entrada/saída **Fade In/Fade Out** leves; o movimento do cheque é realizado internamente pelo CSS.
6. Testar com doação simulada com e sem mensagem. Se o texto vier de modo diferente do esperado, enviar captura antes de marcar como concluído.
7. Fonte de navegador no OBS: dimensões suficientes (recomendação a partir de 750×450) para evitar corte.

O código não representa banco real: cheque fictício e números decorativos, sem código de barras utilizável.
