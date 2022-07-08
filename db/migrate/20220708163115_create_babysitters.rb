class CreateBabysitters < ActiveRecord::Migration[7.0]
  def change
    create_table :babysitters do |t|
      t.string :first_name
      t.string :last_name
      t.integer :pay_rate
      t.string :about_me
      t.string :booking_id
      t.integer :age

      t.timestamps
    end
  end
end
