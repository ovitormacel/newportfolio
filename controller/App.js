//PROJETOS
const divCategoriesEl = document.querySelector(".cards_categories");

addEventToButtons();

function addEventToButtons(){
    const navigationEl = document.querySelector(".projects_nav");
    const buttonsEl = navigationEl.querySelectorAll(".btn");

    buttonsEl.forEach(button => {
        button.addEventListener("click", (e) => {
            changeButton(e, buttonsEl);
            changeCategory(e.target.id);
        });
    });
}

function changeButton(event, buttonsEl){
    buttonsEl.forEach(button => {
        button.classList.remove('btn_active');
    })

    event.target.classList.toggle('btn_active');
}

function changeCategory(id){
    const categories = divCategoriesEl.querySelectorAll(".cards");
    const selectedCategory = divCategoriesEl.querySelector("."+id);

    categories.forEach(category => {
        category.classList.add('hide');
    })

    selectedCategory.classList.remove('hide');
}