# Sub — Nostalgia.exe / Assistente de instalação

**Status:** implementação inicial para teste no Streamlabs; aparência/funcionamento ainda aguardam validação do criador.

## Proposta de widget

- Conceito de Sub já definido em `NOSTALGIA_SPEC.md`: **assinatura = pacote instalado**.
- Janela de instalador estilo Windows XP, reinterpretada em Frutiger Aero: branco leitoso, barra de título azul brilhante, detalhes pastel lilás, painel lateral e pacote ilustrado em CSS.
- Barra de progresso animada com CSS, **sem** JavaScript pesado ou arquivos de vídeo.
- Nome do assinante adaptado automaticamente para usernames longos, como no Follow.
- Sub padrão apenas nesta versão. **Renovações, Gift Subs, Tier e Prime** ficam aguardando testes e formatos de template específicos para não inventar dados; não marcar como implementados.
- Sons de programas antigos estão aprovados como direção sonora geral, mas o som específico do Sub ainda será escolhido.

## Instalação

1. Acesse **Streamlabs → Alert Box → Subscriptions** e habilite as abas de código personalizado.
2. Copie `sub.html`, `sub.css`, `sub.js` nas respectivas abas.
3. Configure o **modelo da mensagem** da assinatura básica como somente `{name}`. O HTML já contém os demais textos. Se o template for diferente, a rotina de tamanho reduzirá a frase inteira, não apenas o nome.
4. **Atraso do texto: 0 segundo**; não use a imagem padrão de Sub junto à janela (o pacote é desenhado em CSS).
5. Para prévia, use **duração de 7 segundos**, entrada Fade In, saída Fade Out. A barra progride em 5 segundos. Evite efeitos de animação de letra sobre o nome.
6. Salve e pressione **Test Sub**, se disponível no painel. Valide também com nome longo.
7. Se a aba de inscrições for compartilhada entre Sub, Resub e Gift, **não** aplique ainda a mesma formatação a todos os tipos sem validar as variáveis específicas.

O widget não consulta avatares nem usa serviços externos. Os arquivos dos widgets Follow e Chat não foram modificados.
