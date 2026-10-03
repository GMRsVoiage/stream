# Raid fullscreen — Skype / Windows 7, protótipo 2

**Status:** pronto para teste visual, **não verificado no OBS**, referência histórica Skype 5.x (2010–2012), versão visual 1:1 ainda sujeita à comparação com capturas exatas. O protótipo anterior permanece acessível no histórico do GitHub.

## Sequência e duração
- **0–2s:** notificação estilo Skype aparece no canto inferior direito.
- **1–2.3s:** cursor **fictício** percorre o canvas até a notificação e simula clique (não move o mouse real).
- **2.1s:** abre janela de chamada em grupo no centro, com barra do Windows 7, Skype azul e controles de chamada.
- **~6.5s:** botão verde é ativado; aparece a conexão.
- **~7.5–10s:** saudação e finalização.
- Use **duração total de 11 segundos** na Raid do Streamlabs.

## Instalação
Abra no GitHub e copie para os respectivos campos **Custom HTML / CSS / JS** da **Raid**:
- [raid.html](raid.html)
- [raid.css](raid.css)
- [raid.js](raid.js)

**Message Template** — cole exatamente:
```html
<span class="raid-source">{name}</span><span class="raid-count">{count}</span>
```

Texto atrasado: 0 s. Em OBS: fonte de navegador de alertas **1920 × 1080**, sem recorte. O fundo do widget é transparente.

**Áudio:** o código não embute áudio de terceiros. Para o primeiro teste, carregue o toque clássico do Skype nas configurações da Raid no Streamlabs; se o áudio ultrapassar o momento do atendimento visual, use uma versão de aproximadamente **6,5 segundos** com fade-out no próprio áudio. Posteriormente, um asset fornecido e hospedado no repositório poderá sincronizar exatamente o toque, após confirmar comportamento de reprodução da Browser Source.

## Limites conhecidos
- Elementos desenhados em CSS com estilo histórico inspirado no Skype 5.x: **não afirmar identidade 1:1** sem comparar capturas oficiais da mesma versão.
- Se o Streamlabs sanitizar spans HTML do Message Template, a contagem poderá aparecer só na linha principal sem atualizar o texto secundário; confirmar no primeiro teste real/simulado.
- Uma instância única do Alert Box evita sons duplicados em diferentes cenas.
- Não interfere com os alertas antigos Follow/Sub/Doação.
