class BookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :status, :babysitter_id, :user_id, :kid_id
  belongs_to :babysitter
end
