class Babysitter < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings
    has_many :kids, through: :bookings

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :age, presence: true
end

