
    console.log("Ad Skipper loaded on YouTube");
    let content = document.querySelector("#contents.ytd-rich-grid-renderer")||null;
    
    
    function skipads(){
        let vid = document.querySelector(".video-stream"),
        ads= document.querySelector(".video-ads")||null;
        if (ads.childNodes.length!=0){
            vid.playbackRate = 10;vid.currentTime = 500;
            vid.muted = "true"
            let btn = document.querySelector("#skip-button:3")||null;
            if(btn!=null){
                btn.click();
            }
        }
        else{
            vid.playbackRate = 1;
            vid.muted = ""
        }
    }

    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                skipads();
            }
        });
    });
    
    // Configure the observer to watch for changes to the child elements
    observer.observe(ads, { childList: true });

