class LinkedinController < ApplicationController
	layout "frame"
  before_filter :load_li_client

  def load_li_client

   if current_user
        li_auth = current_user.authentications.find_by_provider('linkedin')
        if li_auth
           @li = LinkedIn::Client.new(ENV["li1"], ENV["li2"])
           @li.authorize_from_access(li_auth.token,li_auth.token_secret)
         else
            logger.debug "-------------------LI not signed in"
            render :text => 'Signin to Linkedin'
        end
    else
        redirect_to new_user_session_path
    end

    
  end

  def jobs_profile

    @id = params[:id]

  end

  def jobs_suggestions

  end

  def jobs_bookmarks

  end

  def post

    msg = params[:msg]
    #type = params[:type]

    @li.add_share(:comment => msg)

    # if type == 'wall'
    #   @li.add_share(:comment => msg)
    # elsif type == 'group'
    #   @li.add_group_share(:group_id => params[:id],:comment => msg)
    # elsif type == 'company'
    #   @li.add_company_share(:company_id => params[:id],:comment => msg)
    # elsif type == 'group_discussion'
    #   @li.post_group_discussion(:group_id => params[:id],:comment => msg)
    #   #discussion
    # end

    redirect_to :back, :notice => 'Message Posted Successfully !'

  end

  def wall
    @page = params[:page]
    
  end

  def company
  end

  def company_statistics
    @id = params[:id]
  end

  def company_profile
    @id = params[:id]
  end

  def company_updates
    @id = params[:id]
    @page = params[:page]

  end

  def friends
  end

  def user_profile

    @id = params[:id]

  end

  def profile
  end

  def group 
  end

  def group_profile

     @group_id = params[:id]
    
  end

  def group_feed
    @group_id = params[:id]
    @page = params[:page]
  end

  def shares
    
  end

  def message
    id = params[:id]
    logger.debug "-------------------Params Id:  #{params.inspect}" 
    @li.send_message(params[:subject], params[:msg], [params[:id]])

    redirect_to :back,:notice => 'Mesage sent !'
  end

  def share_likes

    @key = params[:key]
    @likes = @li.share_likes(@key)
    render :text => "Likes : #{@likes}"

  end

  def share_comments

    @key = params[:key]
    @comments = @li.share_comments(@key)
    render :text => "Comments : #{@comments}"

  end

  def like

    @key = params[:key]
    @likes = @li.like_share(@key)
    redirect_to :back,:notice => 'Liked Successfully'

  end


  def unlike

    @key = params[:key]
    @likes = @li.unlike_share(@key)
    redirect_to :back,:notice => 'Unliked Successfully'

  end

  def comment

    @key = params[:key]
    msg = params[:msg]
    if msg
      comments = @li.update_comment(@key,msg)
      logger.debug "-------------------Comment Return:  #{comments.inspect}" 
      redirect_to :back,:notice => 'Commented Successfully'
    else
       redirect_to :back,:notice => 'Comment not succesful'
    end

  end

  def follow

    @li.follow_company(params[:id])

    redirect_to :back,:notice => 'Followed Successfully'

  end

  def unfollow

    @li.unfollow_company(params[:id])

    redirect_to :back,:notice => 'Unfollowed Successfully'

  end


end
