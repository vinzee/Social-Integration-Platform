class MainController < ApplicationController

  before_filter :load, :only => [:plugins, :wall, :analytics]
  before_filter :load_clients, :only => [:post,:wall]

  def load
    if !current_user
        redirect_to new_user_session_path, :notice => 'User not Signed In'
    end
  end

  def load_clients

    if current_user
        tw_auth = current_user.authentications.find_by_provider('twitter')
        if tw_auth
           @tw = Twitter::Client.new(:oauth_token => tw_auth.token, :oauth_token_secret => tw_auth.token_secret) rescue nil
        else
        logger.debug "-------------------Twitter not signed in"
         #redirect_to authentications_url
        end

        #----------------------------------------------------------------------

        fb_auth = current_user.authentications.find_by_provider('facebook')

        if fb_auth
           @fb = Koala::Facebook::API.new(fb_auth.token)
         else
            #redirect_to authentications_url
        end

        #----------------------------------------------------------------------

        li_auth = current_user.authentications.find_by_provider('linkedin')
        if li_auth
           @li = LinkedIn::Client.new("75suecsep48sgg", "yfXt3nQvtR5eKKtx")
           @li.authorize_from_access(li_auth.token,li_auth.token_secret)
         else
            logger.debug "-------------------LI not signed in"
            #redirect_to authentications_url
        end

    else
        #redirect_to new_user_session_path, :notice => 'User not Signed In'
    end



  end

	# def ajax
 #    @str = 'Vineet'
 #  end

  def home
  end

  def plugins
  end

  def about
  end

  def profile
  end

  def wall
  end

  def demo_analysis
    require "sentimentalizer"
    str = params[:str]
      if str        
        j_rez = Sentimentalizer.analyze(str) rescue nil

        if j_rez
          @rez = ActiveSupport::JSON.decode(j_rez)  
        end     
        
      end
    render :layout => "frame"
  end
  
  def post
    msg = params[:msg]
    all = params[:all_share]
    fb = params[:fb_share]
    tw = params[:tw_share]
    li = params[:li_share]

    if all
      if @fb && @li && @tw
        fb_ret = @fb.put_wall_post(msg)
         tw_ret = @tw.update(msg)
         li_ret = @li.add_share(:comment => msg)
         logger.debug "------------------Return values: #{fb_ret.inspect}, #{tw_ret.inspect}, #{li_ret.inspect}"
       end
    else

      if fb
        if @fb
          fb_ret = @fb.put_wall_post(msg)
          logger.debug "------------------FB Return values: #{fb_ret.inspect}"
        end
      end

      if tw
        if @tw
          tw_ret = @tw.update(msg)
          logger.debug "------------------Tw Return values: #{tw_ret.inspect}"
        end
      end

      if li
        if @li
          li_ret = @li.add_share(:comment => msg)
          logger.debug "------------------Li Return values: #{li_ret.inspect}"
        end
      end
    end
    # logger.debug "------------------All checkbox: #{all.inspect}"
    # logger.debug "------------------FB checkbox: #{fb.inspect}"
    # logger.debug "------------------TW checkbox: #{tw.inspect} #{li.inspect} #{msg.inspect}"
    redirect_to :back
  end

end
