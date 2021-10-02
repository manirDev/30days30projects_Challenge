const viewBtn = document.querySelector(".view-modal")
const container = document.querySelector(".container")
const closBtn = document.querySelector(".closeBtn"),
field = container.querySelector(".field"),
input = field.querySelector("input"),
copy = field.querySelector(".copy");
/*viewBtn.addEventListener('click', () =>{
    container.classList.toggle("show");
})
*/
viewBtn.onclick = ()=>{
    container.classList.toggle("show");
  }
  closBtn.onclick = ()=>{
    viewBtn.click();
    //container.classList.toggle("close");
  }

  copy.onclick = ()=>{
    input.select(); //select input value
    if(document.execCommand("copy")){ //if the selected text copy
      field.classList.toggle("active");
      copy.innerText = "Copied 👍 ";
      setTimeout(()=>{
        window.getSelection().removeAllRanges(); //remove selection from document
        field.classList.remove("active");
        copy.innerHTML = `<i class="far fa-clone"></i>`;
      }, 3000);
    }
  }


 












