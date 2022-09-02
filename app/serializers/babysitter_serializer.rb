class BabysitterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :pay_rate, :about_me, :booking_id, :age
  has_many :bookings
  has_many :users
end
