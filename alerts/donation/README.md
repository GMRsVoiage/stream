# Nostalgia.exe — cheque voador / doações

**Status:** terceira versão para teste no Streamlabs; balão melhorou segundo o criador e agora o personagem foi trocado pelo sprite original. Ainda NÃO aprovado em conjunto. Não modificar os widgets Follow e Sub já aprovados.

## Decisões de design
- Doações: **cheque voador** com aparência de documento de banco fictício (Nostalgia Bank), nome/valor e carimbo COMPENSADO.
- Mensagem da doação: assistente **Clippy** ao lado de balão **estilo Office Assistant clássico** (amarelo-claro, borda preta fina e seta apontando ao personagem), em vez da versão anterior em vidro Aero, que foi rejeitada pelo criador. A ilustração SVG provisória foi substituída pelo **sprite original do Clippy**, na pose de repouso 124×93 da biblioteca Clippy.JS. O sprite é carregado externamente de URL fixa vinculada ao commit d88943d da fonte; requer acesso de rede do OBS/Streamlabs. A imagem original é maior que o SVG provisório, mas não é um GIF nem depende de executar Clippy.JS.
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
7. Fonte de navegador no OBS: dimensões suficientes (recomendação a partir de 750×450) para evitar corte. Confirme no teste que o Clippy aparece: a imagem depende de carregamento de sprite externo.\n8. Fonte do sprite: [ElliotWood/clippyjs Clippy](https://github.com/ElliotWood/clippyjs/tree/master/assets/agents/Clippy), originalmente extraído do assistente Microsoft Office. O código da biblioteca Clippy.JS é MIT; isso não é, por si só, licença de marca/personagem. O proprietário do canal informou ter autorização para uso e deve manter os termos correspondentes.

O código não representa banco real: cheque fictício e números decorativos, sem código de barras utilizável.
