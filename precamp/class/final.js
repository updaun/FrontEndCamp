const changeFocus = () => {
    let phone1 = document.getElementById('phone1').value
    if (phone1.length === 3) {
        document.getElementById('phone2').focus()
    }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById('phone2').value
    if (phone2.length === 4) {
        document.getElementById('phone3').focus()
    }
}

const inputFinish = () => {
    let phone1 = document.getElementById('phone1').value
    let phone2 = document.getElementById('phone2').value
    let phone3 = document.getElementById('phone3').value

    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById('auth-button').disabled = false
    }
}


const checkValidation = function() {

    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let passwordConfirm = document.getElementById('password-confirm').value
    let phone1 = document.getElementById('phone1').value
    let phone2 = document.getElementById('phone2').value
    let phone3 = document.getElementById('phone3').value
    let region = document.getElementById('signup-region').value
    let genderInput = document.querySelector('input[name="gender"]:checked')
    let gender
    if (genderInput) {
        gender = genderInput.value
    }

    if(email && name && password && passwordConfirm && phone1 && phone2 && phone3 && region && genderInput) {
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            document.getElementById('email-error').innerText = '이메일 형식이 올바르지 않습니다.'
            return
        }
        if(password !== passwordConfirm) {
            document.getElementById('password-error').innerText = '비밀번호가 일치하지 않습니다.'
            document.getElementById('password-confirm-error').innerText = '비밀번호가 일치하지 않습니다.'
            return
        }
        alert('코드캠프 가입을 축하합니다.')
    } else {
        if (!email) {
            document.getElementById('email-error').innerText = '이메일을 입력해주세요.'
        } else {
            document.getElementById('email-error').innerText = ''
        }
        if (!name) {
            document.getElementById('name-error').innerText = '이름을 입력해주세요.'
        } else {
            document.getElementById('name-error').innerText = ''
        }
        if (!password) {
            document.getElementById('password-error').innerText = '비밀번호를 입력해주세요.'
        } else {
            document.getElementById('password-error').innerText = ''
        }
        if (!passwordConfirm) {
            document.getElementById('password-confirm-error').innerText = '비밀번호 확인을 입력해주세요.'
        } else {
            document.getElementById('password-confirm-error').innerText = ''
        }
        if (!phone1 || !phone2 || !phone3) {
            document.getElementById('phone-error').innerText = '휴대폰 번호를 입력해주세요.'
        } else {
            document.getElementById('phone-error').innerText = ''
        }
        if (!region) {
            document.getElementById('region-error').innerText = '지역을 선택해주세요.'
        } else {
            document.getElementById('region-error').innerText = ''
        }
        if (!genderInput) {
            document.getElementById('gender-error').innerText = '성별을 선택해주세요.'
        } else {
            document.getElementById('gender-error').innerText = ''
        }
    }
}

let isStarted = false

const number_send = () => {

    if(isStarted === false) {
        // 타이머가 작동중이 아닐 때
        isStarted = true
        document.getElementById('finish').disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        document.getElementById('target').innerText = token
        // document.getElementById('target').style.color = "#" + token

        let time = 3
        let timer

        timer = setInterval(function() {
            if (time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String((time%60)).padStart(2, "0")
                document.getElementById('timer').innerText = min + ":" + sec
                time = time -1
            } else {
                document.getElementById('finish').disabled = true
                isStarted = false
                clearInterval(timer)
            }
        }, 1000)

    } else {
        // 타이머가 작동중일 때
    }

}
