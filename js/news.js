// お知らせ(news.json)を読み込んで一覧に表示する
document.addEventListener("DOMContentLoaded", function () {
  fetch("news.json")
    .then(function (response) {
      if (!response.ok) throw new Error("news.json を読み込めませんでした");
      return response.json();
    })
    .then(function (newsList) {
      const ul = document.getElementById("news-list");
      ul.innerHTML = ""; // 中身をリセット
      newsList.forEach(function (item) {
        const li = document.createElement("li");
        const date = document.createElement("span");
        date.className = "date";
        date.textContent = item.date;
        const text = document.createElement("span");
        text.textContent = item.text;
        li.appendChild(date);
        li.appendChild(text);
        ul.appendChild(li);
      });
    })
    .catch(function (error) {
      const ul = document.getElementById("news-list");
      ul.innerHTML = "<li>お知らせを読み込めませんでした。</li>";
      console.error(error);
    });
});
