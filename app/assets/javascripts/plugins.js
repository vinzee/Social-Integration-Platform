var fb_js = "<div id='fb-root'></div>\n<script>(function(d, s, id) {\n\tvar js, fjs = d.getElementsByTagName(s)[0];\n\tif (d.getElementById(id)) return;\n\tjs = d.createElement(s); js.id = id;\n\tjs.src = '//connect.facebook.net/en_US/all.js#xfbml=1';\n\tfjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));</scr"+"ipt>\n";
var ln_js = "<script src='//platform.linkedin.com/in.js' type='text/javascript'>lang: en_US</scr"+"ipt>\n";
var tw_js ="<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</scr"+"ipt>\n";  
var layout,url;
      
      
/*-- ----------------------------------- Facebook ----------------------------------------- --*/
        
      function fb_getcode_share()
      {
        
        if(document.getElementById("fb_share").value == "")
          url=""; 
        else
          url = "data-href='" + document.getElementById("fb_share").value;
          
        if(document.getElementById("share_button").checked == true)
          layout = "button";
        else if(document.getElementById("share_button-count").checked == true)
          layout = "button_count";
        else if(document.getElementById("share_box-count").checked == true)
          layout = "box_count";
        else if(document.getElementById("share_icon").checked == true)
          layout = "icon";
        else if(document.getElementById("share_link").checked == true)
          layout = "link";
        else if(document.getElementById("share_icon-link").checked == true)
          layout = "icon_link";
          
        $('.code').text(fb_js + "\n<div class='fb-share-button'" + url + "' data-type='"+ layout +"'></div>");
      }
      
      function fb_getcode_like()
      {
         
        if(document.getElementById("fb_like").value == "")
          url=""; 
        else
          url = "data-href='" + document.getElementById("fb_like").value;
          
        if(document.getElementById("like_button").checked == true)
          layout = "button";
        else if(document.getElementById("like_button-count").checked == true)
          layout = "button_count";
        else if(document.getElementById("like_box-count").checked == true)
          layout = "box_count";
          
        $('.code').text(fb_js + "\n<div class='fb-like'"+ url + "' data-layout='"+ layout +"' data-action='like'></div>");
      }

      function fb_getcode_follow()
      {
        
         
        if(document.getElementById("fb_follow").value == "")
          url=""; 
        else
          url = "data-href='http://www.facebook.com/" + document.getElementById("fb_follow").value;
        if(document.getElementById("follow_button").checked == true)
          layout = "button";
        else if(document.getElementById("follow_button-count").checked == true)
          layout = "button_count";
        else if(document.getElementById("follow_box-count").checked == true)
          layout = "box_count";
          
        $('.code').text(fb_js + "\n<div class='fb-follow'" + url + "' data-layout='"+ layout +"'></div>");
        f1(document.getElementById("code").value);
      }
      
      function fb_getcode_send()
      {
         
        if(document.getElementById("fb_send").value == "")
          url=""; 
        else
          url = "data-href='" + document.getElementById("fb_send").value;
          
        $('.code').text(fb_js + "\n<div class='fb-send'" + url + "'></div>");
      }
      
      function fb_getcode_comment()
      {
         
        if(document.getElementById("fb_comment").value == "")
          url=""; 
        else
          url = "data-href='" + document.getElementById("fb_comment").value;
          
        $('.code').text(fb_js + "\n<div class='fb-comments'" + url + "' data-numposts='" + document.getElementById("fb_numposts").value + "'></div>");
      }
      
      
/*-- ----------------------------------- LinkedIn ----------------------------------------- --*/

        function ln_getcode_share()
      {
        url="";
        if(document.getElementById("ln_share").value != "")
          url = " data-url='" + document.getElementById("ln_share").value + "'";
        
        if(document.getElementById("share_top").checked == true)
          url = url + " data-counter='top'";
        else if(document.getElementById("share_right").checked == true)
          url = url + " data-counter='right'";
          
          
        $('.code').text(ln_js + "\n<script type='IN/Share'" + url + "></scr" + "ipt>");
      
      }
      
      
        function ln_getcode_profile()
      {     
        if(document.getElementById("profile_inline").checked == true)
          url = "inline";
        else if(document.getElementById("profile_name").checked == true)
          url = "hover";
        else if(document.getElementById("profile_icon").checked == true)
          url = "click";
          
          
        $('.code').text(ln_js + "\n<script type='IN/MemberProfile' data-id='" + document.getElementById("profile_url").value + "' data-format='" + url + "'></scr" + "ipt>");
      }
      
      
