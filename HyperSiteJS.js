const headerNavButton = document.getElementById('nav-button');
const coursePathHelp = document.getElementById('course-path-helper');
const coursePathRoute = document.getElementById('course-path-route');
const coursePathPlacement = document.getElementById('course-path-placement');
const coursePathCarrer = document.getElementById('course-path-carrer');
const qa = document.getElementById('qNa');
const qa2 = document.getElementById('qNa-public');
const submit = document.getElementById('submitButton');
const submit2 = document.getElementById('topsubmitButton');
const submit3 = document.getElementById('commercial-submit-button');
const careers = document.getElementById('careers');
const exitRegModal = document.getElementById('exit-reg-modal');
const exitCommercialModal = document.getElementById('exit-comm-modal');
const careerList = document.getElementById('desktop-career-list');
const navBar = document.getElementById('desktop-nav-bar');

careerList.addEventListener('mouseover',()=>{
    navBar.className = 'desktop-nav-bar-show';
})
careerList.addEventListener('mouseout',()=>{
    navBar.className = 'desktop-nav-bar-hide';
})

navBar.addEventListener('mouseover',()=>{
    navBar.className = 'desktop-nav-bar-show';
})
navBar.addEventListener('mouseout',()=>{
    navBar.className = 'desktop-nav-bar-hide';
})

setInterval(popUp,60000);
function popUp()
{
    let commercial = document.getElementById('commercial-modal');
    if(commercial.className === 'modal-commercial-off')
        commercial.className = 'modal-commercial';
}
exitCommercialModal.addEventListener('click',()=>{
    document.getElementById('commercial-modal').className = 'modal-commercial-off';
})

headerNavButton.addEventListener('click',()=>{
    let bar = document.getElementById('nav-bar');
    if(bar.className === 'close-nav-bar')
    {
        bar.className = 'open-nav-bar';
        document.getElementById('line1').className = 'line top-line';
        document.getElementById('line2').className = 'line-hidden';
        document.getElementById('line3').className = 'line bottom-line';
    }
    else
    {
        bar.className = 'close-nav-bar';
        document.getElementById('line1').className = 'top-line-reverse line';
        document.getElementById('line2').className = 'line';
        document.getElementById('line3').className = 'line bottom-line-reverse';
    }
        
})

careers.addEventListener('click',()=>{
    let careerList = document.getElementById('careers-list');
    if( careerList.className === 'career-closed' )
        careerList.className = 'career-open';
    else
        careerList.className = 'career-closed';
})

coursePathHelp.addEventListener('click',()=>{
    if( document.getElementById('drop-down-box-one').className === 'drop-down-content')
        document.getElementById('drop-down-box-one').className = 'show green-blue';
    else
        document.getElementById('drop-down-box-one').className = 'drop-down-content';
})

coursePathRoute.addEventListener('click',()=>{
    if( document.getElementById('drop-down-box-two').className === 'drop-down-content') 
        document.getElementById("drop-down-box-two").className = 'show light-sea-blue'
    else
        document.getElementById("drop-down-box-two").className = 'drop-down-content'
})

coursePathPlacement.addEventListener('click',()=>{
    if( document.getElementById('drop-down-box-three').className === 'drop-down-content') 
        document.getElementById("drop-down-box-three").className = 'show glowing-blue'
    else
        document.getElementById("drop-down-box-three").className = 'drop-down-content'
})

coursePathCarrer.addEventListener('click',()=>{
    if( document.getElementById('drop-down-box-four').className === 'drop-down-content') 
        document.getElementById("drop-down-box-four").className = 'show darkblue'
    else
        document.getElementById("drop-down-box-four").className = 'drop-down-content'
})


