Rails.application.routes.draw do
  namespace :api,  defaults: { format: :json } do
    namespace :v1 do
      resources :pokemon, only: [:index,:show]
    end
  end
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
