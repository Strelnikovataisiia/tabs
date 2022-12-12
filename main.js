const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const tabsdop = document.getElementById('tabsdop');
const contentsdop = document.getElementById('contentsdop');


const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');   
}
tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active')
        }
    }
})

tab1.addEventListener('click', () => {
    console.log('click');
    contentsdop.children[0].classList.add('active'); 
})
tab2.addEventListener('click', () => {
    console.log('click');
    contentsdop.children[0].classList.remove('active'); 
    contentsdop.children[1].classList.add('active');
})