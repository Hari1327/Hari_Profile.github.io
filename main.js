const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show');
})


const navLink =document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        console.log(sectionHeight)
        const sectionTop = current.offsetTop - 150
        console.log(sectionTop)
        sectionId = current.getAttribute('id')
        console.log(sectionId)
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nuhari27081999@gmail.com",
        Password : "E5DBF1F940783F61E16EC535A5B0D4FBBD83",
        To : 'nuhari27081999@gmail.com',
        From : "nuhari27081999@gmail.com",
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Contact: " + document.getElementById("phone") .value
            +"<br> Message " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 document.getElementById('WA__icon').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});
document.getElementById('popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });