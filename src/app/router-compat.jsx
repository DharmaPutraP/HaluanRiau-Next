"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

/**
 * Compatibility layer to replace react-router-dom hooks
 */

export function useNavigate() {
  const router = useRouter();
  return (to) => router.push(to);
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    pathname,
    search: searchParams.toString() ? `?${searchParams.toString()}` : "",
  };
}

export function Link({ to, children, ...props }) {
  const router = useRouter();

  return (
    <a
      {...props}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        router.push(to);
      }}
    >
      {children}
    </a>
  );
}
