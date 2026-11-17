"use strict";
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const articles = [...document.querySelectorAll('article')];
for (const name of new Set(articles.map(x => x.querySelector('.tag').textContent))) {
  const option = document.createElement('option');
  option.value = option.textContent = name;
  category.append(option);
}
function filterQuestions() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const article of articles) {
    const matches = article.dataset.search.toLowerCase().includes(query) &&
      (!category.value || article.querySelector('.tag').textContent === category.value);
    article.hidden = !matches;
    if (matches) count++;
  }
  document.querySelector('#count').textContent = `显示 ${count} / ${articles.length} 题`;
  document.querySelector('#empty').hidden = count !== 0;
}
search.addEventListener('input', filterQuestions);
category.addEventListener('change', filterQuestions);
