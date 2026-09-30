# BRAND_SPEC.md — GMRsVoiage

> Status: baseline visual aprovada para o rebranding.  
> Este arquivo registra decisões visuais. Ideias ainda não aprovadas devem ficar fora daqui até confirmação.

## 1. Identidade

A identidade atual da live é **GMRsVoiage**.

O rebranding substitui a identidade visual anterior associada a `Rafaelmanu001`. Referências antigas podem permanecer apenas quando forem necessárias por compatibilidade, histórico, URL ou integração externa.

A intenção do rebranding não é apenas trocar o nome. O objetivo é consolidar uma linguagem visual própria e reutilizável para a live.

## 2. Conceito central

A identidade deve transmitir:

> um futuro imaginado por tecnologias, interfaces e referências visuais antigas.

A estética deve parecer retrofuturista, nostálgica e digital, sem virar uma interface futurista contemporânea genérica.

O visual principal deve preservar o contraste típico do Vaporwave entre:

- tecnologia antiga;
- futuro imaginado;
- cultura de computador dos anos 1990 e 2000;
- elementos clássicos;
- paisagens artificiais;
- nostalgia digital.

## 3. Hierarquia estética

A proporção conceitual de referência é:

- **60% Vaporwave clássico**
- **30% Windows XP / early web**
- **10% Frutiger Aero**

Essas porcentagens não são métricas rígidas. Elas servem para resolver conflitos de direção.

Quando houver dúvida, o Vaporwave deve vencer.

## 4. Vaporwave — estética principal

Elementos prioritários:

- bustos e estátuas greco-romanas;
- palmeiras;
- grids/wireframes;
- checkerboard;
- sóis estilizados;
- degradês rosa, magenta, roxo e azul;
- colagens;
- recortes;
- formas geométricas;
- gráficos deliberadamente antigos;
- pixelização pontual;
- dithering;
- grain;
- scanlines discretas;
- referências CRT/VHS quando fizer sentido;
- 3D retro simples;
- arquitetura clássica;
- ruínas e colunas;
- espaço negativo.

O Vaporwave usado pelo GMRsVoiage deve parecer propositalmente datado, sintético e montado, não um render moderno cheio de efeitos.

## 5. Windows XP / early web — linguagem de interface

Windows XP e interfaces do início dos anos 2000 devem orientar os componentes funcionais:

- janelas;
- barras de título;
- caixas de diálogo;
- notificações;
- mensagens de sistema;
- barras de progresso;
- botões;
- menus;
- painéis de status;
- chat;
- metas;
- alertas.

A intenção não é clonar o Windows XP pixel por pixel.

A interface deve parecer uma versão alternativa de um desktop antigo inserido no universo Vaporwave do GMRsVoiage.

Referências complementares permitidas:

- MSN Messenger;
- IRC;
- early web;
- aplicações desktop antigas;
- caixas de erro do Windows;
- assistentes e notificações de sistema.

## 6. Frutiger Aero — acabamento secundário

Frutiger Aero deve aparecer apenas como camada complementar.

Pode contribuir com:

- água;
- céu;
- bolhas;
- natureza;
- reflexos suaves;
- plástico translúcido;
- botões glossy;
- transparências;
- detalhes arredondados.

Não deve dominar a identidade.

## 7. Regra de contenção visual

O rebranding deve reduzir o excesso de efeitos presente em explorações anteriores.

Preferir:

- menos glow;
- menos bloom;
- menos partículas;
- menos reflexos;
- menos elementos simultâneos;
- menos ornamentos sem função;
- composições mais simples;
- mais respiro;
- poucos elementos fortes por cena.

Evitar:

- cyberpunk;
- estética RGB gamer;
- HUD sci-fi contemporâneo;
- glassmorphism em excesso;
- chrome em excesso;
- hologramas;
- partículas constantes;
- lens flare constante;
- aparência de interface futurista gerada por IA;
- estética SaaS premium;
- excesso de neon;
- excesso de detalhes tridimensionais modernos.

