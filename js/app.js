// 사용자 이름 정보 스크립트
const loginInput = document.querySelector(".login_form input"), // 사용자 이름입력 인풋
      loginBtn = document.querySelector(".login_form button"),  // 사용자 이름 확인 버튼
      modal = document.querySelector(".login_form div");        // 이름 입력 모달창

loginBtn.addEventListener('click', getUserName ); // 사용자 이름 확인 버튼 이벤트

function getUserName(e){ // 사용자 이름 가져오기
    e.preventDefault();
    let userName = loginInput.value;
    if(userName === ""){ // 사용자 이름 값 없을 때
        modal.classList.add("modal");            
    }
}
modal.addEventListener("click", ()=>{ // 모달창 제거
    modal.classList.remove("modal");
})