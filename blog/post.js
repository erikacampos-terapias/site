document.getElementById('year').textContent = new Date().getFullYear();

function formatarData(iso){
  const [ano, mes, dia] = iso.split('-');
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  return `${parseInt(dia,10)} de ${meses[parseInt(mes,10)-1]} de ${ano}`;
}

function renderBloco(bloco){
  if (bloco.tipo === 'paragrafo') return `<p>${bloco.texto}</p>`;
  if (bloco.tipo === 'titulo') return `<h2>${bloco.texto}</h2>`;
  if (bloco.tipo === 'lista') return `<ul>${bloco.itens.map(i => `<li>${i}</li>`).join('')}</ul>`;
  if (bloco.tipo === 'imagem') {
    const legenda = bloco.legenda ? `<figcaption>${bloco.legenda}</figcaption>` : '';
    return `<figure class="post-figure"><img src="${bloco.url}" alt="${bloco.legenda || ''}" loading="lazy">${legenda}</figure>`;
  }
  return '';
}

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
const post = posts.find(p => p.slug === slug);

const contentEl = document.getElementById('postContent');
const notFoundEl = document.getElementById('notFound');

if (!post) {
  contentEl.style.display = 'none';
  notFoundEl.style.display = 'block';
} else {
  document.getElementById('pageTitle').textContent = `${post.titulo} — Erika Campos Terapias`;
  document.getElementById('pageDesc').setAttribute('content', post.resumo);

  contentEl.innerHTML = `
    <div class="post-meta">
      <span class="tag">${post.tag}</span>
      <span class="date">${formatarData(post.data)}</span>
    </div>
    <h1>${post.titulo}</h1>
    ${post.autor ? `<p class="post-author">Por ${post.autor}</p>` : ''}
    <div class="post-cover"><img src="${post.capa}" alt="${post.titulo}"></div>
    <div class="post-body">
      ${post.conteudo.map(renderBloco).join('')}
    </div>
    <div class="post-cta">
      <div>
        <h3 style="margin-bottom:6px;">Quer conversar sobre o seu caso?</h3>
        <p style="margin-bottom:0;font-size:.92rem;">Agende uma avaliação pelo WhatsApp.</p>
      </div>
      <a class="btn" href="https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C%20Erika!%20Vim%20do%20blog%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener">Falar no WhatsApp</a>
    </div>
  `;
}
