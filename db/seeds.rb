# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Post.destroy_all
# 20.times do |i|
#     Post.create!(
#       title: "Post Title #{i + 1}",
#       body: "This is the body of post number #{i + 1}.",
#       published_at: Time.now
#     )
#   end
  

# create 20 posts
Post.destroy_all

topics = [
  { title: "The Future of AI in Tech", body: "Artificial intelligence is rapidly transforming the tech industry, from machine learning to deep learning." },
  { title: "Benefits of Agile Methodology in Software Development", body: "Agile methodology fosters collaboration and adaptability, essential for modern software development." },
  { title: "Creating a Robust Business Plan for Startups", body: "A well-thought-out business plan is the foundation for any successful startup, helping align vision and execution." },
  { title: "Understanding Frontend Development with React.js", body: "Frontend development has evolved, and libraries like React.js have become essential for building dynamic user interfaces." },
  { title: "Backend Development with Ruby on Rails", body: "Rails is a powerful framework that simplifies backend development by offering a convention-over-configuration approach." },
  { title: "The Role of the Power Sector in Economic Growth", body: "A reliable power sector is crucial for the development of industries and economic growth in any nation." },
  { title: "Tech Trends Shaping the Future of Software", body: "Technologies like cloud computing, blockchain, and quantum computing are set to disrupt the software industry." },
  { title: "Implementing Scrum in Agile Projects", body: "Scrum is a popular framework in Agile that helps teams deliver high-quality software incrementally." },
  { title: "How to Write a Winning Business Plan", body: "Your business plan should be detailed, addressing market needs, revenue models, and potential risks." },
  { title: "Building a Progressive Web App (PWA) with Frontend Technologies", body: "PWAs offer the best of web and mobile apps, improving user experience and performance." },
  { title: "Microservices Architecture in Backend Development", body: "Microservices allow for scalable and flexible backend systems by breaking down applications into smaller, autonomous services." },
  { title: "The Digital Revolution in the Power Sector", body: "Digital transformation in the power sector is enhancing grid management, energy efficiency, and customer service." },
  { title: "Tech Stacks for Full-Stack Developers", body: "A well-rounded tech stack includes frontend frameworks like React and backend solutions like Rails or Node.js." },
  { title: "Agile vs Waterfall: Choosing the Right Methodology", body: "Agile offers flexibility, while Waterfall provides structure. Choosing the right approach depends on your project's needs." },
  { title: "Developing a Business Plan for Sustainable Growth", body: "Sustainability should be at the core of your business plan, ensuring long-term growth and impact." },
  { title: "Building Responsive Frontends with CSS Grid and Flexbox", body: "CSS Grid and Flexbox make it easier to create responsive, modern layouts without relying on heavy frameworks." },
  { title: "Scaling Ruby on Rails Applications", body: "Rails can scale efficiently with the right architecture, tools, and performance optimizations." },
  { title: "The Role of Renewable Energy in the Power Sector", body: "Renewable energy sources like solar and wind are essential for a sustainable power sector." },
  { title: "Navigating Tech Trends as a Business Leader", body: "Business leaders must stay ahead of tech trends to ensure their company remains competitive in the market." },
  { title: "Agile Best Practices for Remote Teams", body: "Agile methodologies can help remote teams stay aligned and productive, despite being distributed." }
]

topics.each do |topic|
  Post.create!(
    title: topic[:title],
    body: topic[:body]
  )
end

puts "20 posts created!"



