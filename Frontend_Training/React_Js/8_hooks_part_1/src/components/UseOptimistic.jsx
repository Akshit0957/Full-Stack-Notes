import { useState, useOptimistic, startTransition } from "react";

function UseOptimistic() {
  // ✅ REAL STATE (source of truth)
  const [likes, setLikes] = useState(0);

  // ✅ OPTIMISTIC STATE (temporary UI)
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (current) => current + 1
  );

  async function handleLike() {
    // 1️⃣ Optimistic UI update
    startTransition(() => {
      addOptimisticLike();
    });
    console.log("👍 UI updated immediately!");

    // 2️⃣ Simulate server request
    await new Promise((r) => setTimeout(r, 2000));

    // 3️⃣ Server confirms → update REAL state
    setLikes((prev) => prev + 1);
    console.log("✔ Server confirmed like");
  }

  return (
    <div>
      <h2>useOptimistic Example</h2>

      {/* IMPORTANT: show optimisticLikes */}
      <p>Likes: {optimisticLikes}</p>

      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UseOptimistic;
