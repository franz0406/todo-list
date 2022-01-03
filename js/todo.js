const todoContainer = document.querySelector("#todo_list"),     // 투두리스트 section 태그
      todoForm = todoContainer.querySelector("form"),           //     *     Form 태그
      todoInput = todoContainer.querySelector("input"),         //     *     Input 태그
      todoList_Ul = todoContainer.querySelector("ul");          //     *     ul 태그

let todoArr = []; // 투두리스트 담을 배열


const savedTodos = JSON.parse(localStorage.getItem("todo"));    // 가져온 값들을 투두리스트 배열에 추가
savedTodos.forEach(items => todoArr.push(items)); 

todoArr.forEach(item => createTodoList(item));                  // 저장된 배열 값들로 li 태그 생성함수 호출

todoForm.addEventListener("submit", saveTodos);                 // 투두리스트 입력 후 이벤트

function saveTodos(e){  // 투두 입력값 li 태그로 생성하는 함수
    e.preventDefault();
    const todoList = todoInput.value,     // 입력 값 저장
          trimedTodo = todoList.trim();   // 입력 값의 앞,뒤 공백 제거 ( 공백만 있어도 제거 )
    
    todoInput.value = "";   // 입력 값 저장 후 투두 input value 초기화
    
    const todoObj = {       // 입력받은 값으로 객체 생성                                      
        text : trimedTodo,  // li의 text로 사용
        id : Date.now()     //   *  id로 사용 ( Date.now() 내장함수로 랜덤 숫자 받음 )
    }

    todoArr.push(todoObj);                                  // 생성한 객체 todoArr 배열에 저장
    createTodoList(todoObj);                                // 전달받은 객체 값들로 li태그 생성 함수 호출
    localStorage.setItem("todo", JSON.stringify(todoArr));  // 로컬저장소에 값 저장
}

function createTodoList(usertodo){
    if(usertodo !== ""){ // 입력값이 없는지 체크
        const li = document.createElement('li'),            // li태그 생성
                span = document.createElement('span'),      // span태그 생성
                button = document.createElement('button');  // button태그 생성
        
        li.appendChild(span);                               // li태그 자식으로 생성한 span태그 추가
        span.innerText = usertodo.text;                     // 그 span태그 내용으로 사용자 투두 입력 값 저장
        li.id = usertodo.id;
        li.appendChild(button);                             // li태그 자식으로 생성한 button태그 추가
        button.innerText = "삭제";                          // button태그 내용으로 "삭제" 추가
        button.addEventListener("click", deleteTodo )       // button태그에 클릭시 투두리스트 삭제 
        todoList_Ul.appendChild(li);                        // 위의 과정으로 완성된 li태그를 투두리스트 ul태그 자식으로 추가
    }
}

function deleteTodo(e){
    const targetList = e.target.parentElement;      
    targetList.remove();
    todoArr = todoArr.filter(item => {return item.id !== parseInt(targetList.id)});
    localStorage.setItem("todo", JSON.stringify(todoArr));  // 새로 만들어진 배열로 로컬저장소에 값 다시 저장
}