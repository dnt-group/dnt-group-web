import type { BlogPost } from "@/lib/sanity/blog";

type BlogPostCoverImageProps = {
  post: BlogPost;
};

export default function BlogPostCoverImage({ post }: BlogPostCoverImageProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-0 pt-10">
      <div className="aspect-[21/9] overflow-hidden rounded-2xl">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
