"use client";
import React from "react";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html lang="fi">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <div className="max-w-md rounded-2xl bg-card p-8 shadow-xl">
          <h1 className="mb-4 text-2xl font-bold text-destructive">Jokin meni pieleen</h1>
          <p className="mb-2 text-muted-foreground">Valitettavasti sovelluksessa tapahtui odottamaton virhe.</p>
          <pre className="mb-4 whitespace-pre-wrap break-words text-xs text-muted-foreground">{error?.message}</pre>
          <a href="/" className="btn-primary rounded-full px-4 py-2 font-semibold">Palaa etusivulle</a>
        </div>
      </body>
    </html>
  );
}
