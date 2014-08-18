require 'test_helper'

class TwitterControllerTest < ActionController::TestCase
  test "should get post" do
    get :post
    assert_response :success
  end

  test "should get wall" do
    get :wall
    assert_response :success
  end

  test "should get messages" do
    get :messages
    assert_response :success
  end

  test "should get friends" do
    get :friends
    assert_response :success
  end

end
