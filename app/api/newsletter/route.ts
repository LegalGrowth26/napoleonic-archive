import { NextResponse } from "next/server";

const PUBLICATION_ID = "pub_4998d0c1-1837-4b7c-a0c3-6cbf5e067db7";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "napoleonicarchive.com",
        utm_medium: "organic",
        utm_campaign: "website",
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error("Beehiiv API error:", res.status, body);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: res.status }
    );
  }

  return NextResponse.json({ success: true });
}
