$(initPage);

function initPage() {
    $.getJSON('web.json', function(data) {

        serverul = data.serverul;
        var tmp1 = $('#tmp1').render(serverul);
        $('.serve-dropdown').prepend(tmp1);

        sitemap = data.sitemap;
        var tmp2 = $('#tmp2').render(sitemap);
        $('.sitemap-dropdown').prepend(tmp2);
        $('.sitemap-dropdown dl').first().addClass('none');
        $('a:contains(国美定制)').after('<i class="new"></i>');
        $('a:contains(企业采购)').after('<i class="hot"></i>');

        cate = data.cate;
        var cate_tmp = $('#cate_tmp').render(cate);
        $('.category-ul').append(cate_tmp);

        brand = data.brand;
        var tmp3 = $('#tmp3').render(brand);
        $('.selectedBrands-box').append(tmp3);

        product = data.product;
        var tmp4 = $('#tmp4').render(product);
        $('.group-products-list').append(tmp4);

        help_box = data.help_box;
        var help_box_tmp = $('#help_box_tmp').render(help_box);
        $('.gome-help-box').append(help_box_tmp);

    });
}





















