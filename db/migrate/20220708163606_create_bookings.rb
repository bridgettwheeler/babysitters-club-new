class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :date
      t.string :status
      t.string :babysitter_id
      t.string :user_id
      t.string :kid_id

      t.timestamps
    end
  end
end
