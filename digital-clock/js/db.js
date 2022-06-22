$(function () {
  setInterval(function(){ 
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let amp = d.getHours();
    console.log(hour, min, sec);

    // 0~9까지 앞에 0 붙이기
    if(hour < 10) {
      hour = '0' + hour;
    }

    if(min < 10) {
      min = '0' + min;
    }

    if(sec < 10) {
      sec = '0' + sec;
    }

    // 과제
    // 오전 오후 표시 24시간제 if()
    // 알람기능: 50분이 되면 '휴식시간'경고창 띄우기
    
    if(amp >= 13) {
      amp = "오후";
    } else {
      amp = "오전";
    }

    if(min == 50) {
      alert("휴식시간");
    } 

    
    
    
    // html에 날짜 출력
    $('.amp').html(amp);
    $('.hour').html(hour);
    $('.min').html(min);
    $('.sec').html(sec);
  })
})
