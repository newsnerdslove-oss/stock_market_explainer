"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { A } from "@/components/kit/theme";
import { Btn } from "@/components/kit/Btn";
import { Icon } from "@/components/kit/Icon";
import { track } from "@/lib/sie/track";

export default function SieSuccess() {
  const router = useRouter();
  useEffect(() => {
    track("purchase");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: A.page, color: A.ink, fontFamily: A.font, display: "grid", placeItems: "center" }}>
      <div style={{ maxWidth: 480, padding: 24, textAlign: "center" }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", margin: "0 auto 18px", display: "grid", placeItems: "center", background: A.greenSoft, color: A.green }}>
          <Icon name="check-circle-2" size={40} />
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 10px" }}>You&apos;re in. 🎉</h1>
        <p style={{ fontSize: 16, color: A.muted, fontWeight: 500, lineHeight: 1.55, margin: "0 0 24px" }}>
          You locked in the founding price for the SIE Pass Pack. We&apos;ll email you the moment it&apos;s live — and your purchase is
          <b style={{ color: A.ink }}> fully refundable anytime before launch</b>, no questions asked.
        </p>
        <Btn kind="primary" size="lg" onClick={() => router.push("/sie/quiz")}>
          Keep practicing free →
        </Btn>
      </div>
    </div>
  );
}
