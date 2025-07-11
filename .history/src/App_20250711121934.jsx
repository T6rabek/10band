import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Type,
  CheckCircle,
  Clock,
  Home,
  Menu,
  X,
  MonitorPlay,
  Target,
  Timer,
  Keyboard,
  MousePointerClick,
  AlertTriangle,
  AlignLeft,
  Award,
  Lightbulb,
} from 'lucide-react';

// --- MOCK DATA ---
const IELTS_WORDS = [
  'analyze',
  'approach',
  'assess',
  'assume',
  'authority',
  'available',
  'benefit',
  'concept',
  'consist',
  'context',
  'create',
  'data',
  'define',
  'derive',
  'distribute',
  'economy',
  'environment',
  'establish',
  'estimate',
  'evidence',
  'factor',
  'finance',
  'formula',
  'function',
  'identify',
  'income',
  'indicate',
  'individual',
  'interpret',
  'involve',
  'issue',
  'labour',
  'legal',
  'legislate',
  'major',
  'method',
  'occur',
  'percent',
  'period',
  'policy',
  'principle',
  'proceed',
  'process',
  'require',
  'research',
  'respond',
  'role',
  'section',
  'sector',
  'significant',
  'similar',
  'source',
  'specific',
  'structure',
  'theory',
  'vary',
  'achieve',
  'acquire',
  'administrate',
  'affect',
  'appropriate',
  'aspect',
  'assist',
  'category',
  'chapter',
  'commission',
  'community',
  'complex',
  'compute',
  'conclude',
  'conduct',
  'consequent',
  'construct',
  'consume',
  'credit',
  'culture',
  'design',
  'distinct',
  'element',
  'equate',
  'evaluate',
  'feature',
  'final',
  'focus',
  'impact',
  'injure',
  'institute',
  'invest',
  'item',
  'journal',
  'maintain',
  'normal',
  'obtain',
  'participate',
  'perceive',
  'positive',
  'potential',
  'previous',
  'primary',
  'purchase',
  'range',
  'region',
  'regulate',
  'relevant',
  'reside',
  'resource',
  'restrict',
  'secure',
  'seek',
  'select',
  'site',
  'strategy',
  'survey',
  'tradition',
  'transfer',
  'unpaid',
  'compulsory',
  'programmes',
  'agree',
  'disagree',
  'community',
  'service',
];

const generateWords = count => {
  let words = [];
  for (let i = 0; i < count; i++) {
    words.push(IELTS_WORDS[Math.floor(Math.random() * IELTS_WORDS.length)]);
  }
  return words.join(' ');
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'writing':
        return <IELTSWritingPractice />;
      case 'typing':
        return <TypingTrainer />;
      case 'checker':
        return <WritingChecker />;
      case 'simulator':
        return <CBTSimulator />;
      case 'tips':
        return <IELTSTips />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const NavLink = ({ page, children }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        currentPage === page
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  10Band
                </span>
              </button>
            </div>
            <nav className="hidden md:flex md:items-center md:space-x-2">
              <NavLink page="home">
                <Home size={18} />
                <span>Home</span>
              </NavLink>
              <NavLink page="writing">
                <BookOpen size={18} />
                <span>Practice</span>
              </NavLink>
              <NavLink page="typing">
                <Type size={18} />
                <span>Typing</span>
              </NavLink>
              <NavLink page="checker">
                <CheckCircle size={18} />
                <span>AI Checker</span>
              </NavLink>
              <NavLink page="simulator">
                <MonitorPlay size={18} />
                <span>Simulator</span>
              </NavLink>
              <NavLink page="tips">
                <Lightbulb size={18} />
                <span>Tips</span>
              </NavLink>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink page="home">
                <Home size={18} />
                <span>Home</span>
              </NavLink>
              <NavLink page="writing">
                <BookOpen size={18} />
                <span>Practice</span>
              </NavLink>
              <NavLink page="typing">
                <Type size={18} />
                <span>Typing</span>
              </NavLink>
              <NavLink page="checker">
                <CheckCircle size={18} />
                <span>AI Checker</span>
              </NavLink>
              <NavLink page="simulator">
                <MonitorPlay size={18} />
                <span>Simulator</span>
              </NavLink>
              <NavLink page="tips">
                <Lightbulb size={18} />
                <span>Tips</span>
              </NavLink>
            </div>
          </div>
        )}
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} 10Band IELTS Prep. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- HOME PAGE ---
const HomePage = ({ setCurrentPage }) => (
  <div className="text-center">
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
        Your Ultimate IELTS CBT Toolkit
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        From zero to hero. Everything you need to conquer the computer-based
        test with confidence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<BookOpen className="text-blue-500" size={32} />}
          title="Writing Practice"
          description="Real exam questions with timer and word count."
          onClick={() => setCurrentPage('writing')}
        />
        <FeatureCard
          icon={<Type className="text-green-500" size={32} />}
          title="Typing Trainer"
          description="Boost your WPM with custom time and word goals."
          onClick={() => setCurrentPage('typing')}
        />
        <FeatureCard
          icon={<CheckCircle className="text-purple-500" size={32} />}
          title="AI Writing Checker"
          description="Get actionable feedback to improve your essays."
          onClick={() => setCurrentPage('checker')}
        />
        <FeatureCard
          icon={<MonitorPlay className="text-red-500" size={32} />}
          title="CBT Simulator"
          description="Experience the Listening, Reading, and Writing modules."
          onClick={() => setCurrentPage('simulator')}
        />
        <FeatureCard
          icon={<Lightbulb className="text-yellow-500" size={32} />}
          title="Expert Tips"
          description="Learn key strategies for a higher band score."
          onClick={() => setCurrentPage('tips')}
        />
        {/* <FeatureCard
          icon={<Award className="text-indigo-500" size={32} />}
          title="Premium Feedback"
          description="Get your writing reviewed by a human expert. (Soon!)"
          onClick={() => {}}
          isSoon={true}
        /> */}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description, onClick, isSoon }) => (
  <button
    onClick={onClick}
    disabled={isSoon}
    className="bg-gray-50 hover:bg-white hover:shadow-xl p-6 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-2 border group disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
  >
    <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    {isSoon && (
      <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        SOON
      </span>
    )}
  </button>
);

