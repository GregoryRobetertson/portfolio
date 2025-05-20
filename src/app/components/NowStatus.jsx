"use client";

import React, { useEffect, useState } from "react";

function getTimeAgo(dateString) {
  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export default function NowStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `https://gregoryrobetertson.github.io/now-status/now.json`
        );
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        console.error("Failed to fetch now.json", error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl shadow-md max-w-md">
      <p className="text-sm text-gray-400 mb-1">What I'm working on:</p>

      {status ? (
        <>
          <a
            href={status.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-blue-400 hover:underline"
          >
            {status.now}
          </a>
          <p className="text-sm mt-1">
            Commit:&nbsp;
            <a
              href={status.latestCommitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              {status.latestCommitMessage}
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Updated {getTimeAgo(status.updatedAt)}
          </p>
        </>
      ) : (
        <p className="text-base font-semibold">Loading...</p>
      )}
    </div>
  );
}
