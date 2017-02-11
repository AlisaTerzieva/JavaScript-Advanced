function sortRects(inputData) {
    let rects = [];
    for (let [width, height] of inputData) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    rects.sort((a, b) => a.compareTo(b));
    return rects;

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: ()=> rect.width * rect.height,
            compareTo: function (otherRect) {
                let result = otherRect.area() - rect.area();
                return result || (otherRect.width - rect.width);
            }
        };
        return rect;
    }
}

