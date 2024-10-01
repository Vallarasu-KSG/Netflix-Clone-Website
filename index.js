// languageButton
// const languageButton = document.querySelector('.language-button');
// const languageDropdown = document.querySelector('.language-dropdown');

// languageButton.addEventListener('click', () => {
//     languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
// });
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll('.wrapper svg');
const firstCard = carousel.querySelector(".card-img");
const firstCardWidth = firstCard.offsetWidth;

let scrollPosition = 0;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
    const direction = btn.id === "left" ? -1 : 1;
    scrollPosition += direction * firstCardWidth;
    carousel.scrollLeft = scrollPosition;
  });
});



let accordian = document.querySelectorAll(".question");

for (let i = 0; i < accordian.length; i++)
{
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus"))
    {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-plus");
    }
    else
    {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    }
    else
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// GetStarted emailInput

function GetStarted() {
  const emailInput = document.querySelector('.form-email-input');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const emailValue = emailInput.value.trim();
  if (!emailValue) 
    {
      alert("Enter email address");
    }
  else if (!emailRegex.test(emailValue)) 
    {
      alert("Invalid email format");
      return;
    }
  else
    { 
    alert(emailValue + " Verify your email address. request send your email Check it in 24hr ");
    emailInput.value = "";
    }
}