A identidade deve ser reconhecível mesmo sem efeitos chamativos.

## 8. Paleta

A paleta ainda será refinada. A base atual é:

```css
:root {
  --gmrs-bg: #120b2e;
  --gmrs-purple: #6c36a8;
  --gmrs-magenta: #e83e9b;
  --gmrs-pink: #ff75b5;
  --gmrs-cyan: #46d9e8;
  --gmrs-blue: #3549a7;
  --gmrs-light: #f4edf5;
}
```

Esses valores são **provisórios**, não uma paleta final imutável.

Regras:

- fundo deve ser majoritariamente escuro;
- magenta/rosa/roxo são os acentos principais;
- azul/ciano servem como contraste;
- branco ou creme devem preservar legibilidade;
- verde só deve aparecer quando houver intenção Frutiger Aero ou semântica de status.

## 9. Tipografia

A tipografia definitiva ainda não foi aprovada.

A futura seleção deve prever pelo menos:

- **display/brand** — títulos e branding;
- **UI retro** — janelas e componentes;
- **body/readability** — chat e textos longos;
- **mono opcional** — status, sistema, logs e elementos técnicos.

Priorizar legibilidade no OBS. Não usar fontes decorativas em mensagens de chat ou informações pequenas.

## 10. Elementos visuais de assinatura

Elementos que podem se repetir entre cenas:

- busto/estátua clássica;
- palmeira;
- sol Vaporwave;
- grid;
- checkerboard;
- janela XP;
- barras e divisores de interface antiga;
- pequenos planetas/orbes;
- detalhes de água/bolhas em cenas Aero.

Não é necessário usar todos simultaneamente.

Cada cena deve escolher poucos elementos e deixar espaço negativo.

## 11. Modularidade

A identidade deve existir como sistema de peças independentes.

Sempre que possível, separar:

- plano de fundo;
- overlay da webcam;
- chat;
- meta;
- alertas;
- branding;
- elementos decorativos;
- ícones;
- texturas.

Não criar uma única imagem que obrigue webcam, chat e background a permanecerem presos na mesma composição.

## 12. Fundo

O plano de fundo deve poder existir sozinho.

Características preferidas:

- Vaporwave clássico;
- composição simples;
- poucos pontos de interesse;
- espaço para conteúdo;
- efeitos visuais moderados;
- sem UI embutida;
- sem webcam embutida;
- sem chat embutido;
- sem textos permanentes desnecessários.

## 13. Webcam

A moldura da webcam deve ser um asset independente.

Direção:

- borda relativamente fina;
- interior transparente;
- aparência retrofuturista;
- uma ou duas referências Vaporwave no máximo;
- pode incluir checkerboard, grid, palmeira ou detalhe clássico;
- glow limitado;
- deve permanecer legível em tamanho reduzido.

A webcam não deve parecer um painel futurista moderno.

## 14. Branding textual

Usar **GMRsVoiage** como marca atual.

Não introduzir novas ocorrências visuais de `Rafaelmanu001`.

Não substituir cegamente URLs, IDs ou integrações externas que ainda dependam do identificador antigo.

## 15. Critério de aprovação visual

Antes de aprovar um elemento, verificar:

1. ainda parece Vaporwave clássico?
2. preserva referências antigas?
3. parece parte do mesmo universo visual?
4. existe efeito visual demais?
5. o conteúdo continua legível?
6. funciona separado dos demais elementos?
7. parece GMRsVoiage, e não um template genérico?
8. Windows XP está sendo usado como linguagem funcional?
9. Frutiger Aero permanece secundário?

Se o elemento parecer mais "futurista moderno" do que "futuro antigo", revisar.

## 16. Decisões ainda abertas

Ainda não estão aprovados como definitivos:

- logo final;
- símbolo final da marca;
- paleta final;
- famílias tipográficas finais;
- proporções finais da webcam;
- conjunto final de ícones;
- intensidade exata de grain/scanline;
- layout final de todas as cenas.

Esses itens devem ser consolidados neste arquivo somente após decisão explícita.
