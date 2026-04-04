/**
 * Static data constants for the wedding invitation site.
 * Sourced from the original script.old.js and index.old.html.
 */

/** Wedding target date for countdown (March 12, 2026 at 6:00 PM IST) */
export const WEDDING_DATE = new Date("2026-05-27T18:00:00+05:30");

/** Symbols used by the floating particle system */
export const PARTICLE_SYMBOLS = ["✦", "✧", "❋", "❊", "⋆", "♥"];

/** Number of floating particles to render */
export const PARTICLE_COUNT = 15;

/** Wedding events displayed in the Events section */
export const EVENTS = [
  { name: "Pattini Seer", tamilName: "பட்டினி விருந்து", description: "This is the very first feast that kicks off the multi-day wedding festivities, typically for close family members to promote harmony. Often associated with this timeframe, the \"Pattini Seer\" involves a ceremonial bath for the couple using water mixed with turmeric, herbs, and flowers. It is a vibrant, fun-filled event where cousins and friends participate, similar to a Haldi ceremony.", date: "Wednesday, May 27th 2026", venue: "PNKSRT Thirumana Mandapam, Putharachal", time: "01:30 PM - 02:00 PM", mapUrl: "https://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Urumalai Kattu Seer", tamilName: "உருமால்கட்டு சீர்", description: "A traditional ceremony where the groom's turban is tied, symbolising his readiness and commitment to take on the responsibilities of married life.", date: "Wednesday, May 27th 2026", venue: "PNKSRT Thirumana Mandapam, Putharachal", time: "04:00 PM - 05:00 PM", mapUrl: "https://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Maappillai Azhaippu", tamilName: "மாப்பிள்ளை அழைப்பு", description: "The formal invitation of the groom by the bride's family. The groom is welcomed with great honour and led in a procession to the wedding venue.", date: "Wednesday, May 27th 2026", venue: "PNKSRT Thirumana Mandapam, Putharachal", time: "05:00 PM - 06:00 PM", mapUrl: "https://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Muhurtha Kaal", tamilName: "முகூர்த்தக்கால்", description: "The pole—often bamboo or a specific wooden branch like Kalyana Murungai—represents stability and strength. Being an evergreen plant, it symbolises the wish for the couple to have an evergreen and flourishing relationship.", date: "Wednesday, May 27th 2026", venue: "PNKSRT Thirumana Mandapam, Putharachal", time: "06:00 PM - 06:30 PM", mapUrl: "https://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?enthttps://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Reception", tamilName: "வரவேற்பு", description: "A grand celebration where the newly wed couple is formally introduced to the extended family and friends, with blessings, music, and feasting.", date: "Wednesday, May 27th 2026", venue: "PNKSRT Thirumana Mandapam, Putharachal", time: "07:00 PM Onwards", mapUrl: "https://www.google.com/maps/place/PNK+SRT+Kalyana+Mandapam/@10.9016821,77.3532343,17z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9afde258e6b93:0x6deb4fefc4436ce1!8m2!3d10.9010625!4d77.3549375!16s%2Fg%2F11hbsmlklv?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Marriage", tamilName: "திருமணம்", description: "The sacred wedding ceremony where the couple exchanges vows, ties the Thali (mangalsutra), and walks around the holy fire, uniting their lives forever.", date: "Thursday, May 28th 2026", venue: "Sri Akilandeswari Udanamar Soleswarar Temple, Putharachal", time: "05:00 AM - 06:00 AM", mapUrl: "https://www.google.com/maps/place/%E0%AE%9A%E0%AF%8B%E0%AE%B4%E0%AF%80%E0%AE%B8%E0%AF%8D%E0%AE%B5%E0%AE%B0%E0%AE%B0%E0%AF%8D+%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%8B%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D/@10.9013972,77.3538614,18.88z/data=!4m15!1m8!3m7!1s0x3ba9afe098b7a69d:0x9cc9e28384498faf!2sPutharachal,+Tamil+Nadu+641664!3b1!8m2!3d10.9014662!4d77.3572074!16s%2Fm%2F0h52skb!3m5!1s0x3ba9af397c87428f:0x356b598068f5a20a!8m2!3d10.9011975!4d77.3543326!16s%2Fg%2F11tg5lh8t1?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
];

/** Informational cards displayed in the Things to Know section */
export const INFO_ITEMS = [
  { icon: "#", title: "Hashtag", description: "While posting photos on social media please use the hashtag — <strong>#gg</strong>" },
  { icon: "☀", title: "Weather", description: "It will be mostly sunny with temperature reaching up to 35-40°C at the venue" },
  { icon: "🏨", title: "Stay", description: "We recommend the nearby hotel called \"The Raja grand\" near the venue for friends and families from outstation" },
  { icon: "🅿", title: "Parking", description: "Parking for all our guests will be available at the venue" },
];

export const GALLERY_IMAGES = [
  { src: 'https://drive.google.com/thumbnail?id=1H9wnN5i1QMUBr-qdybQjcJl-cUTxZaJZ&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1h4-gJpcXm0BeyS4b8t7AklWbNeYk50Fg&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1pyWmp2tnH04QozZgRHLPDXQrkk-9zgvQ&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1UHOvUosymfrDUP_EFcjhmP0dmv3kIjjJ&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1QKreRktGSPDs00oc8nc79VzlNT5Wem1w&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1b4hiGzaf306LrHMm0G2a2wwuS9cR0DrV&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1A1xCwucxWAsAm4zqgdc5v9ImsVvxBWIX&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=13sYAR3o2QXhccvDXtqdk5WQOD6HEN6iF&sz=w800', caption: '' },
  { src: 'https://drive.google.com/thumbnail?id=1B0JcSn1Esi-N6jKA5I1VMB2_8y3UNbEJ&sz=w800', caption: '' },
];