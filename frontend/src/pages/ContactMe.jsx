import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, GraduationCap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8',
      padding: '60px 20px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px'
        }}>
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: 'bold', 
            color: '#1a202c',
            marginBottom: '16px'
          }}>
            Let's get in touch!
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#4a5568',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out through the form below or my direct contact information.
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '30px'
            }}>
              Send Me a Message
            </h2>

            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '8px'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '8px'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '8px'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '8px'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, inquiry, or just say hello!"
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: '600',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{
              backgroundColor: '#e6f2ff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
            }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '30px'
              }}>
                Contact Information
              </h2>

              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                marginBottom: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  backgroundColor: '#bfdbfe',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={24} color="#3b82f6" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    Personal Email
                  </h3>
                  <a 
                    href="mailto:dhruv.rj.mehta@gmail.com"
                    style={{
                      color: '#3b82f6',
                      textDecoration: 'none',
                      fontSize: '16px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
                  >
                    dhruv.rj.mehta@gmail.com
              
                  </a>
                    <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px',
                    marginTop: '8px'
                  }}>
                    University Email
                  </h3>
                  <a 
                    href="mailto:dmeht35@uic.edu"
                    style={{
                      color: '#3b82f6',
                      textDecoration: 'none',
                      fontSize: '16px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
                  >
                    dmeht35@uic.edu
                  </a>

                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    marginTop: '4px'
                  }}>
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                marginBottom: '30px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  backgroundColor: '#bfdbfe',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={24} color="#3b82f6" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    Phone
                  </h3>
                  <p style={{
                    color: '#2d3748',
                    fontSize: '16px',
                    marginBottom: '4px'
                  }}>
                    +1 (312)-561-7320
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b'
                  }}>
                    Available 10AM-6PM CDT
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  backgroundColor: '#bfdbfe',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="#3b82f6" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    Location
                  </h3>
                  <p style={{
                    color: '#2d3748',
                    fontSize: '16px',
                    marginBottom: '4px'
                  }}>
                    Chicago, IL, 60607, United States
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b'
                  }}>
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
            }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '20px'
              }}>
                Connect with Me
              </h2>
              
              <div style={{ 
                display: 'flex', 
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://github.com/DhruvMehta323"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: '#f7fafc',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#2d3748',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a202c';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#1a202c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f7fafc';
                    e.currentTarget.style.color = '#2d3748';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <Github size={20} />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/dhruv-mehta-17984710"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: '#f7fafc',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#2d3748',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0077b5';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f7fafc';
                    e.currentTarget.style.color = '#2d3748';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="https://scholar.google.com/citations?user=URBmpzAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: '#f7fafc',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#2d3748',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4285f4';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#4285f4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f7fafc';
                    e.currentTarget.style.color = '#2d3748';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <GraduationCap size={20} />
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}