# Nostalgia.exe — MSN buddy para o Streamlabs

Arquivos independentes de **silhuetas duplas clássicas de mensageiro**, sem rosto, texto, anime, emblemas ou acessórios. Fundo SVG transparente, `viewBox 128×128`, escala nítida a 52–120 px. Varia apenas a paleta por categoria e um **brilho externo discreto** no estado `talk`.

| Categoria | Idle | Talk |
| --- | --- | --- |
| Viewer | [viewer_idle.svg](viewer_idle.svg) | [viewer_talk.svg](viewer_talk.svg) |
| VIP | [vip_idle.svg](vip_idle.svg) | [vip_talk.svg](vip_talk.svg) |
| Sub | [sub_idle.svg](sub_idle.svg) | [sub_talk.svg](sub_talk.svg) |

## Integração

No **Streamlabs > Chat Box > Custom HTML** copie separadamente:
- [streamlabs.html](streamlabs.html) para a aba HTML;
- [streamlabs.css](streamlabs.css) para CSS;
- [streamlabs.js](streamlabs.js) para JS.

As URLs das imagens já estão preenchidas no código em `raw.githubusercontent.com/GMRsVoiage/stream/main/buddy/`. Não é necessário hospedar separadamente.

Cada mensagem recebe **seu próprio buddy ao lado do balão**. Sub/founder têm prioridade sobre VIP, que tem prioridade sobre viewer. Em `talk`, a mesma silhueta ganha somente brilho; o CSS faz quatro movimentos leves e retorna ao arquivo idle. Os balões têm fonte Trebuchet MS e o resto do overlay é transparente.

**Testar no widget real:** as estruturas de eventos e badges podem variar por plataforma/configuração do Streamlabs. Se uma categoria não for reconhecida, a renderização mantém viewer como fallback. SVG precisa ser aceito pelo navegador do OBS (Chromium).
