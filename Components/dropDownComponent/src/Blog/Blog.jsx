import BlogCard1 from "./BlogCard1"
import image1 from '../assets/whitejeep.png'

const blogData = [
    {
        id: 1,
        url: 'https://i.pinimg.com/564x/5f/85/b5/5f85b5d9b443ebfe726f5b83b5104812.jpg',
        title: 'Blog Post 1',
        description: 'This is the first blog post description.',
        views: 1200,
        comments: 56,
      },
      {
        id: 2,
        url: 'https://i.pinimg.com/564x/e3/9a/55/e39a55b0b161750ad3f7c5b9b8bc1ea9.jpg',
        title: 'Blog Post 2',
        description: 'This is the second blog post description.',
        views: 890,
        comments: 23,
      },
      {
        id: 3,
        url: 'https://i.pinimg.com/564x/4a/5a/65/4a5a656942228375869899de86141f14.jpg',
        title: 'Blog Post 3',
        description: 'This is the third blog post description.',
        views: 450,
        comments: 12,
      },
      {
        id: 4,
        url: 'https://example.com/image4.jpg',
        title: 'Blog Post 4',
        description: 'This is the fourth blog post description.',
        views: 670,
        comments: 34,
      },
      {
        id: 5,
        url: 'https://example.com/image5.jpg',
        title: 'Blog Post 5',
        description: 'This is the fifth blog post description.',
        views: 980,
        comments: 45,
      },
      {
        id: 6,
        url: 'https://example.com/image6.jpg',
        title: 'Blog Post 6',
        description: 'This is the sixth blog post description.',
        views: 310,
        comments: 8,
      },
      {
        id: 7,
        url: 'https://example.com/image7.jpg',
        title: 'Blog Post 7',
        description: 'This is the seventh blog post description.',
        views: 760,
        comments: 67,
      },
      {
        id: 8,
        url: 'https://example.com/image8.jpg',
        title: 'Blog Post 8',
        description: 'This is the eighth blog post description.',
        views: 520,
        comments: 19,
      },
      {
        id: 9,
        url: 'https://example.com/image9.jpg',
        title: 'Blog Post 9',
        description: 'This is the ninth blog post description.',
        views: 280,
        comments: 4,
      },
      {
        id: 10,
        url: 'https://example.com/image10.jpg',
        title: 'Blog Post 10',
        description: 'This is the tenth blog post description.',
        views: 620,
        comments: 32,
      },
]

const Blog = () => {
  return (
    <section>
        <BlogCard1 blogData = {blogData}/>
    </section>
  )
}

export default Blog
