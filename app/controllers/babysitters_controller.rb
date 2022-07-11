class Api:BabysittersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters format: []

    def index
        render json: Babysitter.all 
    end

    def create
        babysitter = Babysitter.create!(babysitter_params)
        render json: babysitter, status: :created
    end



    private 

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def babysitter_params
        params.permit(:first_name, :last_name, :pay_rate, :about_me, :age, :booking_id)
    end
end
