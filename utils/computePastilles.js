export default function computePastilles(
    wCanvas,
    hCanvas,
    bgColor,
    bgBorderColor,
    fgColor,
    fgBorderColor,
    activeLevel,
    numHotspot,
    wPastille,
    hPastille
) {
    var wSize = wPastille / 10.0;

    var col = wCanvas / wSize;
    var row = hCanvas / wSize;

    var padding = 2;
    var w = wSize - padding;

    var cx;

    var cy = w * 0.2;
    //var cy = 24;

    var ty = cy + 33;

    var pastille = '';
    var num = 0;

    for (var i = 0; i < row; i++) {
        cx = wSize * 0.5;
        for (var k = 0; k < col; k++) {
            num++;

            var circle = `<circle cx="${cx}"
              cy="${cy}"
              r="6"
              fill="${bgColor}"
              stroke=${bgBorderColor}
              stroke-width=0
            />`;

            var textVG = `<text font-size="24"
          stroke="${fgBorderColor}"
          fill="${fgColor}"
          font-family="serif"
          text-anchor="middle"
          alignment-baseline="baseline"
          x="${cx}"
          y="${ty}">${activeLevel}0${num}</text>`;

            pastille += circle + textVG;

            cx += wSize;
        }
        cy += wSize;
        ty += wSize;
    }

    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('version', '1.1');
    s.setAttribute('baseProfile', 'full');
    s.setAttribute('width', wPastille);
    s.setAttribute('height', hPastille);
    s.setAttribute('viewBox', `0 0 ${wPastille} ${hPastille}`);
    s.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    s.innerHTML = pastille;
    // make it base64
    var svg64 = btoa(s.outerHTML);
    var b64Start = 'data:image/svg+xml;base64,';
    var image64 = b64Start + svg64;

    var textureOptions = {
        url: image64,
        colNumber: col,
        padding: padding,
        iconSize: w,
    };
    return textureOptions;
}
