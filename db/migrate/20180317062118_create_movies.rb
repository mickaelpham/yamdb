class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :original_title
      t.text :synopsis

      t.timestamps
    end
  end
end
