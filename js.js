const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        }) 
    }
    
    //sections Active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }  
    })
}

PageTransitions();



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  



/*
  document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const readMoreBtn = post.querySelector('.read-more-btn');
        const postContent = post.querySelector('.post-content');
        const postContentInnertext = postContent.innerText;
        console.log(postContentInnertext);
        readMoreBtn.addEventListener('click', () => {
            postContent.classList.toggle('show');
            
            readMoreBtn.innerText = postContent.classList.contains('show') ? 'Read Less' : 'Read More';

            if(readMoreBtn.innerText == 'Read Less'){
                postContent.innerText = " ";
            }
            else{
                postContent.innerText= postContentInnertext;
            }
        });
    });
});

<section class="section sec5 interests " id= "interests" > 
            <h1> Blog Posts</h1>
              <section class="post">
                <h2>My Summer Garden Experience</h2>
                <div class="post-content">
                  <p>I planted...</p>
              </div>
                <button class="read-more-btn">Read More</button>
              </section>
    
            <section class="post">
                <h2>How was my Summer 2023 Job? </h2>
                <div class="post-content">
                <p>Lavner</p>
              </div>
              <button class="read-more-btn">Read More</button>
            </section>
        </section>

        <div class= "control control-5 " title ="Blog Posts" data-id= "interests">
                <i class="fa fa-pen"></i>
            </div>
        */