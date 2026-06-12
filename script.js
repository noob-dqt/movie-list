fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>我的影视清单</h1>`;

    for (const [categoryName, list] of Object.entries(data)) {
      const catDiv = document.createElement('div');
      catDiv.className = 'category';

      let icon = '';
      if (categoryName.includes('电影')) icon = '🎬';
      else if (categoryName.includes('电视剧')) icon = '📺';
      else if (categoryName.includes('动漫')) icon = '✨';
      else if (categoryName.includes('期待')) icon = '⭐';

      catDiv.innerHTML = `<h2>${icon} ${categoryName}</h2>`;

      // 渲染条目
      list.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = item;
        catDiv.appendChild(itemDiv);
      });

      // 空列表提示
      if (list.length === 0) {
        const emptyTip = document.createElement('div');
        emptyTip.className = 'empty-tip';
        emptyTip.textContent = '暂无内容';
        catDiv.appendChild(emptyTip);
      }

      container.appendChild(catDiv);
    }
  })
  .catch(err => console.error('加载失败:', err));
