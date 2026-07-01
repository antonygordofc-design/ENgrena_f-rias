# EngrenaFérias — Estrutura organizada

Este projeto foi separado a partir do arquivo único `engrena-ferias.html` em:

```
engrena-ferias/
├── index.html      → estrutura HTML da página (chama o CSS e o JS abaixo)
├── css/
│   └── style.css   → todo o CSS do sistema (temas, componentes, layout)
└── js/
    └── app.js      → toda a lógica JS (rotas, telas, Store/estado, render)
```

## Como usar
Basta abrir o `index.html` num navegador (ou hospedar a pasta inteira num
servidor estático). Os links para `css/style.css` e `js/app.js` são relativos,
então mantenha a estrutura de pastas como está.

## Dependências externas (via CDN, já referenciadas no index.html)
- Google Fonts (Inter, Oswald)
- Lucide Icons
- SheetJS (xlsx) — usado na importação de planilhas de férias

## Observação
Feito por Antony.
