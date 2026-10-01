# Nostalgia.exe — implementação inicial

A identidade visual aprovada está registrada em [NOSTALGIA_SPEC.md](../../NOSTALGIA_SPEC.md).

Este diretório é o **novo tema em desenvolvimento**. A versão AquaWave permanece no legado e não foi alterada nesta etapa.

## Organização inicial

- `css/tokens.css` — valores de design iniciais. Os tons exatos são protótipos sujeitos a validação visual.
- `css/base.css` — estilos do tema e componentes-base de demonstração.
- `assets/shared/nostalgia-icon.svg` — primeiro esboço vetorial do símbolo aprovado (balão + horizonte).
- `config/theme.json` — exemplo de configuração declarativa do tema.
- `preview.html` — prévia estática original da fundação visual.
- `portal-preview.html` + `css/preview.css` — segunda prévia exploratória inspirada pela estrutura de aplicações antigas, microdetalhes Web 2000 e atmosferas Vaporwave/Aero. Não é layout de gameplay aprovado.
- `transitions/` — [Stinger Alt+Tab + abertura de aplicativo](./transitions/README.md), [demonstração interativa](./transitions/demo.html) e script para exportar WebM transparente para o OBS.

A infraestrutura compartilhável fica em `core/`. A lógica de mesclagem de configuração está em `core/js/config.mjs`: **marca → tema → cena**.

O chat opcional sem API direta já possui um [template de Chat Box com HTML/CSS para copiar e colar](./components/chat/README.md), mantendo os placeholders de mensagens e badges fornecidos pelo usuário. Os demais componentes terão HTML, CSS, JS quando necessário e assets organizados por componente dentro do tema.

## Ver a prévia

Na raiz do repositório, execute um servidor HTTP local (o projeto não precisa de build):

```sh
python -m http.server 8000
```

Compare as duas propostas:

- Fundação original: `http://localhost:8000/themes/nostalgia/preview.html`
- Portal retro experimental: `http://localhost:8000/themes/nostalgia/portal-preview.html`

A prévia experimental usa apenas CSS e gráficos próprios: a estrutura de janelas é uma referência conceitual aos sites enviados pelo usuário, sem copiar artes ou código. A identidade aprovada em `NOSTALGIA_SPEC.md` não muda automaticamente por causa desta exploração.

Para verificar o módulo de configuração com Node.js:

```sh
node --test tests/config.test.mjs
```

Não coloque credenciais de Twitch, OBS, Streamer.bot ou dispositivos físicos nos arquivos do tema.
