
function calc(){
    var salary   = document.getElementById('salary').value,
        net			 = (salary * 12) - 13500;
    // Define Tax brackets
    var bracket1 = (0.1), tax1 = 0,
        bracket2 = (0.15), tax2 = 0,
        bracket3 = (0.2), tax3 = 0,
        bracket4 = (0.225), tax4 = 0;
    var result;
    // Define salary tax based on brackets
    if (net >= 6500){
      /*$('.result').slideDown(900);
      $('.no-result').css('display', 'none');*/
      if ( net >= 6500 && net <= 30000 ) {
        tax1	= (net * bracket1);
      }
      else if ( net >= 30000 && net <= 45000 ) {
        tax2	= (net * bracket2);
      }
      else if ( net >= 45000 && net <= 200000 ) {
        tax3	= (net * bracket3);
      }
      else if (net > 200000) {
        tax4	= (net * bracket4);
      }
      result = (tax1 + tax2 + tax3 + tax4) / 12;

    }
    else {
      /*$('.no-result').slideDown(300);
      $('.result').css('display', 'none');*/
    }
    // Total result output
    document.getElementById('total').innerHTML = result;
    // Define Sectors spendings
    var public_service 	= (0.3712) * result,
        order_safety		= (0.0515) * result,
        economy					=	(0.0483) * result,
        enviroment			= (0.0025) * result,
        housing					= (0.0292) * result,
        health					= (0.0519) * result,
        youth_culture		= (0.0354) * result,
        education				= (0.1148) * result,
        social_security = (0.2448) * result,
        misc						= (0.05) * result;
    // Define sectors results
    document.getElementById('public-service').innerHTML =  public_service.toFixed(2);
    document.getElementById('order-safety').innerHTML = order_safety.toFixed(2);
    document.getElementById('economy').innerHTML = economy.toFixed(2);
    document.getElementById('enviroment').innerHTML = enviroment.toFixed(2);
    document.getElementById('housing').innerHTML = housing.toFixed(2);
    document.getElementById('health').innerHTML = health.toFixed(2);
    document.getElementById('youth-culture').innerHTML = youth_culture.toFixed(2);
    document.getElementById('education').innerHTML = education.toFixed(2);
    document.getElementById('soc-sec').innerHTML = social_security.toFixed(2);
    document.getElementById('misc').innerHTML = misc.toFixed(2);
    /* Show/hide results depend on salary
    if (salary <= 1125) {
      $('.no-result').slideDown(300);
      $('.result').css('display', 'none');
    }
    else if (salary != 1125) {
      $('.result').slideDown(300).css('display', 'block');
      $('.no-result').css('display', 'none');
    }*/

}
