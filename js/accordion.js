let accordions = document.getElementsByClassName('accordion');
// let ans = document.getElementsByClassName('answer');
for(i=0;i< accordions.length; i++){
    accordions[i].addEventListener('click', function(event){
        const panel = this.nextElementSibling;
        this.classList.toggle('active');
        // confirm.log(ans.classList.contains)
        // ans.style.display
        // console.log(ans);
        if(panel.style.display === 'block'){
            panel.style.display = "none";
            
            // console.log(ans.classList)
        }
        else if(panel.style.display === 'none'){
            panel.style.display = "block";
            // console.log(ans.classList)
        }
        else{
            panel.style.display = "block"
        }
    })

}
// console.log(ans.classList);

// document.getElementById('accordion')
// .addEventListener('click', function(){
//     const ans = document.querySelector()
// })


    
  