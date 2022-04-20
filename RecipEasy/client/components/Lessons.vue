<template>
  <body>
        <div class = back>

            <!--Presentation page-->
            <div class ="intro">
                <h1 class = "titletext"><span>T</span>ake Cooking sessions with Recip'Easy !</h1>
                <h3>No matter your level, Recip'Easy is here to support you.</h3>
                <h3>So choose classes according your level !</h3>
            </div>

            <div class="container">
                <div class="row">

                    <!--Begginers choice-->
                    <div class="tablegeneral">
                        <div class="table">
                        <h3 class="title"></h3>
                            <div class="Level">Beginner</div>
                            <ul class="content">
                                <p>You have no cooking skills?<br>No problem, Paula and Chris are here to teach you the basics !</p>                       
                                <li>1 Hour</li>
                                <li>10h-11h / 11h-12h</li>
                                <li>Completely Free !</li>
                                <li>Chiefs : Paula, Chris</li>
                            </ul>

                            <!--Button to access register form to classes-->
                            <a href="#" class="register" v-on:click="goToRegister()">Click Here !</a>
                        </div>
                    </div>

                    <!--Intermediate choice-->
                    <div class="tablegeneral">
                        <div class="table table2">
                        <h3 class="title"></h3>
                            <div class="Level">Intermediate</div>
                            <ul class="content">
                                <p>You have the basics in cooking, but want to learn more? Take an intermediate class and watch your skills soar!</p>                     
                                <li>1 Hour</li>
                                <li>14h-15h / 15h-16h</li>
                                <li>Completely Free !</li>
                                <li>Chiefs : Emelia, Marcus</li>
                            </ul>

                            <!--Button to access register form to classes-->
                            <a href="#" class="register" v-on:click="goToRegister()">Click Here !</a>
                        </div>
                    </div>

                    <!--Expert choice-->
                    <div class="tablegeneral">
                        <div class="table table3">
                        <h3 class="title"></h3>
                            <div class="Level">Expert</div>
                            <ul class="content">
                                <p>You already have a very good knowledge of cooking but would like to learn from our chefs?<br> Take classes and become an expert !</p>                       
                                <li>1 Hour</li>
                                <li>16h-17h / 17h-18h</li>
                                <li>Completely Free !</li>
                                <li>Chiefs : Marie, Lucas</li>
                            </ul>

                            <!--Button to access register form to classes-->
                            <a href="#" class="register" v-on:click="goToRegister()">Click Here !</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


<script>
module.exports = {
    methods : {
        goToRegister(){
            this.$router.push('/lessonsregister'); 
        }
    }
}
</script>




<style scoped>
@import url('https:/use.fontawesome.com/releases/v5.7.2/css/all.css');

        .back{
             padding: 30px 10px;
             background-image: url('/components/img/courses.png');
        }

        .intro{
            color: white;
            font-family : 'Poppins', sans-serif;
            font-weight: 300;
            text-align: center;
            margin-top: auto;
        }
         .table{
             border-collapse: collapse;
             padding-bottom: 30px;
             position: relative;
             text-align: center;
             background: #fbece4;
             border-radius: 20px;
             transition: all .3s ease 0s;
             margin-top: 0px;
             widows: 600px;
             margin: 20px;
         }
         .title{
             background: linear-gradient(to bottom right, #fa6fe6, #ffef65);
             padding: 20px 0px 70px;
             margin: 0;
             font-size: 25px;
             font-weight: 600;
             position: relative;
             text-transform: uppercase;
             color: rgb(0, 0, 0);
             overflow: hidden;
         }
         .title::before{
             content: "";
             height: 200px;
             width: 280px;
             position: absolute;
             bottom: -175px;
             left: -46px;
             background: #fbece4;
             border-radius: 80px;
             transform: rotate(-85deg);
         }
         .title::after{
             content: "";
             height: 200px;
             width: 280px;
             position: absolute;
             top: 150px;
             right: -70px;
             bottom: auto;
             left: auto;
             background: #fff;
             border-radius: 100px;
             transform: rotate(-40deg);
         }
         .Level{
             width: 150px;
             height: 80px;
             position: absolute;
             top: 15px;
             left: 50%;
             background: #fff;
             color: #404040;
             display: inline-block;
             padding: 30px 0;
             font-size: 25px;
             line-height: 15px;
             font-weight: 600;
             font-size: 20px;
             border-radius: 50%;
             transform: translate(-50%);
             transition: all .3s ease 0s;
             box-shadow: 0 0 0 8px rgba(0, 0, 0, .3);
         }
         .table:hover .Level{
             background: linear-gradient(to bottom right, #fa6fe6, #ffef65);
             color: #fff;
         }
         .content{
             list-style: none;
             padding: 0;
             margin: 20px;
             text-align: left;
             transition: all .3s ease 0s;
         }

         .content p{
             text-align: justify;
             font-weight: 500;
             font-size: 15px;
             height: 80px;
             margin-top: 30px;
         }

         .content li{
             padding: 7px 0 7px 50px;
             position: relative;
             color: #000;
             font-size: 14px;
             font-weight: 500;
             letter-spacing: 1px;
         }
         .content li::before{
            content: "\f00c";
            height: 24px;
            width: 24px;
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            line-height: 20px;
            border-radius: 50%;
            border: 2px solid #fb6ee5;
            color: #fb6ee5;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translateY(-50%);
         }
         .register{
             background: linear-gradient(to bottom right, #fa6fe6, #ffef65);
             position: relative;
             padding: 10px 40px;
             font-size: 14px;
             font-weight: bold;
             border-radius: 30px;
             display: inline-block;
             color: #404040;
             text-decoration: none;
             text-transform: uppercase;
             transition: all .3s ease 0s;
             z-index: 1;
         }
         .register:hover{
             color: #fff;
         }
         .register::before{
             content: "";
             height: 92%;
             width: 98%;
             position: absolute;
             top: 2px;
             left: 2px;
             background: #fff;
             border-radius: 30px;
             z-index: -1;
         }
         .register:hover::before{
             background: 0 0;
         }
         .table2 .title{
            background: linear-gradient(to bottom right, #44f2b5, #4cbde2);
         }
         .table2:hover .Level{
            background: linear-gradient(to bottom right, #44f2b5, #4cbde2);
         }
         .table2 .content li::before{
             color: #4bc7db;
             border-color: #4bc7bd;
         }
         .table2 .register{
            background: linear-gradient(to bottom right, #44f2b5, #4cbde2);
         }

         .table3 .title{
            background: linear-gradient(to bottom right, #66fd9c, #f6fa60);
         }
         .table3:hover .Level{
            background: linear-gradient(to bottom right, #66fd9c, #f6fa60);
         }
         .table3 .content li::before{
             color: #66fd9c;
             border-color: #66fd9c;
         }
         .table3 .register{
            background: linear-gradient(to bottom right, #66fd9c, #f6fa60);
         }


        .intro{
            margin-top: 55px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            padding: 40px;
            background-color: rgba(17, 17, 17, 0.389);
        }

        .intro h1{
            letter-spacing: 2px;
            color: #ffffff;
            font-weight: 500;
            font-size: 2em;
            margin-top: -40px;
        }

        .intro h1 span{
            font-size: 60px;
            letter-spacing: 3.5px;
            margin-top: 80px;
            color: #e3701eea;
        }

        .intro h3{
            font-weight: 500;
            font-size: 1.2em;
            letter-spacing: 2.5px;

        }

        .row {
            display: flex;
            margin-left:35px;
            margin-right:15px;
        }

        .tablegeneral{
            width: 450px;
        }

</style>
