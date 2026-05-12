# RabbitCast 🐇
### Know Before You Go

RabbitCast is a weather-based hunting forecast app built specifically for rabbit hunters who run beagles. Before you ever load the truck, RabbitCast tells you whether conditions are right for a successful hunt.

---

## Live Site
- **Landing Page:** https://rabbitcast.net
- **App:** https://rabbitcast.net/app.html

---

## What It Does

RabbitCast pulls live weather data based on your exact hunting location and calculates a **Hunt Score** from 0–10 based on the factors that matter most to rabbit hunters.

**Barometric pressure is weighted heaviest** — it is the single biggest driver of your dogs' ability to scent and track rabbits. A rising pressure after a front means rabbits are active and your dogs will run their best. A falling pressure means a storm is coming and scent disperses — stay home.

### Features
- 🎯 **Hunt Score** — 0 to 10 rating of overall hunting conditions
- 🐕 **Scent Meter** — Live barometric pressure trend with plain-English scenting condition
- 📅 **Hourly Breakdown** — Hunt scores for every hour of the day
- 🌡️ **Full Conditions** — Temperature, wind, humidity, precipitation, cloud cover
- 📍 **Location Search** — ZIP code, city, or county name
- 📡 **GPS Support** — One tap uses your current location
- 💡 **Field Advisor Tip** — Daily tip based on actual conditions

---

## Pricing

| Plan | Price | Type |
|---|---|---|
| Day Pass | $5.99 | One-time |
| Pro Hunter Monthly | $14.99 | Recurring |
| Pro Hunter Yearly | $143.99 | Recurring |

Free users see the Hunt Score only. Paying users unlock the full forecast including the Scent Meter, hourly breakdown, conditions detail, and Field Advisor tip.

---

## Tech Stack

| Service | Purpose | Cost |
|---|---|---|
| Open-Meteo | Live weather data | Free |
| Nominatim | Location search & GPS reverse geocoding | Free |
| Supabase | User accounts & subscriber database | Free tier |
| Stripe | Payment processing | 2.9% + 30¢ per transaction |
| Netlify | Hosting & serverless functions | Free tier |
| GitHub | Code repository | Free |

---

## File Structure

```
rabbitcast/
├── index.html                          # Landing page (rabbitcast.net)
├── app.html                            # React app (rabbitcast.net/app.html)
├── RabbitCast.jsx                      # React source code
├── netlify.toml                        # Netlify configuration
├── README.md                           # This file
└── netlify/
    └── functions/
        ├── create-checkout.js          # Stripe checkout serverless function
        └── test-stripe.js             # Stripe connection test function
```

---

## Environment Variables

Set these in your Netlify dashboard under Site Configuration → Environment Variables:

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (starts with sk_live_) |

---

## Stripe Products

| Product | Price ID |
|---|---|
| Day Pass | price_1TUctNBmiHWCqSIDFVkkBGET |
| Pro Hunter Monthly | price_1TUculBmiHWCqSIDQqP6zt7d |
| Pro Hunter Yearly | price_1TUcwJBmiHWCqSIDJURCpeWX |

---

## Supabase

**Project URL:** https://ygrialtcdymyxprahvau.supabase.co

**Tables:**
- `subscribers` — stores user_id, email, plan, updated_at

---

## Hunt Score Algorithm

The Hunt Score is calculated from live weather data with barometric pressure weighted at 40%:

| Factor | Weight |
|---|---|
| Barometric Pressure Trend | 40% |
| Temperature (ideal 28–58°F) | ~17% |
| Precipitation (ideal < 0.05") | ~17% |
| Wind Speed (ideal 0–12 mph) | ~13% |
| Humidity (ideal 45–72%) | ~9% |
| Cloud Cover (ideal 15–65%) | ~4% |

**Score Labels:**
- 8.5–10.0 → Prime Conditions
- 7.0–8.4 → Good Hunting
- 5.0–6.9 → Fair Conditions
- 3.0–4.9 → Poor Conditions
- 0.0–2.9 → Stay Home

---

## Business

- **LLC:** RabbitCast LLC — North Carolina
- **Website:** https://rabbitcast.net
- **Contact:** info@rabbitcast.net

---

*Built with ❤️ for rabbit hunters everywhere.*
