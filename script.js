let body = document.querySelector('body');
        body.style.backgroundColor = '#00c1b5';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            let scroll = window.pageYOffset;
            if (scroll < 450) {
                //blue
                body.style.backgroundColor = '#00c1b5';
            } else if (scroll >= 450 && scroll < 1150) {
                //orange
                body.style.backgroundColor = '#ff651a';
            } else if (scroll >= 1150 && scroll < 1900) {
                // yellow
                body.style.backgroundColor = '#ffbe00';
            } else if (scroll >= 1900 && scroll < 2500) {
                // blue
                body.style.backgroundColor = '#1d3fbb';
            }
            else {
                // red
                body.style.backgroundColor = '#e30512';
            }
        }