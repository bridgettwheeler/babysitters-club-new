class User < ApplicationRecord
    has_many :bookings
    has_many :kids
    has_many :babysitters, through: :bookings

    validates :username, presence: true
    validates :email, presence: true 
end
