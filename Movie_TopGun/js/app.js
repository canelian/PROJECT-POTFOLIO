/*
  1.이미지 썸네일 클릭
   - ligth box에 해당 이미지 url 변경
   - 팝업 display
  2.닫기 버튼 클릭
   - popup창 닫기
*/

const img = document.querySelectorAll('#gallery li');
// 이미지 요소에 이벤트 등록
for(let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(){
    // 이미지 탐색후 URL값 가져오기
    let imgurl = img[i].children[0].getAttribute('src');
    console.log(imgurl);
    /*console.log(img[i].children[0].src);*/
    
    //라이트 박스 표시
    const lightbox = document.getElementById('lightbox');
    // lightbox.setAttribute('class', 'on');
    lightbox.classList.add('on');
    // 클릭한 이미지 표시
    const lightboxImg = document.querySelector('#lightbox .box img');
    lightboxImg.setAttribute('src', imgurl);
  });
  /*console.log(img[i].children[0]);*/
}

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function() {
  const lightbox = document.getSelection('lightbox');
  lightbox.classList.remove('on');
});
  