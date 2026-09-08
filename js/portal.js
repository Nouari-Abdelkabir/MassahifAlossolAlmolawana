// ========================================
// بوابة مصاحف الأصول الملونة
// ========================================

// جميع المصاحف (39 مصحفاً)
const mushafsData = [
    // ========== قالون (4) ==========
    { id: "qalun1", name: "مصحف قالون - بالقصر والإسكان", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/qalun1.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/qalun1/", icon: "1️⃣", category: "قالون" },
    { id: "qalun2", name: "مصحف قالون - بالقصر والصلة", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/qalun2.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/qalun2/", icon: "1️⃣", category: "قالون" },
    { id: "qalun3", name: "مصحف قالون - بالتوسط والإسكان", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/qalun3.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/qalun3/", icon: "1️⃣", category: "قالون" },
    { id: "qalun4", name: "مصحف قالون - بالتوسط والصلة", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/qalun4.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/qalun4/", icon: "1️⃣", category: "قالون" },
    
    // ========== ورش (5) ==========
    { id: "warch1", name: "مصحف ورش - بقصر البدل مع الفتح", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/warch1.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/warch1/", icon: "1️⃣", category: "ورش" },
    { id: "warch2", name: "مصحف ورش - بتوسط البدل مع التقليل", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/warch2.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/warch2/", icon: "1️⃣", category: "ورش" },
    { id: "warch3", name: "مصحف ورش - بإشباع البدل مع الفتح", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/warch3.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/warch3/", icon: "1️⃣", category: "ورش" },
    { id: "warch4", name: "مصحف ورش - بإشباع البدل مع التقليل", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/warch4.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/warch4/", icon: "1️⃣", category: "ورش" },
    { id: "asbahani", name: "مصحف ورش - من طريق الأصبهاني", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/asbahani.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/asbahani/", icon: "1️⃣", category: "ورش" },
    
    // ========== ابن كثير (3) ==========
    { id: "ibnkatir", name: "مصحف ابن كثير", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ibnkatir.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ibnkatir/", icon: "2️⃣", category: "ابن كثير" },
    { id: "bazzi", name: "مصحف البزي - عن ابن كثير", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/bazzi.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/bazzi/", icon: "2️⃣", category: "ابن كثير" },
    { id: "qonbol", name: "مصحف قنبل - عن ابن كثير", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/konboul.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/qonbol/", icon: "2️⃣", category: "ابن كثير" },
    
    // ========== أبو عمرو (4) ==========
    { id: "abouamr", name: "مصحف أبي عمرو البصري", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/abouamralbasri.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/abouamr/", icon: "3️⃣", category: "أبو عمرو" },
    { id: "douri1", name: "مصحف الدوري - عن أبي عمرو (بالتوسط)", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/douritawasot.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/douri/", icon: "3️⃣", category: "أبو عمرو" },
    { id: "douri2", name: "مصحف الدوري - عن أبي عمرو (بالقصر)", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/dourikaser.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/douri/", icon: "3️⃣", category: "أبو عمرو" },
    { id: "soussi", name: "مصحف السوسي - عن أبي عمرو", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/soussi.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/soussi/", icon: "3️⃣", category: "أبو عمرو" },
    
    // ========== ابن عامر (3) ==========
    { id: "ibnamir", name: "مصحف ابن عامر الشامي", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ibenamir.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ibnamir/", icon: "4️⃣", category: "ابن عامر" },
    { id: "hicham", name: "مصحف هشام - عن ابن عامر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/hicham.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/hicham/", icon: "4️⃣", category: "ابن عامر" },
    { id: "ibnthakwan", name: "مصحف ابن ذكوان - عن ابن عامر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ibenthakwan.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ibnthakwan/", icon: "4️⃣", category: "ابن عامر" },
    
    // ========== عاصم (3) ==========
    { id: "assim", name: "مصحف عاصم", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/assim.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/assim/", icon: "5️⃣", category: "عاصم" },
    { id: "choaaba", name: "مصحف شعبة - عن عاصم", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/choaaba.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/choaaba/", icon: "5️⃣", category: "عاصم" },
    { id: "hafes", name: "مصحف حفص - عن عاصم", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/hafes.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/hafes/", icon: "5️⃣", category: "عاصم" },
    
    // ========== حمزة (5) ==========
    { id: "hamza", name: "مصحف حمزة", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/hamza.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/hamza/", icon: "6️⃣", category: "حمزة" },
    { id: "khalaf1", name: "مصحف خلف - بالسكت على ال وشيء", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/khalafsakt1.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/khalaf/", icon: "6️⃣", category: "حمزة" },
    { id: "khalaf2", name: "مصحف خلف - بالسكت على ال وشيء والمفصول", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/khalafsakt2.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/khalaf/", icon: "6️⃣", category: "حمزة" },
    { id: "khallad1", name: "مصحف خلاد - بالسكت على ال وشيء", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/khalladsakt.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/khallad/", icon: "6️⃣", category: "حمزة" },
    { id: "khallad2", name: "مصحف خلاد - بلا سكت", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/khalladbilasakt.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/khallad/", icon: "6️⃣", category: "حمزة" },
    
    // ========== الكسائي (3) ==========
    { id: "kissai", name: "مصحف الكسائي", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/kissai.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/kissai/", icon: "7️⃣", category: "الكسائي" },
    { id: "layth", name: "مصحف الليث - عن الكسائي", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/aboulharit.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/layth/", icon: "7️⃣", category: "الكسائي" },
    { id: "dourikissai", name: "مصحف الدوري - عن الكسائي", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/dourikissai.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/dourikissai/", icon: "7️⃣", category: "الكسائي" },
    
    // ========== أبو جعفر (3) ==========
    { id: "aboujaafar", name: "مصحف أبو جعفر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/aboujaafar.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/aboujaafar/", icon: "8️⃣", category: "أبو جعفر" },
    { id: "ibnwardan", name: "مصحف ابن وردان - عن أبي جعفر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ibnwirdan.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ibnwardan/", icon: "8️⃣", category: "أبو جعفر" },
    { id: "ibnjamaz", name: "مصحف ابن جماز - عن أبي جعفر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ibnjamaz.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ibnjamaz/", icon: "8️⃣", category: "أبو جعفر" },
    
    // ========== يعقوب (3) ==========
    { id: "yaakoub", name: "مصحف يعقوب", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/yaakoub.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/yaakoub/", icon: "9️⃣", category: "يعقوب" },
    { id: "rowais", name: "مصحف رويس - عن يعقوب", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/rowais.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/rowais/", icon: "9️⃣", category: "يعقوب" },
    { id: "rawh", name: "مصحف روح - عن يعقوب", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/rawh.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/rawh/", icon: "9️⃣", category: "يعقوب" },
    
    // ========== خلف العاشر (3) ==========
    { id: "khalaf10", name: "مصحف خلف العاشر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/khalaf10.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/khalaf10/", icon: "🔟", category: "خلف العاشر" },
    { id: "ishak", name: "مصحف إسحاق - عن خلف العاشر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/ishak.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/ishak/", icon: "🔟", category: "خلف العاشر" },
    { id: "idriss", name: "مصحف إدريس - عن خلف العاشر", pdfUrl: "https://nouari-abdelkabir.github.io/MassahifAlossol/pdfs/idriss.pdf", audioBase: "https://nouari-abdelkabir.github.io/MassahifAlossol/audio/idriss/", icon: "🔟", category: "خلف العاشر" }
];

// ========================================
// مشغل الصوت المتكامل
// ========================================
let currentAudio = null;
let currentPage = 1;
let currentAudioBase = '';
let currentAudioName = '';
let isPlaying = false;
let currentVolume = 0.7;

function openAudioPlayer(audioBase, name) {
    // إغلاق أي مشغل مفتوح
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    const modal = document.getElementById('audioPlayerModal');
    if (modal) modal.remove();
    
    currentAudioBase = audioBase;
    currentAudioName = name;
    currentPage = 1;
    isPlaying = false;
    
    const modalDiv = document.createElement('div');
    modalDiv.id = 'audioPlayerModal';
    modalDiv.className = 'audio-modal';
    modalDiv.innerHTML = `
        <div class="audio-content">
            <div class="audio-header">
                <h3>🎵 مشغل التلاوات</h3>
                <button class="audio-close" onclick="closeAudioPlayer()">✕</button>
            </div>
            <div class="audio-body">
                <div class="audio-title">🎵 ${name}</div>
                <div class="audio-controls">
                    <button class="audio-control-btn" id="audioPrevPage">⏮</button>
                    <button class="audio-control-btn" id="audioPlayPause">▶</button>
                    <button class="audio-control-btn" id="audioStop">⏹</button>
                    <button class="audio-control-btn" id="audioNextPage">⏭</button>
                </div>
                <div class="audio-progress-area">
                    <div class="audio-progress-bar" id="audioProgressBar">
                        <div class="audio-progress-fill" id="audioProgressFill"></div>
                    </div>
                    <div class="audio-time">
                        <span id="audioCurrentTime">0:00</span>
                        <span id="audioDuration">0:00</span>
                    </div>
                </div>
                <div class="audio-volume">
                    <span class="volume-icon" id="audioMuteBtn">🔊</span>
                    <input type="range" id="audioVolumeSlider" class="volume-slider" min="0" max="100" value="70">
                    <span id="audioVolumePercent" class="volume-percent">70%</span>
                </div>
                <div class="audio-pages">
                    <button class="page-nav-btn" id="pagePrevBtn">◀ السابقة</button>
                    <span class="current-page-text">الصفحة <span id="currentPageSpan">1</span> / 604</span>
                    <input type="number" id="pageNumberInput" class="page-input" min="1" max="604" value="1">
                    <button class="page-nav-btn" id="goToPageBtn">انتقال</button>
                    <button class="page-nav-btn" id="pageNextBtn">التالية ▶</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalDiv);
    document.body.style.overflow = 'hidden';
    
    // ربط الأحداث
    document.getElementById('audioPrevPage').onclick = () => changePage(currentPage - 1);
    document.getElementById('audioNextPage').onclick = () => changePage(currentPage + 1);
    document.getElementById('pagePrevBtn').onclick = () => changePage(currentPage - 1);
    document.getElementById('pageNextBtn').onclick = () => changePage(currentPage + 1);
    document.getElementById('goToPageBtn').onclick = () => {
        const input = document.getElementById('pageNumberInput');
        changePage(parseInt(input.value));
    };
    document.getElementById('audioPlayPause').onclick = togglePlayPause;
    document.getElementById('audioStop').onclick = stopAudio;
    document.getElementById('audioVolumeSlider').oninput = changeVolume;
    document.getElementById('audioMuteBtn').onclick = toggleMute;
    document.getElementById('audioProgressBar').onclick = seekAudio;
    
    // تشغيل الصفحة الأولى
    playPage(1);
}

function closeAudioPlayer() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    const modal = document.getElementById('audioPlayerModal');
    if (modal) modal.remove();
    document.body.style.overflow = 'auto';
}

function playPage(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > 604) pageNum = 604;
    currentPage = pageNum;
    
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    const pageStr = String(pageNum).padStart(3, '0');
    const audioUrl = currentAudioBase + pageStr + '.mp3';
    
    currentAudio = new Audio(audioUrl);
    currentAudio.volume = currentVolume;
    
    currentAudio.onloadedmetadata = () => {
        updateTimeDisplay();
        const playBtn = document.getElementById('audioPlayPause');
        if (playBtn) playBtn.textContent = '▶';
    };
    currentAudio.ontimeupdate = updateProgress;
    currentAudio.onended = () => {
        if (currentPage < 604) changePage(currentPage + 1);
    };
    currentAudio.onerror = () => {
        alert(`⚠️ لا توجد تلاوة للصفحة ${currentPage}`);
    };
    
    currentAudio.play().catch(e => console.log("تشغيل تلقائي محظور"));
    isPlaying = true;
    updatePlayPauseButton();
    updatePageDisplay();
}

function changePage(delta) {
    let newPage = currentPage + delta;
    if (newPage < 1) newPage = 1;
    if (newPage > 604) newPage = 604;
    if (newPage === currentPage) return;
    playPage(newPage);
}

function togglePlayPause() {
    if (!currentAudio) return;
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
    } else {
        currentAudio.play();
        isPlaying = true;
    }
    updatePlayPauseButton();
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        isPlaying = false;
        updatePlayPauseButton();
        updateProgress();
    }
}

function updatePlayPauseButton() {
    const btn = document.getElementById('audioPlayPause');
    if (btn) btn.textContent = isPlaying ? '⏸' : '▶';
}

function updatePageDisplay() {
    const pageSpan = document.getElementById('currentPageSpan');
    const pageInput = document.getElementById('pageNumberInput');
    if (pageSpan) pageSpan.textContent = currentPage;
    if (pageInput) pageInput.value = currentPage;
}

function updateProgress() {
    if (currentAudio && currentAudio.duration && !isNaN(currentAudio.duration)) {
        const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
        const fill = document.getElementById('audioProgressFill');
        if (fill) fill.style.width = `${percent}%`;
        updateTimeDisplay();
    }
}

function updateTimeDisplay() {
    if (currentAudio && currentAudio.duration && !isNaN(currentAudio.duration)) {
        const currentMin = Math.floor(currentAudio.currentTime / 60);
        const currentSec = Math.floor(currentAudio.currentTime % 60);
        const durationMin = Math.floor(currentAudio.duration / 60);
        const durationSec = Math.floor(currentAudio.duration % 60);
        
        const currentSpan = document.getElementById('audioCurrentTime');
        const totalSpan = document.getElementById('audioDuration');
        if (currentSpan) currentSpan.textContent = `${currentMin}:${currentSec.toString().padStart(2, '0')}`;
        if (totalSpan) totalSpan.textContent = `${durationMin}:${durationSec.toString().padStart(2, '0')}`;
    }
}

function seekAudio(e) {
    if (!currentAudio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    currentAudio.currentTime = percent * currentAudio.duration;
}

function changeVolume(e) {
    currentVolume = parseInt(e.target.value) / 100;
    if (currentAudio) currentAudio.volume = currentVolume;
    const percentSpan = document.getElementById('audioVolumePercent');
    const muteBtn = document.getElementById('audioMuteBtn');
    if (percentSpan) percentSpan.textContent = `${Math.round(currentVolume * 100)}%`;
    if (muteBtn) muteBtn.textContent = currentVolume === 0 ? '🔇' : '🔊';
}

function toggleMute() {
    if (currentAudio) {
        if (currentAudio.volume > 0) {
            currentAudio.volume = 0;
            const slider = document.getElementById('audioVolumeSlider');
            if (slider) slider.value = 0;
            const percentSpan = document.getElementById('audioVolumePercent');
            if (percentSpan) percentSpan.textContent = '0%';
            const muteBtn = document.getElementById('audioMuteBtn');
            if (muteBtn) muteBtn.textContent = '🔇';
        } else {
            currentAudio.volume = currentVolume;
            const slider = document.getElementById('audioVolumeSlider');
            if (slider) slider.value = currentVolume * 100;
            const percentSpan = document.getElementById('audioVolumePercent');
            if (percentSpan) percentSpan.textContent = `${Math.round(currentVolume * 100)}%`;
            const muteBtn = document.getElementById('audioMuteBtn');
            if (muteBtn) muteBtn.textContent = '🔊';
        }
    }
}

// ========================================
// عرض البطاقات
// ========================================
function displayCards() {
    const container = document.getElementById('linksGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    mushafsData.forEach(mushaf => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${mushaf.icon}</div>
            <div class="card-content">
                <h3 class="card-title">${mushaf.name}</h3>
                <div class="card-buttons">
                    <button class="card-pdf-btn" data-pdf="${mushaf.pdfUrl}" data-title="${mushaf.name}">📖 قراءة PDF</button>
                    <button class="card-audio-btn" data-audio="${mushaf.audioBase}" data-name="${mushaf.name}">🔊 استماع</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.card-pdf-btn').forEach(btn => {
        btn.onclick = () => {
            const url = btn.getAttribute('data-pdf');
            const title = btn.getAttribute('data-title');
            window.open(url, '_blank');
        };
    });
    
    document.querySelectorAll('.card-audio-btn').forEach(btn => {
        btn.onclick = () => {
            const audioBase = btn.getAttribute('data-audio');
            const name = btn.getAttribute('data-name');
            openAudioPlayer(audioBase, name);
        };
    });
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 بدء تحميل البوابة");
    displayCards();
});
