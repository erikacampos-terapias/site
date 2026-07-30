/*
  ===========================================================
  POSTS DO BLOG — Erika Campos Terapias
  ===========================================================

  Pra criar um post novo, copie o bloco { ... } de um post
  existente (do "{" até o "}," dele), cole no TOPO do array
  (logo depois de "const posts = [") e edite os campos:

  - slug:      identificador único do post, sem espaços/acentos.
               Vira parte do link: post.html?slug=SEU-SLUG
  - titulo:    título que aparece na listagem e na página do post
  - resumo:    1-2 frases que aparecem no card da listagem
  - tag:       categoria curta (ex: "Auriculoterapia", "Moxabustão")
  - data:      no formato "AAAA-MM-DD" (usado pra ordenar, mais
               recente primeiro) — o texto exibido é gerado sozinho
  - capa:      URL de uma imagem (pode usar Unsplash ou subir a
               sua própria foto numa pasta e apontar o caminho)
  - conteudo:  o texto do post. Cada item da lista é um bloco:
                 { tipo: "paragrafo", texto: "..." }
                 { tipo: "titulo",    texto: "..." }   (subtítulo H2)
                 { tipo: "lista",     itens: ["...", "..."] }
                 { tipo: "imagem",    url: "...", legenda: "..." }  (opcional)

  O bloco "imagem" é OPCIONAL — use só quando tiver uma foto pra colocar
  no meio do artigo. Se o post não tiver bloco "imagem", nada aparece
  no lugar — sem buraco, sem placeholder. "legenda" também é opcional;
  se não quiser legenda, é só remover essa linha do bloco.

  Exemplo de uso (coloque entre dois parágrafos, na ordem em que quer
  que a foto apareça no texto):

    { tipo: "paragrafo", texto: "..." },
    { tipo: "imagem", url: "https://.../foto.jpg", legenda: "Aplicação de ventosas na região lombar." },
    { tipo: "paragrafo", texto: "..." },

  Depois de editar, salve o arquivo e suba pro GitHub — não precisa
  rodar nenhum build, é só HTML/JS puro.
  ===========================================================
*/

