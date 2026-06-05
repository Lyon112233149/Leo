import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_TO = "james112233149@gmail.com"

const planLabels: Record<string, string> = {
  "24": "動作矯正計畫（24 堂）· 入門首選",
  "36": "排列校正計畫（36 堂）· 習慣養成",
  "48": "體態重建計畫（48 堂）· 黃金週期 ★ 推薦",
  "72": "身體優化專案（72 堂）· 運動醫學等級",
  "108": "終身結構管理（108 堂）· 完整蛻變",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { date, time, name, phone, intro, plan } = body

    if (!date || !time || !name || !phone || !plan) {
      return NextResponse.json({ error: "缺少必填欄位" }, { status: 400 })
    }

    const planLabel = planLabels[plan] ?? plan

    await resend.emails.send({
      // Change to a verified domain once set up in Resend dashboard
      from: "Body Architect <onboarding@resend.dev>",
      to: NOTIFY_TO,
      subject: `【新預約】${name} · ${plan} 堂方案`,
      html: `
<!DOCTYPE html>
<html lang="zh-Hant">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#16140f;color:#ece8df;font-family:'Noto Sans TC',sans-serif;font-weight:300;">
  <div style="max-width:600px;margin:0 auto;padding:48px 32px;">

    <div style="border-bottom:1px solid #3a362c;padding-bottom:32px;margin-bottom:32px;">
      <p style="font-size:12px;letter-spacing:4px;color:#c9a96a;text-transform:uppercase;margin:0 0 12px;">Body Architect</p>
      <h1 style="font-size:28px;font-weight:500;margin:0 0 8px;letter-spacing:1px;">新預約通知</h1>
      <p style="color:#9a9384;font-size:14px;margin:0;">有新客戶完成預約表單填寫</p>
    </div>

    <table style="width:100%;border-collapse:collapse;">
      <tr style="border-bottom:1px solid #2a2820;">
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;width:110px;">姓名</td>
        <td style="padding:14px 0;font-size:15px;">${name}</td>
      </tr>
      <tr style="border-bottom:1px solid #2a2820;">
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;">聯絡電話</td>
        <td style="padding:14px 0;font-size:15px;">${phone}</td>
      </tr>
      <tr style="border-bottom:1px solid #2a2820;">
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;">希望日期</td>
        <td style="padding:14px 0;font-size:15px;">${date}</td>
      </tr>
      <tr style="border-bottom:1px solid #2a2820;">
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;">希望時段</td>
        <td style="padding:14px 0;font-size:15px;">${time}</td>
      </tr>
      <tr style="border-bottom:1px solid #2a2820;">
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;">選擇方案</td>
        <td style="padding:14px 0;font-size:15px;color:#c9a96a;font-weight:500;">${planLabel}</td>
      </tr>
      ${intro ? `
      <tr>
        <td style="padding:14px 0;color:#9a9384;font-size:13px;letter-spacing:1px;vertical-align:top;">身體狀況</td>
        <td style="padding:14px 0;font-size:14px;line-height:1.8;color:#c8c4bb;">${intro.replace(/\n/g, "<br>")}</td>
      </tr>` : ""}
    </table>

    <div style="margin-top:40px;padding:20px 24px;background:#1d1b15;border:1px solid #3a362c;border-radius:4px;">
      <p style="margin:0;font-size:13px;color:#9a9384;">建議盡快透過電話 <strong style="color:#ece8df;">${phone}</strong> 與 ${name} 確認預約時間。</p>
    </div>

    <p style="margin-top:32px;font-size:12px;color:#5a5648;text-align:center;">由 Body Architect 預約系統自動發送</p>
  </div>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[booking/route] Resend error:", error)
    return NextResponse.json({ error: "發送失敗，請稍後再試" }, { status: 500 })
  }
}
