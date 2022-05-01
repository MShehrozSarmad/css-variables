const controls = document.querySelectorAll('input');

function updateIt(){
    const unit = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

controls.forEach(control => control.addEventListener('change', updateIt));