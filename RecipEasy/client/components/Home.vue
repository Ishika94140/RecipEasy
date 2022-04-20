<template>
    <body>
        <section class="banner" id= "banner">

            <!-- Presentation home page -->
            <div class ="content">
                <h2>Welcome to Recip'Easy</h2>
                <h1>Find varied and simple recipes to reproduce at home !</h1>
                <h1>You can also take classes to increase your cooking level!</h1>

                <!-- If user is connected, access to recipies page-->
                <a href ='#' class="btn" v-if="connecte" v-on:click="goToRecipies()">Discover our recipies</a>

                <!-- If user is not connected, ask to login before-->
                <a href ='#' class="btn" v-else v-on:click="goToLogin()">Discover our recipies</a>
            </div>
        </section>
    </body>
</template>


<script>
module.exports = {
    props: {
        connecte: { type: Boolean }
    },
    methods : {
        goToRecipies(){
            this.connecte=true;
            this.$router.push('/recipies');
        },
        goToLogin(){
           this.connecte=false;
           this.$router.push('/login');  
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*
{   
    margin : 0;
    padding : 0; 
    box-sizing :border-box;
    font-family : 'Poppins', sans-serif;
}
h1
{
    font-weight: 300;
    color : rgb(255, 255, 255);

}

body{
    height: 100%;
}

.banner 
{
    position : relative;
    width : 100%;
    min-height:100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    background :url(/components/img/FondAccueil.png);
    background-size: cover;
}

.banner .content
{
    max-width: 900px;
    text-align: center;
}

.banner .content h2 
{
    font-size : 5em;
    color : #fff;
}

.banner .content p
{
    font-size : 1em;
    color :#fff;
}


.btn
{
    font-size:1em;
    color : #fff;
    background: #d45b05;
    display: inline-block;
    padding: 10px 30px;
    margin-top : 20px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;
}

.btn:hover
{
    letter-spacing: 6px;
}
</style>
