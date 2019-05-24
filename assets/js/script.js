const users = [{
        nome: 'Mauricio',
        foto: 'assets/images/users/mauricio.jpeg',
        ultimaMensagem: 'Você: Funfa sim!',

    },
    {
        nome: 'Tejada',
        foto: 'assets/images/users/tejada.png',
        ultimaMensagem: 'Você: Sou backend :P',

    },
    {
        nome: 'Bean',
        foto: 'assets/images/users/bean.jpeg',
        ultimaMensagem: 'Você: Hello XD',
    },

]

let html = ''

users.forEach(user => {
    html += `
<div class="hangout-talk-profile">
        <img src=${user.foto} title="User" alt="User" class="profile-photo" />
        <div class="hangout-users-info">
          <p class="profile-name">${user.nome}</p>
          <span class="profile-message">${user.ultimaMensagem}</span>
        </div>
      </div>
  `
})

const divContatos = document.getElementById('hangout-talk')
divContatos.innerHTML = html

let emails = [];

$("a.write-email").click(function() {

    $("section.new-message").removeClass("invisible");
});

$("li.new-message-close").click(function () {
    $("section.new-message").addClass("invisible");
});

$("label.search-email-box").click(function () {
    $(this).addClass("search-email-click");
    $("input.search-email").css('background-color', 'white');
});

$("body").click(function (event) {
    if (!$("label.search-email-box").is(event.target) && !$("input.search-email").is(event.target)) {
        $("label.search-email-box").removeClass("search-email-click");
        $("input.search-email").css('background-color', '#f1f3f4');
    }
});

let intervalEmail = window.setInterval(getNewEmail, 30000);

function getNewEmail(){
    let newEmail = {
        name: faker.name.findName(),
        subject: faker.random.words(3),
        preview: faker.random.words(6),
        date: faker.date.past()
    }

    emails.push(newEmail);
}

getNewEmail();

console.log(emails);