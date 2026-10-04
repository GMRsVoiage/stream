# Nostalgia Messenger — adaptador alternativo de Chat Box

**Status:** este diretório preserva a variante de chat em formato de **janela Messenger/Web 2000**. Ela não é a configuração principal atualmente usada no OBS.

O chat ativo da live está em [`/buddy`](../../../../buddy/README.md): mensagens transparentes com Buddy por categoria e balões, ainda alimentadas pelo Chat Box do Streamlabs.

## Quando usar este adaptador

Use os arquivos desta pasta se quiser uma janela completa de Messenger como parte da própria Browser Source.

1. Copie [streamlabs.html](./streamlabs.html) para o campo HTML do Chat Box.
2. Copie [streamlabs.css](./streamlabs.css) para o campo CSS.
3. Preserve o JavaScript padrão do provedor quando ele for responsável por inserir as mensagens.
4. Não substitua os placeholders do Streamlabs por dados inventados em JavaScript local.

## Contrato preservado

- `#log.sl__chat__layout` — destino das mensagens.
- `#chatlist_item` — template de mensagem.
- `{from}`, `{messageId}`, `{color}`, `{message}` — preenchidos pelo provedor.
- `.badges` e emotes — preservados para a renderização nativa.
- `{font_size}` — token opcional do provedor.

A apresentação usa Tahoma para UI e Verdana para mensagens, seguindo o Nostalgia.exe.

## Configuração atualmente usada na live

A implementação principal está em `/buddy/streamlabs.html`, `streamlabs.css` e `streamlabs.js`.

No OBS:

- gameplay: Browser Source aproximadamente **407×620**, transparente e sem perspectiva;
- BRB: usar uma fonte/instância independente do mesmo widget e aplicar o Corner Pin apenas nela;
- não compartilhar filtros de perspectiva entre gameplay e BRB.

O posicionamento final pertence ao OBS, não ao CSS deste adaptador.

A [portal-preview](../../portal-preview.html) continua apenas conceitual e não recebe eventos reais.
