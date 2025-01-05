let val = 0; 

function increase() {
   val++;
   updateCounter();
}

function decrease() {
   val--;
   updateCounter();
}

function reset() {
   val = 0;
   updateCounter();
}

function updateCounter() {
   document.getElementById('counterValue').innerText = val;
}

function modal() {
   // Create overlay
   let overlay = document.createElement('div');
   overlay.id = 'overlay';

   // Create modal window
   let modal = document.createElement('div');
   modal.id = 'modal';

   // Add counter heading
   let h2 = document.createElement('h2');
   h2.innerText = 'Counter Value';
   modal.appendChild(h2);

   // Add counter display
   let counterDisplay = document.createElement('div');
   counterDisplay.id = 'counterValue';
   counterDisplay.innerText = val;
   modal.appendChild(counterDisplay);

   // Add buttons
   let increaseBtn = document.createElement('button');
   increaseBtn.innerText = '+';
   increaseBtn.onclick = increase;

   let decreaseBtn = document.createElement('button');
   decreaseBtn.innerText = '-';
   decreaseBtn.onclick = decrease;

   let resetBtn = document.createElement('button');
   resetBtn.innerText = 'Reset';
   resetBtn.onclick = reset;

   let closeBtn = document.createElement('button');
   closeBtn.innerText = 'Close';
   closeBtn.onclick = function () {
      document.body.removeChild(modal);
      document.body.removeChild(overlay);
   };

   modal.appendChild(decreaseBtn);
   modal.appendChild(increaseBtn);
   modal.appendChild(resetBtn);
   modal.appendChild(closeBtn);

   // Append modal and overlay to body
   document.body.appendChild(overlay);
   document.body.appendChild(modal);
}

// Attach modal function to button
document.getElementById('card').addEventListener('click', modal);
