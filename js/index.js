 // Destinations Section Slider
        let showDestinations = 0;
        const items_to_show = 4;
        const SSdestinations = document.getElementsByClassName("destinations-card");

        const renderDestinations = function(){
            
            for(let i=0; i<SSdestinations.length; i++){
                SSdestinations[i].style.display = "none";
            }
            for(let i=showDestinations; i<showDestinations+items_to_show; i++){
                if(SSdestinations[i]){
                    SSdestinations[i].style.display = "block";
                }
            }
        }

        renderDestinations();
        
        const nextDestinations = function(){
            showDestinations += items_to_show;
            prev_button.style.visibility = "visible";
            
            if(showDestinations >= SSdestinations.length-4){
                next_button.style.visibility = "hidden";
            }
            else{
                next_button.style.visibility = "visible";
            }
            
            renderDestinations();

        }
        
        const prevDestinations = function(){
            showDestinations -= items_to_show;
            if(showDestinations <= 0){
                prev_button.style.visibility = "hidden";
                next_button.style.visibility = "visible";
            }
            else{
                prev_button.style.visibility = "visible";
            }

            renderDestinations();
        }
        
        const next_button = document.getElementById("next");
        next_button.addEventListener("click", nextDestinations);
        
        const prev_button = document.getElementById("prev");
        prev_button.addEventListener("click", prevDestinations);

        // End of Destinations Section Slider

        // Transition for Backed info Section

        const cards = document.querySelectorAll(".backed-info-cards");
        const background_text = document.querySelectorAll(".background-text");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                } 
            });
        }, 
        {
            threshold: 0.5
        }
    
    );


    cards.forEach((card) => {
        observer.observe(card);
    });

    background_text.forEach((text) => {
        observer.observe(text);
    });


