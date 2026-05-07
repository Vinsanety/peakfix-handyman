import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const sanitizedBody = {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      message: String(body.message ?? "").trim(),
      serviceType: String(body.serviceType ?? "").trim(),
      preferredTimes: String(body.preferredTimes ?? "").trim()
    };
    const requiredFields = ["name", "email", "phone", "message"];
    const missing = requiredFields.filter((field) => !sanitizedBody[field as keyof typeof sanitizedBody]);

    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    console.log("New quote request:", sanitizedBody);
    return NextResponse.json({ ok: true, message: "Quote request received." }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }
}
