// Sample video data
const videos = [
    { id: 1, title: "Introduction to AI", videoUrl: "https://via.placeholder.com/300x200.mp4" },
    { id: 2, title: "Learn JavaScript", videoUrl: "https://via.placeholder.com/300x200.mp4" },
    { id: 3, title: "Understanding Python", videoUrl: "https://via.placeholder.com/300x200.mp4" }
  ];
  
  // Load videos into the video section
  const videoList = document.getElementById('videoList');
  videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = `
      <video controls>
        <source src="${video.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h4>${video.title}</h4>
    `;
    videoList.appendChild(videoItem);
  });
  
  // Chatbot functionality
  const chatbotContainer = document.getElementById('chatbot');
  const openChatbotBtn = document.getElementById('openChatbot');
  const closeChatBtn = document.getElementById('closeChat');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  
  // Open chatbot
  openChatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
  });
  
  // Close chatbot
  closeChatBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
  });
  
  // Send message in chatbot
  sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value;
    if (userMessage) {
      addMessage(userMessage, 'user');
      chatInput.value = '';
  
      // Simulate bot response
      setTimeout(() => {
        const botMessage = generateBotResponse(userMessage);
        addMessage(botMessage, 'bot');
      }, 1000);
    }
  });
  
  // Add message to chat body
  function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  // Simulate bot response logic
  function generateBotResponse(userMessage) {
    const defaultResponses = {
      hello: "Hello! How can I assist you with your learning today?",
      courses: "We offer a variety of courses including AI, Web Development, and Data Science.",
      help: "I'm here to assist you with any questions you have about the platform."
    };
  
    const key = userMessage.toLowerCase().split(" ")[0];
    return defaultResponses[key] || "I'm still learning! Can you please rephrase your question?";
  }
  