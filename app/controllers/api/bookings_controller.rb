class Api:BookingsController < ApplicationController
    def index
        if params[:user_id]
          user = User.find(params[:user_id])
          bookings = user.bookings
        else
          bookings = Booking.all
        end
        render json: bookings, include: :user
        end
    end

    def create
        booking = @current_user.bookings.create!(booking_params)
        render json: booking, status: :created
    end

    def show
        booking = Booking.find_by!(id:params[:id])
        render json: booking
    end

    def update
        booking = Booking.find_by!(id:params[:id])
        booking.update!(booking_params)
        render json: booking
    end

    private
    
    def booking_params
        params.require(:booking).permit(:babysitter_id, :user_id, :date)
    end 


end
