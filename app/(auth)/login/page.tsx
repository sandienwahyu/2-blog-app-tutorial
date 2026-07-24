"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { BrandIcon } from "@/components/brand-icon";
import { siGoogle } from "simple-icons";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentSession } from "@/hooks/useCurrentSession";

export default function LoginPage() {
  const router = useRouter();

  const { session } = useCurrentSession();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInSocial = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          setIsLoading(false);
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setIsLoading(false);
          setError(ctx.error.message);
        },
      },
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
        rememberMe: false,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          setIsLoading(false);
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setIsLoading(false);
          setError(ctx.error.message);
        },
      },
    );
  };

  useEffect(() => {
    const token = document.cookie;
    console.log("All cookies:", token);
    console.log("Session:", session);
  }, [session]);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [router, session]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-4 py-10">
      <h1 className="text-2xl text-center font-bold">Login</h1>
      <form
        className="flex-1 flex flex-col gap-4 justify-center"
        onSubmit={handleSubmit}
      >
        <Input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-1">
          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            Login
          </Button>
          <Button
            variant="outline"
            onClick={signInSocial}
            className="flex items-center gap-2 justify-center text-foreground/50"
          >
            <BrandIcon
              icon={siGoogle}
              className="flex justify-center items-center h-2 w-2"
            />{" "}
            Login with Google
          </Button>
        </div>
        <Link
          href="/register"
          className="text-sm text-foreground/50 hover:text-muted-foreground text-center"
        >
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}
