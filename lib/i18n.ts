export const defaultLocale = "zh"
export const locales = ["zh", "en"/* , "fr" */] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // SEO and Branding
    siteTitle: "Veo3 Prompt Generator Free Online",
    mainHeading: "Veo3 Prompt Generator",
    accentWord: "Prompt",

    // Navigation
    home: "Home",
    tools: "Tools",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    getStarted: "Get Started",
    disclaimer: "Disclaimer",
    sitemap: "Sitemap",

    // Main Tools Navigation
    videoScriptGenerator: "Video Script Generator",
    veo3PromptGenerator: "Veo3 Prompt Generator",
    
    // Tool Navigation Tabs
    veo3PromptGeneratorTab: "Veo3 Prompt Generator",
    videoScriptGeneratorTab: "Video Script Generator", 
    videoToPromptGeneratorTab: "Video to Prompt Generator",
    videoTranscriptionTab: "Video Transcription",

    // Video Script Generator
    videoTopic: "Video Topic & Main Characters (Describe in 1-2 sentences)",
    videoTopicPlaceholder:
      "Example: New product advertisement, product introduction, product usage guide,...\nCharacters: Example: Baby Bi, Mr. A, Mrs. B,...",
    audience: "Who is your audience?",
    selectAudience: "Select audience",
    scriptLength: "Script Length",
    selectLength: "Select length",
    scriptStyle: "Script Style",
    selectStyle: "Select style",
    language: "Language",
    chinese: "Chinese",
    vietnamese: "Vietnamese",
    english: "English",
    french: "French",
    spanish: "Spanish",
    german: "German",
    generator: "Generator",

    // Video Script Generator - Extended
    videoScriptGeneratorTitle: "Video Script Generator",
    videoScriptGeneratorSubtitle: "Create compelling video scripts with our AI-powered generator. Perfect for YouTube, TikTok, Instagram, and social media content creators.",
    videoScriptGeneratorFreeOnline: "Free Online",
    
    // Form Labels and Placeholders
    videoTopicAndCharacters: "Video Topic & Main Characters:",
    videoTopicExample: "Example: A short film about a lonely robot who finds a flower, featuring a curious robot and a vibrant, glowing flower.",
    
    // Buttons and Actions
    generateScript: "Generate Script",
    generatingScript: "Generating Script...",
    clearForm: "Clear",
    copyScript: "Copy Script",
    newScript: "New Script",
    
    // Messages
    missingInformation: "Missing Information",
    missingInformationDesc: "Please fill in all required fields.",
    scriptGeneratedSuccessfully: "Script generated successfully!",
    scriptGeneratedDesc: "Your video script is ready.",
    generationFailed: "Generation failed",
    generationFailedDesc: "Failed to generate script. Please try again.",
    
    // Output
    generatedScriptTitle: "Generated Script:",
    
    // How It Works Section
    howVideoScriptGeneratorWorks: "How Video Script Generator Works",
    scriptStep1Title: "Describe Your Video",
    scriptStep1Desc: "Enter your video topic and describe the main characters or elements you want to include in your script.",
    scriptStep2Title: "AI Generation",
    scriptStep2Desc: "Our advanced AI analyzes your input and generates a professional video script with proper structure and flow.",
    scriptStep3Title: "Download & Use",
    scriptStep3Desc: "Copy the generated script and use it for your video production, with clear scene descriptions and dialogue.",
    
    // About Section
    aboutVideoScriptGenerator: "About Video Script Generator",
    aboutVideoScriptGeneratorDesc: "Our Video Script Generator is a powerful AI-driven tool designed to help content creators, filmmakers, and video producers create compelling scripts quickly and efficiently. By simply describing your video concept and main characters, our advanced AI generates professional-quality scripts that include scene descriptions, character dialogue, and narrative flow. This tool is perfect for YouTube creators, social media influencers, marketing teams, and anyone who needs to produce engaging video content with a clear, structured script.",
    
    // FAQ Section
    videoScriptFaqTitle: "Frequently Asked Questions",
    faqVideoTypesQuestion: "What types of videos can I create scripts for?",
    faqVideoTypesAnswer: "Our Video Script Generator can create scripts for various video types including YouTube videos, TikTok content, Instagram Reels, educational videos, promotional content, storytelling videos, and more. Just describe your concept and the AI will adapt the script accordingly.",
    faqScriptLengthQuestion: "How long are the generated scripts?",
    faqScriptLengthAnswer: "Script length varies based on your input and requirements. You can specify if you need a short 30-second script or a longer 5-10 minute video script. The AI will adjust the content and detail level accordingly.",
    faqEditScriptQuestion: "Can I edit the generated script?",
    faqEditScriptAnswer: "Absolutely! The generated script is a starting point that you can copy, edit, and customize to match your specific needs, style, and brand voice. Feel free to modify dialogue, add details, or adjust the structure.",
    faqCommercialUseQuestion: "Is the script suitable for commercial use?",
    faqCommercialUseAnswer: "Yes, the scripts generated by our tool are free to use for both personal and commercial projects. However, we recommend reviewing and customizing the content to ensure it aligns with your brand guidelines and legal requirements.",

    // Video to Prompt Generator - Extended
    videoToPromptGeneratorTitle: "Video to Prompt Generator",
    videoToPromptGeneratorSubtitle: "Transform your existing videos into detailed AI prompts. Upload a video and get comprehensive prompts for AI video generation platforms.",
    videoToPromptFreeOnline: "Free Online",
    
    // Upload Section
    uploadVideo: "Upload Video:",
    dragDropVideo: "Drag & drop a video file here, or click to select",
    dropVideoHere: "Drop the video here...",
    supportedFormats: "Supports MP4, MOV, AVI (Max 100MB)",
    
    // Messages
    videoUploadedSuccessfully: "Video uploaded successfully!",
    videoUploadedDesc: "has been uploaded.",
    invalidFileType: "Invalid file type",
    invalidFileTypeDesc: "Please upload a video file.",
    noVideoUploaded: "No video uploaded",
    noVideoUploadedDesc: "Please upload a video file first.",
    promptGeneratedSuccessfully: "Prompt generated successfully!",
    promptGeneratedDesc: "Your video prompt is ready.",
    
    // Buttons and Actions
    analyzingVideo: "Analyzing Video...",
    generatePrompt: "Generate Prompt",
    clearAll: "Clear",
    
    // Output
    generatedPromptTitle: "Generated Prompt:",
    
    // How It Works Section
    howVideoToPromptWorks: "How Video to Prompt Generator Works",
    videoPromptStep1Title: "Upload Your Video",
    videoPromptStep1Desc: "Upload any video file (MP4, MOV, AVI) up to 100MB. Our system will analyze the visual content.",
    videoPromptStep2Title: "AI Analysis",
    videoPromptStep2Desc: "Our advanced AI extracts key visual elements, scenes, objects, and actions from your video.",
    videoPromptStep3Title: "Generate Prompt",
    videoPromptStep3Desc: "Get a comprehensive prompt that can be used to generate similar or enhanced video content with AI platforms.",
    
    // About Section
    aboutVideoToPromptGenerator: "About Video to Prompt Generator",
    aboutVideoToPromptGeneratorDesc: "Our Video to Prompt Generator is an innovative AI-powered tool that transforms your existing videos into detailed prompts for AI video generation platforms. By analyzing your video content, our advanced AI extracts key visual elements, scenes, objects, and actions to create comprehensive prompts that can be used to generate similar or enhanced video content. This tool is perfect for content creators, marketers, and video producers who want to leverage their existing content to create new AI-generated videos with consistent style and messaging.",
    
    // FAQ Section
    videoToPromptFaqTitle: "Frequently Asked Questions",
    faqVideoFormatsQuestion: "What video formats are supported?",
    faqVideoFormatsAnswer: "We support most common video formats including MP4, MOV, AVI, and more. The maximum file size is 100MB to ensure fast processing and analysis.",
    faqPromptAccuracyQuestion: "How accurate are the generated prompts?",
    faqPromptAccuracyAnswer: "Our AI provides highly accurate analysis of visual elements, scenes, and actions. The generated prompts capture the essence and key components of your original video for effective AI video generation.",
    faqAIPlatformCompatibilityQuestion: "Can I use the prompts with any AI video platform?",
    faqAIPlatformCompatibilityAnswer: "Yes! The generated prompts are designed to be compatible with most AI video generation platforms including Runway, Pika Labs, Veo3, and others. You can modify the prompts as needed for specific platforms.",
    faqVideoSecurityQuestion: "Is my video content secure?",
    faqVideoSecurityAnswer: "Absolutely. We prioritize your privacy and security. Videos are processed securely and are not stored permanently. We only analyze the content to generate prompts and do not retain your video files.",

    // Veo3 Prompt Generator - Structured Mode
    structuredMode: "Structured Mode",
    chatMode: "Chat Mode",
    mainSubject: "Describe the main subject of the video in detail?",
    mainSubjectPlaceholder: "Describe the main subject's appearance",
    mainSubjectRequired: "This field is required",
    sceneAction: "What is happening in the scene?",
    sceneActionPlaceholder: "What is the subject doing or feeling in the scene?",
    sceneActionRequired: "This field is required",
    dialogue: "Is there any specific dialogue or sound you want in the video?",
    dialogueOptional: "(optional)",
    dialoguePlaceholder: "Add dialogue, music, or sound effects if needed.",
    cameraMovement: "How should the camera move or frame the shot?",
    cameraOptional: "(optional)",
    cameraPlaceholder: "You can describe things like slow zoom, aerial view, close-up, tracking shot, etc.",
    otherDetails: "Any other details you want to include?",
    otherDetailsOptional: "(optional)",
    otherDetailsPlaceholder: "This could be lighting, weather, objects, mood, or small touches in the environment",
    subtitles: "Do you want subtitles in the video?",
    subtitlesOptional: "(optional)",
    yes: "Yes",
    no: "No",
    generate: "Generate",

    // Chat Mode
    chatPrompt:
      "Please describe your idea clearly, specify the required video dimensions, and accurately define your target audience. Example: An astronaut embarking on an exploratory mission to the moon, vertical video for TikTok targeting space and celestial body enthusiasts",
    chatPlaceholder: "Describe the video you want to create...",
    generateVideoPrompt: "Generate Video Prompt",

    // Audiences
    generalAudience: "General Audience",
    teenagers: "Teenagers (13-19)",
    youngAdults: "Young Adults (20-35)",
    professionals: "Professionals",
    parents: "Parents",
    seniors: "Seniors (55+)",

    // Script Lengths
    length15to30: "15-30 seconds",
    length30to60: "30-60 seconds",
    length1to2min: "1-2 minutes",
    length2to5min: "2-5 minutes",
    length5to10min: "5-10 minutes",

    // Script Styles
    conversational: "Conversational",
    professional: "Professional",
    energetic: "Energetic",
    educational: "Educational",
    storytelling: "Storytelling",
    promotional: "Promotional",

    // Footer
    footerDescription:
      "Transform your ideas into powerful video prompts with cutting-edge AI technology. Our platform combines advanced prompt engineering with intuitive design to help content creators, marketers, and businesses generate compelling video scripts and detailed prompts for AI video generation tools like Google's Veo 3.",
    
    // Footer Sections
    coreTools: "Core Tools",
    // tools: "Tools",
    company: "Company",
    legal: "Legal",
    
    // Footer Links
    videoScriptGeneratorFooter: "Video Script Generator",
    veo3PromptGeneratorFooter: "Veo3 Prompt Generator",
    videoToPromptFooter: "Video to Prompt",
    videoTranscriptionFooter: "Video Transcription",
    promptGuideFooter: "Prompt Guide",
    promptLibraryFooter: "Prompt Library",
    aboutFooter: "About",
    contactFooter: "Contact",
    blogFooter: "Blog",
    communityFooter: "Community",
    privacyPolicyFooter: "Privacy Policy",
    termsOfServiceFooter: "Terms of Service",
    disclaimerFooter: "Disclaimer",
    sitemapFooter: "Sitemap",
    
    // Footer Copyright
    allRightsReserved: "All rights reserved.",

    // Tools Pages
    videoToPrompt: "Video to Prompt",
    transcription: "Transcription (CS)",
    promptGuide: "Prompt Guide",
    promptLibrary: "Prompt Library",

    // Hero Section
    aiPoweredBadge: "🚀 AI-Powered Content Generation",
    heroFree: "Free",

    // Feature Cards
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Get results in seconds with optimized AI algorithms",
    securePrivate: "Secure & Private",
    securePrivateDesc: "Enterprise-grade security with automatic file deletion",
    advancedAI: "Advanced AI",
    advancedAIDesc: "Powered by Gemini 2.5 Pro with intelligent fallback",
    multiFormat: "Multi-Format",
    multiFormatDesc: "Support for images, videos, and audio files",

    // Home Page Sections
    ourAITools: "Our AI Tools",
    ourAIToolsDesc: "Discover our comprehensive suite of AI-powered tools designed for content creators and professionals.",
    tryNow: "Try Now",

    // Tools
    veo3PromptGeneratorDesc: "Create detailed prompts for Google's Veo3 AI video generation with structured forms and advanced chat modes.",
    videoScriptGeneratorDesc: "Generate professional video scripts for YouTube, TikTok, Instagram, and marketing campaigns.",
    videoToPromptDesc: "Convert existing videos into detailed prompts for AI video generation tools.",
    transcriptionDesc: "Transcribe audio files with high accuracy and multiple output formats.",

    // Why Choose Section
    whyChoose: "Why Choose",
    ourPlatform: "Our Platform",
    whyChooseDesc: "Experience the most advanced AI-powered content generation platform with enterprise-grade features and reliability.",

    // Features
    lightningFastProcessing: "Lightning Fast Processing",
    lightningFastProcessingDesc: "Get results in seconds with our optimized AI algorithms and cloud infrastructure with automatic fallback.",
    securePrivateDesc2: "Your files are processed securely and deleted immediately after processing with enterprise-grade security.",
    advancedAIModels: "Advanced AI Models",
    advancedAIModelsDesc: "Powered by Gemini 2.5 Pro with intelligent fallback to OpenRouter for maximum reliability.",
    multipleFormats: "Multiple Formats",
    multipleFormatsDesc: "Support for various image and video formats including JPG, PNG, MP4, and more with intelligent processing.",
    realTimeProcessing: "Real-time Processing",
    realTimeProcessingDesc: "Watch your content generate in real-time with live progress indicators and fallback protection.",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "High-quality outputs suitable for professional use and creative projects with AI-powered enhancement.",

    // How It Works
    howItWorks: "How It Works",
    howItWorksDesc: "Transform your ideas into powerful content in just three simple steps.",
    uploadYourContent: "Upload Your Content",
    uploadYourContentDesc: "Simply drag and drop your images, videos, or text, or click to browse and select files from your device.",
    aiAnalysis: "AI Analysis",
    aiAnalysisDesc: "Our advanced AI analyzes your content, understanding context, objects, scenes, and emotions.",
    getYourResults: "Get Your Results",
    getYourResultsDesc: "Receive detailed outputs in multiple formats - JSON for developers, paragraphs for creators.",

    // Benefits
    keyBenefits: "Key Benefits",
    keyBenefitsDesc: "Discover how our AI platform can transform your content creation workflow.",
    saveHoursOfWork: "Save Hours of Work",
    saveHoursOfWorkDesc: "Transform your ideas into production-ready content in minutes instead of hours of manual work.",
    professionalQuality: "Professional Quality",
    professionalQualityDesc: "Access enterprise-grade AI techniques used by top content creators and marketing agencies.",
    creativeFreedom: "Creative Freedom",
    creativeFreedomDesc: "Focus on your creative vision while our AI handles the technical complexities.",
    betterResults: "Better Results",
    betterResultsDesc: "Generate more engaging, consistent, and high-quality content with optimized AI processing.",

    // About Section
    aboutVeo3PromptGenerator: "About Veo3 Prompt Generator",
    aboutDesc1: "Our mission is to revolutionize the way people create content, empowering them to unlock new levels of creativity and efficiency through AI-powered tools. We understand the challenges that content creators, marketers, and businesses face in today's fast-paced digital landscape, where quality content is essential for success.",
    aboutDesc2: "Join our team of expert AI engineers who created Veo3 Prompt Generator on this journey of unlocking AI's full potential. We believe in making AI accessible and easy-to-use through our expertly curated prompt generation tools. Our platform combines cutting-edge technology with intuitive design, ensuring that even beginners can create professional-quality content while providing advanced features for experienced users.",
    aboutDesc3: "With years of experience in AI development and content creation, we've built a comprehensive suite of tools that cater to diverse needs. From Veo3 prompt generation to video script creation, our platform offers everything you need to bring your creative vision to life. We're committed to continuous innovation, regularly updating our AI models and features to stay ahead of industry trends and user needs.",
    readMoreAboutUs: "Read More About Us",
    reviewUsOnTrustpilot: "⭐ Review us on Trustpilot",

    // FAQ
    frequentlyAskedQuestions: "Frequently Asked Questions",
    faqDesc: "Find answers to common questions about our AI platform",
    faqAccuracy: "How accurate are the AI-generated outputs?",
    faqAccuracyAnswer: "Our AI models achieve 99.5% accuracy in content generation, with continuous improvements through machine learning and user feedback.",
    faqFormats: "What file formats are supported?",
    faqFormatsAnswer: "We support all major image formats (JPG, PNG, GIF, WebP) and video formats (MP4, AVI, MOV, WebM) up to 100MB per file.",
    faqSecurity: "Is my uploaded content secure?",
    faqSecurityAnswer: "Yes, all files are processed securely and automatically deleted after processing. We use enterprise-grade encryption and never store your content permanently.",
    faqCommercial: "Can I use the generated content commercially?",
    faqCommercialAnswer: "Absolutely! All generated content is yours to use for any purpose, including commercial projects and client work.",
    faqProcessingTime: "How long does processing take?",
    faqProcessingTimeAnswer: "Most files are processed within 10-30 seconds. Larger files or complex content may take up to 2 minutes.",
    faqAPI: "Do you offer API access?",
    faqAPIAnswer: "Yes, we provide RESTful API access for developers. Contact us for API documentation and pricing information.",

    // Who Can Benefit
    contentCreators: "Content Creators",
    contentCreatorsDesc: "YouTubers, TikTok creators, and social media influencers who need engaging content quickly and consistently.",
    marketingTeams: "Marketing Teams",
    marketingTeamsDesc: "Digital marketers and agencies creating campaigns, product demos, and brand storytelling content.",
    marketers: "Marketers",
    educators: "Educators",
    educatorsDesc: "Teachers, trainers, and educational content creators developing engaging learning materials and tutorials.",
    developers: "Developers",
    businesses: "Businesses",
    businessesDesc: "Companies and entrepreneurs creating promotional content, product demonstrations, and corporate communications.",

    // Footer CTA
    readyToTransform: "Ready to Transform Your Content?",
    readyToTransformDesc: "Join thousands of creators who are already using our AI platform to create amazing content.",
    getStartedFree: "Get Started Free",
    exploreAllTools: "Explore All Tools",

    // Blog Page
    blogTitle: "VeO3 Blog",
    blogDescription: "Insights, tutorials, and best practices for AI video generation, prompt engineering, and content creation.",
    readMore: "Read More",
    currentLanguage: "Current Language",

    // About Page
    aboutPageTitle: "About VeO3 Prompt Generator",
    aboutPageSubtitle: "We're revolutionizing how creators work with AI by providing a comprehensive suite of tools that make advanced video generation, script writing, and content analysis accessible to everyone.",
    ourMission: "Our Mission",
    ourMissionDesc1: "At VeO3 Prompt Generator, we believe that the future of content creation lies in the seamless collaboration between human creativity and artificial intelligence. Our mission is to democratize access to advanced AI tools, making professional video creation, script writing, and content analysis accessible to creators of all backgrounds.",
    ourMissionDesc2: "We're committed to providing a comprehensive suite of tools that not only save time but also inspire creativity, helping our users unlock new possibilities in their work while maintaining the highest standards of quality, privacy, and reliability.",

    // Tools Section
    ourComprehensiveToolSuite: "Our Comprehensive Tool Suite",
    veo3PromptGeneratorToolDesc: "Our flagship tool that transforms your creative ideas into detailed, professional prompts for Google's Veo3 AI video generation platform.",
    videoScriptGeneratorToolDesc: "Create compelling video scripts for YouTube, TikTok, marketing campaigns, and educational content with AI-powered assistance.",
    videoToPromptGeneratorDesc: "Extract inspiration from existing videos and convert them into detailed prompts for AI video generation platforms.",
    videoTranscriptionDesc: "Convert video audio into accurate, searchable text with speaker detection and timestamp markers.",

    // Impact Stories
    howOurToolsTransformLives: "How Our Tools Transform Lives",
    contentCreatorsImpact: "YouTubers and social media creators use our tools to generate engaging scripts, create AI-powered videos, and transcribe content for better accessibility.",
    marketersImpact: "Marketing teams leverage our prompt generators to create compelling video content for campaigns, product demos, and brand storytelling.",
    educatorsImpact: "Teachers and trainers use our transcription and script tools to create educational content, make videos accessible, and develop engaging learning materials.",
    developersImpact: "AI developers and researchers use our tools to understand prompt engineering, analyze video content, and create training datasets.",

    // Values
    ourValues: "Our Values",
    userCentricDesign: "User-Centric Design",
    userCentricDesignDesc: "Every tool we build is designed with our users' needs and workflows in mind, ensuring accessibility for creators of all skill levels.",
    innovationFirst: "Innovation First",
    innovationFirstDesc: "We're constantly pushing the boundaries of what's possible with AI, bringing cutting-edge technology to everyday creators.",
    privacySecurity: "Privacy & Security",
    privacySecurityDesc: "Your data and content are protected with enterprise-grade security measures and immediate deletion after processing.",
    continuousImprovement: "Continuous Improvement",
    continuousImprovementDesc: "We iterate quickly based on user feedback and the latest AI research, ensuring you always have access to the best tools.",

    // What Makes Us Different
    whatMakesUsDifferent: "What Makes Us Different",
    comprehensiveAISuite: "Comprehensive AI Suite",
    comprehensiveAISuiteDesc: "Unlike single-purpose tools, we provide a complete ecosystem for AI-powered content creation, from prompt generation to script writing, video analysis, and transcription.",
    professionalQualityTitle: "Professional Quality",
    professionalQualityAboutDesc: "Our tools are designed for professional use, with enterprise-grade accuracy and features that scale from individual creators to large teams and organizations.",
    privacyFirstTitle: "Privacy First",
    privacyFirstDesc: "We prioritize your privacy and security. All uploads are processed securely and deleted immediately after processing, ensuring your content remains private and protected.",
    continuousInnovationTitle: "Continuous Innovation",
    continuousInnovationDesc: "We're constantly improving our algorithms and adding new features based on user feedback and the latest AI research, ensuring you always have access to cutting-edge tools.",

    // Tool Benefits
    veo3Benefits1: "Advanced character development with voice and dialogue specifications",
    veo3Benefits2: "Context-aware scene descriptions and sound design",
    veo3Benefits3: "Professional prompt formatting optimized for Veo3",
    veo3Benefits4: "Support for multiple languages with English output",

    scriptBenefits1: "Multiple script styles (conversational, professional, educational)",
    scriptBenefits2: "Audience-targeted content optimization",
    scriptBenefits3: "Customizable script lengths and fors",
    scriptBenefits4: "Multi-language support for global reach",

    videoPromptBenefits1: "Scene-by-scene analysis of uploaded videos",
    videoPromptBenefits2: "Object detection and action recognition",
    videoPromptBenefits3: "Audio and visual element extraction",
    videoPromptBenefits4: "Compatible with Veo3, Runway, and other AI platforms",

    transcriptionBenefits1: "95%+ accuracy with clear audio",
    transcriptionBenefits2: "Multi-language support with auto-detection",
    transcriptionBenefits3: "Speaker identification and timestamps",
    transcriptionBenefits4: "Professional formatting for subtitles and documentation",

    // Join Our Journey
    joinOurJourney: "Join Our Journey",
    joinOurJourneyDesc: "We're just getting started. Join thousands of creators, marketers, educators, and developers who are already using our comprehensive tool suite to transform their creative process and bring their ideas to life.",
    launchingNewFeatures: "🚀 Launching new features monthly",
    availableWorldwide: "🌍 Available worldwide",
    communityDriven: "💡 Community-driven development",
    tryVeo3PromptGenerator: "Try Veo3 Prompt Generator",

    // Contact Page
    getInTouch: "Get in Touch",
    contactPageSubtitle: "Have questions, feedback, or need support? We'd love to hear from you. Our team is here to help you make the most of VeO3 Prompt Generator and achieve your creative goals.",
    sendUsAMessage: "Send us a message",
    contactFormDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    category: "Category",
    selectCategory: "Select a category",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSentSuccess: "Message sent successfully!",
    responseTime: "We'll get back to you within 24 hours.",

    // Contact Categories
    generalInquiry: "General Inquiry",
    technicalSupport: "Technical Support",
    featureRequest: "Feature Request",
    bugReport: "Bug Report",
    businessInquiry: "Business Inquiry",
    partnership: "Partnership",
    mediaPress: "Media & Press",

    // Contact Information
    email: "Email",
    address: "Address",
    phone: "Phone",
    emailSupport: "Email Support",
    emailSupportDesc: "For general inquiries and support",
    emailResponseTime: "We typically respond within 24 hours",
    liveChatSupport: "Live Chat Support",
    liveChatDesc: "Get instant help with our live chat",
    startLiveChat: "Start Live Chat",
    liveChatHours: "Available 9 AM - 6 PM PST, Mon-Fri",
    communityForum: "Community Forum",
    communityForumDesc: "Connect with other users and get help",
    visitForum: "Visit Forum",
    communitySupport: "24/7 community support",
    businessHours: "Business Hours",
    officeLocation: "Office Location",
    visitOffice: "Visit us at our headquarters",

    // Business Hours
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",

    // FAQ Section
    faqSectionTitle: "Frequently Asked Questions",
    faqSectionDesc: "Check out our FAQ section for quick answers to common questions about VeO3 Prompt Generator.",
    viewFAQ: "View FAQ",
    helpCenter: "Help Center",

    // Form Placeholders
    fullNamePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Brief description of your inquiry",
    messagePlaceholder: "Please provide details about your inquiry...",

    // Disclaimer Page
    disclaimerTitle: "Disclaimer",
    lastUpdated: "Last updated",
    generalInformation: "General Information",
    generalInformationDesc: "The information on this website is provided on an \"as is\" basis. To the fullest extent permitted by law, VeO3 Prompt Generator excludes all representations, warranties, obligations, and liabilities arising out of or in connection with this website and its contents or which is or may be provided by any affiliates or any other third party, including in relation to any inaccuracies or omissions in this website and/or the company's literature.",
    aiGeneratedContent: "AI-Generated Content",
    aiGeneratedContentDesc: "Our service uses artificial intelligence to analyze content and generate prompts for video creation. Please be aware that:",
    userResponsibility: "User Responsibility",
    userResponsibilityDesc: "Users are responsible for:",
    limitationOfLiability: "Limitation of Liability",
    limitationOfLiabilityDesc: "To the maximum extent permitted by applicable law, VeO3 Prompt Generator shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our service, including but not limited to damages arising from the use of AI-generated content.",
    serviceAvailability: "Service Availability",
    serviceAvailabilityDesc: "We strive to maintain high service availability, but we do not guarantee that our service will be available at all times. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice. AI processing times may vary based on system load and content complexity.",
    thirdPartyContent: "Third-Party Content and Services",
    thirdPartyContentDesc: "Our website may contain links to third-party websites, services, or reference third-party content. We do not endorse, warrant, or assume responsibility for the accuracy or reliability of any information offered by third-party websites or services. Users access third-party content at their own risk. We are not responsible for the availability, content, or practices of external sites.",
    professionalAdvice: "Professional Advice",
    professionalAdviceDesc: "The information and tools provided by VeO3 Prompt Generator are for general informational purposes only and should not be considered as professional advice. Users should consult with qualified professionals for specific advice related to their particular circumstances, especially for commercial or professional video production projects.",
    intellectualProperty: "Intellectual Property",
    intellectualPropertyDesc: "While we provide tools to generate content, users are responsible for ensuring that their use of generated content does not infringe on the intellectual property rights of others. We do not guarantee that generated content is free from copyright, trademark, or other intellectual property claims. Users should conduct their own due diligence before using generated content commercially.",
    dataProcessing: "Data Processing",
    dataProcessingDesc: "Our AI processing involves analyzing uploaded content to generate prompts and scripts. While we implement security measures and delete uploaded files immediately after processing, users should be aware that any content uploaded to our service will be processed by our AI systems. Users should not upload confidential or sensitive information.",
    changesToDisclaimer: "Changes to This Disclaimer",
    changesToDisclaimerDesc: "We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this website. Your continued use of our service after any changes constitutes acceptance of the new disclaimer. We encourage users to review this disclaimer periodically.",
    contactInformation: "Contact Information",
    contactInformationDesc: "If you have any questions about this disclaimer, please contact us at:",

    // Disclaimer List Items - AI Content
    aiContentItem1: "AI-generated prompts and scripts may not always be 100% accurate or complete",
    aiContentItem2: "The quality of output depends on the quality and clarity of input content",
    aiContentItem3: "Generated content should be reviewed and verified before use in professional contexts",
    aiContentItem4: "We do not guarantee the accuracy, completeness, or reliability of AI-generated content",
    aiContentItem5: "AI models may occasionally produce unexpected or inappropriate results",
    aiContentItem6: "Generated content may require human editing and refinement",

    // Disclaimer List Items - User Responsibility
    userRespItem1: "Ensuring they have the right to upload and process any media content",
    userRespItem2: "Complying with all applicable laws and regulations",
    userRespItem3: "Not uploading content that violates intellectual property rights",
    userRespItem4: "Not uploading inappropriate, offensive, or illegal content",
    userRespItem5: "Verifying the accuracy and appropriateness of generated prompts before use",
    userRespItem6: "Ensuring generated content complies with platform guidelines and policies",
    userRespItem7: "Respecting copyright and trademark laws when using generated content",

    // Prompt Guide Page
    promptGuideTitle: "Prompt Guide",
    promptGuideSubtitle: "Learn how to create effective prompts for AI video generation and get the best results from your creative projects.",
    gettingStarted: "Getting Started",
    gettingStartedDesc: "Creating effective prompts is both an art and a science. This guide will help you understand the fundamentals of prompt engineering and how to apply them to video generation.",
    basicPromptStructure: "Basic Prompt Structure",
    basicPromptStructureDesc: "A well-structured prompt should include:",
    clearSubjectDescription: "Clear description of the subject",
    specificActions: "Specific actions or movements",
    settingEnvironment: "Setting and environment details",
    visualStyleMood: "Visual style and mood",
    technicalSpecifications: "Technical specifications",
    advancedTechniques: "Advanced Techniques",
    advancedTechniquesDesc: "Once you master the basics, you can explore advanced prompting techniques to achieve more sophisticated results.",
    needHelp: "Need Help?",
    needHelpDesc: "Try our AI-powered prompt generator to create professional prompts instantly.",
    generatePromptsNow: "Generate Prompts Now →",

    // Veo3 Prompt Generator Page
    freeOnline: "Free Online",
    outputOptions: "Output Options",
    paragraphPrompt: "Paragraph Prompt",
    jsonPrompt: "JSON Prompt",
    dialogueSettings: "Dialogue Settings",
    hasDialogue: "Has Dialogue",
    autoGenerate: "Auto Generate",
    noDialogue: "No Dialogue",
    videoSubtitles: "Subtitles",
    noSubtitles: "No Subtitles",
    includeSubtitles: "Include Subtitles",
    
    // Form Fields
    targetAudience: "Target Audience",
    targetAudiencePlaceholder: "e.g., Young adults, Children, Business professionals...",
    videoStyle: "Video Style",
    cameraMoving: "Camera Movement",
    cameraMovingPlaceholder: "Slow zoom, aerial view, close-up, tracking shot, etc...",
    lightingStyle: "Lighting Style",
    lightingStylePlaceholder: "Natural, dramatic, soft, harsh, colored lighting...",
    colorPalette: "Color Palette",
    colorPalettePlaceholder: "Warm, cool, monochrome, vibrant, muted colors...",
    audioElements: "Audio Elements",
    audioElementsPlaceholder: "Background music, sound effects, ambient sounds...",
    specialEffects: "Special Effects",
    specialEffectsPlaceholder: "VFX, transitions, filters, overlays...",
    additionalDetails: "Additional Details",
    additionalDetailsPlaceholder: "Any other specific details, mood, atmosphere, or technical requirements...",
    
    // Video Style Options
    cinematic: "Cinematic",
    documentary: "Documentary",
    commercial: "Commercial",
    educationalStyle: "Educational",
    artistic: "Artistic",
    minimalist: "Minimalist",
    
    // Loading Messages
    pullingMagic: "We're pulling magic from the cloud…",
    consultingOracle: "Consulting the prompt oracle…",
    cookingMagical: "Cooking something magical",
    creatingLove: "Creating something you love just a sec. please",
    
    // Toast Messages
    missingInput: "Missing Input",
    missingInputDesc: "Please describe your video idea.",
    noOutputSelected: "No Output Selected",
    noOutputSelectedDesc: "Please select at least one output format (JSON or Paragraph).",
    missingRequiredFields: "Missing Required Fields",
    missingRequiredFieldsDesc: "Please fill in the main subject and scene action fields.",
    aiPromptGenerated: "AI Prompt Generated!",
    advancedAiPromptGenerated: "Advanced AI Prompt Generated!",
    // generationFailed: "Generation failed", // 重复了
    generationPromptFailedDesc: "Failed to generate prompt. Please try again.",
    formatReady: "format ready.",
    formatsReady: "formats ready.",
    
    // Buttons
    // generatePrompt: "Generate Prompt",
    // clearForm: "Clear",
    copyToClipboard: "Copy to Clipboard",
    copied: "Copied!",
    generating: "Generating...",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqVeo3Question: "What is Veo3 and how does this generator help?",
    faqVeo3Answer: "Veo3 is Google's advanced AI video generation model. Our prompt generator creates detailed, structured prompts that help Veo3 understand exactly what video you want to create, including scene details, camera movements, lighting, and audio elements.",
    faqPromptFormatsQuestion: "What's the difference between JSON and paragraph formats?",
    faqPromptFormatsAnswer: "JSON format provides structured data for technical AI processing and API integrations, while paragraph format offers narrative descriptions for creative AI processing. Both formats contain the same information but are optimized for different use cases.",
    faqPromptCommercialQuestion: "Can I use the generated prompts commercially?",
    faqPromptCommercialAnswer: "Absolutely! All generated prompts are yours to use for any purpose, including commercial projects, client work, and personal content creation. The prompts are designed to work with Google's Veo3 and other AI video generation tools.",
    faqPromptAccuracyQuestionVeo3: "How accurate are the generated prompts?",
    faqPromptAccuracyAnswerVeo3: "Our AI models achieve 99.5% accuracy in prompt generation, with continuous improvements through machine learning and user feedback. The prompts are specifically optimized for Veo3's capabilities and requirements.",
    faqVideoFormatsQuestionVeo3: "What video formats does Veo3 support?",
    faqVideoFormatsAnswerVeo3: "Veo3 can generate videos up to 2 minutes long in 4K resolution. Our prompts are optimized for 15-60 second clips with professional cinematic quality, perfect for social media and marketing content.",
    faqTechnicalQuestion: "Do I need technical knowledge to use this tool?",
    faqTechnicalAnswer: "No technical knowledge required! Our tool provides both structured (form-based) and advanced (chat-based) modes. Simply describe your video idea in natural language, and our AI will create professional prompts for you.",

    // How Veo3 Works Section
    howVeo3Works: "How Veo3 Prompt Generator Works",
    step1Title: "Describe Your Video",
    step1Desc: "Use structured mode for detailed control or advanced mode for natural language input to describe your video concept.",
    step2Title: "AI Prompt Generation", 
    step2Desc: "Our advanced AI analyzes your input and generates both JSON and paragraph formats optimized for Veo3 AI video generation.",
    step3Title: "Use with Veo3",
    step3Desc: "Copy the generated prompts and use them with Google's Veo3 AI to create professional-quality videos with your specifications.",
    
    // About Veo3 Generator Section
    aboutVeo3Generator: "About Veo3 Prompt Generator",
    aboutVeo3GeneratorDesc: "Our Veo3 Prompt Generator is a specialized AI tool designed to create detailed, production-ready prompts for Google's Veo3 AI video generation platform. Whether you're a content creator, marketer, or video producer, our tool helps you transform your creative ideas into structured prompts that Veo3 can understand and execute perfectly. With both structured and advanced modes, you can either fill out detailed forms for precise control or use natural language for quick ideation. The generated prompts include scene descriptions, camera movements, lighting details, audio elements, and technical specifications optimized for Veo3's capabilities.",
    
    // FAQ Section Title
    veo3FaqTitle: "Frequently Asked Questions",

    // Prompt Library Page
    promptLibraryTitle: "Prompt Library",
    promptLibrarySubtitle: "Discover professionally crafted prompts for various video styles and use cases.",
    cinematicPortrait: "Cinematic Portrait",
    natureLandscape: "Nature Landscape",
    productShowcase: "Product Showcase",
    urbanStreetScene: "Urban Street Scene",
    portrait: "Portrait",
    nature: "Nature",
    // commercial: "Commercial",
    urban: "Urban",
    landscape: "Landscape",
    goldenHour: "Golden Hour",
    product: "Product",
    clean: "Clean",
    street: "Street",
    // documentary: "Documentary",
    copy: "Copy",
    createYourOwnPrompts: "Create Your Own Prompts",
    createYourOwnPromptsDesc: "Use our AI-powered generator to create custom prompts tailored to your specific needs.",
    generateCustomPrompts: "Generate Custom Prompts",

    // Privacy Policy Page
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicySubtitle: "Last updated:",
    privacyPolicyLastUpdated: "Last updated: December 2024",
    privacyIntroduction: "Introduction",
    privacyIntroductionTitle: "Introduction",
    privacyIntroductionText: "At VeO3 Prompt Generator, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.",
    privacyIntroductionDesc: "At VeO3 Prompt Generator, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your information when you use our AI-powered video prompt generation services.",
    
    informationWeCollect: "Information We Collect",
    privacyPersonalInfoTitle: "Personal Information",
    privacyPersonalInfoDesc: "We may collect personal information that you voluntarily provide to us when you:",
    personalInformation: "Personal Information",
    personalInformationText: "We may collect personal information that you voluntarily provide to us when you:",
    personalInfoItem1: "Create an account on our platform",
    personalInfoItem2: "Contact us for support or inquiries",
    personalInfoItem3: "Subscribe to our newsletter or updates",
    personalInfoItem4: "Participate in surveys, contests, or promotions",
    personalInfoItem5: "Use our AI-powered tools and services",
    privacyPersonalInfoItem1: "Video files and media content you upload for analysis",
    privacyPersonalInfoItem2: "Text inputs and preferences you provide in forms",
    privacyPersonalInfoItem3: "Usage data, including how you interact with our services",
    privacyPersonalInfoItem4: "Technical information such as IP address, browser type, and device information",
    privacyPersonalInfoItem5: "Information collected through cookies and similar technologies",
    
    usageInformation: "Usage Information",
    privacyUsageInfoTitle: "Usage Information",
    privacyUsageInfoDesc: "We automatically collect certain information when you visit our website, including:",
    usageInformationText: "We automatically collect certain information when you visit our website, including:",
    usageInfoItem1: "IP address and browser information",
    usageInfoItem2: "Pages visited and time spent on our site",
    usageInfoItem3: "Device information and operating system",
    usageInfoItem4: "Referral sources and search terms",
    usageInfoItem5: "Interaction data with our tools and features",
    privacyUsageInfoItem1: "IP address and browser information",
    privacyUsageInfoItem2: "Pages visited and time spent on our site",
    privacyUsageInfoItem3: "Device information and operating system",
    privacyUsageInfoItem4: "Referral sources and search terms",
    privacyUsageInfoItem5: "Interaction data with our tools and features",
    
    contentAndMedia: "Content and Media",
    privacyContentMediaTitle: "Content and Media",
    privacyContentMediaDesc: "When you upload videos, images, or other content to our service, we temporarily process this content to generate prompts and provide our services. All uploaded files are automatically deleted from our servers immediately after processing is complete, typically within minutes.",
    contentAndMediaText: "When you upload videos, images, or other content to our service, we temporarily process this content to generate prompts and provide our services. All uploaded files are automatically deleted from our servers immediately after processing is complete, typically within minutes.",
    
    howWeUseInformation: "How We Use Your Information",
    howWeUseInformationText: "We use the information we collect for various purposes, including:",
    useInfoItem1: "Providing and maintaining our AI-powered services",
    useInfoItem2: "Processing your requests and generating prompts",
    useInfoItem3: "Sending you technical notices and support messages",
    useInfoItem4: "Responding to your comments, questions, and requests",
    useInfoItem5: "Improving our website, tools, and user experience",
    useInfoItem6: "Analyzing usage patterns and service performance",
    useInfoItem7: "Detecting and preventing fraud, abuse, or security issues",
    useInfoItem8: "Complying with legal obligations and protecting our rights",
    privacyInfoUseItem1: "Process your video content and generate AI prompts",
    privacyInfoUseItem2: "Provide and improve our services",
    privacyInfoUseItem3: "Analyze usage patterns to enhance user experience",
    privacyInfoUseItem4: "Communicate with you about service updates and support",
    privacyInfoUseItem5: "Ensure the security and integrity of our platform",
    privacyInfoUseItem6: "Analyzing usage patterns and service performance",
    privacyInfoUseItem7: "Detecting and preventing fraud, abuse, or security issues",
    privacyInfoUseItem8: "Complying with legal obligations and protecting our rights",
    
    dataSecurity: "Data Security",
    dataSecurityText: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure data transmission, access controls, and regular security audits. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    
    dataRetention: "Data Retention",
    dataRetentionText: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Uploaded media files are deleted immediately after processing. Account information is retained until you request deletion or close your account. Usage data may be retained for analytical purposes in anonymized form.",
    
    thirdPartyServices: "Third-Party Services",
    thirdPartyServicesText: "Our website may contain links to third-party websites or services, and we may use third-party services for analytics, payment processing, or other functions. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.",
    
    yourRights: "Your Rights",
    yourRightsText: "Depending on your location, you may have certain rights regarding your personal information:",
    rightsItem1: "Right to access your personal information",
    rightsItem2: "Right to correct inaccurate information",
    rightsItem3: "Right to delete your personal information",
    rightsItem4: "Right to restrict processing",
    rightsItem5: "Right to data portability",
    rightsItem6: "Right to object to processing",
    rightsItem7: "Right to withdraw consent",
    privacyUserRightsItem1: "Access information we hold about you",
    privacyUserRightsItem2: "Request correction of inaccurate information",
    privacyUserRightsItem3: "Request deletion of your personal data",
    privacyUserRightsItem4: "Object to processing of your information",
    privacyUserRightsItem5: "Data portability (where applicable)",
    privacyUserRightsItem6: "Right to object to processing",
    privacyUserRightsItem7: "Right to withdraw consent",
    
    internationalDataTransfers: "International Data Transfers",
    internationalDataTransfersText: "Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.",
    
    changesToPolicy: "Changes to This Policy",
    changesToPolicyText: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date. We encourage you to review this Privacy Policy periodically for any changes.",
    
    contactUs: "Contact Us",
    contactUsText: "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
    contactEmail: "Email: privacy@veo3promgenerator.com",
    contactAddress: "Address: 123 Innovation Drive, San Francisco, CA 94105",
    contactPhone: "Phone: +1 (555) 123-4567",

    // Common
    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    required: "required",
    optional: "optional",
  },
  zh: {
    // SEO and Branding
    siteTitle: "Veo3 提示词生成器免费在线版",
    mainHeading: "Veo3 提示词生成器",
    accentWord: "",

    // Navigation
    home: "首页",
    tools: "工具",
    blog: "博客",
    about: "关于",
    contact: "联系",
    getStarted: "开始使用",
    disclaimer: "免责声明",
    sitemap: "网站地图",

    // Main Tools Navigation
    videoScriptGenerator: "视频脚本生成器",
    veo3PromptGenerator: "Veo3 提示词生成器",
    
    // Tool Navigation Tabs
    veo3PromptGeneratorTab: "Veo3提示词生成器",
    videoScriptGeneratorTab: "视频脚本生成器", 
    videoToPromptGeneratorTab: "视频转提示词生成器",
    videoTranscriptionTab: "视频转录 (即将推出)",

    // Video Script Generator
    videoTopic: "视频主题和主要角色（用1-2句话描述）",
    videoTopicPlaceholder:
      "示例：新产品广告、产品介绍、产品使用指南...\n角色：示例：小宝、A先生、B女士...",
    audience: "您的目标受众是谁？",
    selectAudience: "选择受众",
    scriptLength: "脚本长度",
    selectLength: "选择长度",
    scriptStyle: "脚本风格",
    selectStyle: "选择风格",
    language: "语言",
    chinese: "中文",
    vietnamese: "越南语",
    english: "英语",
    french: "法语",
    spanish: "西班牙语",
    german: "德语",
    generator: "生成器",

    // Video Script Generator - Extended
    videoScriptGeneratorTitle: "视频脚本生成器",
    videoScriptGeneratorSubtitle: "使用我们的AI驱动生成器创建引人注目的视频脚本。非常适合YouTube、TikTok、Instagram和社交媒体内容创作者。",
    videoScriptGeneratorFreeOnline: "免费在线",
    
    // Form Labels and Placeholders
    videoTopicAndCharacters: "视频主题和主要角色：",
    videoTopicExample: "示例：一部关于孤独机器人发现花朵的短片，主角是一个好奇的机器人和一朵充满活力、发光的花朵。",
    
    // Buttons and Actions
    generateScript: "生成脚本",
    generatingScript: "正在生成脚本...",
    clearForm: "清除",
    copyScript: "复制脚本",
    newScript: "新脚本",
    
    // Messages
    missingInformation: "信息缺失",
    missingInformationDesc: "请填写所有必填字段。",
    scriptGeneratedSuccessfully: "脚本生成成功！",
    scriptGeneratedDesc: "您的视频脚本已准备就绪。",
    generationFailed: "生成失败",
    generationFailedDesc: "生成脚本失败。请重试。",
    
    // Output
    generatedScriptTitle: "生成的脚本：",
    
    // How It Works Section
    howVideoScriptGeneratorWorks: "视频脚本生成器工作原理",
    scriptStep1Title: "描述您的视频",
    scriptStep1Desc: "输入您的视频主题并描述您想要在脚本中包含的主要角色或元素。",
    scriptStep2Title: "AI生成",
    scriptStep2Desc: "我们的先进AI分析您的输入并生成具有适当结构和流程的专业视频脚本。",
    scriptStep3Title: "下载和使用",
    scriptStep3Desc: "复制生成的脚本并将其用于您的视频制作，包含清晰的场景描述和对话。",
    
    // About Section
    aboutVideoScriptGenerator: "关于视频脚本生成器",
    aboutVideoScriptGeneratorDesc: "我们的视频脚本生成器是一个强大的AI驱动工具，旨在帮助内容创作者、电影制作人和视频制作人快速高效地创建引人注目的脚本。只需描述您的视频概念和主要角色，我们的先进AI就会生成包含场景描述、角色对话和叙事流程的专业质量脚本。这个工具非常适合YouTube创作者、社交媒体影响者、营销团队以及任何需要制作具有清晰结构化脚本的引人入胜视频内容的人。",
    
    // FAQ Section
    videoScriptFaqTitle: "常见问题",
    faqVideoTypesQuestion: "我可以为哪些类型的视频创建脚本？",
    faqVideoTypesAnswer: "我们的视频脚本生成器可以为各种视频类型创建脚本，包括YouTube视频、TikTok内容、Instagram短视频、教育视频、宣传内容、叙事视频等。只需描述您的概念，AI就会相应地调整脚本。",
    faqScriptLengthQuestion: "生成的脚本有多长？",
    faqScriptLengthAnswer: "脚本长度根据您的输入和要求而变化。您可以指定是否需要30秒的短脚本或5-10分钟的长视频脚本。AI会相应地调整内容和详细程度。",
    faqEditScriptQuestion: "我可以编辑生成的脚本吗？",
    faqEditScriptAnswer: "当然可以！生成的脚本是一个起点，您可以复制、编辑和自定义以匹配您的特定需求、风格和品牌声音。随时修改对话、添加细节或调整结构。",
    faqCommercialUseQuestion: "脚本适合商业用途吗？",
    faqCommercialUseAnswer: "是的，我们工具生成的脚本可以免费用于个人和商业项目。但是，我们建议审查和自定义内容，以确保它符合您的品牌指导原则和法律要求。",

    // Video to Prompt Generator - Extended
    videoToPromptGeneratorTitle: "视频转提示词生成器",
    videoToPromptGeneratorSubtitle: "将您现有的视频转换为详细的AI提示词。上传视频并获得用于AI视频生成平台的全面提示词。",
    videoToPromptFreeOnline: "免费在线",
    
    // Upload Section
    uploadVideo: "上传视频：",
    dragDropVideo: "拖放视频文件到这里，或点击选择",
    dropVideoHere: "将视频拖放到这里...",
    supportedFormats: "支持MP4、MOV、AVI（最大100MB）",
    
    // Messages
    videoUploadedSuccessfully: "视频上传成功！",
    videoUploadedDesc: "已上传。",
    invalidFileType: "无效的文件类型",
    invalidFileTypeDesc: "请上传视频文件。",
    noVideoUploaded: "未上传视频",
    noVideoUploadedDesc: "请先上传视频文件。",
    promptGeneratedSuccessfully: "提示词生成成功！",
    promptGeneratedDesc: "您的视频提示词已准备就绪。",
    
    // Buttons and Actions
    analyzingVideo: "正在分析视频...",
    generatePrompt: "生成提示词",
    clearAll: "全部清除",
    
    // Output
    generatedPromptTitle: "生成的提示词：",
    
    // How It Works Section
    howVideoToPromptWorks: "视频转提示词生成器工作原理",
    videoPromptStep1Title: "上传您的视频",
    videoPromptStep1Desc: "上传任何视频文件（MP4、MOV、AVI），最大100MB。我们的系统将分析视觉内容。",
    videoPromptStep2Title: "AI分析",
    videoPromptStep2Desc: "我们的先进AI从您的视频中提取关键视觉元素、场景、对象和动作。",
    videoPromptStep3Title: "生成提示词",
    videoPromptStep3Desc: "获得可用于AI平台生成相似或增强视频内容的全面提示词。",
    
    // About Section
    aboutVideoToPromptGenerator: "关于视频转提示词生成器",
    aboutVideoToPromptGeneratorDesc: "我们的视频转提示词生成器是一个创新的AI驱动工具，将您现有的视频转换为AI视频生成平台的详细提示词。通过分析您的视频内容，我们的先进AI提取关键视觉元素、场景、对象和动作，创建可用于生成相似或增强视频内容的全面提示词。这个工具非常适合内容创作者、营销人员和视频制作人，他们希望利用现有内容创建具有一致风格和信息传达的新AI生成视频。",
    
    // FAQ Section
    videoToPromptFaqTitle: "常见问题",
    faqVideoFormatsQuestion: "支持哪些视频格式？",
    faqVideoFormatsAnswer: "我们支持大多数常见视频格式，包括MP4、MOV、AVI等。最大文件大小为100MB，以确保快速处理和分析。",
    faqPromptAccuracyQuestion: "生成的提示词准确度如何？",
    faqPromptAccuracyAnswer: "我们的AI对视觉元素、场景和动作提供高度准确的分析。生成的提示词捕获原始视频的精髓和关键组件，用于有效的AI视频生成。",
    faqAIPlatformCompatibilityQuestion: "我可以在任何AI视频平台上使用这些提示词吗？",
    faqAIPlatformCompatibilityAnswer: "是的！生成的提示词设计为与大多数AI视频生成平台兼容，包括Runway、Pika Labs、Veo3等。您可以根据特定平台的需要修改提示词。",
    faqVideoSecurityQuestion: "我的视频内容安全吗？",
    faqVideoSecurityAnswer: "绝对安全。我们优先考虑您的隐私和安全。视频经过安全处理，不会永久存储。我们只分析内容以生成提示词，不保留您的视频文件。",

    // Veo3 Prompt Generator - Structured Mode
    structuredMode: "结构化模式",
    chatMode: "对话模式",
    mainSubject: "详细描述视频的主要主题？",
    mainSubjectPlaceholder: "描述主要主题的外观",
    mainSubjectRequired: "此字段为必填项",
    sceneAction: "场景中发生了什么？",
    sceneActionPlaceholder: "主题在场景中做什么或感受什么？",
    sceneActionRequired: "此字段为必填项",
    dialogue: "您希望视频中有特定的对话或声音吗？",
    dialogueOptional: "（可选）",
    dialoguePlaceholder: "如需要，可添加对话、音乐或音效。",
    cameraMovement: "摄像机应该如何移动或构图？",
    cameraOptional: "（可选）",
    cameraPlaceholder: "您可以描述慢镜头缩放、航拍视角、特写、跟踪镜头等。",
    otherDetails: "您还想包含其他细节吗？",
    otherDetailsOptional: "（可选）",
    otherDetailsPlaceholder: "这可能包括灯光、天气、物体、情绪或环境中的小细节",
    subtitles: "您希望视频中有字幕吗？",
    subtitlesOptional: "（可选）",
    yes: "是",
    no: "否",
    generate: "生成",

    // Chat Mode
    chatPrompt:
      "请清楚地描述您的想法，指定所需的视频尺寸，并准确定义您的目标受众。示例：一名宇航员踏上月球探索任务，为TikTok制作竖屏视频，目标受众是太空和天体爱好者",
    chatPlaceholder: "描述您想要创建的视频...",
    generateVideoPrompt: "生成视频提示词",

    // Audiences
    generalAudience: "普通受众",
    teenagers: "青少年（13-19岁）",
    youngAdults: "年轻成人（20-35岁）",
    professionals: "专业人士",
    parents: "父母",
    seniors: "老年人（55岁以上）",

    // Script Lengths
    length15to30: "15-30秒",
    length30to60: "30-60秒",
    length1to2min: "1-2分钟",
    length2to5min: "2-5分钟",
    length5to10min: "5-10分钟",

    // Script Styles
    conversational: "对话式",
    professional: "专业",
    energetic: "充满活力",
    educational: "教育性",
    storytelling: "叙事",
    promotional: "推广",

    // Footer
    footerDescription:
      "使用尖端AI技术将您的想法转化为强大的视频提示词。我们的平台结合了先进的提示词工程和直观的设计，帮助内容创作者、营销人员和企业生成引人注目的视频脚本和详细的提示词，适用于Google Veo 3等AI视频生成工具。",

    // Footer Sections
    coreTools: "核心工具",
    // tools: "工具",
    company: "公司",
    legal: "法律",

    // Footer Links
    videoScriptGeneratorFooter: "视频脚本生成器",
    veo3PromptGeneratorFooter: "Veo3提示词生成器",
    videoToPromptFooter: "视频转提示词",
    videoTranscriptionFooter: "视频转录 (即将推出)",
    promptGuideFooter: "提示词指南",
    promptLibraryFooter: "提示词库",
    aboutFooter: "关于",
    contactFooter: "联系",
    blogFooter: "博客",
    communityFooter: "社区",
    privacyPolicyFooter: "隐私政策",
    termsOfServiceFooter: "服务条款",
    disclaimerFooter: "免责声明",
    sitemapFooter: "网站地图",

    // Footer Copyright
    allRightsReserved: "版权所有",

    // Tools Pages
    videoToPrompt: "视频转提示词",
    transcription: "视频转录 (即将推出)",

    promptGuide: "提示词指南",
    promptLibrary: "提示词库",

    // Hero Section
    aiPoweredBadge: "🚀 AI驱动的内容生成",
    heroFree: "",

    // Feature Cards
    lightningFast: "极速生成",
    lightningFastDesc: "使用优化的AI算法在几秒钟内获得结果",
    securePrivate: "安全私密",
    securePrivateDesc: "企业级安全保护，自动删除文件",
    advancedAI: "先进AI",
    advancedAIDesc: "由Gemini 2.5 Pro驱动，具有智能回退功能",
    multiFormat: "多格式支持",
    multiFormatDesc: "支持图像、视频和音频文件",

    // Home Page Sections
    ourAITools: "我们的AI工具",
    ourAIToolsDesc: "探索我们为内容创作者和专业人士设计的全面AI驱动工具套件。",
    tryNow: "立即试用",

    // Tools
    veo3PromptGeneratorDesc: "使用结构化表单和高级聊天模式为 Google 的 Veo3 AI 视频生成创建详细提示词。",
    videoScriptGeneratorDesc: "为 YouTube、TikTok、Instagram 和营销活动生成专业视频脚本。",
    videoToPromptDesc: "将现有视频转换为 AI 视频生成工具的详细提示词。",
    transcriptionDesc: "高精度转录音频文件，支持多种输出格式。",

    // Why Choose Section
    whyChoose: "为什么选择",
    ourPlatform: "我们的平台",
    whyChooseDesc: "体验最先进的AI驱动内容生成平台，具备企业级功能和可靠性。",

    // Features
    lightningFastProcessing: "闪电般快速处理",
    lightningFastProcessingDesc: "使用我们优化的AI算法和云基础设施，在几秒钟内获得结果，具备自动回退功能。",
    securePrivateDesc2: "您的文件经过安全处理，处理后立即删除，采用企业级安全保护。",
    advancedAIModels: "先进AI模型",
    advancedAIModelsDesc: "由Gemini 2.5 Pro驱动，具备智能回退到OpenRouter的最大可靠性。",
    multipleFormats: "多种格式",
    multipleFormatsDesc: "支持各种图像和视频格式，包括JPG、PNG、MP4等，具备智能处理功能。",
    realTimeProcessing: "实时处理",
    realTimeProcessingDesc: "实时观看您的内容生成，具备实时进度指示器和回退保护。",
    premiumQuality: "优质品质",
    premiumQualityDesc: "适合专业使用和创意项目的高质量输出，具备AI增强功能。",

    // How It Works
    howItWorks: "工作原理",
    howItWorksDesc: "只需三个简单步骤，将您的想法转化为强大的内容。",
    uploadYourContent: "上传您的内容",
    uploadYourContentDesc: "只需拖放您的图像、视频或文本，或点击浏览并从设备中选择文件。",
    aiAnalysis: "AI分析",
    aiAnalysisDesc: "我们的先进AI分析您的内容，理解上下文、对象、场景和情感。",
    getYourResults: "获取结果",
    getYourResultsDesc: "接收多种格式的详细输出 - 为开发者提供JSON，为创作者提供段落。",

    // Benefits
    keyBenefits: "主要优势",
    keyBenefitsDesc: "了解我们的AI平台如何改变您的内容创作工作流程。",
    saveHoursOfWork: "节省数小时工作",
    saveHoursOfWorkDesc: "在几分钟内将您的想法转化为可用于生产的内容，而不是数小时的手工工作。",
    professionalQuality: "专业品质",
    professionalQualityDesc: "获得顶级内容创作者和营销机构使用的企业级AI技术。",
    creativeFreedom: "创作自由",
    creativeFreedomDesc: "专注于您的创意愿景，让我们的AI处理技术复杂性。",
    betterResults: "更好的结果",
    betterResultsDesc: "通过优化的AI处理生成更具吸引力、一致性和高质量的内容。",

    // About Section
    aboutVeo3PromptGenerator: "关于 Veo3 提示词生成器",
    aboutDesc1: "我们的使命是革命性地改变人们创建内容的方式，通过AI驱动的工具帮助他们释放新的创造力和效率水平。我们理解内容创作者、营销人员和企业在当今快节奏的数字环境中面临的挑战，在这个环境中，优质内容对成功至关重要。",
    aboutDesc2: "加入我们创建 Veo3 提示词生成器的专业 AI 工程师团队，踏上释放 AI 全部潜力的旅程。我们相信通过我们精心策划的提示词生成工具让AI变得易于访问和使用。我们的平台结合了尖端技术和直观设计，确保即使是初学者也能创建专业质量的内容，同时为有经验的用户提供高级功能。",
    aboutDesc3: "凭借在AI开发和内容创作方面多年的经验，我们构建了满足多样化需求的全面工具套件。从Veo3提示词生成到视频脚本创作，我们的平台提供了将您的创意愿景变为现实所需的一切。我们致力于持续创新，定期更新我们的AI模型和功能，以保持领先于行业趋势和用户需求。",
    readMoreAboutUs: "了解更多关于我们",
    reviewUsOnTrustpilot: "⭐ 在Trustpilot上评价我们",

    // FAQ
    frequentlyAskedQuestions: "常见问题",
    faqDesc: "找到关于我们AI平台常见问题的答案",
    faqAccuracy: "AI生成输出的准确性如何？",
    faqAccuracyAnswer: "我们的AI模型在内容生成方面达到99.5%的准确率，通过机器学习和用户反馈持续改进。",
    faqFormats: "支持哪些文件格式？",
    faqFormatsAnswer: "我们支持所有主要图像格式（JPG、PNG、GIF、WebP）和视频格式（MP4、AVI、MOV、WebM），文件大小最大100MB。",
    faqSecurity: "我上传的内容安全吗？",
    faqSecurityAnswer: "是的，所有文件都经过安全处理，处理后自动删除。我们使用企业级加密，永远不会永久存储您的内容。",
    faqCommercial: "我可以商业使用生成的内容吗？",
    faqCommercialAnswer: "当然可以！所有生成的内容都归您所有，可用于任何目的，包括商业项目和客户工作。",
    faqProcessingTime: "处理需要多长时间？",
    faqProcessingTimeAnswer: "大多数文件在10-30秒内处理完成。较大文件或复杂内容可能需要最多2分钟。",
    faqAPI: "您提供API访问吗？",
    faqAPIAnswer: "是的，我们为开发者提供RESTful API访问。请联系我们获取API文档和定价信息。",

    // Who Can Benefit
    contentCreators: "内容创作者",
    contentCreatorsDesc: "需要快速且持续创建引人入胜内容的YouTube创作者、TikTok创作者和社交媒体影响者。",
    marketingTeams: "营销团队",
    marketingTeamsDesc: "创建营销活动、产品演示和品牌故事内容的数字营销人员和代理机构。",
    marketers: "营销人员",
    educators: "教育工作者",
    educatorsDesc: "开发引人入胜的学习材料和教程的教师、培训师和教育内容创作者。",
    developers: "开发者",
    businesses: "企业",
    businessesDesc: "创建推广内容、产品演示和企业传播的公司和企业家。",

    // Footer CTA
    readyToTransform: "准备好转换您的内容了吗？",
    readyToTransformDesc: "加入已经在使用我们AI平台创建精彩内容的数千名创作者。",
    getStartedFree: "免费开始",
    exploreAllTools: "探索所有工具",

    // Blog Page
    blogTitle: "VeO3 博客",
    blogDescription: "关于AI视频生成、提示词工程和内容创作的见解、教程和最佳实践。",
    readMore: "阅读更多",
    currentLanguage: "当前语言",

    // About Page
    aboutPageTitle: "关于VeO3提示词生成器",
    aboutPageSubtitle: "我们通过提供全面的工具套件来革命性地改变创作者与AI的合作方式，使先进的视频生成、脚本编写和内容分析对每个人都变得易于访问。",
    ourMission: "我们的使命",
    ourMissionDesc1: "在VeO3提示词生成器，我们相信内容创作的未来在于人类创造力与人工智能的无缝协作。我们的使命是民主化先进AI工具的访问，使专业视频创作、脚本编写和内容分析对所有背景的创作者都变得易于访问。",
    ourMissionDesc2: "我们致力于提供一套全面的工具，不仅节省时间，还能激发创造力，帮助我们的用户在工作中释放新的可能性，同时保持最高的质量、隐私和可靠性标准。",

    // Tools Section
    ourComprehensiveToolSuite: "我们的全面工具套件",
    veo3PromptGeneratorToolDesc: "我们的旗舰工具，将您的创意想法转化为Google Veo3 AI视频生成平台的详细、专业提示词。",
    videoScriptGeneratorToolDesc: "在AI驱动的协助下，为YouTube、TikTok、营销活动和教育内容创建引人注目的视频脚本。",
    videoToPromptGeneratorDesc: "从现有视频中提取灵感，并将其转换为AI视频生成平台的详细提示词。",
    videoTranscriptionDesc: "将视频音频转换为准确、可搜索的文本，具有说话人检测和时间戳标记。",

    // Impact Stories
    howOurToolsTransformLives: "我们的工具如何改变生活",
    contentCreatorsImpact: "YouTube创作者和社交媒体创作者使用我们的工具生成引人入胜的脚本，创建AI驱动的视频，并转录内容以提高可访问性。",
    marketersImpact: "营销团队利用我们的提示词生成器为营销活动、产品演示和品牌故事创建引人注目的视频内容。",
    educatorsImpact: "教师和培训师使用我们的转录和脚本工具创建教育内容，使视频变得易于访问，并开发引人入胜的学习材料。",
    developersImpact: "AI开发者和研究人员使用我们的工具来理解提示词工程，分析视频内容，并创建训练数据集。",

    // Values
    ourValues: "我们的价值观",
    userCentricDesign: "以用户为中心的设计",
    userCentricDesignDesc: "我们构建的每个工具都以用户的需求和工作流程为设计理念，确保所有技能水平的创作者都能轻松使用。",
    innovationFirst: "创新优先",
    innovationFirstDesc: "我们不断推动AI可能性的边界，将尖端技术带给日常创作者。",
    privacySecurity: "隐私与安全",
    privacySecurityDesc: "您的数据和内容受到企业级安全措施的保护，处理后立即删除。",
    continuousImprovement: "持续改进",
    continuousImprovementDesc: "我们基于用户反馈和最新AI研究快速迭代，确保您始终能够访问最好的工具。",

    // What Makes Us Different
    whatMakesUsDifferent: "我们的与众不同之处",
    comprehensiveAISuite: "全面的AI套件",
    comprehensiveAISuiteDesc: "与单一用途工具不同，我们提供AI驱动内容创作的完整生态系统，从提示词生成到脚本编写、视频分析和转录。",
    professionalQualityTitle: "专业品质",
    professionalQualityAboutDesc: "我们的工具专为专业使用而设计，具有企业级准确性和功能，可从个人创作者扩展到大型团队和组织。",
    privacyFirstTitle: "隐私优先",
    privacyFirstDesc: "我们优先考虑您的隐私和安全。所有上传都经过安全处理，处理后立即删除，确保您的内容保持私密和受保护。",
    continuousInnovationTitle: "持续创新",
    continuousInnovationDesc: "我们不断改进算法并基于用户反馈和最新AI研究添加新功能，确保您始终能够访问尖端工具。",

    // Tool Benefits
    veo3Benefits1: "具有语音和对话规格的高级角色开发",
    veo3Benefits2: "上下文感知的场景描述和声音设计",
    veo3Benefits3: "为Veo3优化的专业提示词格式",
    veo3Benefits4: "支持多种语言并输出英文",

    scriptBenefits1: "多种脚本风格（对话式、专业、教育性）",
    scriptBenefits2: "针对受众的内容优化",
    scriptBenefits3: "可定制的脚本长度和格式",
    scriptBenefits4: "多语言支持，覆盖全球",

    videoPromptBenefits1: "上传视频的逐场景分析",
    videoPromptBenefits2: "对象检测和动作识别",
    videoPromptBenefits3: "音频和视觉元素提取",
    videoPromptBenefits4: "兼容Veo3、Runway和其他AI平台",

    transcriptionBenefits1: "清晰音频95%+准确率",
    transcriptionBenefits2: "多语言支持和自动检测",
    transcriptionBenefits3: "说话人识别和时间戳",
    transcriptionBenefits4: "字幕和文档的专业格式",

    // Join Our Journey
    joinOurJourney: "加入我们的旅程",
    joinOurJourneyDesc: "我们才刚刚开始。加入已经在使用我们全面工具套件来转变创作过程并将想法变为现实的数千名创作者、营销人员、教育工作者和开发者。",
    launchingNewFeatures: "🚀 每月推出新功能",
    availableWorldwide: "🌍 全球可用",
    communityDriven: "💡 社区驱动开发",
    tryVeo3PromptGenerator: "试用Veo3提示词生成器",

    // Contact Page
    getInTouch: "联系我们",
    contactPageSubtitle: "有问题、反馈或需要支持？我们很乐意听到您的声音。我们的团队在这里帮助您充分利用VeO3提示词生成器并实现您的创意目标。",
    sendUsAMessage: "给我们发消息",
    contactFormDescription: "填写下面的表单，我们会尽快回复您。",
    fullName: "全名",
    emailAddress: "电子邮件地址",
    category: "类别",
    selectCategory: "选择类别",
    subject: "主题",
    message: "消息",
    sendMessage: "发送消息",
    sending: "发送中...",
    messageSentSuccess: "消息发送成功！",
    responseTime: "我们将在24小时内回复您。",

    // Contact Categories
    generalInquiry: "一般咨询",
    technicalSupport: "技术支持",
    featureRequest: "功能请求",
    bugReport: "错误报告",
    businessInquiry: "商务咨询",
    partnership: "合作伙伴",
    mediaPress: "媒体与新闻",

    // Contact Information
    email: "邮箱",
    address: "地址",
    phone: "电话",
    emailSupport: "邮件支持",
    emailSupportDesc: "用于一般咨询和支持",
    emailResponseTime: "我们通常在24小时内回复",
    liveChatSupport: "在线聊天支持",
    liveChatDesc: "通过我们的在线聊天获得即时帮助",
    startLiveChat: "开始在线聊天",
    liveChatHours: "周一至周五，太平洋时间上午9点至下午6点",
    communityForum: "社区论坛",
    communityForumDesc: "与其他用户联系并获得帮助",
    visitForum: "访问论坛",
    communitySupport: "24/7社区支持",
    businessHours: "营业时间",
    officeLocation: "办公地点",
    visitOffice: "访问我们的总部",

    // Business Hours
    mondayFriday: "周一至周五",
    saturday: "周六",
    sunday: "周日",
    closed: "关闭",

    // FAQ Section
    faqSectionTitle: "常见问题",
    faqSectionDesc: "查看我们的FAQ部分，快速找到关于VeO3提示词生成器常见问题的答案。",
    viewFAQ: "查看FAQ",
    helpCenter: "帮助中心",

    // Form Placeholders
    fullNamePlaceholder: "您的全名",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "您咨询的简要描述",
    messagePlaceholder: "请提供关于您咨询的详细信息...",

    // Disclaimer Page
    disclaimerTitle: "免责声明",
    lastUpdated: "最后更新",
    generalInformation: "一般信息",
    generalInformationDesc: "本网站上的信息按“原样”提供。在法律允许的最大范围内，VeO3提示词生成器排除因本网站及其内容或任何关联公司或任何其他第三方可能提供的内容而产生或与之相关的所有陈述、保证、义务和责任，包括与本网站和/或公司文献中的任何不准确或遗漏相关的内容。",
    aiGeneratedContent: "AI生成内容",
    aiGeneratedContentDesc: "我们的服务使用人工智能来分析内容并为视频创作生成提示词。请注意：",
    userResponsibility: "用户责任",
    userResponsibilityDesc: "用户负责：",
    limitationOfLiability: "责任限制",
    limitationOfLiabilityDesc: "在适用法律允许的最大范围内，VeO3提示词生成器不对任何间接、偶然、特殊、后果性或惩罚性损害，或任何利润或收入损失（无论是直接还是间接产生的），或任何数据、使用、商誉或其他无形损失承担责任，这些损失是由于您使用我们的服务而产生的，包括但不限于因使用AI生成内容而产生的损害。",
    serviceAvailability: "服务可用性",
    serviceAvailabilityDesc: "我们努力保持高服务可用性，但我们不保证我们的服务将始终可用。由于维护、更新或技术问题，服务可能暂时不可用。我们保留随时修改、暂停或停止我们服务的任何部分的权利，恕不另行通知。AI处理时间可能因系统负载和内容复杂性而有所不同。",
    thirdPartyContent: "第三方内容和服务",
    thirdPartyContentDesc: "我们的网站可能包含指向第三方网站、服务的链接，或引用第三方内容。我们不认可、保证或承担第三方网站或服务提供的任何信息的准确性或可靠性的责任。用户访问第三方内容的风险自负。我们不对外部网站的可用性、内容或做法负责。",
    professionalAdvice: "专业建议",
    professionalAdviceDesc: "VeO3提示词生成器提供的信息和工具仅用于一般信息目的，不应被视为专业建议。用户应就其特定情况的具体建议咨询合格的专业人士，特别是对于商业或专业视频制作项目。",
    intellectualProperty: "知识产权",
    intellectualPropertyDesc: "虽然我们提供生成内容的工具，但用户有责任确保他们使用生成的内容不会侵犯他人的知识产权。我们不保证生成的内容不受版权、商标或其他知识产权声明的约束。用户在商业使用生成的内容之前应进行自己的尽职调查。",
    dataProcessing: "数据处理",
    dataProcessingDesc: "我们的AI处理涉及分析上传的内容以生成提示词和脚本。虽然我们实施安全措施并在处理后立即删除上传的文件，但用户应该意识到上传到我们服务的任何内容都将由我们的AI系统处理。用户不应上传机密或敏感信息。",
    changesToDisclaimer: "免责声明的更改",
    changesToDisclaimerDesc: "我们保留随时修改此免责声明的权利。更改将在本网站发布后立即生效。您在任何更改后继续使用我们的服务即表示接受新的免责声明。我们鼓励用户定期查看此免责声明。",
    contactInformation: "联系信息",
    contactInformationDesc: "如果您对此免责声明有任何疑问，请通过以下方式联系我们：",

    // Disclaimer List Items - AI Content
    aiContentItem1: "AI生成的提示词和脚本可能并不总是100%准确或完整",
    aiContentItem2: "输出质量取决于输入内容的质量和清晰度",
    aiContentItem3: "生成的内容在专业环境中使用前应进行审查和验证",
    aiContentItem4: "我们不保证AI生成内容的准确性、完整性或可靠性",
    aiContentItem5: "AI模型偶尔可能产生意外或不当的结果",
    aiContentItem6: "生成的内容可能需要人工编辑和完善",

    // Disclaimer List Items - User Responsibility
    userRespItem1: "确保他们有权上传和处理任何媒体内容",
    userRespItem2: "遵守所有适用的法律法规",
    userRespItem3: "不上传违反知识产权的内容",
    userRespItem4: "不上传不当、冒犯性或非法内容",
    userRespItem5: "在使用前验证生成提示词的准确性和适当性",
    userRespItem6: "确保生成的内容符合平台指南和政策",
    userRespItem7: "在使用生成内容时尊重版权和商标法",

    // Prompt Guide Page
    promptGuideTitle: "提示词指南",
    promptGuideSubtitle: "学习如何为AI视频生成创建有效的提示词，并从您的创意项目中获得最佳结果。",
    gettingStarted: "入门指南",
    gettingStartedDesc: "创建有效的提示词既是一门艺术，也是一门科学。本指南将帮助您了解提示词工程的基础知识，以及如何将其应用于视频生成。",
    basicPromptStructure: "基本提示词结构",
    basicPromptStructureDesc: "一个结构良好的提示词应该包括：",
    clearSubjectDescription: "清晰的主题描述",
    specificActions: "具体的动作或运动",
    settingEnvironment: "场景和环境细节",
    visualStyleMood: "视觉风格和情绪",
    technicalSpecifications: "技术规格",
    advancedTechniques: "高级技巧",
    advancedTechniquesDesc: "掌握基础知识后，您可以探索高级提示词技巧，以获得更复杂的结果。",
    needHelp: "需要帮助？",
    needHelpDesc: "试试我们的AI驱动的提示词生成器，立即创建专业的提示词。",
    generatePromptsNow: "立即生成提示词 →",

    // Veo3 Prompt Generator Page
    freeOnline: "免费在线版",
    outputOptions: "输出选项",
    paragraphPrompt: "段落提示词",
    jsonPrompt: "JSON提示词",
    dialogueSettings: "对话设置",
    hasDialogue: "包含对话",
    autoGenerate: "自动生成",
    noDialogue: "无对话",
    videoSubtitles: "字幕",
    noSubtitles: "无字幕",
    includeSubtitles: "包含字幕",
    
    // Form Fields
    targetAudience: "目标受众",
    targetAudiencePlaceholder: "例如：年轻人、儿童、商务专业人士...",
    videoStyle: "视频风格",
    cameraMoving: "镜头运动",
    cameraMovingPlaceholder: "慢镜头缩放、航拍视角、特写、跟踪镜头等...",
    lightingStyle: "灯光风格",
    lightingStylePlaceholder: "自然光、戏剧性、柔和、强烈、彩色灯光...",
    colorPalette: "色彩搭配",
    colorPalettePlaceholder: "暖色调、冷色调、单色、鲜艳、柔和色彩...",
    audioElements: "音频元素",
    audioElementsPlaceholder: "背景音乐、音效、环境声音...",
    specialEffects: "特殊效果",
    specialEffectsPlaceholder: "视觉特效、转场、滤镜、叠加效果...",
    additionalDetails: "附加细节",
    additionalDetailsPlaceholder: "任何其他具体细节、情绪、氛围或技术要求...",
    
    // Video Style Options
    cinematic: "电影",
    documentary: "纪录片",
    commercial: "商业",
    educationalStyle: "教育性",
    artistic: "艺术",
    minimalist: "极简主义",
    
    // Loading Messages
    pullingMagic: "正在从云端获取魔法...",
    consultingOracle: "正在咨询提示词神谕...",
    cookingMagical: "正在烹饪神奇的内容",
    creatingLove: "正在创造您喜爱的内容，请稍候",
    
    // Toast Messages
    missingInput: "缺少输入",
    missingInputDesc: "请描述您的视频想法。",
    noOutputSelected: "未选择输出格式",
    noOutputSelectedDesc: "请至少选择一种输出格式（JSON或段落）。",
    missingRequiredFields: "缺少必填字段",
    missingRequiredFieldsDesc: "请填写主要主题和场景动作字段。",
    aiPromptGenerated: "AI提示词已生成！",
    advancedAiPromptGenerated: "高级AI提示词已生成！",
    // generationFailed: "生成失败",
    generationPromptFailedDesc: "生成提示词失败。请重试。",
    formatReady: "格式已准备就绪。",
    formatsReady: "格式已准备就绪。",
    
    // Buttons
    // generatePrompt: "生成提示词",
    // clearForm: "清空",
    copyToClipboard: "复制到剪贴板",
    copied: "已复制！",
    generating: "生成中...",
    
    // FAQ Section
    faqTitle: "常见问题",
    faqVeo3Question: "什么是Veo3，这个生成器如何帮助我？",
    faqVeo3Answer: "Veo3是Google的先进AI视频生成模型。我们的提示词生成器创建详细的结构化提示词，帮助Veo3准确理解您想要创建的视频，包括场景细节、镜头运动、灯光和音频元素。",
    faqPromptFormatsQuestion: "JSON和段落格式有什么区别？",
    faqPromptFormatsAnswer: "JSON格式为技术AI处理和API集成提供结构化数据，而段落格式为创意AI处理提供叙述性描述。两种格式包含相同信息，但针对不同用例进行了优化。",
    faqPromptCommercialQuestion: "我可以商业使用生成的提示词吗？",
    faqPromptCommercialAnswer: "当然可以！所有生成的提示词都归您所有，可用于任何目的，包括商业项目、客户工作和个人内容创作。这些提示词专为与Google的Veo3和其他AI视频生成工具配合使用而设计。",
    faqPromptAccuracyQuestionVeo3: "生成的提示词有多准确？",
    faqPromptAccuracyAnswerVeo3: "我们的AI模型在提示词生成方面达到99.5%的准确率，通过机器学习和用户反馈持续改进。这些提示词专门针对Veo3的功能和要求进行了优化。",
    faqVideoFormatsQuestionVeo3: "Veo3支持什么视频格式？",
    faqVideoFormatsAnswerVeo3: "Veo3可以生成长达2分钟的4K分辨率视频。我们的提示词针对15-60秒的专业电影质量片段进行了优化，非常适合社交媒体和营销内容。",
    faqTechnicalQuestion: "使用这个工具需要技术知识吗？",
    faqTechnicalAnswer: "不需要技术知识！我们的工具提供结构化（基于表单）和高级（基于聊天）两种模式。只需用自然语言描述您的视频想法，我们的AI就会为您创建专业的提示词。",

    // How Veo3 Works Section
    howVeo3Works: "Veo3提示词生成器工作原理",
    step1Title: "描述您的视频",
    step1Desc: "使用结构化模式进行详细控制，或使用高级模式进行自然语言输入来描述您的视频概念。",
    step2Title: "AI提示词生成",
    step2Desc: "我们的先进AI分析您的输入，生成针对Veo3 AI视频生成优化的JSON和段落格式。",
    step3Title: "与Veo3一起使用",
    step3Desc: "复制生成的提示词，与Google的Veo3 AI一起使用，创建符合您规格的专业质量视频。",
    
    // About Veo3 Generator Section
    aboutVeo3Generator: "关于Veo3提示词生成器",
    aboutVeo3GeneratorDesc: "我们的Veo3提示词生成器是一个专门的AI工具，旨在为Google的Veo3 AI视频生成平台创建详细的、可用于生产的提示词。无论您是内容创作者、营销人员还是视频制作人，我们的工具都能帮助您将创意想法转化为Veo3能够理解和完美执行的结构化提示词。通过结构化和高级两种模式，您可以填写详细表单进行精确控制，或使用自然语言进行快速构思。生成的提示词包括场景描述、镜头运动、灯光细节、音频元素和针对Veo3功能优化的技术规格。",
    
    // FAQ Section Title
    veo3FaqTitle: "常见问题",

    // Prompt Library Page
    promptLibraryTitle: "提示词库",
    promptLibrarySubtitle: "发现各种视频风格和用例的专业制作提示词。",
    cinematicPortrait: "电影肖像",
    natureLandscape: "自然风景",
    productShowcase: "产品展示",
    urbanStreetScene: "城市街景",
    portrait: "肖像",
    nature: "自然",
    // commercial: "商业",
    urban: "城市",
    landscape: "风景",
    goldenHour: "金色时光",
    product: "产品",
    clean: "简洁",
    street: "街道",
    // documentary: "纪录片",
    copy: "复制",
    createYourOwnPrompts: "创建您自己的提示词",
    createYourOwnPromptsDesc: "使用我们的AI驱动生成器创建针对您特定需求的自定义提示词。",
    generateCustomPrompts: "生成自定义提示词",

    // Common
    loading: "加载中...",
    error: "发生错误",
    success: "成功",
    required: "必填",
    optional: "可选",

    // Privacy Policy Page
    privacyPolicyTitle: "隐私政策",
    privacyPolicyLastUpdated: "最后更新：2025 年 8 月",
    privacyIntroductionTitle: "引言",
    privacyIntroductionDesc: "在VeO3提示词生成器，我们致力于保护您的隐私并确保您个人信息的安全。本隐私政策解释了我们如何收集、使用和保护您在使用我们的AI驱动视频提示词生成服务时的信息。",
    privacyPolicyIntro: "在VeO3提示词生成器，我们致力于保护您的隐私并确保您个人信息的安全。本隐私政策解释了我们如何收集、使用和保护您在使用我们的AI驱动视频提示词生成服务时的信息。",
    
    privacyInfoCollectionTitle: "我们收集的信息",
    privacyInfoCollectionDesc: "我们收集以下类型的信息：",
    privacyPersonalInfoTitle: "个人信息",
    privacyPersonalInfoDesc: "我们可能收集您主动提供给我们的个人信息，当您：",
    privacyPersonalInfoItem1: "您上传用于分析的视频文件和媒体内容",
    privacyPersonalInfoItem2: "您在表单中提供的文本输入和偏好设置",
    privacyPersonalInfoItem3: "使用数据，包括您如何与我们的服务互动",
    privacyPersonalInfoItem4: "技术信息，如IP地址、浏览器类型和设备信息",
    privacyPersonalInfoItem5: "Cookies和类似技术收集的信息",
    privacyInfoCollectionItem1: "您上传用于分析的视频文件和媒体内容",
    privacyInfoCollectionItem2: "您在表单中提供的文本输入和偏好设置",
    privacyInfoCollectionItem3: "使用数据，包括您如何与我们的服务互动",
    privacyInfoCollectionItem4: "技术信息，如IP地址、浏览器类型和设备信息",
    privacyInfoCollectionItem5: "Cookies和类似技术收集的信息",
    
    privacyUsageInfoTitle: "使用信息",
    privacyUsageInfoDesc: "当您访问我们的网站时，我们会自动收集某些信息，包括：",
    privacyUsageInfoItem1: "IP地址和浏览器信息",
    privacyUsageInfoItem2: "访问的页面和在我们网站上花费的时间",
    privacyUsageInfoItem3: "设备信息和操作系统",
    privacyUsageInfoItem4: "推荐来源和搜索词",
    privacyUsageInfoItem5: "与我们工具和功能的交互数据",
    
    privacyContentMediaTitle: "内容和媒体",
    privacyContentMediaDesc: "当您向我们的服务上传视频、图像或其他内容时，我们会临时处理这些内容以生成提示词并提供我们的服务。所有上传的文件在处理完成后会立即从我们的服务器中自动删除，通常在几分钟内完成。",
    
    privacyInfoUseTitle: "我们如何使用您的信息",
    privacyInfoUseDesc: "我们使用收集的信息来：",
    privacyInfoUseItem1: "处理您的视频内容并生成AI提示词",
    privacyInfoUseItem2: "提供和改进我们的服务",
    privacyInfoUseItem3: "分析使用模式以增强用户体验",
    privacyInfoUseItem4: "与您就服务更新和支持进行沟通",
    privacyInfoUseItem5: "确保我们平台的安全性和完整性",
    privacyInfoUseItem6: "分析使用模式和性能",
    privacyInfoUseItem7: "检测和预防欺诈、滥用或安全问题",
    privacyInfoUseItem8: "遵守法律义务和保护我们的依法权利",
    
    privacyDataSecurityTitle: "数据安全",
    privacyDataSecurityDesc: "我们实施行业标准的安全措施来保护您的信息：",
    privacyDataSecurityItem1: "所有数据传输都使用SSL/TLS加密",
    privacyDataSecurityItem2: "上传的文件在处理后立即删除",
    privacyDataSecurityItem3: "访问控制和身份验证协议",
    privacyDataSecurityItem4: "定期安全审计和监控",
    privacyDataSecurityItem5: "安全的云基础设施和数据存储",
    
    privacyDataRetentionTitle: "数据保留",
    privacyDataRetentionDesc: "我们的数据保留政策：",
    privacyDataRetentionItem1: "上传的视频文件在AI处理完成后立即删除",
    privacyDataRetentionItem2: "生成的提示词不会永久存储在我们的服务器上",
    privacyDataRetentionItem3: "使用日志保留30天用于技术支持和改进",
    privacyDataRetentionItem4: "分析数据以匿名和聚合形式保留",
    privacyDataRetentionItem5: "您可以随时请求删除您的数据",
    
    privacyThirdPartyTitle: "第三方服务",
    privacyThirdPartyDesc: "我们使用可信的第三方服务：",
    privacyThirdPartyItem1: "Google Cloud Platform用于AI处理和基础设施",
    privacyThirdPartyItem2: "分析服务用于了解使用模式",
    privacyThirdPartyItem3: "内容分发网络(CDN)用于改善性能",
    privacyThirdPartyItem4: "所有第三方服务提供商都遵守严格的隐私标准",
    
    privacyUserRightsTitle: "您的权利",
    privacyUserRightsDesc: "您对您的个人信息拥有以下权利：",
    privacyUserRightsItem1: "访问我们持有的关于您的信息",
    privacyUserRightsItem2: "请求更正不准确的信息",
    privacyUserRightsItem3: "请求删除您的个人数据",
    privacyUserRightsItem4: "反对处理您的信息",
    privacyUserRightsItem5: "数据可携带性（在适用的情况下）",
    
    privacyInternationalTransferTitle: "国际数据传输",
    privacyInternationalTransferDesc: "您的数据可能会被传输到您所在国家/地区以外的地方进行处理。我们确保所有国际数据传输都符合适用的数据保护法律，并实施适当的保护措施来保护您的信息。",
    
    privacyPolicyChangesTitle: "政策变更",
    privacyPolicyChangesDesc: "我们可能会不时更新本隐私政策。任何变更都将在本页面发布，重大变更将通过电子邮件或我们服务上的显著通知告知您。我们鼓励您定期查看本政策以了解最新信息。",
    
    privacyContactTitle: "联系我们",
    privacyContactDesc: "如果您对本隐私政策有任何疑问或担忧，或希望行使您的权利，请通过以下方式联系我们：",
    privacyContactEmail: "电子邮件：privacy@veo3promptgenerator.com",
    privacyContactAddress: "地址：[您的公司地址]",
    privacyContactResponse: "我们将在收到您的询问后30天内回复。",
  },


  
  fr: {
    // SEO and Branding
    siteTitle: "Générateur de Prompts Veo3 Gratuit en Ligne",
    mainHeading: "Générateur de Prompts Veo3",
    accentWord: "Prompts",

    // Navigation
    home: "Accueil",
    tools: "Outils",
    blog: "Blog",
    about: "À propos",
    contact: "Contact",
    getStarted: "Commencer",

    // Main Tools Navigation
    videoScriptGenerator: "Générateur de Script Vidéo",
    veo3PromptGenerator: "Générateur de Prompts Veo3",

    // Video Script Generator
    videoTopic: "Sujet vidéo et personnages principaux (Décrire en 1-2 phrases)",
    videoTopicPlaceholder:
      "Exemple: Nouvelle publicité produit, introduction produit, guide d'utilisation produit,...\nPersonnages: Exemple: Bébé Bi, M. A, Mme B,...",
    audience: "Qui est votre audience?",
    selectAudience: "Sélectionner l'audience",
    scriptLength: "Longueur du script",
    selectLength: "Sélectionner la longueur",
    scriptStyle: "Style du script",
    selectStyle: "Sélectionner le style",
    language: "Langue",
    vietnamese: "Vietnamien",
    english: "Anglais",
    french: "Français",
    spanish: "Espagnol",
    german: "Allemand",
    generator: "Générateur",

    // Video Script Generator - Extended
    videoScriptGeneratorTitle: "Générateur de Script Vidéo",
    videoScriptGeneratorSubtitle: "Créez des scripts vidéo convaincants avec notre générateur alimenté par l'IA. Parfait pour les créateurs de contenu YouTube, TikTok, Instagram et réseaux sociaux.",
    videoScriptGeneratorFreeOnline: "Gratuit en Ligne",
    
    // Form Labels and Placeholders
    videoTopicAndCharacters: "Sujet Vidéo et Personnages Principaux:",
    videoTopicExample: "Exemple: Un court métrage sur un robot solitaire qui trouve une fleur, mettant en scène un robot curieux et une fleur vibrante et lumineuse.",
    
    // Buttons and Actions
    generateScript: "Générer le Script",
    generatingScript: "Génération du Script...",
    clearForm: "Effacer",
    copyScript: "Copier le Script",
    newScript: "Nouveau Script",
    
    // Messages
    missingInformation: "Informations Manquantes",
    missingInformationDesc: "Veuillez remplir tous les champs requis.",
    scriptGeneratedSuccessfully: "Script généré avec succès!",
    scriptGeneratedDesc: "Votre script vidéo est prêt.",
    generationFailed: "Échec de la génération",
    generationFailedDesc: "Échec de la génération du script. Veuillez réessayer.",
    
    // Output
    generatedScriptTitle: "Script Généré:",
    
    // How It Works Section
    howVideoScriptGeneratorWorks: "Comment Fonctionne le Générateur de Script Vidéo",
    scriptStep1Title: "Décrivez Votre Vidéo",
    scriptStep1Desc: "Entrez le sujet de votre vidéo et décrivez les personnages principaux ou éléments que vous voulez inclure dans votre script.",
    scriptStep2Title: "Génération IA",
    scriptStep2Desc: "Notre IA avancée analyse votre saisie et génère un script vidéo professionnel avec une structure et un flux appropriés.",
    scriptStep3Title: "Télécharger et Utiliser",
    scriptStep3Desc: "Copiez le script généré et utilisez-le pour votre production vidéo, avec des descriptions de scènes claires et des dialogues.",
    
    // About Section
    aboutVideoScriptGenerator: "À Propos du Générateur de Script Vidéo",
    aboutVideoScriptGeneratorDesc: "Notre Générateur de Script Vidéo est un outil puissant alimenté par l'IA conçu pour aider les créateurs de contenu, cinéastes et producteurs vidéo à créer des scripts convaincants rapidement et efficacement. En décrivant simplement votre concept vidéo et personnages principaux, notre IA avancée génère des scripts de qualité professionnelle qui incluent des descriptions de scènes, dialogues de personnages et flux narratif. Cet outil est parfait pour les créateurs YouTube, influenceurs des réseaux sociaux, équipes marketing et quiconque a besoin de produire du contenu vidéo engageant avec un script clair et structuré.",
    
    // FAQ Section
    videoScriptFaqTitle: "Questions Fréquemment Posées",
    faqVideoTypesQuestion: "Quels types de vidéos puis-je créer des scripts?",
    faqVideoTypesAnswer: "Notre Générateur de Script Vidéo peut créer des scripts pour divers types de vidéos incluant les vidéos YouTube, contenu TikTok, Instagram Reels, vidéos éducatives, contenu promotionnel, vidéos narratives, et plus. Décrivez simplement votre concept et l'IA adaptera le script en conséquence.",
    faqScriptLengthQuestion: "Quelle est la longueur des scripts générés?",
    faqScriptLengthAnswer: "La longueur du script varie selon votre saisie et exigences. Vous pouvez spécifier si vous avez besoin d'un script court de 30 secondes ou d'un script vidéo plus long de 5-10 minutes. L'IA ajustera le contenu et le niveau de détail en conséquence.",
    faqEditScriptQuestion: "Puis-je modifier le script généré?",
    faqEditScriptAnswer: "Absolument! Le script généré est un point de départ que vous pouvez copier, modifier et personnaliser pour correspondre à vos besoins spécifiques, style et voix de marque. N'hésitez pas à modifier les dialogues, ajouter des détails ou ajuster la structure.",
    faqCommercialUseQuestion: "Le script convient-il à un usage commercial?",
    faqCommercialUseAnswer: "Oui, les scripts générés par notre outil sont libres d'utilisation pour les projets personnels et commerciaux. Cependant, nous recommandons de réviser et personnaliser le contenu pour s'assurer qu'il s'aligne avec vos directives de marque et exigences légales.",

    // Video to Prompt Generator - Extended
    videoToPromptGeneratorTitle: "Générateur Vidéo vers Prompt",
    videoToPromptGeneratorSubtitle: "Transformez vos vidéos existantes en prompts IA détaillés. Téléchargez une vidéo et obtenez des prompts complets pour les plateformes de génération vidéo IA.",
    videoToPromptFreeOnline: "Gratuit en Ligne",
    
    // Upload Section
    uploadVideo: "Télécharger Vidéo:",
    dragDropVideo: "Glissez-déposez un fichier vidéo ici, ou cliquez pour sélectionner",
    dropVideoHere: "Déposez la vidéo ici...",
    supportedFormats: "Supporte MP4, MOV, AVI (Max 100MB)",
    
    // Messages
    videoUploadedSuccessfully: "Vidéo téléchargée avec succès!",
    videoUploadedDesc: "a été téléchargée.",
    invalidFileType: "Type de fichier invalide",
    invalidFileTypeDesc: "Veuillez télécharger un fichier vidéo.",
    noVideoUploaded: "Aucune vidéo téléchargée",
    noVideoUploadedDesc: "Veuillez d'abord télécharger un fichier vidéo.",
    promptGeneratedSuccessfully: "Prompt généré avec succès!",
    promptGeneratedDesc: "Votre prompt vidéo est prêt.",
    
    // Buttons and Actions
    analyzingVideo: "Analyse de la Vidéo...",
    generatePrompt: "Générer le Prompt",
    clearAll: "Effacer Tout",
    
    // Output
    generatedPromptTitle: "Prompt Généré:",
    
    // How It Works Section
    howVideoToPromptWorks: "Comment Fonctionne le Générateur Vidéo vers Prompt",
    videoPromptStep1Title: "Téléchargez Votre Vidéo",
    videoPromptStep1Desc: "Téléchargez n'importe quel fichier vidéo (MP4, MOV, AVI) jusqu'à 100MB. Notre système analysera le contenu visuel.",
    videoPromptStep2Title: "Analyse IA",
    videoPromptStep2Desc: "Notre IA avancée extrait les éléments visuels clés, scènes, objets et actions de votre vidéo.",
    videoPromptStep3Title: "Générer le Prompt",
    videoPromptStep3Desc: "Obtenez un prompt complet qui peut être utilisé pour générer du contenu vidéo similaire ou amélioré avec les plateformes IA.",
    
    // About Section
    aboutVideoToPromptGenerator: "À Propos du Générateur Vidéo vers Prompt",
    aboutVideoToPromptGeneratorDesc: "Notre Générateur Vidéo vers Prompt est un outil innovant alimenté par l'IA qui transforme vos vidéos existantes en prompts détaillés pour les plateformes de génération vidéo IA. En analysant le contenu de votre vidéo, notre IA avancée extrait les éléments visuels clés, scènes, objets et actions pour créer des prompts complets qui peuvent être utilisés pour générer du contenu vidéo similaire ou amélioré. Cet outil est parfait pour les créateurs de contenu, marketeurs et producteurs vidéo qui veulent exploiter leur contenu existant pour créer de nouvelles vidéos générées par IA avec un style et un message cohérents.",
    
    // FAQ Section
    videoToPromptFaqTitle: "Questions Fréquemment Posées",
    faqVideoFormatsQuestion: "Quels formats vidéo sont supportés?",
    faqVideoFormatsAnswer: "Nous supportons la plupart des formats vidéo courants incluant MP4, MOV, AVI, et plus. La taille maximale de fichier est de 100MB pour assurer un traitement et une analyse rapides.",
    faqPromptAccuracyQuestion: "Quelle est la précision des prompts générés?",
    faqPromptAccuracyAnswer: "Notre IA fournit une analyse très précise des éléments visuels, scènes et actions. Les prompts générés capturent l'essence et les composants clés de votre vidéo originale pour une génération vidéo IA efficace.",
    faqAIPlatformCompatibilityQuestion: "Puis-je utiliser les prompts avec n'importe quelle plateforme vidéo IA?",
    faqAIPlatformCompatibilityAnswer: "Oui! Les prompts générés sont conçus pour être compatibles avec la plupart des plateformes de génération vidéo IA incluant Runway, Pika Labs, Veo3, et autres. Vous pouvez modifier les prompts selon les besoins pour des plateformes spécifiques.",
    faqVideoSecurityQuestion: "Mon contenu vidéo est-il sécurisé?",
    faqVideoSecurityAnswer: "Absolument. Nous priorisons votre confidentialité et sécurité. Les vidéos sont traitées de manière sécurisée et ne sont pas stockées de façon permanente. Nous analysons seulement le contenu pour générer des prompts et ne conservons pas vos fichiers vidéo.",

    // Veo3 Prompt Generator - Structured Mode
    structuredMode: "Mode Structuré",
    chatMode: "Mode Chat",
    mainSubject: "Décrivez le sujet principal de la vidéo en détail?",
    mainSubjectPlaceholder: "Décrivez l'apparence du sujet principal",
    mainSubjectRequired: "Ce champ est requis",
    sceneAction: "Que se passe-t-il dans la scène?",
    sceneActionPlaceholder: "Que fait ou ressent le sujet dans la scène?",
    sceneActionRequired: "Ce champ est requis",
    dialogue: "Y a-t-il un dialogue ou un son spécifique que vous voulez dans la vidéo?",
    dialogueOptional: "(optionnel)",
    dialoguePlaceholder: "Ajoutez du dialogue, de la musique ou des effets sonores si nécessaire.",
    cameraMovement: "Comment la caméra doit-elle bouger ou cadrer la prise?",
    cameraOptional: "(optionnel)",
    cameraPlaceholder: "Vous pouvez décrire des choses comme zoom lent, vue aérienne, gros plan, plan de suivi, etc.",
    otherDetails: "D'autres détails que vous voulez inclure?",
    otherDetailsOptional: "(optionnel)",
    otherDetailsPlaceholder:
      "Cela pourrait être l'éclairage, la météo, les objets, l'ambiance, ou de petites touches dans l'environnement",
    subtitles: "Voulez-vous des sous-titres dans la vidéo?",
    subtitlesOptional: "(optionnel)",
    yes: "Oui",
    no: "Non",
    generate: "Générer",

    // Chat Mode
    chatPrompt:
      "Veuillez décrire votre idée clairement, spécifier les dimensions vidéo requises, et définir précisément votre audience cible. Exemple: Un astronaute embarquant dans une mission d'exploration vers la lune, vidéo verticale pour TikTok ciblant les passionnés d'espace et de corps célestes",
    chatPlaceholder: "Décrivez la vidéo que vous voulez créer...",
    generateVideoPrompt: "Générer un Prompt Vidéo",

    // Audiences
    generalAudience: "Audience Générale",
    teenagers: "Adolescents (13-19)",
    youngAdults: "Jeunes Adultes (20-35)",
    professionals: "Professionnels",
    parents: "Parents",
    seniors: "Seniors (55+)",

    // Script Lengths
    length15to30: "15-30 secondes",
    length30to60: "30-60 secondes",
    length1to2min: "1-2 minutes",
    length2to5min: "2-5 minutes",
    length5to10min: "5-10 minutes",

    // Script Styles
    conversational: "Conversationnel",
    professional: "Professionnel",
    energetic: "Énergique",
    educational: "Éducatif",
    storytelling: "Narratif",
    promotional: "Promotionnel",

    // Footer
    footerDescription:
      "Transformez vos idées en prompts vidéo puissants avec une technologie IA de pointe. Notre plateforme combine l'ingénierie de prompts avancée avec un design intuitif pour aider les créateurs de contenu, les marketeurs et les entreprises à générer des scripts vidéo convaincants et des prompts détaillés pour les outils de génération vidéo IA comme Veo 3 de Google.",
    
    // Footer Sections
    coreTools: "Outils Principaux",
    // tools: "Outils",
    company: "Entreprise",
    legal: "Légal",
    
    // Footer Links
    videoScriptGeneratorFooter: "Générateur de Script Vidéo",
    veo3PromptGeneratorFooter: "Générateur de Prompt Veo3",
    videoToPromptFooter: "Vidéo vers Prompt",
    videoTranscriptionFooter: "Transcription Vidéo",
    promptGuideFooter: "Guide des Prompts",
    promptLibraryFooter: "Bibliothèque de Prompts",
    aboutFooter: "À Propos",
    contactFooter: "Contact",
    blogFooter: "Blog",
    communityFooter: "Communauté",
    privacyPolicyFooter: "Politique de Confidentialité",
    termsOfServiceFooter: "Conditions d'Utilisation",
    disclaimerFooter: "Avertissement",
    sitemapFooter: "Plan du Site",
    
    // Footer Copyright
    allRightsReserved: "Tous droits réservés.",

    // Tools Pages
    videoToPrompt: "Vidéo vers Prompt",
    transcription: "Transcription",
    promptGuide: "Guide des Prompts",
    promptLibrary: "Bibliothèque de Prompts",

    // Hero Section
    aiPoweredBadge: "🚀 Génération de Contenu IA",
    heroFree: "Gratuit",

    // Feature Cards
    lightningFast: "Ultra Rapide",
    lightningFastDesc: "Obtenez des résultats en secondes avec des algorithmes IA optimisés",
    securePrivate: "Sécurisé et Privé",
    securePrivateDesc: "Sécurité de niveau entreprise avec suppression automatique des fichiers",
    advancedAI: "IA Avancée",
    advancedAIDesc: "Alimenté par Gemini 2.5 Pro avec basculement intelligent",
    multiFormat: "Multi-Format",
    multiFormatDesc: "Support pour les images, vidéos et fichiers audio",

    // Prompt Library Page
    promptLibraryTitle: "Bibliothèque de Prompts",
    promptLibrarySubtitle: "Découvrez des prompts professionnels pour divers styles vidéo et cas d'usage.",
    cinematicPortrait: "Portrait Cinématographique",
    natureLandscape: "Paysage Naturel",
    productShowcase: "Présentation Produit",
    urbanStreetScene: "Scène de Rue Urbaine",
    portrait: "Portrait",
    nature: "Nature",
    commercial: "Commercial",
    urban: "Urbain",
    landscape: "Paysage",
    goldenHour: "Heure Dorée",
    product: "Produit",
    clean: "Épuré",
    street: "Rue",
    documentary: "Documentaire",
    copy: "Copier",
    createYourOwnPrompts: "Créez Vos Propres Prompts",
    createYourOwnPromptsDesc: "Utilisez notre générateur alimenté par l'IA pour créer des prompts personnalisés adaptés à vos besoins spécifiques.",
    generateCustomPrompts: "Générer des Prompts Personnalisés",

    // Common
    loading: "Chargement...",
    error: "Erreur survenue",
    success: "Succès",
    required: "requis",
    optional: "optionnel",
  },
} as const

export function getTranslation(locale: Locale, key: keyof typeof translations.en): string {
  return translations[locale][key] || translations.en[key]
}
