document.getElementById('Pentagon-btn').addEventListener('click', function () {
    const PentagonBase = document.getElementById('Pentagon-P');
    const PentagonHeight = document.getElementById('Pentagon-a');
    const PentagonPValue = PentagonBase.value;
    const PentagonAValue = PentagonHeight.value;
    const numPentagonPValue = parseFloat(PentagonPValue);
    const numPentagonAValue = parseFloat(PentagonAValue);
    const PentagonAns = 0.5 * numPentagonPValue * numPentagonAValue;
    const PentagonAnswer = document.getElementById('Pentagon-ans');
    PentagonAnswer.innerText = 'Answer: ' + PentagonAns + ' cm²';
});