const posts = [
  {
    slug: "corpo-mente-emocao-mtc",
    titulo: "Por que a MTC trata o corpo, a mente e a emoção juntos",
    resumo: "Um panorama simples sobre a visão integrativa da medicina chinesa e por que ela não separa dor física de desgaste emocional.",
    tag: "Filosofia MTC",
    data: "2026-07-20",
    capa: "../assets/images/blog-corpo-mente-emocao.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "Um dos primeiros estranhamentos de quem chega pra uma sessão de Medicina Tradicional Chinesa é ouvir perguntas sobre o sono, o humor ou a rotina — quando a queixa era \"só\" uma dor no ombro. Isso não é acaso: na MTC, corpo, mente e emoção não são compartimentos separados, são expressões diferentes do mesmo sistema." },
      { tipo: "titulo", texto: "Um sistema, não peças isoladas" },
      { tipo: "paragrafo", texto: "A medicina ocidental tende a dividir o cuidado por especialidade: um profissional pra dor, outro pra ansiedade, outro pra digestão. A MTC parte de outro princípio — o de que esses sintomas conversam entre si, e que tratar um sem entender o outro costuma dar alívio parcial e temporário." },
      { tipo: "paragrafo", texto: "Isso não significa ignorar a dor física. Significa perguntar: essa tensão no ombro está isolada, ou está ligada a semanas de sono ruim e sobrecarga mental? Essa pergunta muda completamente o plano de cuidado." },
      { tipo: "titulo", texto: "O que isso muda na prática" },
      { tipo: "lista", itens: [
        "A avaliação inicial é mais ampla — não olha só pra onde dói.",
        "As técnicas são combinadas, não isoladas: auriculoterapia, moxabustão, ventosaterapia, massagem e drenagem se complementam.",
        "O acompanhamento considera sono, rotina e estado emocional como parte do quadro."
      ]},
      { tipo: "paragrafo", texto: "No fim, o objetivo não é aliviar um sintoma por vez, mas devolver ao corpo a capacidade de se regular — física, mental e emocionalmente. É um processo mais lento que tomar um remédio, mas costuma ser mais duradouro." }
    ]
  },
  {
    slug: "moxabustao-o-que-e",
    titulo: "Moxabustão: o calor que trata a raiz da dor",
    resumo: "Uma técnica milenar para dores de origem fria — explicada sem mistério, do que é feita até quando ela costuma ser indicada.",
    tag: "Moxabustão",
    data: "2026-07-13",
    capa: "../assets/images/blog-moxabustao.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "Moxabustão é o nome da técnica que usa o calor da combustão de uma planta chamada Artemisia (a \"moxa\") sobre pontos específicos do corpo, geralmente os mesmos usados na acupuntura. O objetivo é aquecer, ativar a circulação de energia e sangue, e aliviar dores que a MTC descreve como \"de origem fria\"." },
      { tipo: "titulo", texto: "Como funciona a sessão" },
      { tipo: "paragrafo", texto: "O bastão ou cone de moxa é aproximado da pele — sem tocar diretamente — até que a pessoa sinta um calor confortável, nunca queimação. Em alguns casos, a moxa é usada junto com agulhas de acupuntura ou ventosas, potencializando o efeito nos pontos trabalhados." },
      { tipo: "titulo", texto: "Pra que costuma ser indicada" },
      { tipo: "lista", itens: [
        "Dores articulares e musculares que pioram com frio ou umidade",
        "Sensação de \"peso\" ou rigidez no corpo",
        "Cólicas e desconfortos abdominais recorrentes",
        "Baixa energia e cansaço persistente"
      ]},
      { tipo: "paragrafo", texto: "É uma técnica simples na aparência, mas de efeito profundo — muitas pessoas relatam uma sensação de alívio e leveza logo na primeira sessão, especialmente quando combinada com outras práticas do plano de cuidado." }
    ]
  },
  {
    slug: "auriculoterapia-ansiedade",
    titulo: "Como a auriculoterapia ajuda no dia a dia da ansiedade",
    resumo: "Entenda o que acontece na orelha durante uma sessão de auriculoterapia — e por que isso afeta o corpo todo.",
    tag: "Auriculoterapia",
    data: "2026-07-06",
    capa: "../assets/images/blog-auriculoterapia.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "A auriculoterapia trabalha com a ideia de que a orelha é um mapa reduzido do corpo — cada ponto se conecta a um órgão, sistema ou função específica. Ao estimular esses pontos, é possível influenciar o equilíbrio do corpo inteiro, sem a necessidade de tratar diretamente cada área." },
      { tipo: "titulo", texto: "Por que ela ajuda com a ansiedade" },
      { tipo: "paragrafo", texto: "Alguns dos pontos mais trabalhados em sessões voltadas à ansiedade têm relação direta com a regulação do sistema nervoso. O estímulo constante desses pontos — seja com agulhas semipermanentes, esferas ou sementes — funciona como um lembrete físico e contínuo pro corpo relaxar, mesmo fora do consultório." },
      { tipo: "titulo", texto: "O que esperar de uma sessão" },
      { tipo: "lista", itens: [
        "Avaliação dos sintomas e pontos mais indicados pra cada caso",
        "Aplicação indolor de pequenas esferas ou agulhas na orelha",
        "Permanência dos pontos por alguns dias, com estímulo leve ao toque",
        "Acompanhamento pra ajustar os pontos conforme a resposta do corpo"
      ]},
      { tipo: "paragrafo", texto: "A auriculoterapia raramente é usada isolada — ela funciona bem como parte de um plano mais amplo, que pode incluir massagem, moxabustão ou drenagem, dependendo do que o corpo estiver pedindo em cada fase." }
    ]
  }
];
