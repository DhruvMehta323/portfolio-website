import { useState } from 'react';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const [selectedRole, setSelectedRole] = useState('SDE');

  // Import PDFs - adjust path based on your actual structure
  const resumes = {
    SDE: '/assets/SDE_Resume.pdf',
    ML: '/assets/ML_Resume.pdf',
    Data: '/assets/Data_Resume.pdf'
  };

  const roles = [
    { id: 'SDE', label: 'Software Engineer', color: '#3b82f6' },
    { id: 'ML', label: 'Machine Learning', color: '#8b5cf6' },
    { id: 'Data', label: 'Data Engineer', color: '#10b981' }
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch(resumes[selectedRole]);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Dhruv_Mehta_${selectedRole}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download PDF. Please check if the file exists.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb',
      padding: '40px 20px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px'
        }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#1f2937',
            marginBottom: '12px'
          }}>
            My Resumes
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280'
          }}>
            Select a role to view the corresponding resume
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              style={{
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: '600',
                border: selectedRole === role.id ? `3px solid ${role.color}` : '3px solid transparent',
                backgroundColor: selectedRole === role.id ? '#ffffff' : '#f3f4f6',
                color: selectedRole === role.id ? role.color : '#6b7280',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedRole === role.id ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
                transform: selectedRole === role.id ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedRole !== role.id) {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedRole !== role.id) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
            >
              <FileText size={18} style={{ 
                display: 'inline-block', 
                marginRight: '8px',
                verticalAlign: 'middle'
              }} />
              {role.label}
            </button>
          ))}
        </div>

        {/* Download Button */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '32px'
        }}>
          <button
            onClick={handleDownload}
            style={{
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: roles.find(r => r.id === selectedRole).color,
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* PDF Viewer */}
        <div style={{ 
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          border: `4px solid ${roles.find(r => r.id === selectedRole).color}`
        }}>
          <iframe
            src={resumes[selectedRole]}
            style={{
              width: '100%',
              height: '85vh',
              border: 'none',
              display: 'block'
            }}
            title={`${selectedRole} Resume`}
          />
        </div>

        {/* Info Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '32px',
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          <p>Choose the resume that best fits the role you're interested in</p>
        </div>
      </div>
    </div>
  );
}