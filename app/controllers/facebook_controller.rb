class FacebookController < ApplicationController
  layout "frame"
	#@current_action = action_name
    #@current_controller = controller_name

 before_filter :load_fb_client
before_filter :load_page_client, :only => [:page_intro, :page_feeds, :page_profile, :status_update]

  def load_fb_client
    
    if current_user
        fb_auth = current_user.authentications.find_by_provider('facebook')

        if fb_auth
           @fb = Koala::Facebook::API.new(fb_auth.token)
         else
            logger.debug "-------------------FB not signed in"
            render :html => '<a href="#" class="btn fb_signin">Signin to Facebook jnskfnlf</a>
            <script>
    $(document).ready(function(){
      $(".fb_signin").click(function(){
        parent.document.location.href = "<%= authentications_url %>";
      });
    });
    </script>'
        end
    else
        redirect_to new_user_session_path, :notice => 'User not Signed In'
    end

  end
  

  def load_page_client
      acc_token = params[:token]
      logger.debug "-------------------FB Page Access Token: #{acc_token.inspect}"
     @fb_page ||= Koala::Facebook::GraphAPI.new(acc_token)  
  end


  def friend_info

    @friend_id = params[:friend_id]

  end

  def profile

  end

  def post
    
  	#@id = graph.put_wall_post("hey, i'm learning koala")

    #flash[:notice] = "Wall post published successfully having id @id"

  end

  def user_timeline
    @page = params[:page]
  end

  def timeline
    @page = params[:page]
  end

  def like
    id = params[:id]
    logger.debug "-------------------Like ID: #{id}"
    @fb.put_like(id) rescue nil
    redirect_to :back,:notice => 'Liked Successfully'
  end

  def unlike
    id = params[:id]
    @fb.delete_like(id)
    redirect_to :back,:notice => 'Unliked Successfully'
  end

  def comment
    id = params[:id]
    msg = params[:msg]
    resp = @fb.put_comment(id,msg) rescue nil
    if resp
      logger.debug "-------------------Comment Status: #{resp.inspect}"
      redirect_to :back,:notice => 'Commented Successfully'
    else
      redirect_to :back,:notice => 'Comment not Successfull'
    end
  end

  def uncomment
    id = params[:id]
    @fb.delete_uncomment(id)
    redirect_to :back,:notice => 'Comment deleted Successfully'
  end

  def friends

  end

  def status_update
    msg = params[:msg]
    @fb_page.put_wall_post(msg)
    redirect_to :back
  end

  def friends_profile

      @id = params[:id]

  end

  def page_feeds

  end

  def page_profile

  end

  def pages

  end

   def fb_analysis
    @msg = params[:msg]
  end

end
