require 'test_helper'

class Api::V1::TypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_types_index_url
    assert_response :success
  end

end
