<?php

if(isset($_POST['subscriber_email'])){
    include("update.php");

    $crud = new crud();

    $data = $crud->subscribers($_POST['subscriber_email'],"subscribers");

 
}
?>

<!DOCTYPE html>
<html>
<head>
        <title>WiseL</title>

        <!-- HTML5 Shim and Respond.js IE9 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
      
        <meta charset="utf-8">
		<meta name="description" content="Appestia App Landing Page Template by Phoenixcoded">
        <meta name="keywords" content="appestia, Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app">
        <meta name="author" content="Phoenixcoded">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        
        <!-- <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon"> -->
        <link rel="icon" href="assets/images/logi1.png" type="image/png">

         <!-- Google font-->
		 
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

        <!-- Required Framework-->
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />

        <!-- Font Icons-->
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" />

        <!-- Parallax.css-->        
        <link rel="stylesheet" type="text/css" href="assets/css/jarallax.css">

        <!-- OWL.css-->
        <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css">

        <!-- Magnific.css-->
        <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css">

        <!-- Custom Scroolbar -->
        <link rel="stylesheet" type="text/css" href="assets/css/jquery.mCustomScrollbar.css">

        <!--Animate CSS-->
        <link rel="stylesheet" type="text/css" href="assets/css/animate.min.css">

        <!-- Wave-Effects.css-->
        <link rel="stylesheet" type="text/css" href="assets/css/waves.css">       

        <!-- Style.css-->   
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" /> 

        <!-- Responsive.css-->   
        <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" /> 
        
  

        <!--color css-->
        <link rel="stylesheet" type="text/css" href="assets/css/color/color-1.css" id="color"/>
        
       <!-- alertify -->
        <link rel="stylesheet" type="text/css" href="assets/alertify/css/alertify.css" id="color"/>


    </head>
    <body data-spy="scroll" data-target=".navbar" data-offset="50">
    

    
    <!-- <nav class="navbar default"> -->
    <div style="text-align: right;font-size: 28px; margin-top: 20px; margin-right: 40px; color: black">
        <a style="color:#0b9545 !important" href="https://www.facebook.com/WiseLearningSolutions" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>

        <a href="mailto:info@wisel.in" target="_blank" style="color:#0b9545 !important;"><i class="fa fa-envelope" aria-hidden="true"></i>
</a>
    </div>
 
        <header id="home">        

            <section id="index-banner" class="jarallax" data-jarallax='{"speed": 0.2}' style="background-color:white;">

            <!-- <div class="bg-opacity-layer"></div> -->

                <!--Cloud Section-->
                <div class="clouds"></div>  
                <!--Cloud Section End--> 
                <div id="header" class="home-center">

                	<div class="col-md-7">
                      	<div class="" data-os-animation="" data-os-animation-delay="0.5s" style="animation-delay: 0.5s;" data-os-animation-duration="2.5s">
                                <img class="img img-responsive" src="assets/images/img.gif" alt="Home-Mobile" style="height:500px;width:500px; margin-top:-250px;">
                        </div>
                            
                        </div>

                    <div class="col-md-5">
                    	<img src="assets/images/main.png" style="width:100%;max-width:400px;padding-top:90px">

                        <br>
                        <br>
                        <br>
                        <br>
                        <form class="form-material set-submit-input" style="text-align: left" method="post" action="<?php $_SERVER['HTTP_HOST']; ?>">
                            <div class="form-group set-submit-box">
                                <input type="email" class="form-control" name="subscriber_email" id="subscriber_email" required="">                                            
                                <span class="form-bar"></span>
                                <label class="float-label" for="subscriber_email">Enter Email</label>
                            </div>  
                            
                            <button type="submit" class="btn btn-primary btn-subscribe common-btn colored-button float-button-light">Subscribe <i class="fa fa-paper-plane ml5" aria-hidden="true"></i>
                            </button> 
                           

                        </form>
        

                              <div class="container">
                                <div class="row" > 
                                    
                                </div>                       
                            </div>
                        
                    </div>
                </div>
            </section> 
        </header>  
    
<footer>
    <div class="footer navbar-fixed-bottom" align="center">
        <p style="color: #0b9545;font-size: 18px;">Contact us: <a href="mailto:info@wisel.in">info@wisel.in</a></p>

        &copy; <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> WiseL.in

    </div>
</footer>
        <!--Required JS -->
        <script src="assets/js/jquery.2.2.3.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>           

        <!--Jarallax JS-->
        <script src="assets/js/jarallax.min.js"></script>

        <!--Sidebar JS-->
        <script src="assets/js/jquery.sidebar.min.js"></script>         

        <!--OWL Carousel JS -->
        <script src="assets/js/owl.carousel.min.js"></script> 

        

        <!--Video Magnification JS -->
        <script src="assets/js/jquery.magnific-popup.min.js"></script>        

        <!-- Count Numbers -->
        <script src="assets/js/jquery.counterup.js"></script>          

        <!-- animation -->
        <script src="assets/js/waypoints.min.js"></script>

        <!--Custom Scrollbar JS-->
        <script src="assets/js/mCustomScrollbar.min.js"></script>

        <!-- Twiiter JS -->
        <script src="assets/js/tweetie.min.js"></script> 
        
        <!--Wave-Effect JS-->                                    
        <script src="assets/js/waves.min.js"></script>


        <!--Custom JS-->    
        <script src="assets/js/custom.js"></script>


        <!-- Alertify JS -->
        <script src="assets/alertify/js/alertify.js"></script>           

    </body>


</html>

<?php
   if($data)
        echo '
                <script type="text/javascript">

                    alertify.delay(3000); // This is just to make the demo go faster.

                    alertify.logPosition("top right");
                    alertify.log("Thank you for subscribing!");

                </script>
            ';
 
?>