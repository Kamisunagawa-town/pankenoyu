// 宿泊プラン（客室タイプ別）データ
const rooms = [
  {
    name: "トイレ付 洋室（ツインルーム）",
    note: "全室バス（ユニットバス）・トイレ完備",
    highlight: true,
    rows: [
      { people: "1名", sudomari: "6,200円", asa: "7,200円", nishoku: "10,200円" },
      { people: "2名", sudomari: "5,700円", asa: "6,700円", nishoku: "9,700円" },
      { people: "3名", sudomari: "5,100円", asa: "6,100円", nishoku: "9,100円" }
    ]
  },
  {
    name: "特別室",
    note: "ゆったり過ごせる特別室",
    rows: [
      { people: "1名", sudomari: "10,000円", asa: "11,000円", nishoku: "14,000円" },
      { people: "2名", sudomari: "9,000円", asa: "10,000円", nishoku: "13,000円" },
      { people: "3名", sudomari: "7,900円", asa: "8,900円", nishoku: "11,900円" },
      { people: "4名", sudomari: "6,500円", asa: "7,500円", nishoku: "10,500円" },
      { people: "5〜6名", sudomari: "5,400円", asa: "6,400円", nishoku: "9,400円" }
    ]
  },
  {
    name: "トイレ付 和室",
    note: "定員5名・トイレ付",
    rows: [
      { people: "1名", sudomari: "5,900円", asa: "6,900円", nishoku: "9,900円" },
      { people: "2名", sudomari: "5,400円", asa: "6,400円", nishoku: "9,400円" },
      { people: "3〜4名", sudomari: "4,800円", asa: "5,800円", nishoku: "8,800円" }
    ]
  },
  {
    name: "トイレ無 和室（10畳）",
    note: "定員5名・リーズナブル",
    rows: [
      { people: "1名", sudomari: "4,300円", asa: "5,300円", nishoku: "8,300円" },
      { people: "2名", sudomari: "3,800円", asa: "4,800円", nishoku: "7,800円" },
      { people: "3〜4名", sudomari: "3,500円", asa: "4,500円", nishoku: "7,500円" },
      { people: "5名", sudomari: "3,300円", asa: "4,300円", nishoku: "7,300円" }
    ]
  },
  {
    name: "トイレ無 和室（7畳）",
    note: "定員2名・もっともリーズナブル",
    rows: [
      { people: "1名", sudomari: "4,000円", asa: "5,000円", nishoku: "8,000円" },
      { people: "2名", sudomari: "3,600円", asa: "4,600円", nishoku: "7,600円" }
    ]
  }
];

// 客室カードとして表示
document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.getElementById("plan-list");
  wrap.innerHTML = "";
  rooms.forEach(function (r) {
    const card = document.createElement("div");
    card.className = "plan-card" + (r.highlight ? " plan-highlight" : "");

    let badge = r.highlight ? '<span class="plan-badge">人気</span>' : "";

    let tableRows = "";
    r.rows.forEach(function (row) {
      tableRows +=
        '<tr>' +
          '<td>' + row.people + '</td>' +
          '<td>' + row.sudomari + '</td>' +
          '<td>' + row.asa + '</td>' +
          '<td>' + row.nishoku + '</td>' +
        '</tr>';
    });

    card.innerHTML =
      badge +
      '<h4>' + r.name + '</h4>' +
      '<p class="plan-room">🛏 ' + r.note + '</p>' +
      '<table class="mini-price">' +
        '<tr><th>人数</th><th>素泊</th><th>朝食付</th><th>2食付</th></tr>' +
        tableRows +
      '</table>' +
      '<p class="plan-unit">お一人あたり・税込（入湯税込）</p>';
    wrap.appendChild(card);
  });
});
