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
  - autor:     nome de quem assina o post (ex: "Erika Campos"). Se remover
               esse campo, o post não mostra nenhuma assinatura.
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
    slug: "corpo-mente-emocoes-mtc",
    titulo: "Por que tratar o corpo, a mente e as emoções juntos",
    resumo: "Um panorama simples sobre a visão integrativa da medicina chinesa e por que ela não separa dor física de desgaste emocional.",
    tag: "Filosofia MTC",
    autor: "Erika Campos",
    data: "2026-07-30",
    capa: "../assets/images/txt3umsistema.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "Um dos primeiros estranhamentos de quem chega pra uma sessão de Medicina Tradicional Chinesa é ouvir perguntas sobre o sono, o humor ou a rotina — quando a queixa era \"só\" uma dor no ombro. Isso não é acaso: na MTC, corpo, mente e emoções não são compartimentos separados, são expressões diferentes do mesmo sistema." },
      { tipo: "titulo", texto: "Um sistema, não peças isoladas" },
      { tipo: "paragrafo", texto: "A medicina ocidental tende a dividir o cuidado por especialidade: um profissional para dor no movimento, outro para ansiedade, outro para digestão e assim por diante. Já a MTC parte de outro princípio — o de que esses sintomas conversam entre si e que tratar um sem entender o outro costuma dar apenas alívio parcial e temporário." },
      { tipo: "paragrafo", texto: "Isso não significa ignorar a dor física. Significa perguntar: essa tensão no ombro está isolada ou ligada às semanas de sono ruim e sobrecarga mental? Essa pergunta altera completamente o plano de cuidado." },
      { tipo: "titulo", texto: "O que isso muda na prática" },
      { tipo: "lista", itens: [
        "A avaliação inicial é mais ampla — não olha só pra onde dói, mas para o contexto completo da pessoa.",
        "As técnicas são combinadas, não isoladas: acupuntura, trigramas, auriculoterapia, moxabustão e ventosaterapia, entre outras, se complementam.",
        "O acompanhamento considera sono, rotina e estado emocional como parte do quadro."
      ]},
      { tipo: "paragrafo", texto: "No fim, o objetivo não é aliviar um sintoma por vez, mas devolver ao corpo a capacidade de se regular — física, mental e emocionalmente. É um processo mais lento que tomar um remédio, mas costuma ser mais duradouro." }
    ]
  },
  {
    slug: "moxabustao-o-que-e",
    titulo: "Moxabustão: o calor que trata a raiz do problema",
    resumo: "Uma técnica milenar para dores de origem fria — explicada sem mistério, do que é feita até quando ela costuma ser indicada.",
    tag: "Técnica",
    autor: "Erika Campos",
    data: "2026-08-03",
    capa: "../assets/images/txt2moxa.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "Moxabustão é o nome da técnica que usa o calor da combustão de uma planta chamada Artemisia (a \"moxa\") sobre pontos específicos do corpo, geralmente os mesmos usados na acupuntura. O objetivo é aquecer, ativar a circulação de energia e sangue e aliviar dores que a MTC descreve como \"de origem fria\"." },
      { tipo: "paragrafo", texto: "A moxa pode ser composta por diferentes materiais: de Artemisia pura, misturada com gengibre, canela ou outras ervas — cada combinação é pensada para reforçar um efeito específico — ou até feita só de carvão. Não existe uma única \"receita\", e é o profissional quem escolhe o tipo mais adequado para cada caso." },
      { tipo: "titulo", texto: "Como funciona a sessão" },
      { tipo: "paragrafo", texto: "O bastão ou cone de moxa é aproximado da pele — sem tocar diretamente — até que a pessoa sinta um calor confortável, nunca queimação. Em alguns casos, a moxa é usada junto com agulhas de acupuntura ou ventosas, potencializando o efeito nos pontos trabalhados." },
      { tipo: "titulo", texto: "Pra que costuma ser indicada" },
      { tipo: "lista", itens: [
        "Aumentar a imunidade",
        "Dores articulares e musculares que pioram com frio ou umidade",
        "Sensação de \"peso\" ou rigidez no corpo",
        "Cólicas e desconfortos abdominais recorrentes",
        "Baixa energia e cansaço persistente"
      ]},
      { tipo: "paragrafo", texto: "É uma técnica simples na aparência, mas de efeito profundo. Muitas pessoas relatam uma sensação de alívio e leveza logo na primeira sessão, especialmente quando combinada com outras práticas do plano de cuidados." },
      { tipo: "paragrafo", texto: "Vale lembrar que a moxa não é indicada para qualquer pessoa: gestantes, pessoas com febre, diabéticas ou com peles muito sensível, entre outras situações, pedem cuidado redobrado. Por isso, a aplicação deve ser sempre feita por um profissional, que avalia cada caso antes de indicar o tratamento." }
    ]
  },
 {
    slug: "um-outro-jeito-de-olhar",
    titulo: "Um outro jeito de olhar para o corpo",
    resumo: "Meridianos, Zang-Fu e diagnóstico pelo pulso e pela língua — os pilares de uma tradição milenar, explicados sem complicação.",
    tag: "Medicina Tradicional Chinesa",
    autor: "Erika Campos",
    data: "2026-05-03",
    capa: "../assets/images/txt1MTC.jpg",
    conteudo: [
      { tipo: "paragrafo", texto: "A Medicina Tradicional Chinesa (MTC) existe há milhares de anos e parte de uma ideia simples: o corpo é um sistema conectado, e quando alguma coisa não vai bem, o desequilíbrio quase nunca fica isolado num único lugar. Um dos conceitos mais conhecidos dessa tradição são os meridianos — canais invisíveis por onde, segundo essa visão, circula a energia vital (o famoso Qi). É por isso que a acupuntura, por exemplo, pica pontos que às vezes parecem bem distantes do sintoma: a lógica é tratar o canal, não só o local da dor." },
      { tipo: "paragrafo", texto: "Outro pilar são os Zang-Fu, que é como a MTC entende os órgãos internos. Diferente da anatomia ocidental, quando um terapeuta de MTC fala em rim ou fígado, não está se referindo só ao órgão físico, mas a um conjunto de funções mais amplo — emocionais, energéticas e físicas — associadas a ele. Por isso é comum ouvir explicações que juntam sintomas que, à primeira vista, parecem não ter nada a ver entre si." },
      { tipo: "titulo", texto: "Diagnóstico em Medicina Tradicional Chinesa" },
      { tipo: "paragrafo", texto: "Para chegar a um diagnóstico, a MTC usa métodos bem diferentes dos exames que estamos acostumados. Dois dos mais característicos são a observação da língua e a leitura do pulso. A cor, a forma e o saburra (aquela camada esbranquiçada) da língua, assim como a qualidade do pulso — se está fraco, forte, rápido, entre outras variações — funcionam como pistas sobre o que está acontecendo internamente." },
      { tipo: "paragrafo", texto: "Por fim, existe um sistema chamado Oito Critérios Diagnósticos (Ba Gang), que funciona como uma espécie de bússola para organizar tudo isso. Ele classifica o quadro da pessoa em pares opostos: interior ou exterior, frio ou calor, deficiência ou excesso, yin ou yang. Não é um diagnóstico no sentido clínico ocidental, mas uma forma de traçar um panorama geral antes de decidir o tratamento." },
      { tipo: "paragrafo", texto: "No fim das contas, a MTC não substitui a medicina convencional, mas oferece uma lente diferente — mais voltada para padrões e equilíbrio do que para causas isoladas." }
    ]
  }
];