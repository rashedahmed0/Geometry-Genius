function triangle() {
    const triBase = document.getElementById('tri-base');
    const triHeight = document.getElementById('tri-height');
    const triBaseValue = triBase.value;
    const triHeightValue = triHeight.value;
    const numTriBaseValue = parseFloat(triBaseValue);
    const numTriheightValue = parseFloat(triHeightValue)

    const triAnswer = 'Answer : '
    const triArea = triAnswer + 0.5 * numTriBaseValue * numTriheightValue + " cm";

    const triAns = document.getElementById('ans');
    triAns.innerText = triArea
}