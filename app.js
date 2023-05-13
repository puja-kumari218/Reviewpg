// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, id dicta. Incidunt nisi reiciendis dolores cupiditate tempore suscipit asperiores consectetur blanditii',

    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, id dicta. Incidunt nisi reiciendis dolores cupiditate tempore suscipit asperiores consectetur blanditii',

    },
    {
      id: 3,
      name: 'peter jones',
      job: 'ui/ux',
      img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, id dicta. Incidunt nisi reiciendis dolores cupiditate tempore suscipit asperiores consectetur blanditii',
    },
    {
      id: 4,
      name: 'John Smilga',
      job: 'web developer',
      img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, id dicta. Incidunt nisi reiciendis dolores cupiditate tempore suscipit asperiores consectetur blanditii',

    },
  ];

  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  let currentItem = 0;
  
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }


  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });


  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });

  
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });