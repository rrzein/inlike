Fallinlike::Application.routes.draw do
  devise_for :users

  root :to => 'root#root'

  resources :users do
    member do
      resources :photos, :only => [:index, :create]
      post 'like'
      post 'dislike'
    end
  end
  resources :photos, :only => [:create, :destroy]
  resources :matches, :only => [:index, :show, :update]
  resources :messages

end