class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :authentications

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :lockable#,:omniauthable, :omniauth_providers => [:facebook]#, :timeoutable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :login,:user_name, :first_name, :last_name, :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body


#---new declaration-----
attr_accessor :login

#----------------------------------------------------------------------Old Code

# def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
#   @user = User.where(:provider => auth.provider, :uid => auth.uid).first
#   unless user
#     @user = User.create(name:auth.extra.raw_info.name,
#                          provider:auth.provider,
#                          uid:auth.uid,
#                          email:auth.info.email,
#                          password:Devise.friendly_token[0,20]
#                          )
#   end
#   user
# end


# def self.new_with_session(params, session)
#     super.tap do |user|
#       if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
#         user.email = data["email"] if user.email.blank?
#       end
#     end
#   end

# end



#----------------------------------------------------------------------New Code -----from----- https://gist.github.com/seanaedmiston/1160463

# def password_required?
#     (authentications.empty? || !password.blank?) && super
#   end
 
#   def self.new_with_session(params, session)
#     super.tap do |user|
#       if data = session["devise.facebook_data"]
#         user.email = data["email"]
#       end
#     end
#   end
  
#   #Override Devise's update with password to allow registration edits without password entry
#   def update_with_password(params={})
#     params.delete(:current_password)
#     self.update_without_password(params)
#   end 
 
#   # Update user record and create or update authentication record
#   def set_token_from_hash(auth_hash, user_hash)
#     self.update_attribute(:name, user_hash[:name]) if self.name.blank?
#     self.update_attribute(:email, user_hash[:email]) if self.email.blank?
#     token = self.authentications.find_or_initialize_by_provider_and_uid(auth_hash[:provider], auth_hash[:uid])
#     token.update_attributes(
#       :name => auth_hash[:name],
#       :link => auth_hash[:link],
#       :token => auth_hash[:token],
#       :secret => auth_hash[:secret]
#     )
#   end
 
# protected
  
#   # From Devise docs to allow name or email as login
#   def self.find_for_database_authentication(warden_conditions)
#    conditions = warden_conditions.dup
#    login = conditions.delete(:login)
#    where(conditions).where(["lower(name) = :value OR lower(email) = :value", { :value => login.downcase }]).first
#   end


 end