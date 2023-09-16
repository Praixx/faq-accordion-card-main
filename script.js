const faqQuestions = document.querySelectorAll(".faq-QA .faq div a");
const faqAnswers =  document.querySelectorAll(".faq-QA .faq div p");
const icons = document.querySelectorAll(".faq-QA .faq img");

faqQuestions.forEach(function(question){
    question.addEventListener("click", function(event){
        event.preventDefault();

        faqQuestions.forEach(function(allquestion){
            allquestion.style.color = "var(--Very-dark-grayish-blue)"; 
        })
        faqAnswers.forEach(function(result){
            result.style.display = "none"
        })

        icons.forEach(function(icon){
            icon.className = "arrow-down"
        })

        this.style.color = "var(--Very-dark-desaturated-blue)";
        const clicked = this.getAttribute("href");
        const answer = document.querySelector(clicked)
        const clickedIcon = document.querySelector(`${clicked}icon`)

        
        answer.style.display = "block"
        clickedIcon.classList.add("clicked-arrow-down")
        
    })
})