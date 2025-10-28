import React, { useState, useEffect, useMemo } from 'react';

/* ────────────────────── Small Grid Card ────────────────────── */
const ProjectCard = ({
  image,
  title,
  techStack,
  featured = false,
  onViewDetails,
}) => (
  <div
    style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      width: '320px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}
  >
    {/* Image */}
    <div style={{ height: '200px', overflow: 'hidden' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>

    {/* Content */}
    <div style={{ padding: '20px' }}>
      {/* Title + Featured */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}
        >
          {title}
        </h3>
        {featured && (
          <span
            style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              fontSize: '12px',
              fontWeight: 500,
              padding: '4px 8px',
              borderRadius: '12px',
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Tech Stack Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        {techStack.map((tag, i) => (
          <span
            key={i}
            style={{
              backgroundColor: '#f5f5f5',
              color: '#555',
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '16px',
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <button
        onClick={onViewDetails}
        style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #e0e0e0',
          color: '#555',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          width: '100%',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e8f0fe')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
      >
        View Details
      </button>
    </div>
  </div>
);

/* ────────────────────── Full‑Size Modal ────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.05)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div style={{ height: '300px', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: '32px' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            {project.title}
          </h2>

          {project.featured && (
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                fontSize: '13px',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '12px',
                marginBottom: '16px',
              }}
            >
              Featured
            </span>
          )}

          {/* Description */}
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444', marginBottom: '24px' }}>
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600, color: '#333' }}>
              Technologies
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    fontSize: '13px',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#24292e',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.11.81 2.24 0 1.62-.015 2.925-.015 3.315 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}

            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────── Main App ────────────────────── */
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI', 'ML', 'Web', 'Computer Vision', 'NLP', 'Full Stack'];

  /* ---------- Fetch Projects ---------- */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const url =
          selectedCategory === 'All'
            ? `${import.meta.env.VITE_API_URL}/projects`
            : `${import.meta.env.VITE_API_URL}/projects/${selectedCategory}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedCategory]);

  /* ---------- Client‑side Search ---------- */
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projects;
    const lower = searchTerm.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.techStack.some((t) => t.toLowerCase().includes(lower)) ||
        p.category.some((c) => c.toLowerCase().includes(lower))
    );
  }, [projects, searchTerm]);

  return (
    <>
      {/* ---------- Layout ---------- */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto 32px auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Search */}
          <div style={{ position: 'relative', width: '300px' }}>
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 40px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white',
              }}
            />
            <svg
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#999',
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              backgroundColor: 'white',
              padding: '4px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: selectedCategory === cat ? 600 : 500,
                  color: selectedCategory === cat ? 'white' : '#666',
                  backgroundColor: selectedCategory === cat ? '#1976d2' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== cat) {
                    e.target.style.backgroundColor = '#e3f2fd';
                    e.target.style.color = '#1976d2';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== cat) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#666';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            Loading projects...
          </div>
        )}
        {error && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#d32f2f' }}>
            Error: {error}
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  image={project.image}
                  title={project.title} 
                  techStack={project.techStack}
                  featured={project.featured || false}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '40px',
                  color: '#666',
                  fontSize: '16px',
                }}
              >
                No projects found matching your criteria.
              </div>
            )}
          </div>
        )}

        {/* Results count */}
        {!loading && !error && (
          <div
            style={{
              maxWidth: '1200px',
              margin: '16px auto 0 auto',
              color: '#666',
              fontSize: '14px',
              textAlign: 'right',
            }}
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        )}
      </div>

      {/* ---------- Modal ---------- */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}