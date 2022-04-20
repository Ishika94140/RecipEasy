<template>
    <div class="container">
        <script type="application/javascript" async src="/js/scriptcheck.js" charset="utf-8"></script>
        <script type="application/javascript"  src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous" charset="utf-8"></script>
        <div class="forms-container">
            <div class="signin-signup">
                <form class="sign-up-form"  id="myForm" @submit.prevent="inscription">

                    <!-- Form for users to signup --> 
                    <h2 class = "titletext"><span>S</span>ign Up</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" id="username" v-model="users.username" placeholder="Username" required="required" name="" value="">
                    </div>
                     <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email" v-model="users.email" placeholder="Email" required="required" name="email" value="">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" v-model="users.password" placeholder="Password" required="required" name="" value="">
                    </div>
                     <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="confirm_password" v-model="users.confirm_password" placeholder="Confirmation password" required="required" name="" value="">
                    </div>

                    <!-- submit button to signup -->
                    <input type="submit" value="Sign Up" class="btn solid">
                </form>
            </div>
        </div>

        <!-- Access to login page -->
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p> Time to feel like home... Connect quickly! </p>
                    <button class="btn transparent" id="sign-up-btn"><router-link to='/login'>Sign In</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
module.exports = {
    data(){
        return{
            users:{
                username : "",
                email : "",
                password : "",
                confirm_password : "",
            }
        }
    },
    methods : {
        inscription(){
            this.$emit("inscription", this.users);
        }
    }
}
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

a {
  color: #FFF;
}

.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: url(/components/img/login_bg.jpg);
    overflow: hidden;
    background-size: cover; 
}

.container::before{
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background-image: linear-gradient(-45deg, #d45b05 0%, #d45b05 100%);;
    top:-10%;
    right: 58%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
}


.forms-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
}

.signin-signup{
    position: absolute;
    top: 55%;
    left: 65%;
    transform: translate(-50%,-50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transition: 1s 0.7s ease-in-out;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5em;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    transition: 0.2s 0.7s ease-in-out;
}

form.sign-up-form{
   z-index: 2;
}

.title {
    font-size: 2.2rem;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
}

.titletext{
    color : #ffffff;
    font-weight: 500;
    font-size: 1.5em;
}

.titletext span{
    color : #d45b05;
    font-weight: 700;
    font-size: 1.5em;
}


.input-field {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 .4rem ;
}

.input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem; 
}

.input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
}

.input-field input::placeholder{
    color: #aaa;
    font-weight: 500; 
}

.btn{
   width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #d45b05;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;
}

.btn:hover{
    background-color: #d45b05;
}

.panels-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.panel{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
}

.left-panel{
    pointer-events: all;
    padding: 1rem 40% 2rem 3rem;  
}

.panel .content{
    color: rgb(255, 255, 255);
    transition: .9s .6s ease-in-out;
}


.panel h3{
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
    margin-top: -20px ;
}

.panel p{
    font-size: 0.95rem;
    padding: 0.7rem 2.0rem;
}

.btn.transparent{
    margin: 0;
    background: none;
    border: 2px solid rgb(255, 255, 255);
    width: 130px;
    height: 41px;
    font-weight: 600px;
    font-size: 0.8rem;
    color: white;
}



/* ANIMATION */
@media (max-width: 570px) {
    form{
      padding: 0 1.5rem;
    }

    .image{
        display: none;
    }

    .panel .content{
       padding: 0.5rem 1rem;
    }

    .container:before{
        left: 50%; 
    }
}
</style>
