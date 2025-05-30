function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResult = document.getElementById('searchResult');
  
  if (searchInput.value.trim() !== '') {
    searchResult.textContent = `Você buscou por: "${searchInput.value}"`;
    searchResult.classList.remove('hidden');
  } else {
    searchResult.textContent = '';
    searchResult.classList.add('hidden');
  }
}

// Opcional: Adicionar evento de tecla Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});