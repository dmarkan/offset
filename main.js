let img = $('img');
let holder = $('#holder');
let info = $('#info');
let img1Info = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel pariatur officia minima saepe, adipisci vitae sint earum? Quaerat, cum minus! Adipisci quae at voluptate iure cumque! Soluta, aperiam qui.';

img.on('click', function () {
    info.html('');
    let self = $(this);
    let copy = self.clone();
    copy.css({
        position: 'absolute',
        width: self.width(),
        height: self.height(),
        top: self.offset().top,
        left: self.offset().left
    });
    copy.animate({
        top: holder.offset().top,
        left: holder.offset().left,
        width: holder.width(),
        height: holder.height(),
    }, 1000, function () {
        info.append(img1Info);
    })
    $('#wrapp').append(copy);
})