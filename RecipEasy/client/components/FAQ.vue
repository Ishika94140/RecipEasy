<template>
    <div class="wrapper">
        <div class="row">
        <script type="application/javascript" async src="/js/scriptfaq.js" charset="utf-8"></script>
            
            <!-- Image -->
            <div class="image-section" >
                <img src="/components/img/imagefaq.jpg">
            </div>
        
            <!-- Title page -->
            <div class = "title">
                <p><span>F</span>requently asked Questions<p>
            </div>

            <!-- Questions/Answer -->
            <div class = "container-fluid">
                <div class = "accordion">
                    <div class ="icon"></div>
                    <h4>Which kind of recipies are available?</h4>
                </div>

                <div class ="panel">
                    There are many kinds of recipies such as startes, meals and desserts. Also you will find a lot of recipies from around the world.
                </div>

                <div class = "accordion">
                    <div class ="icon"></div>
                    <h4>Is the registration free?</h4>
                </div>
                
                <div class ="panel">
                    <p>Yes! All our recipies are free of charges</p>
                </div>

                <div class = "accordion">
                    <div class ="icon"></div>
                    <h4>How can I contact you?</h4>
                </div>

                <div class ="panel">
                    <p>You can ask us any questions or suggestions on the Contact Page</p>
                </div>

                <div class = "accordion">
                    <div class ="icon"></div>
                        <h4>Where can I share my own recipie ?</h4>
                </div>

                <div class ="panel">
                    <p>You can share your recipe by contacting us on the Contact Page</p>
                </div>

                <div class = "accordion">
                    <div class ="icon"></div>
                        <h4>Can I take courses ?</h4>
                </div>

                <div class ="panel">
                    <p>Of course ! We have cooking sessions for all level !</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
/*Import Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, input {
    font-family: 'Poppins', sans-serif;
}
.image-section{
    width: 50%;
    float: right;
}
.image-section img{
    margin-top: 150px;
    margin-right: 80px;
    width: 100%;
    height: auto;
    border-radius: 10px;
}
.wrapper{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: rgb(255, 175, 138);
}
.row{
    width: 100%;
    padding: 50px 100px;
}
body {   
    background-color: white;
    font-family : 'Poppins', sans-serif;
}
.container-fluid {
    width: 85%;
    margin : 0 auto;
    margin-top: -20px;
    margin-left: 55px;
}
.container-fluid h2 {
    color : white; 
    position: relative;
    width: 23 rem;
}
.container-fluid h2::after {
    content : "";
    position: absolute; 
    bottom : 0;
    left: 0px;
    width: 350px;
    height: 2px;
    background-color: white;
}
.accordion {
    width: 40%;
    padding: 0 30px;
    border : 2px solid #d45b05;
    cursor: pointer;
    border-radius: 50px;
    display: flex;
    margin : 10px 0;
    align-items: center;
}
.accordion .icon {
    margin : 0 10px 0 0;
    width: 30px;
    height: 30px;
    border-radius: 15%;
    float: left;
    transition: all .5s ease-in;   
}
.accordion h4 {
    margin : 0;
    padding: 3px 0 0 0;
    font-weight: normal;
    color : rgb(0, 0, 0);
    transition: all .5s ease-in;
}
.active {
    background-color: #d45b05;
    color: rgb(0, 0, 0);
}
.active h5 {
    color : rgb(255, 255, 255);
}
.panel {
    padding: 0 65px;
    border-left: 1px solid #d45b05;
    margin-left: 25px;
    margin-right: 50px;
    font-size: 14px;
    text-align: justify;
    overflow: hidden;
    max-height: 0;
    transition: all .2s ease-in;
}
.title {   
    font-size: 35px;
    margin-top: 110px;
    margin-left: 30px;
    color:black; 
}
.title span{
    font-size: 90px;
    letter-spacing: 3.5px;
    margin-top: 30px;
    color: #d45b05;
}
</style>
