// คลังข้อสอบแยกตามบทเรียน (12 บทเรียน)
const unitsQuestionsData = {
  1: [
    { qId: 1, stage: 1, pts: 1, mode: "ribbon", q: "บทที่ 1 (1/2): เลือกแท็บเมนู Ribbon ที่ใช้เปลี่ยนแบบฟอนต์และขนาดตัวอักษร:", target: "Home", knTitle: "แถบเมนู Ribbon", knText: "แถบ <span class='hl-yellow'>หน้าแรก (Home)</span> เป็นศูนย์รวมคำสั่งพื้นฐาน เช่น เปลี่ยนฟอนต์ และปรับขนาดอักษร" },
    { qId: 2, stage: 1, pts: 1, mode: "choice", q: "บทที่ 1 (2/2): แถบใดแสดงชื่อไฟล์เอกสารที่กำลังเปิดใช้งานอยู่:", target: "Title Bar (แถบชื่อเรื่อง)", opts: ["Title Bar (แถบชื่อเรื่อง)", "Status Bar (แถบสถานะ)", "Ribbon Bar"], knTitle: "Title Bar", knText: "<b>Title Bar</b> จะอยู่บนสุดของหน้าจอ ใช้แสดงชื่อไฟล์เอกสาร" }
  ],
  2: [
    { qId: 3, stage: 1, pts: 1, mode: "matching", q: "บทที่ 2 (1/2): จับคู่คีย์ลัดจัดการไฟล์ให้ถูกต้อง:", pairs: [{ action: "บันทึกเอกสาร", key: "Ctrl + S" }, { action: "สร้างเอกสารใหม่", key: "Ctrl + N" }], knTitle: "คีย์ลัดจัดการไฟล์", knText: "<span class='hl-yellow'>Ctrl+S</span> = Save / <span class='hl-blue'>Ctrl+N</span> = New" },
    { qId: 4, stage: 1, pts: 1, mode: "choice", q: "บทที่ 2 (2/2): คีย์ลัดใดใช้เปิดไฟล์เอกสารเก่าที่เคยบันทึกไว้:", target: "Ctrl + O", opts: ["Ctrl + P", "Ctrl + O", "Ctrl + W"], knTitle: "Ctrl + O", knText: "<span class='hl-yellow'>Ctrl + O</span> ย่อมาจาก Open ใช้เปิดไฟล์" }
  ],
  3: [
    { qId: 5, stage: 1, pts: 1, mode: "choice", q: "บทที่ 3 (1/2): คีย์ลัดใดใช้คัดลอก (Copy) ข้อความที่เลือก:", target: "Ctrl + C", opts: ["Ctrl + X", "Ctrl + C", "Ctrl + V"], knTitle: "การคัดลอกข้อความ", knText: "<b>Ctrl + C</b> = Copy (คัดลอก) / <b>Ctrl + V</b> = Paste (วาง)" },
    { qId: 6, stage: 1, pts: 1, mode: "choice", q: "บทที่ 3 (2/2): หากลบข้อความผิดพลาด ต้องการย้อนกลับ (Undo) กดคีย์ลัดใด:", target: "Ctrl + Z", opts: ["Ctrl + Z", "Ctrl + Y", "Ctrl + A"], knTitle: "การ Undo", knText: "<b>Ctrl + Z</b> ใช้ยกเลิกการกระทำล่าสุด" }
  ],
  4: [
    { qId: 7, stage: 1, pts: 1, mode: "choice", q: "บทที่ 4 (1/2): ต้องการทำข้อความให้เป็น 'ตัวหนา' ต้องกดคีย์ลัดใด:", target: "Ctrl + B", opts: ["Ctrl + B", "Ctrl + I", "Ctrl + U"], knTitle: "ตัวหนา Bold", knText: "<b>Ctrl + B</b> ย่อมาจาก Bold (ตัวหนา)" },
    { qId: 8, stage: 1, pts: 1, mode: "choice", q: "บทที่ 4 (2/2): เครื่องมือรูป 'แปรงทาสี' (Format Painter) มีไว้ทำสิ่งใด:", target: "คัดลอกรูปแบบข้อความ", opts: ["ระบายสีข้อความ", "คัดลอกรูปแบบข้อความ", "ลบรูปแบบข้อความ"], knTitle: "Format Painter", knText: "แปรงทาสีใช้สำหรับ <span class='hl-yellow'>คัดลอกสไตล์และรูปแบบข้อความ</span>" }
  ],
  5: [
    { qId: 9, stage: 1, pts: 1, mode: "align", q: "บทที่ 5 (1/1): กดปุ่มเพื่อจัดข้อความให้อยู่ 'กึ่งกลางหน้ากระดาษ':", target: "center", knTitle: "การจัดแนวย่อหน้า", knText: "เลือก <span class='hl-yellow'>กึ่งกลาง (Center)</span> หรือกดคีย์ลัด <b>Ctrl + E</b>" }
  ],
  6: [
    { qId: 10, stage: 1, pts: 1, mode: "choice", q: "บทที่ 6 (1/1): เครื่องมือใดใช้ทำรายการสัญลักษณ์หัวข้อย่อยแบบไม่มีลำดับเลข:", target: "Bullets", opts: ["Bullets", "Numbering", "Multilevel List"], knTitle: "Bullets", knText: "<span class='hl-yellow'>Bullets</span> ใช้สร้างหัวข้อย่อยที่ไม่ต้องระบุลำดับก่อนหลัง" }
  ],
  7: [
    { qId: 11, stage: 1, pts: 1, mode: "choice", q: "บทที่ 7 (1/1): การตั้งค่า Wrap Text แบบใดทำให้รูปภาพไปอยู่หลังตัวหนังสือ:", target: "Behind Text", opts: ["Square", "In Front of Text", "Behind Text"], knTitle: "Behind Text", knText: "<b>Behind Text</b> ส่งรูปภาพลงไปเป็นฉากหลังของข้อความ" }
  ],
  8: [
    { qId: 12, stage: 1, pts: 1, mode: "table_grid", q: "บทที่ 8 (1/1): คลิกสร้างตารางขนาด '3 คอลัมน์ x 2 แถว':", targetCols: 3, targetRows: 2, knTitle: "ตาราง", knText: "คอลัมน์คือแนวตั้ง (3) แถวคือแนวนอน (2)" }
  ],
  9: [
    { qId: 13, stage: 1, pts: 1, mode: "choice", q: "บทที่ 9 (1/1): วางหน้ากระดาษเป็น 'แนวนอน' ต้องเลือกคำสั่งใดใน Orientation:", target: "Landscape", opts: ["Portrait", "Landscape", "Margins"], knTitle: "Landscape", knText: "<span class='hl-yellow'>Landscape</span> = วางกระดาษแนวนอน" }
  ],
  10: [
    { qId: 14, stage: 1, pts: 1, mode: "choice", q: "บทที่ 10 (1/1): เส้นหยักสีแดงใต้คำ บ่งบอกถึงสิ่งใด:", target: "สะกดคำผิด", opts: ["สะกดคำผิด", "เว้นวรรคผิด", "ใส่ฟอนต์ผิด"], knTitle: "ตรวจคำผิด", knText: "<span class='hl-yellow'>เส้นใต้หยักสีแดง</span> = สะกดคำผิด" }
  ],
  11: [
    { qId: 15, stage: 1, pts: 1, mode: "choice", q: "บทที่ 11 (1/1): การสร้างสารบัญอัตโนมัติ ต้องกำหนดสไตล์หัวข้อเป็นสิ่งใด:", target: "Heading 1", opts: ["Normal", "Heading 1", "Title"], knTitle: "สารบัญอัตโนมัติ", knText: "Word จะดึงสารบัญจากข้อความที่ตั้งสไตล์เป็น <span class='hl-yellow'>Heading 1</span>" }
  ],
  12: [
    { qId: 16, stage: 1, pts: 1, mode: "choice", q: "บทที่ 12 (1/1): ส่งออกไฟล์ชนิดใดเพื่อล็อกหน้ากระดาษไม่ให้เคลื่อนเมื่อนำไปพิมพ์:", target: ".pdf", opts: [".docx", ".txt", ".pdf"], knTitle: "ไฟล์ PDF", knText: "ไฟล์นามสกุล <span class='hl-yellow'>.pdf</span> ช่วยล็อกการจัดหน้าและฟอนต์ให้คงที่" }
  ]
};