/*-- ----------------------------------- Twitter ----------------------------------------- --*/

        function tw_getcode_share()
      {
        if(document.getElementById("share_data_url_2").checked == true)
          url= url + "data-url='" + document.getElementById("share_data_url").value + "' ";
        if(document.getElementById("share_data_text_2").checked == true)
          url= url + "data-text='" + document.getElementById("share_data_text").value + "' ";
        if(document.getElementById("share_show_count").checked == false)
          url= url + "data-count='none' ";
        if(document.getElementById("share_via").value != "")
          url= url + "data-via='" + document.getElementById("share_via").value + "' ";
        if(document.getElementById("share_rec").value != "")
          url= url + "data-related='" + document.getElementById("share_rec").value + "' ";
        if(document.getElementById("share_hash").value != "")
          url= url + "data-hashtags='" + document.getElementById("share_hash").value + "' ";
        if(document.getElementById("share_l_button").checked == true)
          url= url + "data-size='large' ";
        if(document.getElementById("share_opt").checked == true)
          url= url + "data-dnt='true' ";  
          
        $('.code').text(tw_js + "<a href='https://twitter.com/share' class='twitter-share-button'" + url + ">Tweet</a>");
        
      }
      
        function tw_getcode_hashtag()
      {
        var text="";
        var hash_tag="";
        url ="";
        
        if(document.getElementById("hash_hashtag").value == "")
          hash_tag = "TwitterStories";
        else
          hash_tag = document.getElementById("hash_hashtag").value;
        
        if(document.getElementById("hash_text_2").checked == true)
          text = "&text=" + document.getElementById("hash_text").value;
          
        
          
        if(document.getElementById("hash_rec1").value != "" || document.getElementById("hash_rec2").value != "")
        {
          url= url + "data-related='";
          if(document.getElementById("hash_rec1").value != "")
            url= url + document.getElementById("hash_rec1").value;
          if(document.getElementById("hash_rec2").value != "")
            url= url + "," + document.getElementById("hash_rec2").value;
            
          url = url + "' ";
        }
        
          
        if(document.getElementById("hash_data_url_2").checked == true)
          url= url + "data-url='" + document.getElementById("hash_data_url").value + "' ";
        if(document.getElementById("hash_l_button").checked == true)
          url= url + "data-size='large' ";
        if(document.getElementById("hash_opt").checked == true)
          url= url + "data-dnt='true' ";  
          
          
        
        $('.code').text(tw_js + "\n<a href='https://twitter.com/intent/tweet?button_hashtag="+ hash_tag + text +"' class='twitter-hashtag-button'" + url + ">Tweet #"+ hash_tag + "</a>");
      }

      function tw_getcode_follow()
      {
        
        var user;
        url ="";
        
        if(document.getElementById("follow_user_name").value == "")
          url= url + "twitter' ";
        else
          url = url + document.getElementById("follow_user_name").value + "' ";
          
        if(document.getElementById("follow_uname").checked == true)
          user = "Follow @" + document.getElementById("follow_user_name").value;
        else
          user = "Follow";
        if(document.getElementById("follow_l_button").checked == true)
          url= url + "data-size='large' ";
        if(document.getElementById("follow_opt").checked == true)
          url= url + "data-dnt='true' ";  
        
        $('.code').text(tw_js + "\n<a class='twitter-follow-button' data-show-count='false' href='https://twitter.com/" + url +">" + user +"</a>");
      }
      
      function tw_getcode_mention()
      {
        var text="";
        var tweet="";
        url ="";
        
        if(document.getElementById("mention_tweet").value == "")
          tweet = "support";
        else
          tweet = document.getElementById("mention_tweet").value;
        
        if(document.getElementById("mention_text_2").checked == true)
          text = "&text=" + document.getElementById("mention_text").value;
          
        
          
        if(document.getElementById("mention_rec1").value != "" || document.getElementById("mention_rec2").value != "")
        {
          url= url + "data-related='";
          if(document.getElementById("mention_rec1").value != "")
            url= url + document.getElementById("mention_rec1").value;
          if(document.getElementById("mention_rec2").value != "")
            url= url + "," + document.getElementById("mention_rec2").value;
            
          url = url + "' ";
        }
        
        if(document.getElementById("mention_l_button").checked == true)
          url= url + "data-size='large' ";
        if(document.getElementById("mention_opt").checked == true)
          url= url + "data-dnt='true' ";  
          
        $('.code').text(tw_js + "\n<a href='https://twitter.com/intent/tweet?screen_name="+ tweet + text +"' class='twitter-mention-button'" + url + ">Tweet @"+ tweet + "</a>");
      }
      
