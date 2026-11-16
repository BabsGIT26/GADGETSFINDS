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
  const [voted, setVoted] = useState<Record<string, "like" | "dislike">>({});

  useEffect(() => {
    fetchComments();
    const stored = localStorage.getItem(`votes-${articleSlug}`);
    if (stored) setVoted(JSON.parse(stored));
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
    if (voted[id]) return; // already voted

    const comment = comments.find((c) => c.id === id);
    if (!comment) return;

    const newLikes = type === "like" ? (comment.likes || 0) + 1 : comment.likes || 0;
    const newDislikes = type === "dislike" ? (comment.dislikes || 0) + 1 : comment.dislikes || 0;

    await supabase
      .from("comments")
      .update({ likes: newLikes, dislikes: newDislikes })
      .eq("id", id);

    const newVoted = { ...voted, [id]: type };
    setVoted(newVoted);
    localStorage.setItem(`votes-${articleSlug}`, JSON.stringify(newVoted));
    fetchComments();
  }

  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="text-2xl font-bold text-foreground mb-2">Comments</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Share your thoughts. Be respectful.
      </p>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          required
        />
        <textarea
          placeholder="Write your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-y"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-400 hover:bg-amber-500 disabled:opacity-60 text-zinc-950 font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          {loading ? "Posting..." : "Post comment"}
        </button>
      </form>

      <div className="space-y-8">
        {comments.length === 0 && (
          <p className="text-muted-foreground text-sm">No comments yet. Be the first to share your opinion.</p>
        )}

        {comments.map((c) => (
          <div key={c.id} className="pb-6 border-b border-border last:border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground text-sm">{c.author_name}</span>
              <time className="text-xs text-muted-foreground">
                {new Date(c.created_at).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">{c.content}</p>

            <div className="flex items-center gap-5 text-sm">
              <button
                onClick={() => handleVote(c.id, "like")}
                disabled={!!voted[c.id]}
                className={`flex items-center gap-1.5 transition-colors ${
                  voted[c.id] === "like"
                    ? "text-amber-600 font-medium"
                    : "text-muted-foreground hover:text-amber-600"
                } disabled:opacity-50`}
              >
                <span className="text-base">↑</span>
                <span>{c.likes || 0}</span>
              </button>

              <button
                onClick={() => handleVote(c.id, "dislike")}
                disabled={!!voted[c.id]}
                className={`flex items-center gap-1.5 transition-colors ${
                  voted[c.id] === "dislike"
                    ? "text-red-500 font-medium"
                    : "text-muted-foreground hover:text-red-500"
                } disabled:opacity-50`}
              >
                <span className="text-base">↓</span>
                <span>{c.dislikes || 0}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
