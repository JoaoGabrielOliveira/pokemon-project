Rails.application.routes.draw do
  root 'home#index'

  namespace :api,  defaults: { format: :json } do
    namespace :v1 do
      resources :pokemon, only: [:index,:show]
      resources :search, only: [:index]
    end
  end
  
  get "*path", to: "home#index", :constraints => lambda {
    |req| req.path !~ /\.(png|jpg|js|css|json)$/ 
  }

end
