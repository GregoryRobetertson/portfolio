"use client";

import React, { useEffect, useState } from "react";

export default function NowStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `https://gregoryrobetertson.github.io/now-status/now.json`
        );
        const data = res.json();
        setStatus(data);
      } catch (error) {
        error.console("Failed to fetch now.json", error);
      }
    };
  });

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl shadow-md max-w-md ">
      <p className="text-sm text-gray-400 mb-1">What I'm working on:</p>
      <p className="text-base font-semibold">
        {status?.now || "No recent activity"}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Updated {status?.updatedAt ? getTimeAgo(status.updatedAt) : "recently"}
      </p>
    </div>
  );
}
