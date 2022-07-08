class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :budget
      t.string :about_us
      t.string :babysitter_id
      t.string :booking_id
      t.string :kid_id
      t.string :password_digest

      t.timestamps
    end
  end
end
