
window.onload = function() {
    wheel = new wheelnav('wheelDiv');
    wheel.wheelRadius = 100;
    wheel.maxPercent = 1.6;
    wheel.slicePathFunction = slicePath().MenuSlice;
    wheel.initWheel(["item", "slice", "line", "title"]);
    wheel.navItems[0].slicePathFunction = slicePath().MenuSliceWithoutLine;
    wheel.createWheel();
}
