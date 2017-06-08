$(initPage);

function initPage() {
    $.getJSON('web.json', function(data) {

        serverul = data.serverul;
        var serve_tmp = $('#serve_tmp').render(serverul);
        $('.serve-dropdown').prepend(serve_tmp);

        sitemap = data.sitemap;
        var sitemap_tmp = $('#sitemap_tmp').render(sitemap);
        $('.sitemap-dropdown').prepend(sitemap_tmp);
        $('.sitemap-dropdown dl').first().addClass('none');
        $('a:contains(国美定制)').after('<i class="new"></i>');
        $('a:contains(企业采购)').after('<i class="hot_icon"></i>');

        menubar = data.menubar;
        var menu_tmp = $('#menu_tmp').render(menubar);
        $('.travel-menu').append(menu_tmp);
        $('.travel-menu li:first-child').addClass('menu-cur');

        searchmenu = data.searchmenu;
        var searchmenu_tmp = $('#searchmenu_tmp').render(searchmenu);
        $('.search-menu').append(searchmenu_tmp);

        $('.search-menu li').click(function(event) {
            /* Act on the event */
            var liindex = $(this).index();
            menuselect(liindex);
        });

        $('.search-menu li').eq(0).children('.li_bg').css({
            background: '#fff',
            opacity: '.8'
        });

        hotaddress = data.hotaddress;
        var hotAddress_tmp = $('#hotAddress_tmp').render(hotaddress);
        $('.hotAddress').append(hotAddress_tmp);

        box1data = data.box1data;
        var box1_tmp = $('#box1_tmp').render(box1data);
        $('.free').append(box1_tmp);

        box2data = data.box2data;
        var box2_tmp = $('#box2_tmp').render(box2data);
        $('.free').append(box2_tmp);

        box3data = data.box3data;
        var box3_tmp = $('#box3_tmp').render(box3data);
        $('.free').append(box3_tmp);

        foot = data.foot;
        var foot_tmp = $('#foot_tmp').render(foot);
        $('.gome-foot-help').append(foot_tmp);
    });

}























