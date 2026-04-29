// MEG Data - Notes, Tools, Resources
const megData = {
    notes: [
        { id: 1, code: 'MEG-01', title: 'British Poetry', category: 'core', 
          desc: 'Comprehensive notes covering British poets and masterpieces',
          driveLink: 'https://drive.google.com/drive/folders/107FUrdbVtCWHf01Hsck3qRH9jMnNqiUG',
          whatsappLink: 'https://chat.whatsapp.com/Lkytj1cgUqz9xdg9HrWwdp' },
        { id: 2, code: 'MEG-02', title: 'British Drama', category: 'core',
          desc: 'Notes on major British dramatists and theatrical traditions',
          driveLink: 'https://drive.google.com/drive/folders/1J-0Hz8_Ov29jjierxCijjhB-Z6j6kgT2',
          whatsappLink: 'https://chat.whatsapp.com/KBs2QptrtIX7L00kettcgV' },
        { id: 3, code: 'MEG-03', title: 'British Novel', category: 'core',
          desc: 'In-depth analysis of British novelists and novel forms',
          driveLink: '',
          whatsappLink: 'https://chat.whatsapp.com/J8yrBRQWANXICeRiuLlyNh' },
        { id: 4, code: 'MEG-04', title: 'Aspects of Language', category: 'core',
          desc: 'Linguistics and language analysis essentials',
          driveLink: 'https://drive.google.com/drive/folders/1UTApUCOSZDTuj42u6bnbQJu0Di4xZQOW',
          whatsappLink: 'https://chat.whatsapp.com/C90XTCMAogkEPayg2qkRpM' },
        { id: 5, code: 'MEG-05', title: 'Literary Criticism', category: 'core',
          desc: 'Critical approaches and literary theory',
          driveLink: 'https://drive.google.com/drive/folders/1C0Bf8MtUh4GrbVTgeciUqFCXDom0q8XB',
          whatsappLink: 'https://chat.whatsapp.com/Cs60hwQO7ybApHGmrKSuv1' },
        { id: 6, code: 'MEG-06', title: 'American Literature', category: 'elective',
          desc: 'American literary traditions and writers',
          driveLink: 'https://drive.google.com/drive/folders/1KyORWXQurMeJafUwhkqJcvz03AYDe9XA',
          whatsappLink: 'https://chat.whatsapp.com/EftnACntT177sF3CcBs14V' },
        { id: 7, code: 'MEG-07', title: 'Indian English Literature', category: 'elective',
          desc: 'Literature in English from India',
          driveLink: 'https://drive.google.com/drive/folders/1tdw_lY8VEimQj4CNFyAAIsdCcw-hbMg4',
          whatsappLink: 'https://chat.whatsapp.com/LnzClsnN7aJ4aETmwyOEJI' },
        { id: 8, code: 'MEG-08', title: 'New Literatures in English', category: 'elective',
          desc: 'Contemporary English literature worldwide',
          driveLink: 'https://drive.google.com/drive/folders/18gg3xbCFaoKlnpUBVQBS6B2AAX0676SY',
          whatsappLink: 'https://chat.whatsapp.com/EDiArGyazmU8TmJZwbfLJx' },
        { id: 9, code: 'MEG-09', title: 'Australian Literature', category: 'elective',
          desc: 'Australian literary works and writers',
          driveLink: '',
          whatsappLink: 'https://chat.whatsapp.com/EsATQ8srzA40LKfOPU6QfQ' },
        { id: 10, code: 'MEG-10', title: 'English Studies in India', category: 'elective',
          desc: 'English language and education in India',
          driveLink: 'https://drive.google.com/drive/folders/1py1hAngYJNtEYJUrXoI3erLcd7_hdAVQ',
          whatsappLink: 'https://chat.whatsapp.com/CoDUcf1Q12z5Loq8RTYgPO' },
        { id: 11, code: 'MEG-11', title: 'American Novel', category: 'elective',
          desc: 'American novelists and novel traditions',
          driveLink: 'https://drive.google.com/drive/folders/14H3uF6V-wXLnxwsrhxLDa_jTmBryE02-',
          whatsappLink: 'https://chat.whatsapp.com/GI887U6Ucpx7P0lsetKzpK' },
        { id: 12, code: 'MEG-12', title: '20th Century Canadian Literature', category: 'elective',
          desc: 'Canadian literary heritage and authors',
          driveLink: 'https://drive.google.com/drive/folders/1hFuFNXyN2KUOfakVh1KhpbMhTrVBhaJz',
          whatsappLink: 'https://chat.whatsapp.com/L4DgobXnhJr7u0tWFoueHQ' },
        { id: 13, code: 'MEG-13', title: 'Writings from the Margins', category: 'elective',
          desc: 'Marginalized voices and perspectives in literature',
          driveLink: 'https://drive.google.com/drive/folders/1g3X2YLN4y4RsUSl8x1hN7JRSjcGDnTWu',
          whatsappLink: 'https://chat.whatsapp.com/Dkzf54hofqDEAHLHggStTy' },
        { id: 14, code: 'MEG-14', title: 'Contemporary Indian Literature', category: 'elective',
          desc: 'Modern Indian literary movements',
          driveLink: 'https://drive.google.com/drive/folders/1C8uurOsaUk066vA06U8DkXtbvLlxeEbq',
          whatsappLink: 'https://chat.whatsapp.com/CJ4Wr7oya1JKbrbaiiOuJf' },
        { id: 15, code: 'MEG-15', title: 'Comparative Literature', category: 'elective',
          desc: 'Cross-cultural and cross-linguistic literary analysis',
          driveLink: 'https://drive.google.com/drive/folders/1gGgKP0HBmckuuPEcAPe9vZUPmK3NHuxa',
          whatsappLink: 'https://chat.whatsapp.com/KHArIKJp0RNCh3GCwl0UDJ' },
        { id: 16, code: 'MEG-16', title: 'Indian Folk Literature', category: 'elective',
          desc: 'Traditional and folk literary forms from India',
          driveLink: 'https://drive.google.com/drive/folders/1cdXX7scYIzCS-SkA30nuZylY25DTOi7I',
          whatsappLink: 'https://chat.whatsapp.com/BC7HH0kRmtaJMFl40Jxj3u' },
        { id: 17, code: 'MEG-18', title: 'American Poetry', category: 'elective',
          desc: 'American poetic traditions and poets',
          driveLink: 'https://drive.google.com/drive/folders/1_ClBGzNwX6YTAvVvNDcVuaseH_SDcUGK',
          whatsappLink: 'https://chat.whatsapp.com/ECPjoq8HG9I1zWsHpL0dEk' },
        { id: 18, code: 'MEG-19', title: 'Indian Literature in English', category: 'elective',
          desc: 'Indian writers in English language',
          driveLink: 'https://drive.google.com/drive/folders/1-PDUvWI-D7Gc_e6h6WAsxfs8meAx_Zjf',
          whatsappLink: 'https://chat.whatsapp.com/FhqjEG05xE9DA9WcPH9BsO' }
    ],

    tools: [
        { id: 1, icon: '📊', title: 'Percentage Calculator', desc: 'Calculate your MEG exam percentage instantly' },
        { id: 2, icon: '📝', title: 'Word Counter Tool', desc: 'Count words, characters, and analyze text' },
        { id: 3, icon: '🎓', title: 'CGPA Calculator', desc: 'Calculate your cumulative GPA' },
        { id: 4, icon: '✅', title: 'Assignment Tracker', desc: 'Track pending assignments' },
        { id: 5, icon: '📅', title: 'Study Planner', desc: 'Plan your exam preparation' },
        { id: 6, icon: '⏱️', title: 'Reading Time Calculator', desc: 'Estimate reading duration' },
        { id: 7, icon: '📊', title: 'Grade Point Converter', desc: 'Convert marks to grade points' },
        { id: 8, icon: '📈', title: 'Score Tracker', desc: 'Track all your exam scores' },
        { id: 9, icon: '🔤', title: 'Text Summarizer', desc: 'Summarize long texts quickly' },
        { id: 10, icon: '📚', title: 'Bibliography Generator', desc: 'Generate proper citations' },
        { id: 11, icon: '🎯', title: 'Goal Setter', desc: 'Set and track study goals' },
        { id: 12, icon: '⚖️', title: 'Time Allocator', desc: 'Allocate study time per subject' },
        { id: 13, icon: '📋', title: 'Syllabus Checker', desc: 'Track completed syllabus' },
        { id: 14, icon: '🔍', title: 'Question Bank', desc: 'Access important questions' },
        { id: 15, icon: '💡', title: 'Quick Notes Generator', desc: 'Create quick revision notes' }
    ],

    resources: [
        { id: 1, icon: '📥', title: 'Solved Assignments 2024-25', desc: 'Latest solved assignments', link: 'https://drive.google.com/drive/folders/1p6ivTf7m4NKr1ryXiKDzVzBRVuRMjIAZ' },
        { id: 2, icon: '📥', title: 'Solved Assignments 2025-26', desc: 'Current year assignments', link: 'https://drive.google.com/drive/folders/157BzzcXTZAYFbm8lD238SEfsxcqZC_LC' },
        { id: 3, icon: '🔗', title: 'Result Re-evaluation', desc: 'Apply for paper re-evaluation', link: 'https://onlineservices.ignou.ac.in/reevaluation/' },
        { id: 4, icon: '🔗', title: 'Check Results', desc: 'View your exam results', link: 'https://termendresult.ignou.ac.in/' },
        { id: 5, icon: '🔗', title: 'Grade Card', desc: 'Download your grade card', link: 'https://gradecard.ignou.ac.in/gradecard/' }
    ],

    faqs: [
        { q: 'What are MEG optional papers?', a: 'MEG has 5 core papers and 14 elective papers. You choose electives based on your interests and academic background.' },
        { q: 'What is the passing percentage?', a: 'The passing percentage for IGNOU is 40%. Assignments carry 30% and exam carries 70% weightage.' },
        { q: 'Are assignments compulsory?', a: 'Yes, assignments are compulsory and carry 30% weightage. Missing assignments results in zero marks for that subject.' },
        { q: 'How long should MEG answers be?', a: 'Long answer (7 marks): 250-300 words, Medium (5 marks): 150-200 words, Short (3 marks): 75-100 words' },
        { q: 'Can I re-evaluate my papers?', a: 'Yes, within 15 days of result declaration. There is a fee of Rs. 250 per paper.' },
        { q: 'What is the best study method?', a: 'Read primary texts, make detailed notes, memorize important quotes, practice answer writing, and join study groups.' },
        { q: 'How many times can I appear?', a: 'You can appear in exams as many times as you want until you pass.' },
        { q: 'What about PYQs?', a: 'Previous year questions reveal patterns. Solve them regularly to understand question types and improve answers.' }
    ],

    tips: [
        { num: 1, title: 'Master Your Subjects Early', desc: 'Start preparing 3-4 months in advance using our comprehensive notes and primary texts.' },
        { num: 2, title: 'Join Study Groups', desc: 'Connect with other MEG students via WhatsApp groups to discuss, learn, and share resources.' },
        { num: 3, title: 'Practice with PYQs', desc: 'Solve previous year questions regularly to understand patterns and improve answer writing.' },
        { num: 4, title: 'Solve Assignments', desc: 'Assignments are learning tools carrying 30% marks. Use our solved assignments as reference.' },
        { num: 5, title: 'Create Study Schedule', desc: 'Use our study planner to create realistic exam prep schedule. Consistency matters most.' },
        { num: 6, title: 'Use Quality Tools', desc: 'Our calculators and trackers help you monitor progress and improve writing quality.' }
    ]
};