/*-- ----------------------------------- Smart Layer ----------------------------------------- --*/
function smart_layer()
{

  var share="";
  var follow="";
  var assets = "<script src='http://goo.gl/NU49f3' type='text/javascript'></script>\n<link href='http://goo.gl/x9HirR' rel='stylesheet' type='text/css'>";
  var pos;
    
  if(document.getElementById("fb_follow_ch").checked == 1)
    follow = follow + "\n<a href='https://facebook.com/" + document.getElementById("fb_follow_text").value + "'><img src='http://goo.gl/dRnrbm'></img></a>";
    
  if(document.getElementById("tw_follow_ch").checked == 1)
    follow = follow + "\n<br><a href='https://twitter.com/" + document.getElementById("tw_follow_text").value + "'><img src='http://goo.gl/9CsdI6'></img></a>";

  if(document.getElementById("ln_follow_ch").checked == 1)
    follow = follow + "\n<br><a href='https://linkedin.com/" + document.getElementById("ln_follow_text").value + "'><img src='http://goo.gl/jgStvp'></img></a>";
    
  /*if(document.getElementById("sm_follow_position1").checked == true)
    pos = "left; margin-left: -15px;";
  else
    pos = "right";*/

  follow = "<div class='sm follow'>Follow :<br>"+ follow +"</div>";


  if(document.getElementById("fb_share_ch").checked == 1)
    share = share + "\n<a id='fb_share_a'></a>";

  if(document.getElementById("tw_share_ch").checked == 1)
    share = share + "\n<br><a id='tw_share_a'></a>";

  if(document.getElementById("ln_share_ch").checked == 1)
    share = share + "\n<br><a id='ln_share_a'></a>";

  share = "\n<div class='sm share'>Share :<br>"+ share +"</div>";

  $('.code').text(assets + follow + share);
}







/*-- ----------------------------------- Defaults----------------------------------------- --*/
 $(document).ready(function(){
    //document.getElementById("sm_follow_position1").checked = true;
    document.getElementById("share_button").checked = true;
    document.getElementById("like_button").checked = true;
    document.getElementById("follow_button").checked = true;
    document.getElementById("share_data_url_1").checked = true;
    document.getElementById("share_data_text_1").checked = true;
    document.getElementById("hash_text_1").checked = true;
    document.getElementById("hash_data_url_1").checked = true;
    document.getElementById("mention_text_1").checked = true;
    document.getElementById("share_top").checked = true;
    document.getElementById("profile_inline").checked = true;

    $("#share_data_url_1").click(function(){
        document.getElementById("share_data_url").disabled = true;  
    });
    $("#share_data_url_2").click(function(){
        document.getElementById("share_data_url").disabled = false;
    });

    $("#share_data_text_1").click(function(){
        document.getElementById("share_data_text").disabled = true;  
    });
    $("#share_data_text_2").click(function(){
        document.getElementById("share_data_text").disabled = false;
    });

    $("#hash_text_1").click(function(){
        document.getElementById("hash_text").disabled = true;  
    });
    $("#hash_text_2").click(function(){
        document.getElementById("hash_text").disabled = false;
    });

    $("#hash_data_url_1").click(function(){
        document.getElementById("hash_data_url").disabled = true;  
    });
    $("#hash_data_url_2").click(function(){
        document.getElementById("hash_data_url").disabled = false;
    });

    $("#mention_text_1").click(function(){
        document.getElementById("mention_text").disabled = true;  
    });
    $("#mention_text_1").click(function(){
        document.getElementById("mention_text").disabled = false;
    });
});

