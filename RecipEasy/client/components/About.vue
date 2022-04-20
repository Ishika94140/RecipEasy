<template>
    <div class="about-section">
        <div class="inner-container">

            <!-- Presentation -->
            <h1 class = "titletext"><span>A</span>bout Us</h1>
            <p class="text">
            Hi Guys! Thank you for visiting our website! 
            We are 2 students from the ESME Sudria engineering school. 
            We developped this website to share with you all kind of recipies throughout the world  and accessible to each of you. 
            Morever, you can also take classes to improve your cooking level and make a lof of friends.
            We really hope that you will enjoy our platform! Dont' hesitate to contact us for further information!
            </p>
            
            <div class="name">
                <span>Cindy Muthukrishnan</span>
                <span>Ishika Hossain</span>
            </div>
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, input {
    font-family: 'Poppins', sans-serif;
}
body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}
.about-section{
    background: url(/components/img/about.jpg);
    background-repeat: no-repeat;
    background-size: 55%;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    padding: 100px 0;
}

.inner-container{
    width: 55%;
    float: right;
    background-color: #e3701eea;
    padding: 150px;
}
.inner-container h1{
    letter-spacing: 2px;
    color: #000000;
    font-weight: 500;
    font-size: 1.2em;
    margin-top: -90px;
}

.inner-container h1 span{
    font-size: 60px;
    letter-spacing: 3.5px;
    margin-top: 80px;
    color: #f8d1bd;
}

.text{
    font-size: 17px;
    color: #000000;
    line-height: 30px;
    text-align: justify;
    margin-top: 30px;
    margin-bottom: 40px;
    font-family: sans-serif;
}

.name{
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 13px;
}

@media screen and (max-width:1200px){
    .inner-container{
        padding: 80px; 
    }
}

@media screen and (max-width:1000px){
    .about-section{
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
}

@media screen and (max-width:600px){
    .about-section{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
}
</style>