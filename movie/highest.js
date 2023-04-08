const API_KEY ='api_key=fbca6cfec133f56d1d42aed99e37ed5b';
const BASE_URL='https://api.themoviedb.org/3'
// const API_URL=BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const API_URL=BASE_URL + '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&'+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;



const main=document.getElementById("main");
const form=document.getElementById("form");
const search=document.getElementById('search');
function getMovies(url){
    fetch(url).then(res =>res.json()).then(data=>{
        // console.log(data);
        showMovies(data.results);
        
    })
}

 getMovies(API_URL);

function showMovies(data){
    main.innerHTML="";
        data.forEach((i)=>{
            // console.log(i)
            const{title,poster_path,vote_average,overview}=i;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
        <img src="${IMG_URL+poster_path}" alt="${title}">
            
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getcolor(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>${overview}</h3>
                        
                    </div>
        `
        main.appendChild(movieEl);
    });
}

function getcolor(value){
    if(value>=8){
        return 'green';
    }
    else if(value>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm=search.value;
    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm);
    }
    else{
        getMovies(API_URL)
    }
})