import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('[contact] CONTACT_WEBHOOK_URL is not set')
      return NextResponse.json({ ok: false, error: 'Webhook not configured' }, { status: 500 })
    }

    const sheetRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        source: 'contact-form',
        timestamp: new Date().toISOString(),
      }),
      redirect: 'follow',
    })

    if (!sheetRes.ok) {
      console.error('[contact] Webhook returned', sheetRes.status)
      return NextResponse.json({ ok: false, error: 'Upstream error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error', err)
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}