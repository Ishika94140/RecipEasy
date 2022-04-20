  <template>
        <section class="banner" id= "banner">
        <script type="application/javascript" async src="/js/scriptcontact.js" charset="utf-8"></script>
        <script type="application/javascript" async src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" charset="utf-8"></script>
        
            <div id ="overlay">

                <!-- Contact form -->
                <form class="contact-form"> 
                    <h1 class = "titletext"><span>C</span>ontact Us</h1>
                    <label for = "name"> Name : </label>
                    <input type="text" id ="fromName" name="name" placeholder="Your name" required="required">
                    <small class = "error"></small>

                    <label for = "email"> Email : </label>
                    <input type="email" id ="fromEmail" placeholder="Your mail" required="required">
                    <small class = "error"></small>

                    <label for = "message"> Message : </label>
                    <textarea id ="msg" placeholder="Your message" rows="6" required="required"></textarea>
                    <small class = "error"></small>

                    <!-- Button to send email -->
                    <div class ="center">
                        <input type="submit" onclick="sendMail()" value ="Send Message">
                        <p id = "success"></p>
                    </div>
                </form>
            </div>
        </section>
</template>

<script>
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
p
{
    font-weight: 300;
    color : #111;

}
body {
    height: 100%;
}

.banner {
    background-color: rgba(172, 23, 67, 0.842);
    /* background-image: */
    /*background-size: 75%; */
   margin :0;
   position : relative;
   width : 100%;
   min-height:100vh; 
   display: flex;
   justify-content: center;
   align-items: center;
   background :url(/components/img/imagecontact.jpg);
   background-size: cover;
}
#overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    /*background-color: rgba(255, 0, 106, 0.4); */

}

form {
    max-width: 550px;
    width: 80%;
    max-height: 600px;
    background: rgba(255, 255, 255, 0.855);
    margin: 15vh auto auto auto;
    padding : 40px;
    border-radius: 30px;
    box-sizing: border-box;
}
.titletext{
    margin:0;
    margin-top: -30px;
    text-align: center;
}

.titletext span{
    color : #d45b05;
    font-weight: 700;
    font-size: 1.5em;
}
label {
    display: block;
    margin: 20px 0;
}
input, textarea {
    width: 90%;
    padding:2%;
    box-sizing: border-box;
    outline : none; 
    resize: none;
    border: none;
    border-bottom: 1px solid #d3d3d3;
}
input[type="text"]:focus, textarea:focus {
    border-bottom: 30px solid rgbd(255,0,106);
}
textarea::-webkit-scrollbar {
    width: 5px;
}
textarea::-webkit-scrollbar-thumb{
    background-color: #d45b05 ;
}
.center {
    text-align: center;
}
input[type="submit"] {
    margin-top: 1px;
    width: 90%;
    max-width: 200px;
    background: linear-gradient(to right, #d45b05, #ef6e12);
    color : white;
    font-size: 17px;
    cursor: pointer;
    border-radius: 3px;
}
.error {
    color : red;
}
.error-border {
    border-bottom: 1px solid red;
}
#success {
    color : #28A745; 
}

@media screen and (max-width:700px){
    form {
        margin: auto auto 0 auto;
    }
}
</style>

