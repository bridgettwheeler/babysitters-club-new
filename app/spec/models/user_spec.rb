require 'spec_helper'
require 'rails_helper'



# t.string "first_name"
#     t.string "last_name"
#     t.string "username"
#     t.string "email"
#     t.string "budget"
#     t.string "about_us"
#     t.string "babysitter_id"
#     t.string "booking_id"
#     t.string "kid_id"
#     t.string "password_digest"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
describe User do
  it "cannot create without email" do
    expect {User.create!}.to raise_error ActiveRecord::RecordInvalid
  end
end