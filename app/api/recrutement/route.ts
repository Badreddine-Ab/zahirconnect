import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('[recrutement] GOOGLE_SHEETS_WEBHOOK_URL is not set')
      return NextResponse.json({ ok: false, error: 'Webhook not configured' }, { status: 500 })
    }

    const sheetRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      redirect: 'follow',
    })

    if (!sheetRes.ok) {
      console.error('[recrutement] Google Sheets webhook returned', sheetRes.status)
      return NextResponse.json({ ok: false, error: 'Upstream error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[recrutement] Unexpected error', err)
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}
