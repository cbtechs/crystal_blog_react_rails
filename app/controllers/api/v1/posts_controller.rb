class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    # sleep 3 seconds
    sleep 3
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      # we cannot render the post because we are now in /api/v1/posts
      # so we need to fix  the locattion
      # render json: @post, status: :created, location: @post
      # Return the post object with the ID for the frontend
      render json: @post, status: :created, location: api_v1_post_url(@post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :image_file_name, :body)
    end
end
