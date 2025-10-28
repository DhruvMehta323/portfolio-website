import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f4f8 100%)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left side - Text content */}
          <div>
            <h1 style={{ 
              fontSize: '64px', 
              fontWeight: 'bold', 
              color: '#1e90ff',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Dhruv Mehta
            </h1>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '600', 
              color: '#2c3e50',
              marginBottom: '1.5rem'
            }}>
              Software Engineer
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#6c757d',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Passionate Software Engineer with expertise in AI, Machine Learning, and Full Stack Development. Currently pursuing Bachelor's in Computer Science and Engineering with a focus on Artificial Intelligence.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <Link 
                to="/resume"
                style={{
                  backgroundColor: '#1e90ff',
                  color: 'white',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1873cc'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1e90ff'}
              >
                View Resume
                <span>→</span>
              </Link>
              <Link 
                to="/contact"
                style={{
                  backgroundColor: 'white',
                  color: '#2c3e50',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid #e0e0e0',
                  transition: 'border-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#1e90ff'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/DhruvMehta323" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#6c757d', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#1e90ff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#6c757d'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-mehta-1798471b0/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#6c757d', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#1e90ff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#6c757d'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:dhruv.rj.mehta@gmail.com" 
                style={{ color: '#6c757d', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#1e90ff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#6c757d'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '400px',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              backgroundColor: 'white'
            }}>
              <img 
                src="/assets/Profile_pic.jpg" 
                alt="Dhruv Mehta"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section style={{ 
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#2c3e50',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            About Me
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#6c757d',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            I'm a passionate software engineer specializing in artificial intelligence and full-stack development. 
            With hands-on experience in machine learning research and production-grade application development, 
            I thrive on solving complex problems and building innovative solutions. My work spans from AI-powered 
            applications to scalable web and mobile platforms, always focused on creating impactful technology 
            that makes a difference.
          </p>
        </div>
      </section>

      {/* Research Interests Section */}
      <section style={{ 
        padding: '4rem 2rem',
        backgroundColor: '#f0f4f8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#2c3e50',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Research Interests
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {/* AI/ML Research Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '48px' }}>🧠</div>
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                AI/ML Research
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#6c757d',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Worked on Reinforcement Learning for fleet optimization during my research internship at IEOR, IIT Bombay, with a paper submitted to AAAI 2025.
              </p>
              <p style={{ 
                fontSize: '16px', 
                color: '#6c757d',
                lineHeight: '1.6'
              }}>
                Also developed TweetConnect, an AI-powered browser plugin that recommends civic authority mentions on X (formerly Twitter) using NLP, BERT, and location data — published at the 10th IEEE International Smart Cities Conference 2024.
              </p>
            </div>

            {/* Full Stack Development Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#1e90ff">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2.5-14v-2.5l5 3.5-5 3.5v-2.5h-4v-2h4zm9 6v2.5l-5-3.5 5-3.5v2.5h4v2h-4z"/>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Full Stack Web/App Development
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#6c757d',
                lineHeight: '1.6'
              }}>
                Skilled in the MERN & FARM stacks, I've built production-grade web and mobile apps using React, FastAPI, Android (Kotlin), ASP.NET, and more.
              </p>
            </div>

            {/* Applied ML Projects Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              gridColumn: 'span 2'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '48px' }}>🛰️</div>
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#2c3e50',
                marginBottom: '1rem'
              }}>
                Applied ML Projects
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#6c757d',
                lineHeight: '1.6'
              }}>
                From classifying aerosols with ISRO scientists to drone-based crop monitoring using YOLO for object detection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;