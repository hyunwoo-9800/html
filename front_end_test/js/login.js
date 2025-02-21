// 로그인 체크용 (login.html)
function login() {

    // id값으로 입력값을 얻어와서 각각의 변수에 저장
    var email = document.getElementById("login_emaliaddress").value;
    var password = document.getElementById("login_pwd").value;

    // 입력체크 시작
    if (email == null || email == "") {
        alert("이메일을 입력해주세요.");
        return false;
    }

    if (password == null || password == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    // 이메일 형식이며, 패스워드가 입력되어 있다면 문구를 출력 후 페이지 이동
    if (email_check() == true) {
        if (password != null && password != "") {
            alert(email + "님 환영합니다!");
            location.href = 'main.html';
            return true;
        }
    }

}

// input타입 required속성을 대신해서 입력확인을 할 함수
// 정규식으로 이메일 형식 체크
function email_check() {
    var email = document.getElementById("login_emaliaddress").value;
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(email)) {
        alert("이메일 형식에 맞게 적어주세요.");
        return false;
    } else {
        return true;
    }
}

// 페이지 이동용 함수
function go_join() {
    location.href = 'signup.html';
}

function go_login() {
    location.href = 'login.html';
}