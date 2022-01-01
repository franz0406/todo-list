const clock = document.querySelector(".clock"),   
      date = document.querySelector(".clock + p"); 

function getTimeAndDate(){
    const now = new Date();

    let getHours = String(now.getHours()).padStart(2, "0");       // 시
    const getMin = String(now.getMinutes()).padStart(2, "0"),     // 분
          getSec = String(now.getSeconds()).padStart(2, "0"),     // 초
          getYear = String(now.getFullYear()),                    // 년
          getMonth = String(now.getMonth() + 1).padStart(2, "0"), // 월
          getDate = String(now.getDate()).padStart(2, "0"),       // 일
          getDay = now.getDay();                                  // 요일

    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    let morningAfter = "am"; // 오전 or 오후 저장 변수
    
    if(getHours > 12){ 
        getHours = String(getHours - 12); // 13시 ~ 24시까지는 --> 01시 ~ 12시로 변경 
        morningAfter = "pm";              // 오후시간에는 am --> pm 변경
    }
    
    clock.innerHTML = `${getHours}:${getMin}:${getSec} <span>${morningAfter}</span>` ;
    date.innerHTML = `${getYear}-${getMonth}-${getDate} <span>${days[getDay]}</span>`; 
}

getTimeAndDate();
setInterval(getTimeAndDate, 1000);
