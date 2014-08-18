Signin::Application.routes.draw do
  

  # get "plugins/home"

  # get "plugins/facebook"

  # get "plugins/twitter"

  # get "plugins/linkedin"

  # get "linkedin/post"

  # get "linkedin/wall"

  # get "linkedin/messages"

  # get "linkedin/friends"

  # get "twitter/post"

  # get "twitter/wall"

  # get "twitter/messages"

  # get "twitter/friends"

  # get "facebook/wall_post"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

 

  match 'auth/:provider/callback' => 'authentications#create'   
  #match '/auth/:provider/signout' => 'authentications#signout'
  

  devise_for :users  

   resources :authentications
 

  #ActiveAdmin.routes(self)

  
 

  



  

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:eeeeeeeeeeeee
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end567

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
   root :to => 'main#home'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  match ':controller(/:action(/:id))(.:format)'
end
