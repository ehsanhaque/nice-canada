import Image from "next/image";
import { asset } from "@/lib/asset";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={asset("/brand/nice-logo-icon.png")}
      alt="NICE — North-Valley Islamic Centre logo"
      width={848}
      height={1098}
      className={className}
      priority
      unoptimized
    />
  );
}
