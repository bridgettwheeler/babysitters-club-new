require '../spec_helper'


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
RSpec.describe User do
  it "is valid with valid attributes"
  it "is not valid without a first_name"
  it "is not valid without a last_name"
  it "is not valid without a email"
end