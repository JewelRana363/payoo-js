//document.getElementById('btn-login').addEventListener('click' , function(){})
document.getElementById('btn-login').addEventListener('click' , function(event){
  event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value ;

    if(phoneNumber === '01234559997' && pinNumber === '1212'){
        console.log('You are logged in');
       window.location.href = '/hum.html'

    }
    else{
      alert('Worong phone number or pin')  
    }



});
