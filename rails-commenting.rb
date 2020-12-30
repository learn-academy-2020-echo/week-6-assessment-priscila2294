# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) This is defined and inhereted from application controller
class BlogPostsController < ApplicationController
  def index
    # 2) This creates an instance variable called posts that houses an active record query that will get all the items in the BlogPost table.
    @posts = BlogPost.all
  end

  def show
    # 3) This is an specific post id
    @post = BlogPost.find(params[:id])
  end

  # 4) Method associated with the post HTTP verb that will assist in creating a new blog post.
  def new
    @post = Post.new
  end

  def create
    # 5) Instance variable post is assigned to a new BlogPost that takes a parameter.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) Updates the specific blog post by asking the user to edit the title and the content of the blog post in order for it to be valid.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If the blog post cannot be destroyed, redirect the user to the blog post they were trying to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) The strong params section is separated by the private keyword.
  private
  def blog_post_params
    # 9) This line is setting up strong params 
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This is the association. It describes the relationships between tables. 
  has_many :comments
end
