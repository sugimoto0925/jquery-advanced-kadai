// 趣味(チェックボックス)を取得する
$('[name="hobby"]:checked').each(function() {
  //$(this)は1つずつの選択された要素を意味する
  console.log('趣味:' + $(this).val());
});
});
// 名前が入力されたら
$('[name="username"]').on("input", function () {
 let input = $(this).val();

 // 入力文字があればボタンを押せる、なければボタンを押せなくする
 if (input) {
   $('#check').prop('disabled', false);
 } else {
   $('#check').prop('disabled', true);
 }
});
});