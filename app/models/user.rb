class User < ApplicationRecord
    has_many :bookings
    has_many :kids
    has_many :babysitters, through: :bookings

    has_secure_password

    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
end
