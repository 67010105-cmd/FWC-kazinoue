function RandomColor() {
    const L = '0123456789ABCDEF';
    let co = '#';
    for (let i = 0; i < 6; i++) {
        co += L[Math.floor(Math.random()*16)];
    }
    return co;
}

document.addEventListener('DOMContentLoaded', (Event) => {
    const button = document.getElementById('bt1');
    const result = document.body;

    button.addEventListener('click', () => {
        result.style.backgroundColor = RandomColor();
    });
});