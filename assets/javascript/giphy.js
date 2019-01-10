var topics = ["cats", "dogs", "chicken", "rabits", "pranks", "basketball", "jump", "fall"];

renderButtons();

function renderButtons() {
    for (let i = 0; i < topics.length; i++) {
        var btn = $("<button>", {
            "class": "topic",
            "text": topics[i]
        });
        btn.attr("topicData", topics[i]);
        $("#buttonsDiv").append(btn);
    }
}

$(document).on("click", ".topic", function () {
    // Grabbing and storing the data-animal property value from the button
    var topic = $(this).attr("topicData");

    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ABH0dPYY0HJy3oI1mmotXqQQrcFlSDXh&q=' + topic + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            results = response.data;
            console.log("Giphy Data: ", results);

            var giphyDiv = $("<div class=activeOrStill>");
            for (let i = 0; i < results.length; i++) {
                var TopicDiv = $("<div class=topicDiv>");
                const Topic = $('<p>').text('Topic: ' + topic);
                const pOne = $("<p>").text("Rating: " + results[i].rating);
                TopicDiv.append(Topic);
                TopicDiv.append(pOne);
                
                const image1 = $("<img>");
                image1.attr("src", results[i].images.fixed_height_still.url);
                image1.addClass("stillGifs");
                image1.attr('id', topic + i + 'Still');
                image1.attr('dataInfo', topic + i);
                TopicDiv.append(image1);
  
                const image2 = $("<img>");
                image2.attr("src", results[i].images.fixed_height.url);
                image2.addClass("activeGifs");
                image2.attr('id', topic + i + 'Active');
                image2.attr('dataInfo', topic + i);
                TopicDiv.append(image2);
                giphyDiv.append(TopicDiv);
            }
            $("#giphyDiv").prepend(giphyDiv);
            $('.activeGifs').hide();
        })
});

$("#newBtnSubmit").on("click", function (event) {
    event.preventDefault();
    const topic = $("#newButton").val().trim();
    topics.push(topic);
    $("#newButton").val("");
    $("#buttonsDiv").empty();
    renderButtons();
  });
  
  $(document).on("click", '.stillGifs', function (event) {
    stillId = '#' + event.target.attributes.dataInfo.value + 'Still';
    activeId = '#' + event.target.attributes.dataInfo.value + 'Active';
    $(stillId).hide();
    $(activeId).show();
  });
  
  $(document).on("click", '.activeGifs', function (event) {
    stillId = '#' + event.target.attributes.dataInfo.value + 'Still';
    activeId = '#' + event.target.attributes.dataInfo.value + 'Active';
    $(stillId).show();
    $(activeId).hide();
  });
  