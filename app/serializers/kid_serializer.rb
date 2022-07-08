class KidSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :booking_id, :babysitter_id, :user_id
end
