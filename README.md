# Erika Campos Terapias — site + blog

## Estrutura de arquivos

```
site/
├── .nojekyll                  → impede o GitHub Pages de processar o site como Jekyll
├── index.html                 → landing page
├── sitemap.xml                → mapa do site pro Google — atualize a cada post novo
├── robots.txt                 → aponta o Google pro sitemap.xml
├── css/
│   └── style.css               → estilo da landing
├── js/
│   └── script.js                → interações da landing (menu, scroll, carrossel etc.)
├── assets/                    → seus logos em SVG
│   ├── LogoCompleto_horizontal_fundo_claro.svg
│   ├── LogoCompleto_horizontal_fundo_escuro.svg
│   ├── LogoCompleto_vertical_fundo_claro.svg
│   ├── LogoCompleto_vertical_fundo_escuro.svg
│   └── images/                 → ⭐ fotos do site (hoje são placeholders — veja abaixo)
└── blog/
    ├── index.html               → listagem de posts (lê os cards de posts-data.js)
    ├── index.js                  → lógica da listagem
    ├── style.css                 → estilo do blog (mesma paleta da landing)
    ├── posts-data.js             → alimenta os CARDS da listagem (não o conteúdo do post)
    └── posts/                    → ⭐ AQUI vivem os posts, um arquivo HTML por post
        ├── _MODELO.html           → copie este pra criar um post novo
        ├── moxabustao-o-que-e.html
        ├── corpo-mente-emocoes-mtc.html
        └── um-outro-jeito-de-olhar.html
```

O CSS e o JS ficam em arquivos próprios (não mais dentro do HTML) — o GitHub
Pages serve qualquer arquivo estático normalmente, então isso funciona sem
nenhuma configuração extra. O arquivo `.nojekyll` (vazio, na raiz) é uma
prática recomendada do GitHub Pages: ele avisa que o site é HTML puro, sem
processamento Jekyll — evita qualquer comportamento inesperado com pastas
ou nomes de arquivo específicos.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `erika-campos-terapias`).
2. Suba **todos** os arquivos e pastas acima, mantendo essa mesma estrutura
   (o `index.html` precisa ficar na raiz do repositório).
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará no ar em
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Não precisa de build, Node, nem nenhuma ferramenta — é HTML puro.

## Como adicionar um novo post no blog

Desde a última atualização, cada post é um **arquivo HTML próprio** dentro
de `blog/posts/` — isso melhora a indexação no Google e garante que o link
apareça certo quando compartilhado no WhatsApp ou Instagram (esses apps não
executam JavaScript, então precisam do conteúdo já pronto no HTML).

São 3 passos:

**Passo 1 — crie o arquivo do post**
1. Copie `blog/posts/_MODELO.html`.
2. Renomeie a cópia pra `blog/posts/SEU-SLUG.html` (ex: `ventosaterapia-dor-lombar.html`).
3. Abra o arquivo e preencha todos os campos marcados com `«...»` — título,
   resumo, categoria, data, foto de capa e o corpo do texto (parágrafos,
   subtítulos, listas, foto no meio do texto se quiser).

**Passo 2 — adicione o card na listagem**
1. Abra `blog/posts-data.js`.
2. Copie um bloco `{ ... }` existente, cole no topo do array e edite:

   | Campo | O que é |
   |---|---|
   | `slug` | precisa ser **igual ao nome do arquivo** que você criou (sem `.html`) |
   | `titulo` | título do post (mesmo do arquivo HTML) |
   | `resumo` | 1-2 frases que aparecem no card |
   | `tag` | categoria curta (ex: `"Ventosaterapia"`) |
   | `autor` | nome de quem assina (opcional) |
   | `data` | formato `"AAAA-MM-DD"` — define a ordem na listagem |
   | `capa` | caminho da imagem de capa, ex: `"../assets/images/sua-foto.jpg"` |
   | `conteudo` | pode deixar como `[]` — não é mais usado pra renderizar nada |

**Passo 3 — avise o Google**
1. Abra `sitemap.xml` (na raiz do site) e copie um bloco `<url>...</url>`.
2. Cole um novo bloco com o link do seu post:
   `https://erikacamposterapias.com.br/blog/posts/SEU-SLUG.html`

Salve tudo e suba pro GitHub (`git add`, `git commit`, `git push`) — o post
aparece na listagem e já fica com link direto e preview corretos.

## Fotos: como trocar os placeholders

As 5 fotos do site (`assets/images/`) hoje são placeholders gerados na
paleta da marca — um gradiente com o motivo das ventosas do seu logo —
só pra nada aparecer quebrado enquanto você não tem as fotos reais.

**Pra trocar, é só isso:** baixe a foto real e salve com o **mesmo nome**,
na mesma pasta, sobrescrevendo o placeholder. Não precisa editar nenhum
código.

| Arquivo | Onde aparece | Proporção ideal |
|---|---|---|
| `assets/images/hero.jpg` | Foto principal do topo do site | vertical, 4:5 |
| `assets/images/sobre.jpg` | Seção "Sobre" | vertical, 3:4 |
| `assets/images/blog-auriculoterapia.jpg` | Capa do post de auriculoterapia | horizontal, 16:10 |
| `assets/images/blog-moxabustao.jpg` | Capa do post de moxabustão | horizontal, 16:10 |
| `assets/images/blog-corpo-mente-emocao.jpg` | Capa do post de filosofia MTC | horizontal, 16:10 |

O ideal, claro, é usar fotos suas — do seu espaço de atendimento, das suas
mãos trabalhando, de você mesma — isso aumenta muito a confiança de quem
visita o site. Se por enquanto você não tiver essas fotos, aqui vão
buscas no Unsplash (banco de imagens gratuito, sem necessidade de
atribuição) filtradas pro clima de cada espaço, pra você escolher e
baixar a que mais combinar com o seu olhar:

- **Hero** (foto de destaque, tom mais editorial): [busca "acupuncture" no Unsplash](https://unsplash.com/s/photos/acupuncture)
- **Sobre** (foto de atendimento/toque): [busca "massage therapy" no Unsplash](https://unsplash.com/s/photos/massage-therapy)
- **Capas do blog** (mais soltas, podem repetir o tema): [busca "traditional chinese medicine" no Unsplash](https://unsplash.com/s/photos/traditional-chinese-medicine) e [busca "chinese medicine" no Unsplash](https://unsplash.com/s/photos/chinese-medicine)

## Outros pontos que você precisa preencher antes de publicar

- **Número de WhatsApp**: procure por `55XXXXXXXXXXX` em `index.html` e
  `blog/post.html`, e troque pelo seu número completo com DDI + DDD
  (ex: `5511987654321`).
- **E-mail de contato**: `contato@erikacampos.com.br` em `index.html`.
- **Link do Instagram**: `https://instagram.com/` em `index.html` — troque
  pelo link do seu perfil.
- **Depoimentos**: os três depoimentos da seção "Depoimentos" são
  ilustrativos — substitua pelos relatos reais das suas clientes (com
  autorização delas) antes de publicar.
