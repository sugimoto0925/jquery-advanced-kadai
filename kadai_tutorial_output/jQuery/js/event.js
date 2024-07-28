$(function() {
  $(document).on('click keydown',(e) => {
    //クリックされた場合
    if(e.type === 'click'){
      $('div').text('クリックされました！');
    }
    //キーが押された場合
    if(e.type === 'click'){
      $('div').text('キーが押されました！');
    }
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