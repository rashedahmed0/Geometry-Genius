document.getElementById('ractangle-btn').addEventListener('click', function () {
    const recLength = document.getElementById('rec-length');
    const recWidth = document.getElementById('rec-width');
    const recLengthValue = recLength.value;
    const recWidthValue = recWidth.value;
    const numRecLength = parseFloat(recLengthValue);
    const numRecWidth = parseFloat(recWidthValue);
    const recAnswer = numRecLength * numRecWidth;
    const recAns = document.getElementById('rec-ans');
    recAns.innerText = "Answer : " + recAnswer + ' cm';


})

