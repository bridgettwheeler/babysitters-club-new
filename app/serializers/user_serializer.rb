class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :budget, :about_us :kids :bookings
  has_many :bookings, serializer: BookingSerializer
  has_many :kids
end
