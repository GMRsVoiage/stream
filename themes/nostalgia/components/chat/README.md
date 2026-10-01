# Nostalgia Messenger — adaptador de Chat Box

**Status:** implementação inicial do chat com o template fornecido pelo usuário; exige teste visual e funcional no provedor do widget.

Caso não seja usada integração direta com a API da Twitch, preencher o editor de **Chat Box / Custom HTML-CSS** do serviço que suporta este modelo:

1. Colar o conteúdo de [streamlabs.html](./streamlabs.html) no campo **HTML**.
2. Colar o conteúdo de [streamlabs.css](./streamlabs.css) no campo **CSS**.
3. Manter o JavaScript padrão do serviço, caso ele gerencie as mensagens; **não** instalar JS próprio para reprocessar `{message}` e `{from}` sobre o motor do widget.
4. Configurar a fonte de navegador no OBS com a URL do widget e tamanho adequado (por exemplo, 359 × 437), ajustando conforme a coluna da cena.

## Contrato de dados preservado

- `#log.sl__chat__layout`: destino das mensagens.
- `#chatlist_item`: modelo que o serviço usa ao renderizar.
- `{from}`, `{messageId}`, `{color}`, `{message}`: substituídos pelo serviço, **não** por esta prévia estática.
- `.badges` e emotes: recebidos pela renderização nativa do serviço, conforme o suporte que ele fornecer.
- `{font_size}`: token preservado do CSS anterior. Se o editor não suportá-lo, remova a segunda declaração de `font-size` em `body` para manter o fallback de 16px.

A nova apresentação substitui o fundo gradiente escuro e o glow pesado do CSS anterior por uma janela de mensageiro Web 2000 com alto contraste: Tahoma na interface e Verdana nas mensagens. A cor de cada nome continua vinculada a `{color}`; nomes muito claros dependem do contraste fornecido pelo serviço.

A visualização [portal-preview](../../portal-preview.html) é apenas conceitual: não recebe eventos e não executa o template. Eventos de follow/sub/doações e automações reais continuarão em integração separada via barramento de eventos.
