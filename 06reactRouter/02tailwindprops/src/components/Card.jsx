import React from "react";

function Card({ userName = "JP", post = "Staff Engineer" }) {
  return (
    <div>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{userName}</div>
            <div>{post}, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
