class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
    else
      render 'pages/home'
    end
  end

  private

  def message_params
    params.require(:message).permit(:email, :content)
  end
end
