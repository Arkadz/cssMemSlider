class cssMemSlider {
    
    currentImage = null;
    counter = 0;
    controllers = null;

    constructor (imgItems) {
        this.imgItem = imgItems;
        this.element = document.querySelector('.img-item');
        this.controllers = document.querySelectorAll('.controls__area');
    }
    
    removeAppearClass() {
        this.element.classList.remove('appear');
        this.element.removeEventListener('animationend', this.removeAppearClass.bind(this));
    }

    removeHiddenClass() {
        this.element.classList.remove('hidden');
        this.element.removeEventListener('animationend', this.removeHiddenClass.bind(this));
    }

    init() {
        //add first image
        this.element.addEventListener('animationend', this.removeHiddenClass.bind(this));
        this.currentImage = this.imgItem[this.counter];
        this.element.style.backgroundImage = `url('${this.currentImage}')`;
        this.element.classList.add('hidden');

        //add controllers
        this.controllers.forEach(( element, index )=> {
            element.addEventListener('click', ()=>{
                this.switchImage(index);
            })
        });
    }

    switchImage(index) {
        this.element.addEventListener('animationend', this.removeAppearClass.bind(this));
        this.element.classList.add('appear');
        
        

        setTimeout(() => {
            this.currentImage = this.imgItem[index];
            this.element.style.backgroundImage = `url('${this.currentImage}')`;     
        }, 500);

        

    }
}

const images = [
                './assets/images/1.jpg', 
                './assets/images/2.jpg', 
                './assets/images/3.jpg', 
                './assets/images/4.jpeg'
            ];


const slider = new cssMemSlider(images);
slider.init();

