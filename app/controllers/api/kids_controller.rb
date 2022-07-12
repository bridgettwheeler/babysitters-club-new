class Api:KidsController < ApplicationController
    def index
        render json: Kid.all
    end

    def create
        kid = Kid.create!(kid_params)
        render json: kid, status: :created
    end

    private

    def kid_params
        params.permit(:first_name, :last_name, :age, :booking_id, :user_id, :babysitter_id)
    end
end
