document.getElementById('year').textContent = new Date().getFullYear();

function formatarData(iso){
  const [ano, mes, dia] = iso.split('-');
  const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return `${parseInt(dia,10)} ${meses[parseInt(mes,10)-1]} ${ano}`;
}

const listEl = document.getElementById('postList');
const emptyEl = document.getElementById('emptyState');

const ordenados = [...posts].sort((a,b) => new Date(b.data) - new Date(a.data));

if (ordenados.length === 0){
  emptyEl.style.display = 'block';
} else {
  ordenados.forEach(post => {
    const row = document.createElement('a');
    row.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
    row.className = 'post-row';
    row.innerHTML = `
      <div class="thumb"><img src="${post.capa}" alt="${post.titulo}" loading="lazy"></div>
      <div>
        <span class="tag">${post.tag}</span>
        <h3>${post.titulo}</h3>
        <p class="excerpt">${post.resumo}</p>
        <span class="date">${formatarData(post.data)}</span>
      </div>
    `;
    listEl.appendChild(row);
  });
}
