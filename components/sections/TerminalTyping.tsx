"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

type CompletedLine = {
  prompt: string;
  output: string;
};

const terminalScript = [
  { prompt: "whoami", output: `${siteConfig.name} — ${siteConfig.role}` },
  { prompt: "cat interests.txt", output: siteConfig.terminal.interests },
];

export default function TerminalTyping() {
  const [completedLines, setCompletedLines] = useState<CompletedLine[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTypingPrompt, setIsTypingPrompt] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished || lineIndex >= terminalScript.length) return;

    const line = terminalScript[lineIndex];
    const target = isTypingPrompt ? line.prompt : line.output;
    const speed = isTypingPrompt ? 45 : 28;

    if (typedText.length < target.length) {
      const timer = setTimeout(() => {
        setTypedText(target.slice(0, typedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }

    if (isTypingPrompt) {
      setIsTypingPrompt(false);
      setTypedText("");
      return;
    }

    setCompletedLines((prev) => [...prev, { prompt: line.prompt, output: line.output }]);

    if (lineIndex < terminalScript.length - 1) {
      setLineIndex((i) => i + 1);
      setIsTypingPrompt(true);
      setTypedText("");
    } else {
      setIsFinished(true);
    }
  }, [typedText, isTypingPrompt, lineIndex, isFinished]);

  const currentLine = terminalScript[lineIndex];

  return (
    <div
      className="neon-border overflow-hidden rounded-lg bg-[#0d1117] font-mono text-sm shadow-2xl"
      role="img"
      aria-label="Animated terminal showing developer introduction"
    >
      <div className="flex items-center gap-2 border-b border-border bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 text-xs text-foreground-muted">
          user@portfolio:~$
        </span>
      </div>

      <div className="space-y-4 p-4 md:p-6">
        {completedLines.map((line, i) => (
          <div key={i} className="space-y-1">
            <p>
              <span className="text-accent">&gt;</span>{" "}
              <span className="text-foreground">{line.prompt}</span>
            </p>
            <p className="pl-4 text-foreground-muted">{line.output}</p>
          </div>
        ))}

        {!isFinished && currentLine && (
          <div className="space-y-1">
            <p>
              <span className="text-accent">&gt;</span>{" "}
              <span className="text-foreground">
                {isTypingPrompt ? typedText : currentLine.prompt}
              </span>
              {isTypingPrompt && (
                <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-accent align-middle" />
              )}
            </p>
            {!isTypingPrompt && (
              <p className="pl-4 text-foreground-muted">
                {typedText}
                <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-accent align-middle" />
              </p>
            )}
          </div>
        )}

        {isFinished && (
          <p>
            <span className="text-accent">&gt;</span>{" "}
            <span className="cursor-blink inline-block h-4 w-2 bg-accent align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}
