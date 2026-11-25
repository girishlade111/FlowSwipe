import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    animate?: string;
    "animate-banner"?: string;
    "animate-text"?: string;
    card?: string;
    image?: string;
    "image-banner"?: string;
  }
}
