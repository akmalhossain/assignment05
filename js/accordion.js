
const questions = document.querySelectorAll('.questions');
for (singleQ of questions){
    singleQ.addEventListener('click', function(){ 
        const answers = document.querySelectorAll('.answer');
        const arrowUpDown = document.querySelectorAll('.rotate-180');
        for(let singleAns of answers){
            if( singleAns !== this.nextElementSibling){  
                singleAns.classList.remove('open') 
            } 
        }
        for (let singleArrow of arrowUpDown){
            if(singleArrow !== this.querySelector('.rotate-180')){
                singleArrow.classList.remove('rotate-180');
                singleArrow.classList.add('rotate-0');
            }
        }
        const openAccordion = this.nextElementSibling;
        openAccordion.classList.toggle('open'); 
        const arrowNow = this.querySelector('.rotate-0') 
        || this.querySelector('.rotate-180');
        if(arrowNow){
            if(!openAccordion.classList.contains('open')){
                arrowNow.classList.add('rotate-0');
                arrowNow.classList.remove('rotate-180');
            }
            else{
            arrowNow.classList.remove('rotate-0');
            arrowNow.classList.add('rotate-180');
        }
        }
    })
}
