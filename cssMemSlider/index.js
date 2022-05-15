class cssMemSlider {
    
    currentImage = null;
    currentText = null;
    controllers = null;
    counter = 0;
    currentControl = null;
    
    constructor (imgItems, texts) {
        this.imgItem = imgItems;
        this.texts = texts;
        this.element = document.querySelector('.img-item');
        this.currentText = document.querySelector('.infoPanel_imgText');
        this.controllers = document.querySelectorAll('.controls__area');
        this.currentControl = 0;
        this.controlsAreaItem = document.querySelectorAll('.controls__area-item');

    }
    
    removeAppearClass() {
        this.element.classList.remove('appear');
        this.currentText.classList.remove('appear');
        this.element.removeEventListener('animationend', this.removeAppearClass.bind(this));


    }

    removeHiddenClass() {
        this.element.classList.remove('hidden');
        this.currentText.classList.remove('hidden');
        this.element.removeEventListener('animationend', this.removeHiddenClass.bind(this));
    }

    init() {
        //add first image
        this.element.addEventListener('animationend', this.removeHiddenClass.bind(this));
        this.currentImage = this.imgItem[this.counter];
        this.element.style.backgroundImage = `url('${this.currentImage}')`;
        this.element.classList.add('hidden');

        this.currentText.addEventListener('animationend', this.removeHiddenClass.bind(this));
        this.currentText.innerText = this.texts[this.counter];
        this.currentText.classList.add('hidden');

        this.controlsAreaItem[this.counter].classList.add('active');

        //add controllers
        this.controllers.forEach(( element, index )=> {
            element.addEventListener('mouseover', ()=>{
                if (this.controlsAreaItem[index].classList.contains('active')) {
                    this.controlsAreaItem[index].style.border = 'solid 3px white';
                } else {
                    this.controlsAreaItem[index].style.border = 'solid 3px white';
                    this.controlsAreaItem[index].style.background = 'white';
                }
            });
            element.addEventListener('mouseout', ()=>{
                this.controlsAreaItem[index].style = '';
            });
            element.addEventListener('click', ()=>{
                this.switchImage(index);
            });
        });

    }

    switchImage(index) {
        this.element.addEventListener('animationend', this.removeAppearClass.bind(this));
        this.element.classList.add('appear');
        this.currentText.addEventListener('animationend', this.removeAppearClass.bind(this));
        this.currentText.classList.add('appear');

        setTimeout(() => {
            this.currentImage = this.imgItem[index];
            this.element.style.backgroundImage = `url('${this.currentImage}')`;    
            this.currentText.innerText = this.texts[index];
            this.controlsAreaItem.forEach(item=>item.classList.remove('active'));
            this.controlsAreaItem[index].classList.add('active');
            this.controlsAreaItem[index].style.background = 'transparent';
        }, 500);
    }
}

const images = [
                './assets/images/1.jpg', 
                './assets/images/2.jpg', 
                './assets/images/3.jpg', 
                './assets/images/4.jpeg'
            ];
const texts = [
                ' text 1',
                ' text 2',
                ' text 3',
                ' text 4'
];

const slider = new cssMemSlider(images, texts);
slider.init();

