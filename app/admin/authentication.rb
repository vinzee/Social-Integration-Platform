ActiveAdmin.register Authentication do


index do
    selectable_column
    column :id
	column :provider
	column :uid
    column :created_at
    column :updated_at
    default_actions
  end

  filter :id
  filter :provider
  filter :uid
  filter :created_at
  filter :updated_at
 

end