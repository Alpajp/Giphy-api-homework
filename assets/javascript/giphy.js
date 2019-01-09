var topics = ["cats", "dogs", "chicken", "rabits", "pranks", "basketball", "jump", "fall"];

renderButtons();

function renderButtons() {
    for (let i = 0; i < topics.length; i++) {
        var btn = $("<button>", {
            "text": topics[i]
        });
        btn.attr("topicData", topics[i]);
        $("#buttonsDiv").append(btn);
    }
}



function getGiphydata() {
    // Fetch giphy data from the giphy API
    var searchTerm = document.querySelector('#search').value
}

    $("button").on("click", function () {
                // Grabbing and storing the data-animal property value from the button
                var topic = $(this).attr("topicData");

                var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ABH0dPYY0HJy3oI1mmotXqQQrcFlSDXh&q=' + topic + "&&limit10";


                $.ajax({
                        url: queryURL,
                        method: "GET"
                    })
                    .then(function (response) {
                            var results = response.data;
                            console.log(results);

                        })
                    });