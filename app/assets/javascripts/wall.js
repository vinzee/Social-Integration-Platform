$(window).load(function(){
    $('.modall').fadeOut(2000);
  });


$(document).ready(function(){

  $(function(){
      var lastScroll = 0;

        $(window).scroll(function(event){
            var st = $(this).scrollTop();
   
            if (40 < lastScroll){
               $(".fm1").hide();
               $(".fm2").show();
            }
            if (100 > lastScroll){
               $(".fm1").show();
               $(".fm2").hide();
            }
            lastScroll = st;
        });
    });

  $(".fm2").click(function(){
      $(".fm1").show();
      $(".fm2").hide();
  });


  
  

  var id = "fb_timeline_frame";
  $(".t1").append(" <iframe src='/facebook/timeline' class='row-fluid ' id='fb_timeline_frame' onLoad='autoResize(id);'></iframe>");
  $("#fb_timeline").removeClass("t1");

  $("#fb_profile_wall_tab").click(function(){
    var id = "fb_profile_wall_frame";
    $(".t2").append(" <iframe src='/facebook/user_timeline' class='row-fluid ' id='fb_profile_wall_frame' onLoad='autoResize(id);'></iframe>");
    $("#fb_profile_wall").removeClass("t2");
  });

  $("#fb_friends_tab").click(function(){
    var id = "fb_friends_frame";
    $(".t3").append(" <iframe src='/facebook/friends' class='row-fluid ' id='fb_friends_frame' onLoad='autoResize(id);'></iframe>");
    $("#fb_friends").removeClass("t3");
  });

  $("#fb_pages_tab").click(function(){
    var id = "fb_pages_frame";
    $(".t4").append(" <iframe src='/facebook/pages' class='row-fluid  ' id='fb_pages_frame' onLoad='autoResize(id);'></iframe>");
    $("#fb_pages").removeClass("t4");
  });

   $("#fb_profile_tab").click(function(){
    var id = "fb_profile_frame";
    $(".t5").append(" <iframe src='/facebook/full_profile' class='row-fluid  ' id='fb_profile_frame' onLoad='autoResize(id);'></iframe>");
    $("#fb_profile").removeClass("t5");
  });


   $("#twitter").click(function(){
    var id = "tw_timeline_frame";
    $(".t6").append(" <iframe src='/twitter/home' class='row-fluid  ' id='tw_timeline_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_timeline").removeClass("t6");
  });

  $("#tw_tweets_tab").click(function(){
    var id = "tw_tweets_frame";
    $(".t7").append(" <iframe src='/twitter/wall' class='row-fluid  ' id='tw_tweets_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_tweets").removeClass("t7");
  });

  $("#tw_fav_tab").click(function(){
    var id = "tw_fav_frame";
    $(".t8").append(" <iframe src='/twitter/favourites' class='row-fluid  ' id='tw_fav_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_fav").removeClass("t8");
  });

  $("#tw_following_tab").click(function(){
    var id = "tw_followers_frame";
    $(".t9").append(" <iframe src='/twitter/following' class='row-fluid  ' id='tw_following_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_following").removeClass("t9");
  });

  $("#tw_followers_tab").click(function(){
    var id = "tw_followers_frame";
    $(".t10").append(" <iframe src='/twitter/followers' class='row-fluid  ' id='tw_followers_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_followers").removeClass("t10");
  });

  $("#tw_profile_tab").click(function(){
    var id = "tw_profile_frame";
    $(".t11").append(" <iframe src='/twitter/full_profile' class='row-fluid  ' id='tw_profile_frame' onLoad='autoResize(id);'></iframe>");
    $("#tw_profile").removeClass("t11");
  });



   $("#linkedin").click(function(){
    var id = "ln_timeline_frame";
    $(".t12").append(" <iframe src='/linkedin/wall' class='row-fluid  ' id='ln_timeline_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_timeline").removeClass("t12");
  });

  $("#ln_friends_tab").click(function(){
    var id = "ln_friends_frame";
    $(".t13").append(" <iframe src='/linkedin/friends' class='row-fluid  ' id='ln_friends_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_friends").removeClass("t13");
  });

  $("#ln_group_tab").click(function(){
    var id = "ln_group_frame";
    $(".t14").append(" <iframe src='/linkedin/group' class='row-fluid  ' id='ln_group_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_group").removeClass("t14");
  });

  $("#ln_company_tab").click(function(){
    var id = "ln_company_frame";
    $(".t15").append(" <iframe src='/linkedin/company' class='row-fluid  ' id='ln_company_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_company").removeClass("t15");
  });

  $("#ln_profile_tab").click(function(){
    var id = "ln_profile_frame";
    $(".t16").append(" <iframe src='/linkedin/full_profile' class='row-fluid  ' id='ln_profile_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_profile").removeClass("t16");
  });

  $("#ln_jobs_tab").click(function(){
    var id = "ln_jobs_frame";
    $(".t17").append(" <iframe src='/linkedin/jobs_bookmarks' class='row-fluid  ' id='ln_jobs_frame' onLoad='autoResize(id);'></iframe>");
    $("#ln_jobs").removeClass("t17");
  });


  $(".rf").click(function(){
    var idd = $(".tabs .pos .active a").attr('id');

    if(idd == "facebook")
      idd = $(".facebookk .active a").attr('href') + "_frame";
    else if(idd == "twitter")
      idd = $(".twitterr .active a").attr('href') + "_frame";
    else if(idd == "linkedin")
      idd = $(".linkedinn .active a").attr('href') + "_frame";
   
    $(idd).attr("src", $(idd).attr("src"));
    autoResize(idd);
    //$("body").addClass("loading");
 });

   $(".back").click(function(){
    var idd = $(".tabs .pos .active a").attr('id');

    if(idd == "facebook")
      idd = $(".facebookk .active a").attr('href') + "_frame";
    else if(idd == "twitter")
      idd = $(".twitterr .active a").attr('href') + "_frame";
    else if(idd == "linkedin")
      idd = $(".linkedinn .active a").attr('href') + "_frame";
   
    if (idd == "#fb_pages_frame")
      fb_pages_frame.history.back();
    else if (idd == "#fb_friends_frame")
      fb_friends_frame.history.back();
    else if (idd == "#ln_jobs_frame")
      ln_jobs_frame.history.back();
    else if (idd == "#ln_friends_frame")
      ln_friends_frame.history.back();
    else if (idd == "#ln_groups_frame")
      ln_groups_frame.history.back();
    else if (idd == "#ln_company_frame")
      ln_company_frame.history.back();
   
 });

  $(".tabs").width($(".main").width() + 25);
  $(".profile").width($(".brdr").width());

  $("#scroll_to_top").css("margin-top",$(window).height() - 100 + "px");

  $('a,#scroll_to_top').click(function(){
    $('html, body').animate({scrollTop:0}, 'fast');
  });

  $("#all_share").click(function(){
      
      if($("#all_share").prop('checked') == true)
      {
        $("#fb_share").attr("disabled","disabled");
        $("#tw_share").attr("disabled","disabled");
        $("#li_share").attr("disabled","disabled");
      }
      else
      {
        $("#input").removeAttr("disabled");
        $("#fb_share").removeAttr("disabled");
        $("#tw_share").removeAttr("disabled");
        $("#li_share").removeAttr("disabled");
      }
  }); 

  $(".post_share").click(function(e){
      if($("#all_share").prop('checked') == true || $("#fb_share").prop('checked') == true || $("#tw_share").prop('checked') == true || $("#li_share").prop('checked') == true)
      {
          if( parseInt($("#msg").val().length) > 0)
          {
              $(".post_share").submit();
              //alert("Job done...!!!!!!!!!!!!!!");
          }
          else
          {
             e.preventDefault(e);
             alert("Enter the text to be posted ");
          }
      }
      else
      {
          e.preventDefault(e);
          alert("Select a social site to post");
      }
     });

  //$(".post_share").attr("disabled","disabled");

//   $("#msg").keypress(function() {
//     $("#msg_size").text(parseInt($("#msg").val().length) + 1 + ' characters');
// });

  $("#msg").keyup(function() {
    $("#msg_size").text(parseInt($("#msg").val().length) + ' characters');
});

  $("#msg").keypress(function() {
  $("#msg_size").text(parseInt($("#msg").val().length) + ' characters');
});

});

$(window).resize(function() {
  $(".tabs").width($(".main").width() + 25);
  $(".profile").width($(".brdr").width());
  $("#scroll_to_top").css("margin-top",$(window).height() - 100 + "px");
});

function autoResize(id)
{
    var newheight;
    if(document.getElementById)
    {
        newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;
    }
    document.getElementById(id).height= (newheight + 50) + "px";
    window.document.height = (newheight + 500) + "px";
}