// --- IELTS WRITING PRACTICE ---
const IELTSWritingPractice = () => {
  // This component remains largely the same as it's a solid, simple practice tool.
  // Design is inherited from the main app's refresh.
  const [task, setTask] = useState('Task 1');
  const [text, setText] = useState('');
  const [time, setTime] = useState(60 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    let interval = null;
    if (timerActive && time > 0) {
      interval = setInterval(() => setTime(t => t - 1), 1000);
    } else if (time === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, time]);

  const formatTime = s =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(
      2,
      '0'
    )}`;
  const handleReset = () => {
    setTimerActive(false);
    setTime(60 * 60);
    setText('');
  };
  const setTimerPreset = m => {
    setTime(m * 60);
    setTimerActive(true);
  };

  const task1Question =
    'The chart below shows the changes in three different areas of crime in Manchester city centre from 2003-2012. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.';
  const task2Question =
    'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?';

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        IELTS Writing Practice
      </h2>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setTask('Task 1')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              task === 'Task 1' ? 'bg-blue-600 text-white shadow' : ''
            }`}
          >
            Task 1
          </button>
          <button
            onClick={() => setTask('Task 2')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              task === 'Task 2' ? 'bg-blue-600 text-white shadow' : ''
            }`}
          >
            Task 2
          </button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
          <Clock size={20} className="text-gray-500" />
          <span className="text-lg font-mono font-semibold text-gray-700">
            {formatTime(time)}
          </span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
          <span className="text-sm font-medium text-gray-600">Words:</span>
          <span className="text-lg font-semibold text-gray-700">
            {wordCount}
          </span>
        </div>
      </div>
      <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
        <h3 className="font-semibold text-gray-800">{task} Question:</h3>
        <p className="text-gray-700 mt-1">
          {task === 'Task 1' ? task1Question : task2Question}
        </p>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setTimerActive(!timerActive)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          {timerActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => setTimerPreset(60)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          60 Min
        </button>
        <button
          onClick={() => setTimerPreset(40)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          40 Min
        </button>
        <button
          onClick={() => setTimerPreset(20)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          20 Min
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder={`Start writing your ${task} response here...`}
      />
    </div>
  );
};

// --- TYPING TRAINER (OVERHAULED & FIXED) ---
const TypingTrainer = () => {
  const [mode, setMode] = useState('time'); // 'time' or 'words'
  const [config, setConfig] = useState(30); // 30s or 30 words
  const [words, setWords] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [status, setStatus] = useState('waiting'); // waiting, running, finished
  const [timeLeft, setTimeLeft] = useState(config);
  const inputRef = useRef(null);

  // FIX: Focus the input field only after it has been rendered.
  useEffect(() => {
    if (status === 'running' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [status]);

  useEffect(() => {
    if (status === 'running' && mode === 'time') {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, mode]);

  const startTest = () => {
    const wordCount = mode === 'time' ? 200 : config;
    setWords(generateWords(wordCount).split(' '));
    setStatus('running');
    setTypedText('');
    setCurrentWordIndex(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setTimeLeft(config);
    // The focus call is now handled by the useEffect hook above.
  };

  const handleKeyDown = e => {
    if (e.keyCode === 32) {
      // Spacebar
      e.preventDefault();
      const currentWord = words[currentWordIndex];
      const typedWord = typedText.trim();

      for (let i = 0; i < typedWord.length; i++) {
        if (typedWord[i] === currentWord[i]) {
          setCorrectChars(c => c + 1);
        } else {
          setIncorrectChars(c => c + 1);
        }
      }
      // Add 1 correct char for the space
      setCorrectChars(c => c + 1);

      if (
        currentWordIndex === words.length - 1 ||
        (mode === 'words' && currentWordIndex === config - 1)
      ) {
        setStatus('finished');
      }

      setCurrentWordIndex(i => i + 1);
      setTypedText('');
    }
  };

  const wpm =
    status === 'finished'
      ? Math.round(correctChars / 5 / ((config - timeLeft) / 60))
      : 0;
  const accuracy =
    status === 'finished'
      ? Math.round((correctChars / (correctChars + incorrectChars)) * 100)
      : 0;
  const wordsTyped = status === 'finished' ? currentWordIndex : 0;

  const ModeButton = ({ value, label, icon }) => (
    <button
      onClick={() => {
        setMode(value);
        setStatus('waiting');
      }}
      className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg transition-all ${
        mode === value ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200'
      }`}
    >
      {icon} {label}
    </button>
  );
  const ConfigButton = ({ value, label }) => (
    <button
      onClick={() => {
        setConfig(value);
        setStatus('waiting');
      }}
      className={`flex-1 p-3 rounded-lg transition-all ${
        config === value ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Typing Trainer</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-2 p-2 bg-gray-100 rounded-xl">
          <ModeButton value="time" label="Time" icon={<Timer size={20} />} />
          <ModeButton value="words" label="Words" icon={<Target size={20} />} />
        </div>
        <div className="flex-1 flex gap-2 p-2 bg-gray-100 rounded-xl">
          {mode === 'time' ? (
            <>
              {' '}
              <ConfigButton value={15} label="15s" />{' '}
              <ConfigButton value={30} label="30s" />{' '}
              <ConfigButton value={60} label="60s" />{' '}
            </>
          ) : (
            <>
              {' '}
              <ConfigButton value={10} label="10" />{' '}
              <ConfigButton value={25} label="25" />{' '}
              <ConfigButton value={50} label="50" />{' '}
            </>
          )}
        </div>
      </div>

      {status !== 'running' && (
        <div className="text-center my-12">
          {status === 'waiting' && (
            <button
              onClick={startTest}
              className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
            >
              Start Test
            </button>
          )}
          {status === 'finished' && (
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">WPM</p>
                  <p className="text-4xl font-bold text-blue-600">{wpm}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Accuracy</p>
                  <p className="text-4xl font-bold text-green-600">
                    {accuracy}%
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Words</p>
                  <p className="text-4xl font-bold text-purple-600">
                    {wordsTyped}
                  </p>
                </div>
              </div>
              <button
                onClick={startTest}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {status === 'running' && (
        <div>
          <div className="text-center text-2xl font-mono font-bold text-blue-600 mb-4">
            {mode === 'time' ? timeLeft : `${currentWordIndex} / ${config}`}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-2xl font-mono h-40 overflow-hidden relative">
            <div
              className="absolute transition-all duration-300"
              style={{ top: `-${currentWordIndex * 2.5}rem` }}
            >
              {words.map((word, index) => (
                <span key={index} className="leading-10 block">
                  {word.split('').map((char, charIndex) => (
                    <span key={charIndex}>{char}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={typedText}
            onKeyDown={handleKeyDown}
            onChange={e => setTypedText(e.target.value)}
            className="w-full p-4 mt-4 text-2xl font-mono border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            disabled={status !== 'running'}
          />
        </div>
      )}
    </div>
  );
};

// --- AI WRITING CHECKER (OVERHAULED) ---
const WritingChecker = () => {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckWriting = async () => {
    if (!text.trim()) {
      setError('Please paste your writing first.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setFeedback(null);

    const prompt = `
      You are an expert IELTS writing examiner providing actionable feedback. Analyze the following IELTS essay.
      Provide specific, constructive advice for each criterion. Use headings for each section.
      For each point, first explain the issue, then give a clear example of how to fix it. Be really specific.
      Focus on the following criteria:
      - Task Response
      - Coherence and Cohesion
      - Lexical Resource
      - Grammatical Range and Accuracy
      
      1. Task Response: Does the essay fully address the task? Are all parts of the question answered?
      2. Coherence and Cohesion: Is the essay logically organized? Are ideas connected clearly?
      3. Lexical Resource: Is vocabulary used accurately and appropriately? Are there any errors?
      4. Grammatical Range and Accuracy: Are sentences grammatically correct? Is there a variety of sentence structures?
      
      Provide feedback in markdown format. Use bullet points for each point of feedback.
      Do not provide a band score, just detailed, actionable advice.
      
      Here is the essay to analyze:
      
      The essay is:
      ---
      ${text}
      ---
      
      Structure your response using these exact markdown headings:
      ### Task Response
      ### Coherence and Cohesion
      ### Lexical Resource
      ### Grammatical Range and Accuracy
      
      Under each heading, provide bullet points with actionable advice. Do not provide a band score.
    `;

    try {
      const payload = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      };
      const apiKey = 'AIzaSyCJHOV7u25DQOsdrw1mpEv2nT8_HdZHEOw';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API error: ${response.statusText}`);
      const result = await response.json();
      const feedbackText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (feedbackText) {
        setFeedback(parseFeedback(feedbackText));
      } else {
        throw new Error('Invalid response from API.');
      }
    } catch (e) {
      setError('Sorry, an error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const parseFeedback = markdown => {
    const sections = {
      'Task Response': [],
      'Coherence and Cohesion': [],
      'Lexical Resource': [],
      'Grammatical Range and Accuracy': [],
    };
    let currentSection = null;
    markdown.split('\n').forEach(line => {
      if (line.startsWith('### ')) {
        currentSection = line.replace('### ', '').trim();
      } else if (currentSection && sections[currentSection] && line.trim()) {
        sections[currentSection].push(line.trim().replace(/^\* /, ''));
      }
    });
    return sections;
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        AI Writing Checker
      </h2>
      <p className="text-gray-600 mb-6">
        Get expert, actionable feedback to instantly improve your essay.
      </p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your essay here..."
      />
      <div className="mt-6 text-center">
        <button
          onClick={handleCheckWriting}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-lg font-semibold disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Get Feedback'}
        </button>
      </div>
      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="mt-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">AI examiner is reading...</p>
        </div>
      )}
      {feedback && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Feedback Report
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeedbackCard
              title="Task Response"
              points={feedback['Task Response']}
            />
            <FeedbackCard
              title="Coherence and Cohesion"
              points={feedback['Coherence and Cohesion']}
            />
            <FeedbackCard
              title="Lexical Resource"
              points={feedback['Lexical Resource']}
            />
            <FeedbackCard
              title="Grammatical Range and Accuracy"
              points={feedback['Grammatical Range and Accuracy']}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const FeedbackCard = ({ title, points }) => (
  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
    <h4 className="font-bold text-lg text-gray-800 mb-3">{title}</h4>
    <ul className="space-y-3 list-disc list-inside text-gray-700">
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

// --- CBT SIMULATOR (OVERHAULED) ---
const CBTSimulator = () => {
  const [activeModule, setActiveModule] = useState('Writing');

  const ModuleButton = ({ name }) => (
    <button
      onClick={() => setActiveModule(name)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        activeModule === name
          ? 'bg-blue-600 text-white'
          : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
      }`}
    >
      {name}
    </button>
  );

  const renderModule = () => {
    switch (activeModule) {
      case 'Listening':
        return <ListeningModule />;
      case 'Reading':
        return <ReadingModule />;
      case 'Writing':
      default:
        return <WritingModule />;
    }
  };

  return (
    <div className="bg-gray-800 p-2 rounded-xl shadow-2xl font-helvetica, arial, sans-serif">
      <div className="bg-gray-700 flex justify-between items-center p-2 rounded-t-lg">
        <div className="flex items-center gap-2">
          <ModuleButton name="Listening" />
          <ModuleButton name="Reading" />
          <ModuleButton name="Writing" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-500">
            Next
          </button>
        </div>
      </div>
      {renderModule()}
      <div className="bg-gray-200 p-2 rounded-b-lg">
        <p className="text-xs text-center text-gray-600">
          This is a simulation. Interface © British Council. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

const WritingModule = () => {
  const [text, setText] = useState('');
  const [time, setTime] = useState(60 * 60);
  useEffect(() => {
    const timer = setInterval(() => setTime(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const formatTime = s =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(
      2,
      '0'
    )}`;

  return (
    <>
      <div className="bg-gray-700 flex justify-end items-center p-2 text-white">
        Time remaining:{' '}
        <span className="font-bold ml-2">{formatTime(time)}</span>
      </div>
      <div className="flex flex-col md:flex-row h-[70vh]">
        <div className="w-full md:w-1/2 bg-white p-4 overflow-y-auto border-r border-gray-300">
          <h3 className="font-bold mb-2">WRITING TASK 2</h3>
          <p className="text-sm mb-4">
            You should spend about 40 minutes on this task.
          </p>
          <p className="text-sm mb-4">
            <b>
              Some people believe that unpaid community service should be a
              compulsory part of high school programmes. To what extent do you
              agree or disagree?
            </b>
          </p>
          <p className="text-sm">Write at least 250 words.</p>
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 flex flex-col">
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            className="flex-grow w-full border border-gray-300 p-2 text-sm focus:outline-none"
            placeholder="Type your answer here..."
          ></textarea>
          <div className="pt-2 text-right text-sm font-bold text-gray-600">
            Word count: {wordCount}
          </div>
        </div>
      </div>
    </>
  );
};

const ComingSoonModule = ({ title }) => (
  <div className="h-[70vh] bg-white flex flex-col items-center justify-center text-center p-4">
    <h3 className="text-2xl font-bold text-gray-800">{title} Module</h3>
    <p className="text-gray-600 mt-2">
      This feature is currently under development.
    </p>
    <p className="mt-4 bg-yellow-100 text-yellow-800 p-3 rounded-lg text-sm">
      Our team is working hard to bring you a realistic {title.toLowerCase()}{' '}
      simulation. Stay tuned!
    </p>
  </div>
);

const ListeningModule = () => <ComingSoonModule title="Listening" />;
const ReadingModule = () => <ComingSoonModule title="Reading" />;

// --- IELTS TIPS PAGE ---
const IELTSTips = () => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Expert IELTS Tips</h2>
    <div className="space-y-8">
      <TipCard
        title="Get Comfortable Typing Fast"
        icon={<Keyboard className="text-blue-500" />}
      >
        <p>
          Unlike paper-based IELTS, you'll be typing your answers. Practice
          typing essays regularly so you don't waste time fixing typos or
          thinking where keys are.
        </p>
      </TipCard>

      <TipCard
        title="Use On-Screen Tools Smartly"
        icon={<MousePointerClick className="text-green-500" />}
      >
        <p>
          Use the built-in word counter and copy-paste shortcuts (like
          Ctrl+C/Ctrl+V) to organize your writing fast. But don’t rely on
          spellcheck — it’s not available!
        </p>
      </TipCard>

      <TipCard
        title="Don’t Panic Without Pen & Paper"
        icon={<AlertTriangle className="text-yellow-500" />}
      >
        <p>
          You won’t be able to draw outlines or scratch ideas like on paper. So
          train yourself to plan mentally or in a few typed lines. Keep your
          structure clear and clean.
        </p>
      </TipCard>

      <TipCard
        title="Master Paragraph Formatting"
        icon={<AlignLeft className="text-purple-500" />}
      >
        <p>
          Use proper spacing, indentation (just hit Enter twice), and leave one
          empty line between paragraphs. This makes your writing easier to read
          on screen.
        </p>
      </TipCard>

      <TipCard
        title="Watch the Timer, Not the Page"
        icon={<Clock className="text-red-500" />}
      >
        <p>
          In CD IELTS, there’s a visible countdown timer. Don’t obsess over your
          essay length — just manage 20 mins for Task 1 and 40 mins for Task 2
          like a boss.
        </p>
      </TipCard>
    </div>
  </div>
);

const TipCard = ({ title, icon, children }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border">
    <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);
