class AddExpiryToAuthentications < ActiveRecord::Migration
  def up
  	add_column :authentications, :expiry, :string, :limit => '100'
  end

  def down
  	remove_column :authentications, :expiry
  end

end
