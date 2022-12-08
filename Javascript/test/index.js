fetch('./data.json')
    .then(function(res){return res.json()})
    .then(function(gallery){
    
        const elGallery = document.querySelector('.gallery .thumb'); 
    
        movieData=gallery.data
        let fl='';
        gallery.data.forEach(function(mv,key){
            fl += `<figure>
            <img src="${mv.url}">
            </figure>`;
        })
        elGallery.innerHTML = fl;
    
        const elFilm=document.querySelectorAll('.gallery .thumb figure'),
                elImg = document.querySelector('.gallery .detail article');
    
        elFilm.forEach(function(num,key) {
            num.onclick = function(){
                elImg.innerHTML = `<figure>
                                        <img src="${movieData[key].url}">
                                        <figcaption>
                                            <h2>${movieData[key].title}</h2>
                                            ${movieData[key].detail}
                                        </figcaption>
                                    </figure>`;
            }
        });
    
    });


