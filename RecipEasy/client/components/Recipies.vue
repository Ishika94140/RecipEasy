<template>
    <body>
        <div class = "container">
        <script type="application/javascript"  src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous" charset="utf-8"></script>
        <script type="application/javascript" async src="/js/scriptrecipies.js" charset="utf-8"></script>

        <!-- Description of the page --> 
        <div class = "meal-wrapper">
            <div class = "meal-search">
            <h2 class = "title"><span>F</span>ind Meals according the country !</h2>
            <blockquote>Learn to cook many recipies!<br>
            <cite>- Enjoy -</cite>
            </blockquote>

            <!-- Search recipies --> 
            <div class = "meal-search-box">
                <input type = "text" class = "search-control" placeholder="Enter a country (ex : Canadian)" id = "search-input">
                <button type = "submit" class = "search-btn btn" id = "search-btn">
                <i class = "fas fa-search"></i></button>
            </div>
        </div>

        <!-- Display recipies --> 
        <div class = "meal-result">
            <h2 class = "title">Your Search Results:</h2>
            <div id= "meal"></div>

        </div>

        <div class = "meal-details">
            <!-- Recipe close btn -->
            <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
            <i class = "fas fa-times"></i></button>

            <!-- Meal content -->
            <div class = "meal-details-content"></div>
        </div>
        </div>
    </div> 
  </body>
</template>

<script>
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-weight: 300;
    font-size: 1.05rem;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
}

h2 span{
    font-size: 60px;
    letter-spacing: 3.5px;
    margin-top: 80px;
    color: #e3701eea;
}

.btn{
    font-family: inherit;
    cursor: pointer;
    outline: 0;
    font-size: 1.05rem;

}
.text{
    opacity: 0.8;
}
.title{
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 150px;
    color: #f0f0f0;
}

.container{
    min-height: 100vh;
    background: url(/components/img/fond_recipies.png) ;
    background-size: cover;
    background-repeat: no-repeat ;
}
.meal-wrapper{
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background: url(/components/img/fond_recipies.png) ;
    background-size: cover;
    background-repeat: no-repeat ;

}
.meal-search{
    margin: 2rem 0;
    color: #ffffff;

}
.meal-search cite{
    font-size: 1rem;
    color: #ffffff;

}
.meal-search-box{
    margin: 1.2rem 0;
    display: flex;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
}
.search-control,
.search-btn{
    width: 100%;
}
.search-control{
    padding: 0 1rem;
    font-size: 1.1rem;
    font-family: inherit;
    outline: 0;
    border: 1px solid #d65108;
    color: #d65108;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
}
.search-control::placeholder{
    color: #d65108;
}
.search-btn{
    width: 55px;
    height: 55px;
    font-size: 1.8rem;
    background: #d65108;
    color: white;
    border: none;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}

.search-btn:hover{
    background: #b54507;
}
.meal-result{
    margin-top: 4rem;
}

#meal{
    margin: 2.4rem 0;
}
.meal-item{
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);
    margin: 2rem 0;
    background-color: white;
}
.meal-img img{
    width: 100%;
    display: block;
}
.meal-name{
    padding: 1.5rem 0.5rem;
}
.meal-name h3{
    font-size: 1.4rem;
}
.recipe-btn{
    text-decoration: none;
    color: #fff;
    background: #d65108;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.75rem 0;
    display: block;
    width: 175px;
    margin: 1rem auto;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}
.recipe-btn:hover{
    background: #b54507;
}

/* meal details */
.meal-details{
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    color: rgb(0, 0, 0);
    background: #f4c8b1;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    display: none;
    padding: 2rem 0;
}

.meal-details::-webkit-scrollbar{
    width: 10px;
}
.meal-details::-webkit-scrollbar-thumb{
    background: #f0f0f0;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
}


/* js related */
.showRecipe{
    display: block;
}

.meal-details-content{
    margin: 2rem;
}
.meal-details-content p:not(.recipe-category){
    padding: 1rem 0;
}
.recipe-close-btn{
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 1.8rem;
    background: rgb(255, 255, 255);
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
}
.recipe-title{
    letter-spacing: 1px;
    padding-bottom: 1rem;
}
.recipe-category{
    background: #fff;
    font-weight: 600;
    color: #d65108;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    -o-border-radius: 0.3rem;
}

.recipe-category{
    background: #fff;
    font-weight: 600;
    color: #d65108;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    -o-border-radius: 0.3rem;
}

.recipe-instruct{
    padding: 1rem 0;
    text-align: justify;
}
.recipe-meal-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    margin: 0 auto;
    display: block;
}
.recipe-link{
    margin: 1.4rem 0;
}
.recipe-link a{
    color: rgb(0, 0, 0);
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}
.recipe-link a:hover{
    opacity: 0.8;
}


/*  */
.notFound{
    grid-template-columns: 1fr!important;
    color: #d65108;
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;
}

/* Media Queries */
@media screen and (min-width: 600px){
    .meal-search-box{
        width: 540px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (min-width: 768px){
    #meal{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .meal-item{
        margin: 0;
    }
    .meal-details{
        width: 700px;
    }
}

@media screen and (min-width: 992px){
    #meal{
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>