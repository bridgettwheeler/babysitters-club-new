class Kid < ApplicationRecord
    belongs_to :user

    def bookings
        self.user.bookings
    end
end
