// แจ้งเตือนทุกๆ 30 วินาที
setInterval(() => {
    alert('Please, use me...');
}, 30000);

document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const leftStr = document.getElementById('left').value.trim();
    const rightStr = document.getElementById('right').value.trim();
    const op = document.getElementById('op').value;

    // เช็กว่าเป็นจำนวนเต็มบวกหรือศูนย์เท่านั้น (ห้ามมีทศนิยม หรือติดลบ)
    if (!/^\d+$/.test(leftStr) || !/^\d+$/.test(rightStr)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftStr, 10);
    const right = parseInt(rightStr, 10);

    // เช็กกรณีหารหรือมอดุโลด้วย 0
    if ((op === '/' || op === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    if (op === '+') result = left + right;
    else if (op === '-') result = left - right;
    else if (op === '*') result = left * right;
    else if (op === '/') result = left / right;
    else if (op === '%') result = left % right;

    alert(result);
    console.log(result);
});