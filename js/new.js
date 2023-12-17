$(function () {
    $('.sliderBoard').each(function () {
        const $sliderBoard = $(this);
        const $content = $sliderBoard.find('.content');
        const $contentButton = $sliderBoard.find('.contentButton');
        const divWidth = $sliderBoard.width();
        const imgCount = $content.find('li').length;

        for (let i = 0; i < imgCount; i++) {
            $contentButton.append('<li></li>');
        }

        $contentButton.find('li:first').addClass('clicked');

        $content.find('li').width(divWidth);
        $content.width(divWidth * imgCount);

        let index = 0;
        let timer = setInterval(moveToNext, 5000);

        $contentButton.find('li').click(function () {
            clearInterval(timer);
            index = $(this).index();

            $content.animate({
                left: divWidth * index * -1,
            });

            $(this).addClass('clicked').siblings().removeClass('clicked');

            timer = setInterval(moveToNext, 5000);
        });

        function moveToNext() {
            index = (index < imgCount - 1) ? index + 1 : 0;

            $content.animate({
                left: divWidth * index * -1,
            });

            $contentButton.find(`li:eq(${index})`).addClass('clicked').siblings().removeClass('clicked');
        }
    });
});
