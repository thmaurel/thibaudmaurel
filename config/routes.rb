Rails.application.routes.draw do
  devise_for :users

  scope '(:locale)', locale: /en/ do
    root to: 'pages#home'
    resources :messages, only: :create

    # [...]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
