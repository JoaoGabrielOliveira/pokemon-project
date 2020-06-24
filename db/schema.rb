# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_03_170921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pokemon_to_types", force: :cascade do |t|
    t.bigint "pokemon_id", null: false
    t.integer "pokemon_type_1", null: false
    t.integer "pokemon_type_2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pokemon_id"], name: "index_pokemon_to_types_on_pokemon_id"
  end

  create_table "pokemon_types", force: :cascade do |t|
    t.string "name"
    t.string "color", default: "#ededed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name", null: false
    t.float "weight"
    t.float "height"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "pokemon_to_type_id"
    t.index ["pokemon_to_type_id"], name: "index_pokemons_on_pokemon_to_type_id"
  end

  add_foreign_key "pokemon_to_types", "pokemons"
  add_foreign_key "pokemons", "pokemon_to_types"
end
