const loginForm = document.querySelector(".login_form")         // 사용자 이름 폼
      loginInput = loginForm.querySelector("input"),            // 사용자 이름입력 인풋
      loginBtn = loginForm.querySelector("button"),             // 사용자 이름 확인 버튼
      modal = loginForm.querySelector("div"),                   // 이름 입력 모달창
      userName = document.getElementById("user_name"),          // 유저이름 저장될 h2 태그
      todoSection = document.getElementById("todo_list");          // 투두리스트 섹션

const HIDDEN_CLASS = "hidden";      // class="hidden";
const USERNAME_KEY = "todo_user"    // 로컬스토리지 KEY 이름

const getUserName = localStorage.getItem(USERNAME_KEY);    // 로컬스토리지에 저장된 사용자 이름 가져오기

if(getUserName === null){                                  // 로컬스토리지에 사용자 이름 정보 유무 확인
    // 사용자 이름 정보 X
    loginForm.classList.remove(HIDDEN_CLASS);              // 사용자 이름 입력 폼 보여주기
    loginForm.addEventListener('submit', saveUserName );   // 사용자 이름 확인 버튼 이벤트
} else {
    // 사용자 이름 정보 O
    setUserName(); // 사용자 이름 저장 함수 호출
}

function saveUserName(e){                // 사용자 이름 저장 함수
    e.preventDefault();    
    let saveValue = loginInput.value;    // 사용자 이름 저장
    const name = saveValue.trim();       // 저장한 사용자 이름 앞뒤 공백 제거 ( 앞뒤 공백 제거함으로 공백만(space키) 입력한 경우도 체크! )
    if(name === ""){                     // 사용자 이름 값 없이 확인 버튼 클릭시
        modal.classList.add("modal");            
    } else {
        loginInput.value="";
        loginForm.classList.add(HIDDEN_CLASS);             // 사용자 이름 입력 폼 숨기기
        localStorage.setItem(USERNAME_KEY, name);          // 로컬스토리지에 사용자 이름 저장.
        setUserName();                                     // 사용자 이름 저장 함수 호출
    }
}

function setUserName(){ // 사용자 이름 저장 함수
    const getLocalName = localStorage.getItem(USERNAME_KEY); // 로컬스토리지에 저장된 사용자 이름 정보 가져오기
    userName.innerHTML = `${getLocalName} <span>'s Todo</span>`;        // 사용자 이름 h2 태그 내용으로 추가
    userName.classList.remove(HIDDEN_CLASS);                 // 저장한 사용자 이름 h2 태그 보여주기
    todoSection.classList.remove(HIDDEN_CLASS);                 // 투두리스트 섹션 보여주기
}

modal.addEventListener("click", () => { // 이름 입력 모달창 제거
    modal.classList.remove("modal");
})