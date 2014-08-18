class TwitterController < ApplicationController
	layout "frame" 
#logger.debug "--------------------------------Twitter Record : #{$tw_auth.inspect}-----------------------------"
 
 before_filter :load_tw_client

  def load_tw_client

    if current_user
        tw_auth = current_user.authentications.find_by_provider('twitter')
        if tw_auth
           @tw = Twitter::Client.new(:oauth_token => tw_auth.token, :oauth_token_secret => tw_auth.token_secret) rescue nil
        else
        logger.debug "-------------------Twitter not signed in"
        render :text => 'Signin to twitter'
        end
    else
        redirect_to new_user_session_path, :notice => 'User not Signed In'
    end

  end

  def post
    msg = params[:msg]
    @tw.update(msg)
    redirect_to :back
  end

  def wall
     @page = params[:page]
  end


  def home 
    @page = params[:page]
  end

  def favourites 
    @page = params[:page]
  end

  def follow
    id = params[:id]
    @tw.follow(id.to_i)
    redirect_to :back
  end

  def unfollow
    id = params[:id]
    @tw.unfollow(id.to_i)
    redirect_to :back
  end

  def retweet
    id = params[:id]
    @tw.retweet(id.to_i)
    redirect_to :back
  end

  def del
    id = params[:id]
    @tw.status_destroy(id.to_i)
    redirect_to :back
  end

  def fav
    id = params[:id]
    @tw.favorite(id.to_i)
    redirect_to :back
  end

  def unfav
    id = params[:id]
    @tw.unfavorite(id.to_i)
    redirect_to :back
  end

  def tw_analysis
    @msg = params[:msg]
  end
end
