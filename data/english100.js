window.quizData = [
  {
    q:"apple の意味は？",
    a:"りんご",
    c:["りんご","みかん","ぶどう","ばなな"]
  },

  {
    q:"orange の意味は？",
    a:"オレンジ",
    c:["オレンジ","りんご","ぶどう","レモン"]
  },

  {
    q:"banana の意味は？",
    a:"バナナ",
    c:["バナナ","みかん","ぶどう","りんご"]
  },

  {
    q:"grape の意味は？",
    a:"ぶどう",
    c:["ぶどう","りんご","みかん","ばなな"]
  },

  {
    q:"dog の意味は？",
    a:"犬",
    c:["犬","猫","鳥","魚"]
  },

  {
    q:"cat の意味は？",
    a:"猫",
    c:["猫","犬","鳥","魚"]
  },

  {
    q:"bird の意味は？",
    a:"鳥",
    c:["鳥","犬","猫","魚"]
  },

  {
    q:"fish の意味は？",
    a:"魚",
    c:["魚","犬","猫","鳥"]
  },

  {
    q:"book の意味は？",
    a:"本",
    c:["本","机","椅子","鉛筆"]
  },

  {
    q:"pen の意味は？",
    a:"ペン",
    c:["ペン","本","机","かばん"]
  },

  {
    q:"desk の意味は？",
    a:"机",
    c:["机","本","椅子","かばん"]
  },

  {
    q:"chair の意味は？",
    a:"椅子",
    c:["椅子","机","本","鉛筆"]
  },

  {
    q:"water の意味は？",
    a:"水",
    c:["水","火","風","土"]
  },

  {
    q:"milk の意味は？",
    a:"牛乳",
    c:["牛乳","水","お茶","コーヒー"]
  },

  {
    q:"coffee の意味は？",
    a:"コーヒー",
    c:["コーヒー","牛乳","水","お茶"]
  },

  {
    q:"tea の意味は？",
    a:"お茶",
    c:["お茶","牛乳","コーヒー","水"]
  },

  {
    q:"school の意味は？",
    a:"学校",
    c:["学校","病院","駅","銀行"]
  },

  {
    q:"teacher の意味は？",
    a:"先生",
    c:["先生","生徒","医者","警察官"]
  },

  {
    q:"student の意味は？",
    a:"生徒",
    c:["生徒","先生","会社員","運転手"]
  },

  {
    q:"I ___ a student.",
    a:"am",
    c:["am","is","are","be"]
  },

  {
    q:"He ___ my brother.",
    a:"is",
    c:["is","am","are","be"]
  },

  {
    q:"They ___ happy.",
    a:"are",
    c:["are","is","am","be"]
  },

  {
    q:"This is ___ apple.",
    a:"an",
    c:["an","a","the","is"]
  },

  {
    q:"This is ___ book.",
    a:"a",
    c:["a","an","are","am"]
  },

  {
    q:"I ___ English every day.",
    a:"study",
    c:["study","studies","studied","studying"]
  },

  {
    q:"She ___ music.",
    a:"likes",
    c:["likes","like","liking","liked"]
  },

  {
    q:"We ___ soccer yesterday.",
    a:"played",
    c:["played","play","plays","playing"]
  },

  {
    q:"go の過去形は？",
    a:"went",
    c:["went","goed","goes","going"]
  },

  {
    q:"eat の過去形は？",
    a:"ate",
    c:["ate","eated","eats","eating"]
  },

  {
    q:"see の過去形は？",
    a:"saw",
    c:["saw","seen","seed","seeing"]
  }
];

const addWords = [
  ["red","赤"],["blue","青"],["green","緑"],["yellow","黄色"],["white","白"],
  ["black","黒"],["big","大きい"],["small","小さい"],["long","長い"],["short","短い"],
  ["fast","速い"],["slow","遅い"],["hot","暑い・熱い"],["cold","寒い・冷たい"],["new","新しい"],
  ["old","古い"],["good","良い"],["bad","悪い"],["easy","簡単な"],["difficult","難しい"],
  ["happy","幸せな"],["sad","悲しい"],["angry","怒った"],["tired","疲れた"],["hungry","お腹がすいた"],
  ["morning","朝"],["night","夜"],["family","家族"],["friend","友達"],["house","家"],
  ["city","都市"],["country","国"],["music","音楽"],["movie","映画"],["game","ゲーム"],
  ["run","走る"],["walk","歩く"],["eat","食べる"],["drink","飲む"],["sleep","眠る"],
  ["read","読む"],["write","書く"],["speak","話す"],["listen","聞く"],["see","見る"],
  ["open","開ける"],["close","閉める"],["buy","買う"],["sell","売る"],["make","作る"],
  ["use","使う"],["work","働く"],["live","住む"],["need","必要とする"],["want","欲しい"],
  ["think","考える"],["learn","学ぶ"],["teach","教える"],["question","質問"],["answer","答え"],
  ["time","時間"],["money","お金"],["food","食べ物"],["river","川"],["mountain","山"],
  ["sea","海"],["sky","空"],["rain","雨"],["snow","雪"],["wind","風"],
  ["window","窓"],["door","ドア"],["room","部屋"],["doctor","医者"],["nurse","看護師"],
  ["spring","春"],["summer","夏"],["autumn","秋"],["winter","冬"],["weather","天気"],
  ["Monday","月曜日"],["Tuesday","火曜日"],["Wednesday","水曜日"],["Thursday","木曜日"],["Friday","金曜日"],
  ["Saturday","土曜日"],["Sunday","日曜日"],["head","頭"],["eye","目"],["ear","耳"],
  ["mouth","口"],["hand","手"],["foot","足"],["face","顔"],["shirt","シャツ"],
  ["shoes","靴"],["hat","帽子"],["breakfast","朝食"],["lunch","昼食"],["dinner","夕食"],
  ["library","図書館"],["hospital","病院"],["restaurant","レストラン"],["hotel","ホテル"],["bank","銀行"],
  ["airport","空港"],["station","駅"],["ticket","切符"],["map","地図"],["key","鍵"],
  ["letter","手紙"],["newspaper","新聞"],["camera","カメラ"],["phone","電話"],["computer","コンピューター"],
  ["email","メール"],["story","物語"],["picture","絵・写真"],["problem","問題"],["idea","考え"]
];

const meanings = addWords.map(x => x[1]);

addWords.forEach(([word, answer]) => {
  const wrongs = meanings
    .filter(m => m !== answer)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  window.quizData.push({
    q: word + " の意味は？",
    a: answer,
    c: [answer, ...wrongs]
  });
});
