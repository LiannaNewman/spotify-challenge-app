Rails.application.routes.draw do
  resources :people do
  end

  namespace :api do
    namespace :v1 do
      resources :people
    end
  end
end
