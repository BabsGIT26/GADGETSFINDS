"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
  id: string;
  article_slug: string;
  author_name: string;
  content: string;
  created_at: string;
  likes: number;
  dislikes: number;
};

export default function CommentSection({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [articleSlug]);

  async function fetchComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("article_slug", articleSlug)
      .order("created_at", { ascending: false });

    if (data) setComments(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    setLoading(true);
    const { error } = await supabase.from("comments").insert({
      article_slug: articleSlug,
      author_name: author.trim(),
      content: content.trim(),
    });

    if (!error) {
      setAuthor("");
      setContent("");
      fetchComments();
    }
    setLoading(false);
  }

  async function handleVote(id: string, type: "like" | "dislike") {
    const comment = comments.find((c) => c.id === id);
    if (!comment) return;

    const update =
      type === "like"
        ? { likes: (comment.likes || 0) + 1 }
        : { dislikes: (comment.dislikes || 0) + 1 };

    await supabase.from("comments").update(update).eq("id", id);
    fetchComments();
  }

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm min-h-[100px]"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-5 py-2 rounded text-sm"
        >
          {loading ? "Posting..." : "Post comment"}
        </button>
      </form>

      <div className="space-y-6">
        {comments.length === 0 && (
          <p className="text-muted-foreground text-sm">No comments yet. Be the first!</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <span className="font-semibold text-sm">{c.author_name}</span>
              <span className="text-xs text-muted-foreground">
                {new Date(c.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground">{c.content}</p>
            <div className="flex gap-4 mt-2 text-xs">
              <button
                onClick={() => handleVote(c.id, "like")}
                className="hover:text-amber-600"
              >
                👍 {c.likes || 0}
              </button>
              <button
                onClick={() => handleVote(c.id, "dislike")}
                className="hover:text-red-500"
              >
                👎 {c.dislikes || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
