// function randomize() {
//   Math.floor(Math.random() * 9) + 1;
// }
var random_0 = 0;
var random_1 = 0;
var random_3 = 0;
var random_counter = 0;

var counter = 0;
var prev_0 = 0;
var prev_1 = 0;
var prev_2 = 0;
var click_number = 0;



function init() {
  document.querySelector('.btn-start').removeEventListener('click', init );
  document.querySelector('.btn-start').classList.add('btn-animate');
  document.querySelector('.anus').style.filter = "grayscale(100%)";




  random_0 = Math.floor(Math.random() * 9) + 1;
  random_1 = Math.floor(Math.random() * 9) + 1;
  random_2 = Math.floor(Math.random() * 9) + 1;

  random_counter = Math.floor(Math.random() * 3) + 1;

    while (                           (random_0 === random_1)
                                   || (random_0 === prev_0 )
        || (random_1 === prev_0 )  || (random_0 === prev_1)
        || (random_1 === prev_1)   || (random_0 === prev_2)
        || (random_1 === prev_2)   || (random_0 === random_2)
        || (random_1 === random_2)
                    || (random_2 === prev_2)
                    || (random_2 === prev_0)
                    || (random_2 === prev_1)

      ) {
      random_0 = Math.floor(Math.random() * 9) + 1;
      random_1 = Math.floor(Math.random() * 9) + 1;
      random_2 = Math.floor(Math.random() * 9) + 1;
    }

    if (random_counter == 2) {
      document.querySelector('.img-' + random_0).classList.add('move');
      document.querySelector('.img-' + random_0).classList.add('active');
      document.querySelector('.img-' + random_1).classList.add('move');
      document.querySelector('.img-' + random_1).classList.add('active');
    } else if (random_counter == 1) {
      document.querySelector('.img-' + random_0).classList.add('move');
      document.querySelector('.img-' + random_0).classList.add('active');
    } else {
      document.querySelector('.img-' + random_0).classList.add('move');
      document.querySelector('.img-' + random_0).classList.add('active');
      document.querySelector('.img-' + random_1).classList.add('move');
      document.querySelector('.img-' + random_1).classList.add('active');
      document.querySelector('.img-' + random_2).classList.add('move');
      document.querySelector('.img-' + random_2).classList.add('active');
    }

    console.log(random_0);
    console.log(random_counter);

    prev_0 = random_0;
    prev_1 = random_1;
    prev_2 = random_2;


    for (var i = 1; i <= 9; i++) {
      if(document.querySelector('.img-' + i + "").classList.contains('active')){
        counter++;
      };
    }
      // console.log(counter);
};


for (var i = 1; i <= 9; i++) {
    document.querySelector('.img-' + i + "").addEventListener('click', function(){
    click_number++;
    if ((click_number % 8) == 0) {
      document.querySelector('.durov').classList.add('durov-move');
      function remove_durov() {
        document.querySelector('.durov').classList.remove('durov-move');
      }
      setTimeout(remove_durov, 3000);
    }
    // console.log(this.className);
    this.classList.toggle('move');
    this.classList.toggle('active');
    counter--;
    if(counter <= 0) {
      init();
    }

  })
}



document.querySelector('.btn-start').addEventListener('click', init );
document.querySelector('.btn-start').addEventListener('touchstart', init );


// document.querySelector('.btn-start').addEventListener('click', function() {
//   document.querySelector('.durov').style.left = "60%";
//
// } );
