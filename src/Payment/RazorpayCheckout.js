import {createOrder} from "../_Api/Payments";

function createRazorPayOrder(testD) {
  let order = createOrder(testD);
  let options = {
     "key": "rzp_test_WyK93y9mvps7SN",//"rzp_live_IIFiNTCfcQrA0Z",
     "amount": (testD.price * 100), // 2000 paise = INR 20, amount in paisa
     "name": "Beatest",
     "description": testD.name,
     "image": "../../public/beatest.ico",
     "order_id" : order.rp_order_id,
     "handler": function (response){
       alert("Success : Payment Done");
       window.location.reload();
     },
     "prefill": {
       "name": "Beatest",
       "email": " "
     },
     "theme": {
       "color": "#1771D7"
     }
   };
 let rzp =new window.Razorpay(options);
 rzp.open(); 
}

export {createRazorPayOrder}