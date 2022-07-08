class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :babysitter
    
    validates :date, presence: true
end
