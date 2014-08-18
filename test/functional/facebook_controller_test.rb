require 'test_helper'

class FacebookControllerTest < ActionController::TestCase
  test "should get wall_post" do
    get :wall_post
    assert_response :success
  end

end
