import '../css/style.scss'


const password = document.getElementById("password")

const passwordToggle = document.querySelector('.password_icon')

// console.log(password, passwordToggle);

passwordToggle.addEventListener('click', () => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text')
    passwordToggle.classList.remove('show')
    passwordToggle.classList.add('show')
  } else {
    password.setAttribute('type', 'password')
    passwordToggle.classList.remove('show')
  }
})

password.addEventListener('keyup', () => {
  console.log(password.value);
  checkPassword(password.value)
})

function checkPassword(info) {

  const passwordMsg = document.getElementById("password_msg")
  passwordMsg.textContent = '需要'
  const lower = new RegExp('(?=.*[a-z])') // 小写
  const upper = new RegExp('(?=.*[A-Z])') // 大写
  const number = new RegExp('(?=.*[0-9])') //数字
  const special = new RegExp('(?=.*[!@#\$%\^&\*])') //特殊字符，可以更完善
  const length = new RegExp('(?=.{8,})') // 长度

  // const email = new RegExp('(?:[a-z0-9!#\$%&\'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#\$%&\'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])')

  let errorFlag = false;

  if (!lower.test(info)) {
    passwordMsg.textContent += ' 小写 '
    errorFlag = true
  }

  if (!upper.test(info)) {
    passwordMsg.textContent += ' 大写 '
    errorFlag = true
  }

  if (!number.test(info)) {
    passwordMsg.textContent += ' 数字 '
    errorFlag = true
  }

  if (!special.test(info)) {
    passwordMsg.textContent += ' 特殊字符 '
    errorFlag = true
  }

  if (!length.test(info)) {
    passwordMsg.textContent += ' 长度大于8 '
    errorFlag = true
  }

  const passwordGroup = document.getElementById("password_group")
  if (errorFlag) {
    passwordGroup.classList.remove('success')
    passwordGroup.classList.add('error')
  } else {
    passwordGroup.classList.remove('error')
    passwordGroup.classList.add('success')
  }
}