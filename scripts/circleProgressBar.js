function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function startAnimation() {
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.70,
        fill: {gradient: ["#00ADB5", "#458EF1"]}
    }

    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
    $(".python .bar").circleProgress({
        value: 0.80,
    });
    $(".django .bar").circleProgress({
        value: 0.50,
    });
    $(".js .bar").circleProgress({
        value: 0.60,
    });
    $(".с .bar").circleProgress({
        value: 0.30,
    });
    $(".english .bar").circleProgress({
        value: 0.60,
    });
}


let animStarted = false;
document.addEventListener('scroll', function () {
    if (animStarted == false) {
        const bar = $(".circle .bar")[0];
        if (isInViewport(bar)) {
            startAnimation();
            animStarted = true;
        }
    }
})