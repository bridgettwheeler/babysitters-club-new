class CreateKids < ActiveRecord::Migration[7.0]
  def change
    create_table :kids do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :booking_id
      t.string :babysitter_id
      t.string :user_id

      t.timestamps
    end
  end
end
