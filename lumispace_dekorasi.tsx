import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Star,
  Quote,
  Sparkles,
  Heart,
  Palette,
  Camera,
  CalendarHeart,
  Info,
  Clock,
  ChevronDown,
  HelpCircle,
  Map
} from 'lucide-react';

import profileImg from './src/assets/lumispace-logo.png';
import heroBgImg from './src/assets/lumispace-hero.jpg';
import gallery1 from './src/assets/gallery/gallery-1.webp';
import gallery2 from './src/assets/gallery/gallery-2.webp';
import gallery3 from './src/assets/gallery/gallery-3.webp';
import gallery4 from './src/assets/gallery/gallery-4.webp';
import gallery5 from './src/assets/gallery/gallery-5.webp';

const pageData = {
  name: "LumiSpace",
  tagline: "Mewujudkan Ruang Impian Anda",
  phone: "6289529605601", // Ganti dengan nomor asli
  address: "Jl. RTA Milono Km 1.5, Palangka Raya, Kalteng.",
  title: "Dekorasi Premium untuk Momen Spesial Anda",
  description: "LumiSpace hadir untuk merangkai estetika dan keindahan di setiap momen berharga Anda. Dari pernikahan, lamaran, hingga perayaan pribadi, kami menyajikan dekorasi elegan yang tak terlupakan.",
  profileImg: profileImg,
  heroImg: heroBgImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/?api=1&query=Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  
  about: "LumiSpace didirikan pada tahun 2020 berawal dari kecintaan kami terhadap seni merangkai bunga dan desain ruang. Kami percaya bahwa setiap perayaan memiliki ceritanya masing-masing, dan tugas kami adalah menceritakannya melalui keindahan visual.",
  history: "Berawal dari garasi kecil untuk dekorasi ulang tahun teman, LumiSpace kini telah dipercaya menangani lebih dari 300+ event besar di Kalimantan Tengah, mulai dari intimate engagement hingga grand wedding di gedung-gedung ternama.",
  
  services: [
    { name: "Wedding Decor", desc: "Dekorasi pelaminan, lorong, dan area resepsi.", icon: "Heart" },
    { name: "Engagement", desc: "Dekorasi intim nan elegan untuk hari lamaran.", icon: "Sparkles" },
    { name: "Birthday Party", desc: "Tema kustom untuk anak hingga dewasa.", icon: "Palette" },
    { name: "Photo Backdrop", desc: "Setup estetik untuk kebutuhan photoshoot.", icon: "Camera" }
  ],

  pricing: [
    { name: "Intimate Package", price: "Mulai Rp 2.500.000", desc: "Cocok untuk lamaran atau ulang tahun. Backdrop 3x3m, fresh flowers mix, welcome sign, lighting standar." },
    { name: "Elegance Package", price: "Mulai Rp 8.000.000", desc: "Untuk wedding rumahan/gedung kecil. Pelaminan 6m, mini garden, karpet, standing flowers, welcome gate." },
    { name: "Grand Signature", price: "Custom (Sesuai Konsep)", desc: "Full venue decoration. Custom desain 3D, premium flowers, VIP area, lighting production, lorong eksklusif." }
  ],

  catalog: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
  ],
  
  faqs: [
    { q: "Berapa lama waktu ideal untuk booking?", a: "Kami menyarankan booking maksimal H-2 bulan untuk wedding, dan H-2 minggu untuk lamaran/ulang tahun agar kami bisa menyiapkan konsep maksimal." },
    { q: "Apakah bisa custom desain di luar katalog?", a: "Sangat bisa! LumiSpace sangat terbuka untuk diskusi konsep baru sesuai referensi Pinterest atau moodboard Anda." },
    { q: "Bagaimana sistem pembayarannya?", a: "Sistem pembayaran kami adalah DP 30% untuk lock tanggal, pembayaran kedua 40% di H-1 bulan, dan pelunasan 30% pada H-3 hari sebelum acara." }
  ],

  testimonials: [
    { name: "Amanda & Reza", type: "Wedding", rating: 5, text: "LumiSpace benar-benar mewujudkan pelaminan impianku! Warnanya pas, bunganya segar semua, dan timnya sangat on-time. Terima kasih!" },
    { name: "Dina Fitria", type: "Engagement", rating: 5, text: "Sangat puas dengan hasilnya. Elegan dan nggak norak. Fotografer sampai muji lighting dari dekornya bagus banget." },
    { name: "PT. Maju Bersama", type: "Corporate Event", rating: 4, text: "Backdrop untuk gala dinner perusahaan dibuat sangat mewah. Pelayanan profesional dan sangat kooperatif." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const eventDate = formData.get('eventDate');
    const eventType = formData.get('eventType');
    const venue = formData.get('venue');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20konsultasi%20dekorasi%20untuk%20acara%20*${eventType}*%20pada%20tanggal%20*${eventDate}*.%0A%0ALokasi/Gedung:%20${venue}%0ACatatan/Konsep:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = { title: pageData.name, text: pageData.title, url: window.location.href };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); } catch (err) { console.error('Error sharing:', err); }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderServiceIcon = (iconName) => {
    switch(iconName) {
      case 'Heart': return <Heart size={20} strokeWidth={1.5} />;
      case 'Sparkles': return <Sparkles size={20} strokeWidth={1.5} />;
      case 'Palette': return <Palette size={20} strokeWidth={1.5} />;
      case 'Camera': return <Camera size={20} strokeWidth={1.5} />;
      default: return <Check size={20} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        body {
          background-color: #F9F8F6; /* Warm beige */
          color: #2C3E35; /* Dark sage green */
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, .serif-font {
          font-family: 'Cormorant Garamond', serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#F9F8F6] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/40 text-white hover:bg-white/40 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35] via-[#2C3E35]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-20">
            {/* Profile Avatar / Logo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2 bg-white shadow-2xl border-2 border-[#E8E2D6]/80 mb-5 flex items-center justify-center overflow-hidden ring-4 ring-white/20 group">
              <img 
                src={pageData.profileImg} 
                alt={pageData.name} 
                className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h1 className="text-5xl font-semibold text-[#E8E2D6] mb-2 leading-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#C5D1C8] font-medium tracking-widest text-[10px] uppercase mb-6">
              {pageData.tagline}
            </p>
            <p className="text-white/90 font-light text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.title}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white shadow-sm text-sm font-light">
                <Instagram size={16} /> Instagram
              </a>
              <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white shadow-sm text-sm font-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white shadow-sm text-sm font-light">
                <MapPin size={16} /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#8B9D8E] text-white rounded-xl font-medium text-sm tracking-wide hover:bg-[#728575] transition-all shadow-lg"
            >
              Konsultasi Sekarang
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* TENTANG KAMI & HISTORY */}
        <section className="py-14 px-6 bg-[#F9F8F6]">
          <div className="flex flex-col items-center text-center mb-10">
            <Info className="text-[#8B9D8E] mb-3" size={24} strokeWidth={1.5} />
            <h2 className="text-3xl text-[#2C3E35] font-semibold mb-4">Cerita Kami</h2>
            <div className="w-12 h-px bg-[#8B9D8E] mb-6"></div>
            <p className="text-[#4A5A50] text-sm leading-loose mb-6 text-left">
              {pageData.about}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D6] shadow-sm relative mt-4">
              <Clock className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#8B9D8E] bg-white p-1 rounded-full" size={32} />
              <h3 className="serif-font text-xl text-[#2C3E35] mt-2 mb-3">Jejak Langkah</h3>
              <p className="text-[#4A5A50] text-sm leading-relaxed italic text-left">
                "{pageData.history}"
              </p>
            </div>
          </div>
        </section>

        {/* JASA DEKORASI */}
        <section className="py-12 px-6 bg-white border-y border-[#E8E2D6]">
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-3xl text-[#2C3E35] font-semibold mb-2">Layanan Kami</h2>
            <p className="text-[#8B9D8E] text-xs uppercase tracking-widest">Spesialisasi LumiSpace</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pageData.services.map((srv, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-5 bg-[#F9F8F6] border border-[#E8E2D6] rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#8B9D8E] shadow-sm mb-3">
                  {renderServiceIcon(srv.icon)}
                </div>
                <h3 className="text-[14px] font-semibold text-[#2C3E35] mb-1">{srv.name}</h3>
                <p className="text-[11px] text-[#4A5A50] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG GALERI */}
        <section className="pt-14 pb-8 bg-[#2C3E35]">
          <div className="px-6 mb-8 flex flex-col text-center">
            <h2 className="text-3xl text-[#E8E2D6] font-semibold mb-2">Katalog Karya</h2>
            <p className="text-[#8B9D8E] text-xs font-light">Sentuhan estetika dari portofolio terbaik kami.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.catalog, idx)}
                className="snap-center shrink-0 w-[260px] aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer relative group bg-[#1A2620]"
              >
                <img 
                  src={img} 
                  alt={"Katalog Dekorasi " + (idx + 1)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* HARGA PAKET */}
        <section className="py-14 px-6 bg-[#F9F8F6]">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl text-[#2C3E35] font-semibold mb-2">Pilihan Paket</h2>
            <div className="w-12 h-px bg-[#8B9D8E] mb-4"></div>
            <p className="text-[#4A5A50] text-sm">Sesuaikan dengan kebutuhan dan skala acara Anda.</p>
          </div>

          <div className="flex flex-col gap-4">
            {pageData.pricing.map((pkg, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2D6] shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2.5 mb-3">
                  <h3 className="serif-font text-lg sm:text-xl text-[#2C3E35] font-semibold leading-tight">{pkg.name}</h3>
                  <span className="shrink-0 w-[152px] sm:w-[158px] text-center bg-[#E8E2D6]/60 text-[#2C3E35] text-[9.5px] sm:text-[10px] font-bold py-1.5 px-2 rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5A50] leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section className="py-12 px-6 bg-white border-t border-[#E8E2D6]">
          <div className="bg-[#2C3E35] p-8 rounded-3xl text-center flex flex-col items-center shadow-lg relative overflow-hidden">
            <Map className="absolute -right-8 -top-8 w-32 h-32 text-white/5" />
            <MapPin className="text-[#E8E2D6] mb-3" size={28} />
            <h2 className="serif-font text-2xl text-white mb-2">Kunjungi Workshop Kami</h2>
            <p className="text-[#C5D1C8] text-sm mb-6">{pageData.address}</p>
            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#E8E2D6] text-[#2C3E35] px-6 py-3 rounded-xl text-sm font-medium hover:bg-white transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-6 bg-[#F9F8F6]">
          <div className="mb-8 flex flex-col items-center text-center">
            <HelpCircle className="text-[#8B9D8E] mb-3" size={24} />
            <h2 className="text-3xl text-[#2C3E35] font-semibold">Tanya Jawab</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#E8E2D6] rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-transparent"
                >
                  <span className="font-medium text-[#2C3E35] text-sm pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#8B9D8E] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#4A5A50] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI KLIEN */}
        <section className="py-14 px-6 bg-white border-y border-[#E8E2D6]">
          <div className="mb-8 flex flex-col text-center">
            <h2 className="text-3xl text-[#2C3E35] font-semibold mb-2">Kata Mereka</h2>
            <p className="text-[#4A5A50] text-sm">Cerita manis dari klien LumiSpace.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[300px] bg-[#F9F8F6] p-6 rounded-2xl border border-[#E8E2D6] flex flex-col gap-3">
                <Quote className="text-[#D3CBC0] mb-1" size={24} />
                <p className="text-[#2C3E35] text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#8B9D8E] text-[#8B9D8E]" />
                    ))}
                  </div>
                  <span className="text-[14px] font-bold text-[#2C3E35]">{testi.name}</span>
                  <span className="text-[11px] text-[#8B9D8E] uppercase tracking-wider">{testi.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-16 px-6 bg-[#2C3E35]">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10 mb-8 text-center">
              <h2 className="serif-font text-3xl text-[#2C3E35] mb-2 font-semibold">Mulai Diskusi</h2>
              <p className="text-[#4A5A50] text-sm">Ceritakan konsep acara Anda, dan tim kami akan segera menghubungi via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#8B9D8E] uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input 
                  type="text" name="name" required placeholder="Nama lengkap Anda"
                  className="w-full bg-[#F9F8F6] border border-[#E8E2D6] rounded-xl px-4 py-3.5 text-sm text-[#2C3E35] focus:outline-none focus:border-[#8B9D8E] focus:ring-1 focus:ring-[#8B9D8E] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#8B9D8E] uppercase tracking-wide ml-1">Tanggal Acara</label>
                <input 
                  type="date" name="eventDate" required
                  className="w-full bg-[#F9F8F6] border border-[#E8E2D6] rounded-xl px-4 py-3.5 text-sm text-[#2C3E35] focus:outline-none focus:border-[#8B9D8E] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#8B9D8E] uppercase tracking-wide ml-1">Jenis Acara</label>
                <select 
                  name="eventType" required
                  className="w-full bg-[#F9F8F6] border border-[#E8E2D6] rounded-xl px-4 py-3.5 text-sm text-[#2C3E35] focus:outline-none focus:border-[#8B9D8E] transition-all appearance-none"
                >
                  <option value="">Pilih jenis acara...</option>
                  <option value="Wedding / Pernikahan">Wedding / Pernikahan</option>
                  <option value="Engagement / Lamaran">Engagement / Lamaran</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate / Event Lainnya">Corporate / Event Lainnya</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#8B9D8E] uppercase tracking-wide ml-1">Lokasi/Venue (Jika ada)</label>
                <input 
                  type="text" name="venue" placeholder="Nama gedung atau alamat rumah"
                  className="w-full bg-[#F9F8F6] border border-[#E8E2D6] rounded-xl px-4 py-3.5 text-sm text-[#2C3E35] focus:outline-none focus:border-[#8B9D8E] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#8B9D8E] uppercase tracking-wide ml-1">Konsep / Catatan Khusus</label>
                <textarea 
                  name="notes" rows="3" placeholder="Contoh: Tema rustic elegan dominan warna sage green..."
                  className="w-full bg-[#F9F8F6] border border-[#E8E2D6] rounded-xl px-4 py-3.5 text-sm text-[#2C3E35] focus:outline-none focus:border-[#8B9D8E] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-3 bg-[#2C3E35] text-[#E8E2D6] font-medium text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1A2620] transition-colors"
              >
                Kirim via WhatsApp
                <MessageCircle size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 pb-16 text-center flex flex-col items-center justify-center mx-6">
          {/* Footer Profile / Logo */}
          <div className="w-16 h-16 rounded-full p-2 bg-white border border-[#E8E2D6] shadow-sm flex items-center justify-center overflow-hidden mb-4 ring-2 ring-[#8B9D8E]/20">
            <img 
              src={pageData.profileImg} 
              alt={pageData.name} 
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <h2 className="serif-font text-2xl text-[#2C3E35] font-semibold mb-4">{pageData.name}</h2>
          
          <div className="w-12 h-px bg-[#D3CBC0] mb-6"></div>
          
          <div className="text-[#4A5A50] text-xs flex flex-col gap-1 items-center mb-6">
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-[#8B9D8E] text-[10px] mb-1">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8B9D8E]/80 text-[10px] tracking-wide font-medium hover:text-[#2C3E35] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#2C3E35] backdrop-blur-xl border border-[#8B9D8E]/30 rounded-2xl text-white shadow-2xl hover:bg-[#1A2620] active:scale-[0.98] transition-all"
          >
            <span className="font-medium text-sm tracking-wide text-[#E8E2D6]">Konsultasi Dekorasi</span>
            <div className="bg-[#8B9D8E] text-white p-2 rounded-xl">
              <CalendarHeart size={18} />
            </div>
          </button>
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2620]/95 backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20" onClick={closeLightbox}>
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.currentIndex]} alt="Lightbox View" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
          </div>

          {lightbox.images.length > 1 && (
            <button className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity" onClick={() => setShowShareModal(false)}>
          <div className="w-full max-w-[480px] bg-[#F9F8F6] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#2C3E35] font-semibold text-[15px]">Bagikan Portofolio Kami</h3>
              <button onClick={() => setShowShareModal(false)} className="p-1 text-[#8B9D8E] hover:bg-white rounded-full transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button onClick={copyToClipboard} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2C3E35] shadow-sm border border-[#E8E2D6]">
                  {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </div>
                <span className="text-[10px] text-[#4A5A50]">{copied ? 'Tersalin' : 'Salin'}</span>
              </button>
              
              <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`)} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                  <MessageCircle size={20} className="fill-current" />
                </div>
                <span className="text-[10px] text-[#4A5A50]">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}