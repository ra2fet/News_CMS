function search() {
    console.log("search online gif");
    var searchInput = document.querySelector("#searchInput");

    $("#myModal").find(".modal-body")[0].innerHTML =
        '<h4 class="text-center">Searching for ' +
        searchInput.value +
        " ... </h4>";

    console.log("searchtxt", searchInput.value);
    $.ajax({
        url: "http://localhost:3000/search",
        type: "GET",
        dataType: "json",
        data: {
            term: searchInput.value,
            limit: 8,
        },
        success: function (data, status) {
            var htmlData = "";

            // Gif Grid Section

            htmlData += "<div id='results' class='row'>";
            htmlData +=
                "<h5 class='text-primary pb-3'>" +
                searchInput.value +
                " search results</h5>";

            console.log(data);

            data.forEach((e) => {
                htmlData +=
                    "<figure style='cursor:pointer' onclick='itemFunc(event)'  class='col-3  text-center '>";
                htmlData += "<img  src='" + e.gif + "' >";
                htmlData +=
                    "<figcaption class='text-truncate'>" +
                    e.title +
                    "</figcaption>";
                htmlData += "</figure>";
            });

            htmlData += "</div>";

            // See More
            htmlData += " <div id='load-more-section' class='text-center'>";
            htmlData +=
                " <button id='load-more-btn' onclick='load_more_search(1,8)' class='btn btn-secondary'> See More";
            htmlData += "<i class='fa fa-angle-down mx-1'></i>";
            htmlData += "</button>";
            htmlData += "</div>";

            // console.log("data", data[0].title);
            console.log(htmlData);

            $("#myModal").find(".modal-body")[0].innerHTML = htmlData;

            // $("#myModal").appendTo("body").modal("toggle");

            console.log("Data: " + data + ", Status: " + status);
        },
        error: function (data) {
            console.log("Error: " + data);
        },
    });
}

function load_more_trending(offset, limit) {
    console.log("load more trending before");
    console.log("limit", limit);
    console.log("offset", offset);
    $.ajax({
        url: "http://localhost:3000/trending",
        type: "get",
        dataType: "json",
        data: {
            limit: limit,
            offset: limit * offset,
        },
        beforeSend: function () {
            // $('.ajax-loading').show();
            $("#load-more-section").html(
                '<div class="text-center">Loading More...</div>'
            );
        },
    })
        .done(function (data) {
            if (data.length == 0) {
                // $('.ajax-loading').html("No more records!");
                $("#load-more-section")
                    .html('<div class="text-center">No more records!</div>')
                    .delay(1500)
                    .fadeOut();

                return;
            }

            // $('.ajax-loading').hide();
            $("#load-more-section").remove();
            offset++;

            var htmlData = "";
            data.forEach((e) => {
                htmlData +=
                    "<figure style='cursor:pointer' onclick='itemFunc(event)'  class='col-3  text-center '>";
                htmlData += "<img   src='" + e.gif + "' >";
                htmlData += "<figcaption >" + e.title + "</figcaption>";
                htmlData += "</figure>";
            });

            // See More
            htmlData += " <div id='load-more-section' class='text-center'>";
            htmlData +=
                " <button id='load-more-btn' onclick='load_more_trending(" +
                offset +
                "," +
                limit +
                ")' class='btn btn-secondary'> See More";
            htmlData += "<i class='fa fa-angle-down  mx-1'></i>";
            htmlData += "</button>";
            htmlData += "</div>";

            console.log("data see more search", data);
            console.log("result", $("#results"));
            $("#results").append(htmlData);

            console.log("offset after", offset);
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("No response from server");
        });
}

function load_more_search(offset, limit) {
    console.log("load more search before");
    console.log("limit", limit);
    console.log("offset", offset);
    $.ajax({
        url: "http://localhost:3000/search",
        type: "get",
        dataType: "json",
        data: {
            term: searchInput.value,
            limit: limit,
            offset: limit * offset,
        },
        beforeSend: function () {
            // $('.ajax-loading').show();
            $("#load-more-section").html(
                '<div class="text-center">Loading More...</div>'
            );
        },
    })
        .done(function (data) {
            if (data.length == 0) {
                // $('.ajax-loading').html("No more records!");
                $("#load-more-section")
                    .html('<div class="text-center">No more records!</div>')
                    .delay(1500)
                    .fadeOut();

                return;
            }

            // $('.ajax-loading').hide();
            $("#load-more-section").remove();
            offset++;

            var htmlData = "";
            data.forEach((e) => {
                htmlData +=
                    "<figure style='cursor:pointer' onclick='itemFunc(event)'  class='col-3  text-center '>";
                htmlData += "<img   src='" + e.gif + "' >";
                htmlData += "<figcaption >" + e.title + "</figcaption>";
                htmlData += "</figure>";
            });

            // See More
            htmlData += " <div id='load-more-section' class='text-center'>";
            htmlData +=
                " <button id='load-more-btn' onclick='load_more_search(" +
                offset +
                "," +
                limit +
                ")' class='btn btn-secondary'> See More";
            htmlData += "<i class='fa fa-angle-down  mx-1'></i>";
            htmlData += "</button>";
            htmlData += "</div>";

            console.log("data see more search", data);
            console.log("result", $("#results"));
            $("#results").append(htmlData);

            console.log("offset after", offset);
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("No response from server");
        });
}

function saveGIF(event) {
    console.log("called save Gif");
    const item = $(event.target);
    console.log(item);
    var images = item
        .parent()
        .prev()
        .find("figure.col-3.active")
        .children("img")
        .get();
    console.log(images);
    console.log("one image", images[0].src);

    //  GifImage2.MM(images[0]);

    for (let index = 0; index < images.length; index++) {
        const blockToAdd = {
            type: "image",
            data: {
                url: images[index].src,
            },
        };
        editor.blocks.insert(blockToAdd.type, blockToAdd.data);
    }
    $("#myModal").modal("hide");
}

// $('#save-button').on('click',function (e) {

//     e.preventDefault();
//     console.log('kk');
// });
function itemFunc(event) {
    console.log("func triggered item");
    console.log("func triggered item", event);
    console.log("func triggered item", event.target);
    console.log("func triggered item", event.target.parentElement);
    var cthis = event.target.parentElement;

    if (cthis.classList.contains("active")) {
        // this.removeClass('active');
        cthis.classList.remove("active");
    } else {
        // this.addClass('active');
        cthis.classList.add("active");
    }
}
