// jQuery ready ()
$(function(){
  $(".caption-box .arrow.up").click( doUpvote );
  $(".caption-box .arrow.down").click( doDownvote );
});


/* Upvote/Downvote things
 */

// Upvote
function doUpvote (e) {
  doVote(this, "up", "down");
}

// Downvote
function doDownvote (e) {
  doVote(this, "down", "up");
}

// Helper functions for Upvote/Downvote
function doVote (obj, incOrRev, dec) {
  // Get the parent score object
  var score = $(obj).closest(".score");

  if (score.hasClass("unvoted")) {
    doScoreUpdate(score, incOrRev, 1);

    score.removeClass("unvoted");
  }
  else if (score.hasClass(dec + "voted")) {
    doScoreUpdate(score, dec, -1);
    doScoreUpdate(score, incOrRev, 1);

    score.removeClass(dec + "voted");
  }
  else {
    doScoreUpdate(score, incOrRev, -1);

    score.addClass("unvoted");
  }

  score.toggleClass(incOrRev + "voted");
}

function doScoreUpdate (parent, which, amt) {
  var newScore = parseInt(parent.find(".score." + which + "vote").text(), 10) + amt;
  var messageContext = parent.attr('id');
  parent.find(".score." + which + "vote").text(newScore);

  var upvotes = Number(parent.find(".score." + 'up' + "vote").text());
  var downvotes = Number(parent.find(".score." + 'down' + "vote").text());

  $.post('/votes', {'messageContext': messageContext, 'upvotes': upvotes, 'downvotes': downvotes}, function (data) {
    console.log("hello");
  });
}
