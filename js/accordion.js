
const questions = document.querySelectorAll('.questions');
for (singleQ of questions){
    singleQ.addEventListener('click', function(){ //*1 when click on a single question 
        // 
        const answer = document.querySelectorAll('.answer');
        for(let singleAns of answer){
            if( singleAns !== this.nextElementSibling){  //2 when click if open paragraph is no a sibling 
                singleAns.classList.remove('open') //2 solution then close it
            }
        }
        // 
        // const openAccordion = this.nextElementSibling;
        this.nextElementSibling.classList.toggle('open'); //*1 solution : open next sibling means paragraph
    })
}