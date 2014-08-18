require 'test_helper'

class PluginsControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get facebook" do
    get :facebook
    assert_response :success
  end

  test "should get twitter" do
    get :twitter
    assert_response :success
  end

  test "should get linkedin" do
    get :linkedin
    assert_response :success
  end

end
