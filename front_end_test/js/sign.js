// 회원가입 체크용(signup.html)
function join() {

    // id값으로 입력값을 얻어와서 각각의 변수에 저장
    var email = document.getElementById("emailAddress").value;
    var password = document.getElementById("pwd").value;
    var confirm = document.getElementById("confirmPwd").value;

    // 입력체크 시작
    if (email == null || email == "") {
        alert("이메일을 정확히 입력해주세요.");
        return false;
    }
    
    if (password == null || password == "") {
        alert("비밀번호를 정확히 입력해주세요.");
        return false;
    }

    if (confirm == null || confirm == "") {
        alert("비밀번호 확인란이 비어있습니다.");
        return false;
    }
    
    if (password != confirm) {
        alert("입력한 패스워드가 다릅니다.");
        return false;
    }

    // 이메일이 정확하고, 패스워드가 공란이거나 null값이 아니면 회원가입 처리
    if (emailCheck() == true) {
        if (password != null && password != "") {
            alert("회원가입이 완료되었습니다.")
        }
    }

}

// input타입 required속성을 대신해서 입력확인을 할 함수
// 정규식으로 이메일 형식 체크
function emailCheck() {
    var email = document.getElementById("emailAddress").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
        alert("이메일 형식에 맞게 적어주세요.");
        return false;
    } else {
        return true;
    }
}

// 페이지 이동용 함수
function goJoin() {
    location.href = 'signup.html';
}

function goLogin() {
    location.href = 'login.html';
}