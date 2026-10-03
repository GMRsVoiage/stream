# Backlog — alertas em 1920 × 1080 e interatividade

**Status:** objetivo futuro aprovado para avaliação e implementação gradual, não está pronto.

## Decisão (2026-10-03)
- Evoluir os alertas existentes de janelas localizadas para uma **fonte de navegador 1920×1080**, sem exigir que cada alerta visual ocupe a tela inteira.
- Manter os alertas atuais de Follow, Sub e Doação em funcionamento; preservar código e assets aprovados enquanto o novo sistema é desenvolvido e testado.
- Explorar alertas **cinematográficos e interativos** que possam entrar em cena e interagir com gameplay/câmera, em vez de aparecer apenas em um quadro central.
- Referência criativa citada pelo criador: alerta de raid de outro streamer com personagem soltando fogo pela boca. Isso é **referência**, não aprovação para copiar o efeito nem decisão de implementá-lo literalmente.

## Considerações técnicas antes da migração
- Uma fonte Browser Source 1920×1080 **transparente** pode posicionar animações livremente na cena; HTML/CSS/SVG funcionam para elementos leves, e WebM transparente pode ser útil para efeitos complexos e curtos.
- Interagir visualmente com a webcam exige alinhamento da fonte/OBS e possível definição de pontos-alvo por cena. Interações reais que afetam o OBS/jogo precisam de controle próprio, permissões e medidas de segurança.
- Para desempenho: evitar animações contínuas em tela cheia, efeitos pesados de blur/WebGL e vídeos permanentemente ativos; carregar efeitos apenas quando houver evento.
- Criar testes para monitorar impacto em CPU/GPU, estabilidade e sincronização de áudio. Não prometer reação física ao streamer ou ao cenário sem implementação.
- Pensar em camada de eventos única/compartilhável e layouts por cena; não ampliar escopo antes de finalizar Raid atual e Starting Soon.

## Sequência
1. **Agora:** Raid estilo chamada do Skype, com toque clássico e tamanho atual suficiente.
2. **Depois:** Starting Soon como inicialização do programa.
3. **Futuro:** explorar e implementar alertas 1920×1080 com interatividade gradual.
