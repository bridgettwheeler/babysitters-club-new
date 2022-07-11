class Api:UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorize, only: :create

    def index
        render json: User.all
    end

    def show
        render json: @current_user
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        @current_user.destroy
        head :no_content
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
    params.permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :budget, :about_us)
    end


end