qa.addEventListener('click',(e)=>{
    if(e.target.id === '')
        return;
    let answer = 'a' + e.target.id[1];
    let arrow = 'arrow' + e.target.id[1];
    if(answer.length != 2 || answer[1]==='N')
        return;
    if(document.getElementById(answer).className === 'answer-hide')
    {
        document.getElementById(answer).className = 'answer-show';
        document.getElementById(arrow).className = 'fas fa-arrow-circle-down blue-arrow-up';
    }  
    else
    {
        document.getElementById(answer).className = 'answer-hide';
        document.getElementById(arrow).className = 'fas fa-arrow-circle-down blue-arrow-down';
    }
})

qa2.addEventListener('click',(e)=>{
    if(e.target.id === '')
        return;
    let answer = 'a' + e.target.id[1];
    let arrow = 'arrow' + e.target.id[1];
    if(answer.length != 2 || answer[1]==='&')
        return;
    if(document.getElementById(answer).className === 'answer-hide')
    {
        document.getElementById(answer).className = 'answer-show';
        document.getElementById(arrow).className = 'fas fa-arrow-circle-down blue-arrow-up';
    }
    else
    {
        document.getElementById(answer).className = 'answer-hide';
        document.getElementById(arrow).className = 'fas fa-arrow-circle-down blue-arrow-down';
    }
})

submit.addEventListener('click',()=>{
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    if( name.value.length <= 2)
    {
        name.value='';  
        name.className ='input-show';
    }
    if( phone.value.length != 10 )
    {
        phone.value='';
        phone.className ='input-show';
        
    }
    else
    {
        for(let i = 0; i < phone.value.length; i++)
        {
            if((!'1234567890'.includes(phone.value[i])))
            {
                phone.value='';
                phone.className ='input-show';
            }
        }
    }
    if(!email.value.includes('@'))
    {
        email.value='';
        email.className = 'input-show';
    }
    if(name.value != '' && phone.value != '' && email != '')
    {
        document.getElementById('reg-modal').className = 'submit-modal';
        document.getElementById('lock').className = 'lock-on';
    }
})

submit2.addEventListener('click',()=>{
    let name = document.getElementById('name-desktop');
    let phone = document.getElementById('phone-desktop');
    let email = document.getElementById('email-desktop');
    if( name.value.length <= 2)
    {
        name.value='';
        name.className ='input-show';
    }
    if( phone.value.length != 10 )
    {
        phone.value='';
        phone.className ='input-show';
        
    }
    else
    {
        for(let i = 0; i < phone.value.length; i++)
        {
            if((!'1234567890'.includes(phone.value[i])))
            {
                phone.value='';
                phone.className ='input-show';
            }
        }
    }
    if(!email.value.includes('@'))
    {
        email.value='';
        email.className = 'input-show';
    }
    if(name.value != '' && phone.value != '' && email != '')
    {
        document.getElementById('reg-modal').className = 'submit-modal';
        document.getElementById('lock').className = 'lock-on';
    }
})

submit3.addEventListener('click',()=>{
    let name = document.getElementById('commercial-name');
    let phone = document.getElementById('commercial-phone');
    let email = document.getElementById('commercial-email');
    if( name.value.length <= 2)
    {
        name.value='';
        name.className ='input-show';
    }
    if( phone.value.length != 10 )
    {
        phone.value='';
        phone.className ='input-show';
    }
    else
    {
        for(let i = 0; i < phone.value.length; i++)
        {
            if((!'1234567890'.includes(phone.value[i])))
            {
                phone.value='';
                phone.className ='input-show';
            }
        }
    }
    if(!email.value.includes('@'))
    {
        email.value='';
        email.className = 'input-show';
    }
    if(name.value != '' && phone.value != '' && email != '')
    {
        document.getElementById('commercial-modal').className = 'modal-commercial-off';
        document.getElementById('reg-modal').className = 'submit-modal';
        document.getElementById('lock').className = 'lock-on';
    }
})

exitRegModal.addEventListener('click',()=>{
    document.getElementById('reg-modal').className = 'submit-modal-off';
    document.getElementById('lock').className = 'lock-off';
})