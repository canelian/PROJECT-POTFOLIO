// 검색창 컴포넌트 UI
$(function(){
  const html = `
    <!-- 검색 UI -->
    <div class="serch-box">
    <form class="search-box-container">
      <input 
        type="search" 
        id="search"
        placeholder="검색"
        required
      >
      <div class="button-group">
        <button id="submit" type="submit">
          <i class="bi bi-search"></i></button>
        <button class="btn-close2">
          <i class="bi bi-x"></i></button>
      </div>
    </form>
  </div>`;
  $('body').append(html); 

}); // $

/*** #gnb toggle ***/
$(function(){
   // 1. 열기: #toggle-gnb 클릭시 #gnb on
  $('#toggle-gnb').click(function(){
    $('#gnb').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('#btn-close').click(function(){
      $('#gnb').removeClass('on');
  })

// 검색창
  $('#icon-menu .bi-search').click(function(){
   // 열기
    $(".search-box").addClass('on');
  });
  // 닫기
  $('.search-box #btn-close2').click(function(){
      $(".search-box").removeClass('on');
  })
});