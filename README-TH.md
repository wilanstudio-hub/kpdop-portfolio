# KPDOP Portfolio + Sanity CMS — คู่มือติดตั้ง

เว็บ portfolio ที่แก้ไขเนื้อหาผ่าน Sanity Studio (หน้า admin สวยงาม ฟรี)
ตัวเว็บเป็น static site — deploy บน Render ฟรี ไม่มีปัญหาเว็บหลับ

## โครงสร้าง

```
kpdop-sanity/
├── web/
│   └── index.html      ← เว็บ portfolio (deploy อันนี้ขึ้น Render)
└── studio/             ← Sanity Studio (หน้า admin)
    ├── sanity.config.ts
    ├── sanity.cli.ts
    ├── schemaTypes/     ← โครงสร้างข้อมูลทั้งหมด
    └── seed.ndjson      ← ข้อมูลปัจจุบันของคุณ พร้อม import
```

---

## ขั้นที่ 1: สมัคร Sanity (ฟรี)

1. ไปที่ **sanity.io** → กด Get started → สมัครด้วย Google/GitHub ก็ได้
2. ไปที่ **sanity.io/manage** → กด **Create new project**
   - ตั้งชื่อโปรเจกต์ เช่น `kpdop-portfolio`
   - Dataset: ใช้ชื่อ `production` (ค่า default)
   - เลือก **Public** dataset (สำคัญ! เพื่อให้เว็บอ่านข้อมูลได้โดยไม่ต้องใช้ token)
3. จดค่า **Project ID** ไว้ (ตัวอักษร+ตัวเลขสั้นๆ เช่น `ab12cd34`)

## ขั้นที่ 2: ใส่ Project ID ใน 3 ไฟล์

✅ **ทำให้แล้ว** — Project ID `bd946qlz` ถูกใส่ไว้ในทั้ง 3 ไฟล์เรียบร้อย:

1. `studio/sanity.config.ts`
2. `studio/sanity.cli.ts`
3. `web/index.html` (บรรทัด `const SANITY_PROJECT_ID = ...`)

## ขั้นที่ 3: รัน Studio + import ข้อมูล

ต้องมี Node.js 18+ ในเครื่อง แล้วรัน:

```bash
cd studio
npm install
npx sanity login          # ล็อกอินบัญชี Sanity ที่สมัครไว้
npx sanity dataset import seed.ndjson production   # import ข้อมูลปัจจุบันทั้งหมด
npm run dev               # เปิด Studio ที่ http://localhost:3333
```

เปิด http://localhost:3333 → จะเห็นหน้า admin พร้อมข้อมูลครบทุกอย่าง:
- **Site Settings** — hero, วิดีโอพื้นหลัง, contact, footer
- **Bio** — ย่อหน้าแนะนำตัว (เพิ่ม/ลบ/ลากสลับได้)
- **Videos** — ทุกหมวด เพิ่ม/ลบ/เปลี่ยนหมวด/จัดลำดับได้
- **Gear** — รายการอุปกรณ์

แก้อะไรแล้วกด **Publish** → เว็บอัปเดตทันที

## ขั้นที่ 4: Deploy Studio ขึ้นเน็ต (แก้ไขจากที่ไหนก็ได้)

```bash
npx sanity deploy
```

ตั้งชื่อ hostname เช่น `kpdop` → Studio จะอยู่ที่ **https://kpdop.sanity.studio**
เข้าจากมือถือ/คอมเครื่องไหนก็ได้ ล็อกอินด้วยบัญชี Sanity ของคุณ
(นี่คือระบบล็อกอินที่ปลอดภัยกว่ารหัสผ่านเดี่ยวแบบเดิมมาก)

## ขั้นที่ 5: Deploy เว็บขึ้น Render (ฟรี)

1. สร้าง GitHub repo แล้ว push โฟลเดอร์นี้ขึ้นไป
2. บน Render: **New → Static Site** → เชื่อม repo
   - **Publish directory:** `web`
   - Build command: เว้นว่าง
3. ได้ URL เช่น `https://kpdop.onrender.com`

> Static Site บน Render **ฟรีถาวร ไม่มีเว็บหลับ** ต่างจาก Web Service

## ขั้นที่ 6: เปิด CORS ให้โดเมนเว็บ

1. ไปที่ **sanity.io/manage** → เลือกโปรเจกต์ → **API** → **CORS origins**
2. กด **Add CORS origin** แล้วเพิ่ม:
   - `https://kpdop.onrender.com` (URL จริงจาก Render)
   - `http://localhost:3000` (ไว้ทดสอบในเครื่อง — ถ้าต้องการ)
   - ไม่ต้องติ๊ก Allow credentials
3. เสร็จ! เปิดเว็บดูได้เลย

---

## การใช้งานประจำวัน

- แก้เนื้อหา → เข้า **https://ชื่อคุณ.sanity.studio** → แก้ → Publish → เว็บอัปเดตทันที
- ไม่ต้อง redeploy เว็บอีกเลย นอกจากอยากแก้ดีไซน์/โครงสร้างหน้าเว็บ

## หมายเหตุ

- **Free tier ของ Sanity**: ผู้ใช้ 20 คน, API request เดือนละหลายแสนครั้ง — portfolio site ใช้ไม่ถึง 1% ของลิมิต
- **วิดีโอ Vimeo**: ใส่แค่ตัวเลข ID (จาก vimeo.com/XXXXXXXX) และวิดีโอต้องตั้งค่า privacy ให้ embed ได้
- ถ้าเว็บขึ้น "FAILED TO LOAD CONTENT" → เช็ค Project ID กับ CORS ก่อนเป็นอันดับแรก
