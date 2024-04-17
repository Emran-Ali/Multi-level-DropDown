const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                let select = '';
                checked.forEach(item =>{
                    select += `<p class='selected-item'> ${item.innerText} </p>`;
                })
                btnText.innerHTML = select;
            }else{
                btnText.innerText = "Select Language";
            }
    });
})