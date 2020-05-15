require 'test_helper'

class Api::V1::PokemonControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_pokemon_index_url
    assert_response :success
  end

end
