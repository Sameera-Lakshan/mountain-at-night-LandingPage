var ul=document.querySelector(".responsive-nav"),menu=document.querySelector("#hamburger"),star=document.querySelector(".star"),menuOut=document.querySelector("#menu-out"),exBtn=document.querySelector("#explore-btn"),count=!1;menu.addEventListener("click",function(){count=!1===count?(ul.style.display="block",menuOut.style.display="block",setTimeout(function(){ul.style.opacity="1",ul.style.transform="rotateZ(0deg)",menuOut.style.opacity="0.5"},100),!0):(ul.style.opacity="0",ul.style.transform="rotateZ(90deg)",menuOut.style.opacity="0",setTimeout(function(){ul.style.display="none",menuOut.style.display="none"},500),!1)}),menuOut.addEventListener("click",function(){ul.style.opacity="0",ul.style.transform="rotateZ(90deg)",menuOut.style.opacity="0",setTimeout(function(){ul.style.display="none",menuOut.style.display="none"},500),count=!1}),window.sr=ScrollReveal(),sr.reveal("h1",{duration:1e3,origin:"top",distance:"200px"}),sr.reveal("p",{duration:1e3,origin:"left",distance:"200px"}),sr.reveal("#moon",{duration:1500,origin:"top",distance:"200px"}),sr.reveal("#mountain",{duration:1500,origin:"bottom",distance:"400px"});