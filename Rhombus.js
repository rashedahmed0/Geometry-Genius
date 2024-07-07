document.getElementById('Rhombus-btn').addEventListener('click', function () {
    const RhombusD1 = document.getElementById('Rhombus-D1');
    const RhombusD2 = document.getElementById('Rhombus-D2');
    const rD1Value = RhombusD1.value;
    const rD2Value = RhombusD2.value;
    const numRD1Value = parseFloat(rD1Value);
    const numRD2Value = parseFloat(rD2Value);

    const RhombusAnswer = numRD1Value * numRD2Value;

    const RhombusAns = document.getElementById('Rhombus-ans');

    RhombusAns.innerText = "Answer : " + RhombusAnswer + "cm";
})