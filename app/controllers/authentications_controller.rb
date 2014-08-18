class AuthenticationsController < ApplicationController

  before_filter :login_check


  def login_check

    if !current_user
        redirect_to new_user_session_path, :notice => 'User not Signed In'
    end
    
  end

  def index
    @authentications = current_user.authentications if current_user
  end

  def create
   #render :text => omni = request.env["omniauth.auth"].to_yaml

    omni = request.env["omniauth.auth"]
    
    logger.debug "-------------------Omniauth variable: #{omni.inspect}"

   # row =  current_user.authentications.find_or_create_by_provider_and_user_id(:provider => omni['provider'],
   #     :uid => omni['uid'],
   #     :user_id => current_user.id,
   #     :token => omni['credentials'].token,
   #     :token_secret => omni['credentials'].secret)


    row =  current_user.authentications.find_or_initialize_by_provider_and_user_id(:provider => omni['provider'],:user_id => current_user.id)
    #logger.debug "-------------------Returned Row: #{row.inspect}"
    row.update_attributes(:uid => omni['uid'],:token => omni['credentials'].token,:token_secret => omni['credentials'].secret)
    row.save

   #logger.debug "-------------------Returned Row: #{row.inspect}"
    
    flash[:notice] = "Signed In successfully for #{omni['provider']}"

    redirect_to authentications_url

  end

  def destroy


    #provider = self.authentications.find_by_provider('twitter')

    id = params[:id]
    #logger.debug "--------------------------------ID Parameter variable: #{id.inspect}-----------------------------"

    authentication = current_user.authentications.find(params[:id])

    logger.debug "--------------------------------Auth type: #{authentication.provider}-----------------------------"   

    # if authentication.provider == 'facebook'
    #   logger.debug "--------------------------------Facebook Session deleted-----------------------------"   
    # elsif authentication.provider == 'twitter'
    #   logger.debug "--------------------------------Twitter Session deleted-----------------------------"   
    # elsif authentication.provider == 'linkedin'
    #   logger.debug "--------------------------------Linkedin Session deleted-----------------------------"   
    # end
    

    authentication.destroy

    redirect_to authentications_url, :notice => "Successfully destroyed authentication."
  end


  
end
