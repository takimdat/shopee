const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const likesBtn = $$('.home-product-item__action .home-product-item__like')
const likeBtn = $('.home-product-item__action .home-product-item__like')

likesBtn.forEach(function(likeBtn){
    likeBtn.onclick = function(){
        likeBtn.classList.toggle('home-product-item__like--liked')
        console.log(likeBtn)
    }
})



