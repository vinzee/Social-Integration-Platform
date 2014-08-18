ActiveAdmin.register User do
    
  # controller do
  #   def scoped_collection
  #     User.includes(:Authentications)
  #   end
  # end

  #scope_to :1

	index do
    selectable_column
    column :id
	  column :user_name
	  column :first_name
	  column :last_name
    # column :authentication
    column :email
    # column :current_sign_in_at
    # column :last_sign_in_at
    # column :current_sign_in_ip
    # column :last_sign_in_ip
    column :sign_in_count
    column :failed_attempts
    column :created_at
    column :updated_at
    column :confirmation_sent_at
    column :confirmed_at
    column :locked_at
    default_actions
  end

  filter :user_name
  filter :first_name
  filter :last_name
  filter :email
  filter :sign_in_count
  filter :failed_attempts
  filter :created_at

  #navigation_menu :authentication

end
