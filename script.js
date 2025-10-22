document.getElementById('sendOrder').addEventListener('click', function() {
  const order = document.getElementById('orderList').value.trim();
  if (!order) { 
    alert("يرجى كتابة طلبك قبل الإرسال"); 
    return; 
  }
  const url = `https://wa.me/96894836981?text=${encodeURIComponent("\n" + order)}`;
  window.open(url, '_blank');
});

