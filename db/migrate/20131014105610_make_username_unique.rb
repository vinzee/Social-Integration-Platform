class MakeUsernameUnique < ActiveRecord::Migration
  def up
  	change_column(:users, :user_name, :string, :unique => true)
  end

  def down
  end
end
