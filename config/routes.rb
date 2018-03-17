Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :movies
    end
  end
  
  mount_ember_app :frontend, to: '/'
end
