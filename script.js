let randomBtn = document.getElementById("random")
let allBtn = document.getElementById("all")

randomBtn.addEventListener("click", random)
allBtn.addEventListener("click", all)
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let nickname = document.getElementById("nickname")


let nicknameArray = [' "Crusher" ', ' "the Scientist" ', ' "Twinkle-toes" ', ' "the Coder" ', ' "the Jester" ', ' "the Sloth" ', ' "Quick-Silver" ']

function random() {
    let randomNickname = Math.floor(Math.random() * nicknameArray.length)
    console.log(randomNickname)
    document.getElementById("nickname").innerHTML = firstName.value + nicknameArray[randomNickname] + lastName.value;
}

function all() {
    let nicknames = ''
    for(let i = 0; i < nicknameArray.length; i++){
        nicknames += firstName.value + nicknameArray[i] + lastName.value + '<br>';
    }
    nickname.innerHTML = nicknames
}