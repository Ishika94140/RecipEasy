<template>
  <body>
    <div class="background">
      <script type="application/javascript" async src="/js/scriptbook.js" charset="utf-8"></script>
      <script type="application/javascript" async src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" charset="utf-8"></script>


      <div class="container">
        <div class="title">Registration for a cooking lesson</div>
          <div class="content">

          <!--Form to register for courses-->    
          <form name="formulaire">
            <div class="user-details">

              <div class="input-box">
                <span class="details">Name</span>
                <input type="text" v-model="lesson_register.name" id="name" placeholder="Enter your name" name="" value="" required>
              </div>

              <div class="input-box">
                <span class="details">First name</span>
                <input type="text" v-model="lesson_register.firstname" id="firstname" placeholder="Enter your first name" name="" value="" required>
              </div>

              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" v-model="lesson_register.email" id="email" placeholder="Enter your email" name="" value="" required>
              </div>

              <div class="input-box">
                <span class="details">Chief</span>
                <div class = "custom_select">
                <select id="chef" v-model="lesson_register.chef" name="">
                  <option value = "">Select</option>
                </select>
              </div>
            </div>

              <div class="input-box">
                <span class="details">Date</span>
                <input type="date" v-model="lesson_register.date" id="date" placeholder="Chose the date" name="" value="" required>
              </div>

              <div class="input-box">
                <span class="details">Hour</span>
                <div class = "hour_select">
                  <select id="hour" v-model="lesson_register.hour" name="hour" value="">
                  <option value = "">Select</option>
                  </select>
                </div>
              </div>
            </div>

            
        
            <!--Radio buttons for level--> 
            <div class="level-details">
              <input type="radio" v-model="lesson_register.level" name="level" id="dot-1" value ="Beginner" onclick='change(["10h00-11h00", "11h00-12h00"]);changeChef(["Paula","Chris"])'>
              <input type="radio" v-model="lesson_register.level" name="level" id="dot-2"  value="Intermediate" onclick='change(["14h00-15h00", "15h00-16h00"]);changeChef(["Emelia","Marcus"])'>
              <input type="radio" v-model="lesson_register.level" name="level" id="dot-3" value= "Expert" onclick='change(["16h00-17h00", "17h00-18h00"]);changeChef(["Marie","Lucas"])'>
              <span class="level-title">Level</span>

              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="level">Beginner</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="level">Intermediate</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="level">Advanced</span>
                </label>
              </div>
            </div>

              <!--Button to register in database-->
              <div class="button">
                <input type="submit" value="Register" v-on:click="lessons()">
              </div> 
              <!--Form to view database table
              <div class = "buttonbis">
                <input type="button" value="Enregistrer">
              </div> -->
          </form>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
module.exports = {
    data(){
        return{
             lesson_register:{
                name : "",
                firstname : "",
                email : "",
                chef : "",
                date : "",
                hour : "",
                level: "",
            }
        }
    },
    methods : {
        lessons(){
            this.$emit("lessons", this.lesson_register);
        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.background {
    background: linear-gradient(10deg, #000000, #616161);
    padding : 80px 100px 150px;
}
.container{
  max-width: 700px;
  max-height: 570px;
  width: 70%;
  background-color: #fff;
  padding: 5px 15px;   
  margin-left : auto;
  margin-right: auto;
  margin-top : 45px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
 
}
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #fdd496, #fd4214);
}
.content form .user-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box{
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details{
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input{
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
  border-color: #fd4214;
}
form .level-details .level-title{
  font-size: 20px;
  font-weight: 500;
}
form .category{
    display: flex;
    width: 80%;
    margin: 14px 0 ;
    justify-content: space-between;
}
form .category label{
    display: flex;
    align-items: center;
    cursor: pointer;
}
form .category label .dot{
   height: 18px;
   width: 18px;
   border-radius: 50%;
   margin-right: 20px;
   background: #d9d9d9;
   border: 5px solid transparent;
   transition: all 0.3s ease;
}
  #dot-1:checked ~ .category label .one,
  #dot-2:checked ~ .category label .two,
  #dot-3:checked ~ .category label .three{
    background: #fd4214;
    border-color: #d9d9d9;
} 
 form input[type="radio"]{
    display: none;
}
  form .button{
    height: 45px;
    margin: 35px 0;
}
  form .button input{
    height: 100%;
    width: 100%;
   /* margin-top: 50px;  */
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #fdd496, #fd4214);
}
  form .button input:hover{
    transform: scale(0.99); 
    background: linear-gradient(-135deg, #fdd496, #fd4214);
}
form .buttonbis{
  height: 45px;
  margin: 35px 0;
  text-align: center;
}
form .buttonbis input{
  height: 60%;
  width: 30%;
  margin: auto; 
 /* margin-top: 50px;  */
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #000000, #d4d2c1);
}
form .buttonbis input:hover{
  transform: scale(0.99); 
  background: linear-gradient(-135deg, #000000,  #d4d2c1);
}

 @media(max-width: 584px){
 .container{
  max-width: 100%;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
}
form .category{
    width: 100%;
}
.content form .user-details{
    max-height: 300px;
    overflow-y: scroll;
}
.user-details::-webkit-scrollbar{
    width: 5px;
}
}
  @media(max-width: 459px){
  .container .content .category{
    flex-direction: column;
  }
}

form .custom_select{
    position: relative;
    width: 100%;
    height: 37px;
}

form .custom_select:before{
    content: "";
    position: absolute;
    top: 12px;
    right: 10px;
    border: 8px solid;
    border-color: #d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

form .custom_select select{
    -webkit-appearance: none;
    -moz-appearance:   none;
    appearance:        none;
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

form .custom_select select:focus
{
  border-color: #fd4214;
}


form .hour_select{
    position: relative;
    width: 100%;
    height: 37px;
}

form .hour_select:before{
    content: "";
    position: absolute;
    top: 12px;
    right: 10px;
    border: 8px solid;
    border-color: #d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

form .hour_select select{
    -webkit-appearance: none;
    -moz-appearance:   none;
    appearance:        none;
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

form .hour_select select:focus
{
  border-color: #fd4214;
}
</style>