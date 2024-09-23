document.getElementById('btn-donate')
    .addEventListener('click', function (event) {
        toggleButtonById('donation-cards');
         // remove all button  style
         document.getElementById('btn-donate').classList.remove('border', 'border-light', 'text-dark', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');

         document.getElementById('btn-history').classList.remove('bg-primary', 'text-secondary', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');
 
         // add history's button style
         document.getElementById('btn-donate').classList.add('bg-primary', 'text-secondary', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');
 
         document.getElementById('btn-history').classList.add('border', 'border-light', 'text-dark', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');



      
    })


document.getElementById('btn-history')
    .addEventListener('click', function (event) {
        toggleButtonById('donate-history')
          // remove all button  style
          document.getElementById('btn-donate').classList.remove('bg-primary', 'text-secondary', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');

          document.getElementById('btn-history').classList.remove('border', 'border-light', 'text-dark', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');
          // add history's button style
          document.getElementById('btn-donate').classList.add('border', 'border-light', 'text-dark', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');
  
          document.getElementById('btn-history').classList.add('bg-primary', 'text-secondary', 'py-3', 'px-8', 'rounded-lg', 'text-xl', 'font-semibold');
       

    })