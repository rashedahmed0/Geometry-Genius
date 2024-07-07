document.getElementById('Parallelogram-btn').addEventListener('click', function () {
    const paraBase = document.getElementById('Para-base');
    const paraHeight = document.getElementById('Para-height');
    const paraBValue = paraBase.value;
    const paraHValue = paraHeight.value;
    const numPBValue = parseFloat(paraBValue);
    const numPHValue = parseFloat(paraHValue);
    const Parallelogram = numPBValue * numPHValue;
    const ParaAns = document.getElementById('Para-ans');
    ParaAns.innerText = 'Answer : ' + Parallelogram + ' cm';
})