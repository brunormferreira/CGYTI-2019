let months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
let emails = [
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  },
  {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: faker.date.past()
  }
];

const emailPreview = document.getElementsByClassName("email-list");
console.log(emailPreview);

$("a.write-email").click(function() {
  $("section.new-message").removeClass("invisible");
});

$("li.new-message-close").click(function() {
  $("section.new-message").addClass("invisible");
});

$("label.search-email-box").click(function() {
  $(this).addClass("search-email-click");
  $("input.search-email").css("background-color", "white");
});

$("body").click(function(event) {
  if (!$("label.search-email-box").is(event.target) && !$("input.search-email").is(event.target)) {
    $("label.search-email-box").removeClass("search-email-click");
    $("input.search-email").css("background-color", "#f1f3f4");
  }
});

let intervalEmail = window.setInterval(getNewEmail, 15000);
let intervalNewEmail = window.setInterval(getNewEmailHtml, 15000);

function getNewEmail() {
  let newEmail = {
    name: faker.name.findName(),
    subject: faker.random.words(3),
    preview: faker.random.words(6),
    date: new Date()
  };
  emails.push(newEmail);
}

function getNewEmailHtml() {
  let htmlEmails = "";

  emails.sort(function(email1, email2) {
    return new Date(email2.date) - new Date(email1.date);
  });

  emails.forEach(function(email) {
    htmlEmails += `
        <tr>
            <td class="checkbox-column">
              <img src="https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_black_20dp.png"
                title="Checkbox" alt="checkbox">
            </td>
            <td class="star-column">
              <img src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png" title="Star"
                alt="star">
            </td>
            <td class="info-column">
            <span class="email-item">${email.name}</span>
          </td>
          <td class="info-column">
            <span class="email-item">${email.subject} - </span>
            <span class="email-item-info">${email.preview} </span>
          </td>
          <td class="info-column">
            <span>${defineDateString(email.date)}</span>
          </td>
          </tr>`;
  });
  emailPreview[0].innerHTML = htmlEmails;
}

function defineDateString(date){
  let dateNow = new Date();
  let dateParsed = date.getTime();
  const diffTime = Math.abs(dateNow - dateParsed);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  if (diffDays < 1)
    return `${date.getHours()}:${date.getMinutes()}`;
  if (dateNow.getFullYear() == date.getFullYear()) return `${date.getDate()} de ${months[date.getMonth()]}`;
  return `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;
}

getNewEmail();
getNewEmailHtml();
