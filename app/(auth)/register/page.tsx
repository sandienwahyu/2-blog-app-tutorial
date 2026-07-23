"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          setIsLoading(false);
          setError(
            ctx.error.message ?? "An error occurred during registration.",
          );
        },
      },
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-4 py-10">
      <h1 className="text-2xl text-center font-bold">Register</h1>
      <form
        className="flex-1 flex flex-col gap-4 justify-center"
        onSubmit={handleSubmit}
      >
        <Input
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-1">
          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}
          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </div>
        <Link
          href="/login"
          className="text-sm text-foreground/50 hover:text-muted-foreground text-center"
        >
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}
