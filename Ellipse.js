document.getElementById('Ellipse-btn').addEventListener('click', function () {
    const EllipseA = document.getElementById('Ellipse-A');
    const EllipseB = document.getElementById('Ellipse-B');
    const EllipseAValue = EllipseA.value;
    const EllipseBValue = EllipseB.value;
    const numAValue = parseFloat(EllipseAValue);
    const numBValue = parseFloat(EllipseBValue);
    const EllipseArea = 3.1416 * numAValue * numBValue;
    const ellipseAns = document.getElementById('Ellipse-ans');
    ellipseAns.innerText = "Answer : " + EllipseArea + ' cm';
})