import React, { useEffect, useState } from 'react';
import axios from "axios";
import SkillItem from "../components/SkillItem.jsx";
export default function SkillnExp(){
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const [experiences, setExperiences] = useState([]);
  const [certs, setCerts] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/skills") // Backend endpoint
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/experience`)
      .then((res) => setExperiences(res.data))
      .catch((err) => console.error("Error fetching experiences:", err));
  }, []);
useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/education`)
      .then((res) => setEducations(res.data))
      .catch((err) => console.error("Error fetching education data:", err));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/certifications`)
      .then((res) => setCerts(res.data))
      .catch((err) => console.error("Error fetching certifications:", err));
  }, []);

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) acc[skill.type] = [];
    acc[skill.type].push(skill);
    return acc;
  }, {});

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading skills...</p>;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to right, #eff6ff, #dbeafe)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            My Journey and Expertise
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
            A showcase of my professional journey, technical skills, and educational background. I'm passionate about applying technology to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div
        style={{
          justifyContent: "center",
          marginBottom: "1rem",
          color: "#2563eb",
          fontSize: "0.875rem",
          fontWeight: "600",
        }}
      >
        Technical Proficiency
      </div>

      <h3
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "0.5rem",
        }}
      >
        Skills & Expertise
      </h3>

      <p style={{ color: "#4b5563", marginBottom: "2rem" }}>
        A comprehensive overview of my technical skills across various domains.
      </p>

      {Object.entries(grouped).map(([type, skills]) => (
        <div key={type} style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <h4 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
              {type}
            </h4>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {skills.map((skill) => (
              <SkillItem key={skill._id || skill.name} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </section>

      {/* Work Experience */}
<section style={{ backgroundColor: "white", padding: "4rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            marginBottom: "1rem",
            color: "#2563eb",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          Professional Journey
        </div>
        <h3
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "0.5rem",
          }}
        >
          Work Experience
        </h3>
        <p style={{ color: "#4b5563", marginBottom: "3rem" }}>
          My professional journey and the organizations I've had the privilege to
          work with.
        </p>

        {experiences.map((exp, index) => {
          const startDate = new Date(exp.startDate).toLocaleString("default", {
            month: "short",
            year: "numeric",
          });
          const endDate = new Date(exp.endDate).toLocaleString("default", {
            month: "short",
            year: "numeric",
          });
          const isLeft = index % 2 === 0; // alternate left/right

          return (
            <div
              key={exp._id || index}
              style={{
                marginBottom: "3rem",
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
              }}
            >
              <div
                style={{
                  width: "48%",
                  display: "flex",
                  gap: "1rem",
                  flexDirection: isLeft ? "row" : "row-reverse",
                  textAlign: isLeft ? "left" : "right",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    backgroundColor: "#2563eb",
                    flexShrink: 0,
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#2563eb",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {startDate} - {endDate}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {exp.jobrole}
                  </h4>
                  <div style={{ color: "#374151", marginBottom: "1rem" }}>
                    {exp.company} — {exp.location}
                  </div>
                  <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                    <strong>Tech Stack:</strong> {exp.techStack.join(", ")}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {exp.workDone.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          marginBottom: "0.75rem",
                          justifyContent: isLeft ? "flex-start" : "flex-end",
                        }}
                      >
                        {isLeft ? (
                          <>
                            <span style={{ color: "#2563eb", marginTop: "0.25rem" }}>✓</span>
                            <span style={{ color: "#4b5563" }}>{item}</span>
                          </>
                        ) : (
                          <>
                            <span style={{ color: "#4b5563" }}>{item}</span>
                            <span style={{ color: "#2563eb", marginTop: "0.25rem" }}>✓</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

      {/* Education */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div
        style={{
          marginBottom: "1rem",
          color: "#2563eb",
          fontSize: "0.875rem",
          fontWeight: "600",
        }}
      >
        Academic Background
      </div>
      <h3
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "0.5rem",
        }}
      >
        Education
      </h3>
      <p style={{ color: "#4b5563", marginBottom: "3rem" }}>
        My educational journey and the institutions that have shaped my knowledge.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {educations.length > 0 ? (
          educations.map((edu) => {
            const start = new Date(edu.startDate).toLocaleString("default", {
              month: "short",
              year: "numeric",
            });
            const end = new Date(edu.endDate).toLocaleString("default", {
              month: "short",
              year: "numeric",
            });

            return (
              <EducationCard
                key={edu._id}
                institute={edu.institute}
                location={edu.location}
                degree={edu.degree}
                duration={`Duration: ${start} - ${end}`}
                courses={edu.courses}
              />
            );
          })
        ) : (
          <p style={{ color: "#6b7280" }}>Loading education data...</p>
        )}
      </div>
    </section>

      {/* Certifications */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            marginBottom: "1rem",
            color: "#2563eb",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          Professional Development
        </div>
        <h3
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "0.5rem",
          }}
        >
          Certifications
        </h3>
        <p style={{ color: "#4b5563", marginBottom: "3rem" }}>
          Professional certifications that have enhanced my skill set.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {certs.length > 0 ? (
            certs.map((cert) => (
              <CertCard
                key={cert._id}
                title={cert.title}
                issuer={cert.details}
              />
            ))
          ) : (
            <p style={{ color: "#6b7280" }}>Loading certifications...</p>
          )}
        </div>
      </div>
    </section>

        </div>
  );
};


const EducationCard = ({ institute, location, degree, duration, courses }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h4
        style={{
          fontSize: "1.125rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "0.5rem",
        }}
      >
        {institute}
      </h4>
      <div style={{ color: "#2563eb", fontWeight: "500", marginBottom: "1rem" }}>
        {location}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ color: "#374151", fontWeight: "500" }}>{degree}</div>
        <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>{duration}</div>
      </div>
      {courses && courses.length > 0 && (
        <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>
          <div style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Courses & Highlights</div>
          <ul style={{ paddingLeft: "1rem", margin: 0 }}>
            {courses.map((course, index) => (
              <li key={index} style={{ marginBottom: "0.25rem" }}>
                • {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CertCard = ({ title, issuer }) => {
  return (
    <div
      style={{
        backgroundColor: "#eff6ff",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        border: "1px solid #bfdbfe",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        style={{
          backgroundColor: "#2563eb",
          width: "3rem",
          height: "3rem",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontSize: "1.5rem", color: "white" }}>🏆</span>
      </div>
      <h4
        style={{
          fontSize: "1.125rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h4>
      <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>{issuer}</p>
    </div>
  );
};
