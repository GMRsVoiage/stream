# Nostalgia.exe — implementação inicial

A identidade visual aprovada está registrada em [NOSTALGIA_SPEC.md](../../NOSTALGIA_SPEC.md).

Este diretório é o **novo tema em desenvolvimento**. A versão AquaWave permanece no legado e não foi alterada nesta etapa.

## Organização inicial

- `css/tokens.css` — valores de design iniciais. Os tons exatos são protótipos sujeitos a validação visual.
- `css/base.css` — estilos do tema e componentes-base de demonstração.
- `assets/shared/nostalgia-icon.svg` — primeiro esboço vetorial do símbolo aprovado (balão + horizonte).
- `config/theme.json` — exemplo de configuração declarativa do tema.
- `preview.html` — prévia estática da fundação visual, **não** um chat nem uma cena de produção.

A infraestrutura compartilhável fica em `core/`. A lógica de mesclagem de configuração está em `core/js/config.mjs`: **marca → tema → cena**.

Os futuros componentes terão HTML, CSS, JS quando necessário e assets organizados por componente dentro do tema.

## Ver a prévia

Na raiz do repositório, execute um servidor HTTP local (o projeto não precisa de build):

```sh
python -m http.server 8000
```

Abra `http://localhost:8000/themes/nostalgia/preview.html` no navegador.

Para verificar o módulo de configuração com Node.js:

```sh
node --test tests/config.test.mjs
```

Não coloque credenciais de Twitch, OBS, Streamer.bot ou dispositivos físicos nos arquivos do tema.