// Language data
const translations = {
    en: {
        nav_notes: '📖 Notes',
        nav_groups: '💬 Groups',
        nav_tools: '🛠️ Tools',
        nav_resources: '📚 Resources',
        nav_faq: '❓ FAQ'
    },
    hi: {
        nav_notes: '📖 नोट्स',
        nav_groups: '💬 ग्रुप्स',
        nav_tools: '🛠️ टूल्स',
        nav_resources: '📚 संसाधन',
        nav_faq: '❓ FAQ'
    },
    ta: {
        nav_notes: '📖 குறிப்புகள்',
        nav_groups: '💬 குழுக்கள்',
        nav_tools: '🛠️ கருவிகள்',
        nav_resources: '📚 வளங்கள்',
        nav_faq: '❓ FAQ'
    },
    te: {
        nav_notes: '📖 నోట్‌లు',
        nav_groups: '💬 గ్రూపులు',
        nav_tools: '🛠️ సాధనాలు',
        nav_resources: '📚 వనరులు',
        nav_faq: '❓ FAQ'
    },
    kn: {
        nav_notes: '📖 ಟಿಪ್ಪಣಿಗಳು',
        nav_groups: '💬 ಗುಂಪುಗಳು',
        nav_tools: '🛠️ ಉಪಕರಣಗಳು',
        nav_resources: '📚 ಸಂಪನ್ಮೂಲಗಳು',
        nav_faq: '❓ FAQ'
    },
    ml: {
        nav_notes: '📖 ശ്രദ്ധിക്കുന്നത്',
        nav_groups: '💬 ഗ്രൂപ്പുകൾ',
        nav_tools: '🛠️ ഉപകരണങ്ങൾ',
        nav_resources: '📚 ഉറവിടങ്ങൾ',
        nav_faq: '❓ FAQ'
    }
};
