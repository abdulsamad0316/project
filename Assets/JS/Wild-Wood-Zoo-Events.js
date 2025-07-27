
            var evlogo1 = document.querySelector('.ev-logo1');
            var evlogo2 = document.querySelector('.ev-logo2');
            var evlogo3 = document.querySelector('.ev-logo3');
            var evlogo4 = document.querySelector('.ev-logo4');
            var eveimg = document.querySelector('.eve-img');

            evlogo1.addEventListener('click', () => {
                eveimg.src = evlogo1.src;
            });
            evlogo2.addEventListener('click', () => {
                eveimg.src = evlogo2.src;
            });
            evlogo3.addEventListener('click', () => {
                eveimg.src = evlogo3.src;
            });
            evlogo4.addEventListener('click', () => {
                eveimg.src = evlogo4.src;
            });