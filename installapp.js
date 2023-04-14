var prompt;
      var beforeinstallpromptsupport = false;
      
      window.addEventListener('beforeinstallprompt', function(e){
        // We now know the app is not yet installed and this is not ios
        // Note: If the app is installed through Edge on Android, this event will still fire in Edge.  
        // If however the app is installed through Chrome on Android, this event will not fire in Edge.  
        // So it appears that edge only consider the app installed if it is installed through Chrome.  Sigh.
        beforeinstallpromptsupport = true;
    
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
    
        // Show button
        $('#installbutton').show();
    
        // Bind native install prompt to click of button
        // Then hide button so it can not be clicked again (or if you prefer, disable it)
        $('#installbutton').on('click', function(){
           e.prompt();
           $('#installbutton').hide();
        })
      });
      
      function alternatePrompt(){
    
        // This function only matters if we can not bind the native prompt to the 'beforeinstallprompt' event.
        // So this code only runs if we are on iOS or if the app is already installed
        if(!beforeinstallpromptsupport){
    
          // Detects if device is on iOS 
          const ios = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
          }
    
          if (ios()){
            // Show button
            $('#installbutton').show();
    
            // Change what we do on click of our button
            // ie. Instead of a native install prompt, we popup instructions for a manual install
            $('#installbutton').off('click').on('click', function(){
              promptPopup('iosinstructions');
            })
    
          }else{
            // This is not iOS and the beforeinstallprompt event is not supported
            // Therefore, app is likely already installed, so do not display button
          }
        }
      }

  // Check for event support after half a second (Without this delay our code will not have had the chance to set 'beforeinstallpromptsupport')
  window.setTimeout(alternatePrompt,500);
