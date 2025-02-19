document.addEventListener('DOMContentLoaded', () => {
    const codeTyping = document.getElementById('code-typing');
    const cursor = document.getElementById('cursor');
    const livePreview = document.getElementById('live-preview');
    
    // Code chunks
    const htmlCodeChunks = [
    '<span class="html-tag">&lt;div</span> <span class="html-attribute">class</span><span class="html-equals">=</span><span class="html-quote">"</span><span class="html-text">profile</span><span class="html-quote">"</span><span class="html-tag">&gt;</span>\n',
    '  <span class="html-tag">&lt;h1&gt;</span><span class="html-text">Profile</span><span class="html-tag">&lt;/h1&gt;</span>\n',
    '  <span class="html-tag">&lt;p&gt;</span><span class="html-text">Full Stack Developer specializing in </span>',
    '<span class="html-tag">&lt;span</span> <span class="html-attribute">class</span><span class="html-equals">=</span><span class="html-quote">"</span><span class="html-text">highlight</span><span class="html-quote">"</span><span class="html-tag">&gt;</span><span class="html-text">React</span><span class="html-tag">&lt;/span&gt;</span><span class="html-text">, </span>',
    '<span class="html-tag">&lt;span</span> <span class="html-attribute">class</span><span class="html-equals">=</span><span class="html-quote">"</span><span class="html-text">highlight</span><span class="html-quote">"</span><span class="html-tag">&gt;</span><span class="html-text">Node.js</span><span class="html-tag">&lt;/span&gt;</span><span class="html-text">, and </span>',
    '<span class="html-tag">&lt;span</span> <span class="html-attribute">class</span><span class="html-equals">=</span><span class="html-quote">"</span><span class="html-text">highlight</span><span class="html-quote">"</span><span class="html-tag">&gt;</span><span class="html-text">responsive design</span><span class="html-tag">&lt;/span&gt;</span><span class="html-text">.</span><span class="html-tag">&lt;/p&gt;</span>\n',
    '  <span class="html-tag">&lt;p&gt;</span><span class="html-text">I love building front-end, back-end, or full-stack web apps, turning ideas into user-friendly experiences with clean design and efficient</span><span class="html-tag">&lt;/p&gt;</span>\n',
    '  <span class="html-tag">&lt;p&gt;</span><span class="html-text">Some of my key projects:</span><span class="html-tag">&lt;/p&gt;</span>\n',
    '  <span class="html-tag">&lt;ul&gt;</span>\n',
    '    <span class="html-tag">&lt;li&gt;</span><span class="html-text">Developed a real-time chat application</span><span class="html-tag">&lt;/li&gt;</span>\n',
    '    <span class="html-tag">&lt;li&gt;</span><span class="html-text">Climate data visualization web app</span><span class="html-tag">&lt;/li&gt;</span>\n',
    '    <span class="html-tag">&lt;li&gt;</span><span class="html-text">Built a employee management/time tracking web app</span><span class="html-tag">&lt;/li&gt;</span>\n',
    '  <span class="html-tag">&lt;/ul&gt;</span>\n',
    '  <span class="html-tag">&lt;p&gt;</span><span class="html-text">Currently open to new opportunities and collaborations!</span><span class="html-tag">&lt;/p&gt;</span>\n',
    '<span class="html-tag">&lt;/div&gt;</span>'
    ];
    
    // Plain html elements
    const previewElements = [
    '<h1>Profile</h1>',
    '<p>Full Stack Developer specializing in <span class="highlight">React</span>, <span class="highlight">Node.js</span>, and <span class="highlight">responsive design</span>.</p>',
    '<p>I love building front-end, back-end, or full-stack web apps, turning ideas into user-friendly experiences with clean design and efficient code.</p>',
    '<p>Some of my key projects:</p>',
    '<ul>',
        '<li>Developed a real-time chat web app</li>',
        '<li>Created a Climate data visualization web app</li>',
        '<li>Built a employee management/time tracking web app</li>',
    '</ul>',
    '<p>Currently open to new opportunities and collaborations!</p>'
    ];
    
    let currentChunk = 0;
    let previewIndex = 0;
    const typingSpeed = 50;
    
    // color formatting
    function typeText() {
    if (currentChunk < htmlCodeChunks.length) {
        // Add the current chunk at once
        codeTyping.innerHTML += htmlCodeChunks[currentChunk];
        
        if (shouldAddPreviewElement(currentChunk)) {
        if (previewIndex < previewElements.length) {
            // Add element to live preview
            livePreview.innerHTML += previewElements[previewIndex];
            // Animate the added element
            setTimeout(() => {
            const elements = livePreview.children;
            const newElement = elements[elements.length - 1];
            newElement.style.opacity = 1;
            }, 10);
            previewIndex++;
        }
        }
        
        currentChunk++;
        
        // Continue with next chunk after a delay
        setTimeout(typeText, typingSpeed * 3);
    } else {
        // After typing
        setTimeout(() => {
        codeTyping.style.opacity = 0.3;
        codeTyping.style.filter = 'blur(6px)';

        cursor.style.opacity = 0.3;
        cursor.style.filter = 'blur(6px)'
        }, 1000);
    }
    }
    
    function shouldAddPreviewElement(chunkIndex) {
    const triggerPoints = {
        1: true,  // After h1 tag
        5: true,  // After first paragraph
        6: true,  // After second paragraph
        7: true,  // After "projects" paragraph
        8: true,  // After ul opening tag
        9: true,  // After first li
        10: true, // After second li
        11: true, // After third li
        12: true, // After ul closing tag
        13: true, // After final paragraph
    };
    
    return triggerPoints[chunkIndex] || false;
    }
    
    // Start
    setTimeout(typeText, 3500);
});

