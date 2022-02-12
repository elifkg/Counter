let count=0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
    const styles= e.currentTarget.classList;
      if(styles.contains('azalt')){
          count--;
      }
       if(styles.contains('arttır')){
        count++;
    }
    if (styles.contains('sıfırla')){
      count=0;

    }
    
    if(count>0){
      value.style.color = "green";
    }
 
    if(count<0){
      value.style.color = "red";
    }
      
    if(count===0){
      value.style.color = "#222";
    }

      value.textContent= count;

})
});