Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'types/index'
    end
  end
  root 'home#index'

  namespace :api,  defaults: { format: :json } do
    namespace :v1 do
      resources :pokemon, only: [:index,:show]
      resources :search, only: [:index]
      resources :types, only:[:index, :show]
    end
  end
  
  get "*path", to: "home#index", :constraints => lambda {
    |req| req.path !~ /\.(png|jpg|js|css|json)$/ 
  }

end
