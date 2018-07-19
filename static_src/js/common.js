


$('.lazy').slick({
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    autoplay: true,
    row: true,

    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.client').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    autoplay: true,
    row: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

});





function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('p');
    msgElem.className = "error-message";
    setTimeout(function () {
        $(".error-message").css("transform", "scaleX(1)");
    },10);
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);

}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        // $(".error-message").removeClass('error2');
        container.removeChild(container.lastChild);

    }

}

function validate(form) {
    var elems = form.elements;
    var finisch=document.getElementsByClassName("finisch");



    resetError(elems.message.parentNode);
    if (!elems.message.value) {
        elems.message.focus();
        showError(elems.message.parentNode, 'The column can not be empty!');
    }
    resetError(elems.company.parentNode);
    if (!elems.company.value) {
        elems.company.focus();
        showError(elems.company.parentNode, 'The column can not be empty!');
    }else if (!re.test(form.company.value)){
        elems.company.focus();
        showError(elems.company.parentNode, ' Not a valid symbol!');
    }

    resetError(elems.subject.parentNode);
    if (!elems.subject.value) {
        showError(elems.subject.parentNode, 'The column can not be empty!');
        elems.subject.focus();
    }

    mf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, 'The column can not be empty!');
        elems.email.focus();
    } else if(!mf.test(form.email.value)){
        showError(elems.email.parentNode, 'Not a valid symbol!');
        elems.email.focus();
    }

    re = /^[а-я,і,І,А-Я,'`a-z,A-Z,\-]+$/;
    resetError(elems.from.parentNode);
    if (!elems.from.value) {
        elems.from.focus();
        showError(elems.from.parentNode, 'The column can not be empty!');
    }else if (!re.test(form.from.value)){
        elems.from.focus();
        showError(elems.from.parentNode, 'Not a valid symbol!');
    }


    /*else if(re.test(form.from.value)){
    showError(elems.from.parentNode, '<span>bbbb<span>');
                setTimeout(function () {
                    $("#remove").removeClass('error');
                },5);
            }*/


    if (!elems.from.value || !re.test(form.from.value)  || !elems.email.value || !mf.test(form.email.value)
        || !elems.subject.value || !elems.company.value || !re.test(form.company.value) || !elems.message.value){
        return false;
    }else{

        document.getElementById('contactForm').reset();

        // this.reset();
        document.getElementById("finisch").style.display = "block";
        setTimeout(function () {
            document.getElementById("finisch").style.display = "none";
        },10000);

        return true;
    }
}
if ($('#prob').css('display') == 'none') {
    $(document).ready(function(){$(".header").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;

        $('body,html').animate({scrollTop:top},1000);});});
}else{
    $(document).ready(function(){$(".header").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
        $('.burger').removeClass('opened');
        $(".top_nav").css("display","none");
        $('.header').removeClass('header-color');
        $('body,html').animate({scrollTop:top},1000);});});

    var textShowing=true;
    $("section").click(function () {
        $(".nav").fadeOut(function () {
            textShowing = true;
            $('.burger').removeClass('opened');
            $(".top_nav").css("display","none");
            $('.header').removeClass('header-color');
        });
    });
    $(".burger").click(function(){
        $(this).next().slideToggle();
    });
    $('.burger').click(function(){
        $('.burger').toggleClass('opened');
        $('.header').toggleClass('header-color');
        $('.top_nav').click(function(){
            $('.burger').removeClass('opened');
            $(".top_nav").css("display","none");
        });
    });
}


/*
function detectmob() {
    if(window.innerWidth <= 676) {

        return true;
    } else {

        return false;
    }
}
*/